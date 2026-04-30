const bcrypt = require('bcryptjs')
const fs = require('fs')
const path = require('path')
const { findAdminByUsername, createAdmin } = require('../services/adminService')
const {
  createProduct,
  fetchProductById,
  fetchProducts,
  deleteProductById,
  updateProduct,
} = require('../services/productService')

const showLogin = (req, res) => {
  if (req.session?.adminId) {
    return res.redirect('/admin')
  }
  return res.render('login', { error: null })
}

const showSignup = (req, res) => {
  if (req.session?.adminId) {
    return res.redirect('/admin')
  }
  return res.render('signup', { error: null })
}

const handleLogin = async (req, res) => {
  const { username, password } = req.body

  if (!username || !password) {
    return res.status(400).render('login', { error: 'Username and password are required.' })
  }

  try {
    const admin = await findAdminByUsername(username)
    if (!admin) {
      return res.status(401).render('login', { error: 'Invalid username or password.' })
    }

    const isMatch = await bcrypt.compare(password, admin.password_hash)
    if (!isMatch) {
      return res.status(401).render('login', { error: 'Invalid username or password.' })
    }

    req.session.adminId = admin.id
    req.session.adminUsername = admin.username
    return res.redirect('/admin')
  } catch (error) {
    console.error('Login failed:', error)
    return res.status(500).render('login', { error: 'Something went wrong. Try again.' })
  }
}

const handleSignup = async (req, res) => {
  const { username, password } = req.body

  if (!username || !password) {
    return res.status(400).render('signup', { error: 'Username and password are required.' })
  }

  if (password.length < 6) {
    return res
      .status(400)
      .render('signup', { error: 'Password must be at least 6 characters long.' })
  }

  try {
    const existingAdmin = await findAdminByUsername(username)
    if (existingAdmin) {
      return res.status(409).render('signup', { error: 'Username is already taken.' })
    }

    const passwordHash = await bcrypt.hash(password, 10)
    const adminId = await createAdmin({ username, passwordHash })

    req.session.adminId = adminId
    req.session.adminUsername = username
    return res.redirect('/admin')
  } catch (error) {
    console.error('Signup failed:', error)
    return res.status(500).render('signup', { error: 'Something went wrong. Try again.' })
  }
}

const handleLogout = (req, res) => {
  req.session.destroy(() => {
    res.redirect('/admin/login')
  })
}

const showDashboard = (req, res) => {
  res.render('dashboard', { username: req.session.adminUsername })
}

const showAddProduct = (req, res) => {
  res.render('product', { error: null, success: null })
}

const showProducts = async (_req, res) => {
  try {
    const products = await fetchProducts()
    return res.render('products', { products })
  } catch (error) {
    console.error('Failed to load products:', error)
    return res.status(500).send('Failed to load products.')
  }
}

const showEditProduct = async (req, res) => {
  const productId = Number(req.params.id)
  if (!Number.isInteger(productId)) {
    return res.status(400).send('Invalid product id.')
  }

  try {
    const product = await fetchProductById(productId)
    if (!product) {
      return res.status(404).send('Product not found.')
    }

    return res.render('edit_product', { error: null, success: null, product })
  } catch (error) {
    console.error('Failed to load product:', error)
    return res.status(500).send('Failed to load product.')
  }
}

const handleAddProduct = async (req, res) => {
  const { name, category, spec, price } = req.body
  const file = req.file

  if (!name || !category || !spec) {
    return res.status(400).render('product', {
      error: 'Name, category, and spec are required.',
      success: null,
    })
  }

  const priceValue = price !== undefined && price !== '' ? Number(price) : null
  if (price !== undefined && price !== '' && (Number.isNaN(priceValue) || priceValue < 0)) {
    return res.status(400).render('product', {
      error: 'Price must be a valid number.',
      success: null,
    })
  }

  const imagePath = file
    ? `/uploads/products/${req.uploadCategory || 'misc'}/${file.filename}`
    : null

  try {
    const productId = await createProduct({
      name,
      category,
      spec,
      price: priceValue,
      image: imagePath,
    })

    return res.redirect('/admin')
  } catch (error) {
    console.error('Failed to add product:', error)
    return res.status(500).render('product', {
      error: 'Failed to save product. Try again.',
      success: null,
    })
  }
}

const handleUpdateProduct = async (req, res) => {
  const productId = Number(req.params.id)
  if (!Number.isInteger(productId)) {
    return res.status(400).send('Invalid product id.')
  }

  const { name, category, spec, price } = req.body
  const file = req.file

  try {
    const existing = await fetchProductById(productId)
    if (!existing) {
      return res.status(404).send('Product not found.')
    }

    if (!name || !category || !spec) {
      return res.status(400).render('edit_product', {
        error: 'Name, category, and spec are required.',
        success: null,
        product: { ...existing, name, category, spec, price, priceRaw: price },
      })
    }

    const priceValue = price !== undefined && price !== '' ? Number(price) : null
    if (price !== undefined && price !== '' && (Number.isNaN(priceValue) || priceValue < 0)) {
      return res.status(400).render('edit_product', {
        error: 'Price must be a valid number.',
        success: null,
        product: { ...existing, name, category, spec, price, priceRaw: price },
      })
    }

    const imagePath = file
      ? `/uploads/products/${req.uploadCategory || 'misc'}/${file.filename}`
      : existing.image

    await updateProduct({
      id: productId,
      name,
      category,
      spec,
      price: priceValue,
      image: imagePath,
    })

    return res.render('edit_product', {
      error: null,
      success: 'Product updated successfully.',
      product: { ...existing, name, category, spec, price, priceRaw: priceValue, image: imagePath },
    })
  } catch (error) {
    console.error('Failed to update product:', error)
    return res.status(500).send('Failed to update product.')
  }
}

const handleDeleteProduct = async (req, res) => {
  const productId = Number(req.params.id)
  if (!Number.isInteger(productId)) {
    return res.status(400).send('Invalid product id.')
  }

  try {
    const existing = await fetchProductById(productId)
    if (!existing) {
      return res.redirect('/admin/products')
    }

    if (existing.image && existing.image.startsWith('/uploads/')) {
      const relativePath = existing.image.replace('/uploads/', '')
      const filePath = path.join(__dirname, '../../uploads', relativePath)
      fs.promises.unlink(filePath).catch((error) => {
        if (error?.code !== 'ENOENT') {
          console.error('Failed to delete product image:', error)
        }
      })
    }

    await deleteProductById(productId)
    return res.redirect('/admin/products')
  } catch (error) {
    console.error('Failed to delete product:', error)
    return res.status(500).send('Failed to delete product.')
  }
}

module.exports = {
  showLogin,
  showSignup,
  handleLogin,
  handleSignup,
  handleLogout,
  showDashboard,
  showAddProduct,
  showProducts,
  handleAddProduct,
  showEditProduct,
  handleUpdateProduct,
  handleDeleteProduct,
}
