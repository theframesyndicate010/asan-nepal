const { fetchProducts, fetchProductById } = require('../services/productService')

const getProducts = async (req, res) => {
  try {
    const products = await fetchProducts({ category: req.query.category })
    res.json({ products })
  } catch (error) {
    console.error('Failed to load products:', error)
    res.status(500).json({ error: 'Failed to load products' })
  }
}

const getShopData = async (_req, res) => {
  try {
    const products = await fetchProducts()
    const categories = Array.from(new Set(products.map((product) => product.category))).filter(Boolean)
    res.json({
      productCatalog: products,
      productFilters: ['All', ...categories],
      updatedAt: new Date().toISOString(),
    })
  } catch (error) {
    console.error('Failed to load shop data:', error)
    res.status(500).json({ error: 'Failed to load shop data' })
  }
}

const getProductById = async (req, res) => {
  const productId = Number(req.params.id)
  if (!Number.isInteger(productId)) {
    return res.status(400).json({ error: 'Invalid product id' })
  }

  try {
    const product = await fetchProductById(productId)
    if (!product) {
      return res.status(404).json({ error: 'Product not found' })
    }

    return res.json({ product })
  } catch (error) {
    console.error('Failed to load product:', error)
    return res.status(500).json({ error: 'Failed to load product' })
  }
}

module.exports = {
  getProducts,
  getShopData,
  getProductById,
}
