const express = require('express')
const { getProducts, getShopData, getProductById } = require('../controllers/productController')

const router = express.Router()

router.get('/products', getProducts)
router.get('/products/:id', getProductById)
router.get('/shop', getShopData)

module.exports = router
