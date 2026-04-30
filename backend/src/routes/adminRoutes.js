const express = require('express')
const fs = require('fs')
const path = require('path')
const multer = require('multer')
const {
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
} = require('../controllers/adminController')
const { requireAuth } = require('../utils/auth')

const router = express.Router()

const storage = multer.diskStorage({
  destination: (req, _file, cb) => {
    const rawCategory = req.body?.category || 'misc'
    const safeCategory = String(rawCategory)
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9_-]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')
    const targetCategory = safeCategory || 'misc'
    req.uploadCategory = targetCategory
    const targetDir = path.join(__dirname, '../../uploads/products', targetCategory)

    fs.mkdir(targetDir, { recursive: true }, (err) => {
      if (err) return cb(err)
      return cb(null, targetDir)
    })
  },
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname)
    const base = path.basename(file.originalname, ext).replace(/[^a-zA-Z0-9_-]/g, '')
    const unique = `${Date.now()}-${Math.round(Math.random() * 1e6)}`
    cb(null, `${base || 'product'}-${unique}${ext}`)
  },
})

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
})

router.get('/admin/login', showLogin)
router.post('/admin/login', handleLogin)
router.get('/admin/signup', showSignup)
router.post('/admin/signup', handleSignup)
router.get('/admin/logout', handleLogout)

router.get('/admin', requireAuth, showDashboard)
router.get('/admin/products', requireAuth, showProducts)
router.get('/admin/products/new', requireAuth, showAddProduct)
router.post('/admin/products', requireAuth, upload.single('image'), handleAddProduct)
router.get('/admin/products/:id/edit', requireAuth, showEditProduct)
router.post('/admin/products/:id', requireAuth, upload.single('image'), handleUpdateProduct)
router.post('/admin/products/:id/delete', requireAuth, handleDeleteProduct)

module.exports = router
