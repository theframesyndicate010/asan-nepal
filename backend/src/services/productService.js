const pool = require('../db/pool')
const { normalizeProduct } = require('../utils/formatters')

const fetchProducts = async ({ category } = {}) => {
  const params = []
  const filters = []

  if (category && category !== 'All') {
    filters.push('category = ?')
    params.push(category)
  }

  const whereClause = filters.length ? `WHERE ${filters.join(' AND ')}` : ''
  const query = `SELECT id, name, category, spec, price, status, image FROM products ${whereClause} ORDER BY id DESC`
  const [rows] = await pool.query(query, params)
  return rows.map(normalizeProduct)
}

const fetchProductById = async (id) => {
  const query = 'SELECT id, name, category, spec, price, status, image FROM products WHERE id = ? LIMIT 1'
  const [rows] = await pool.query(query, [id])
  return rows[0] ? normalizeProduct(rows[0]) : null
}

const createProduct = async ({ name, category, spec, price, status, image }) => {
  const query =
    'INSERT INTO products (name, category, spec, price, status, image) VALUES (?, ?, ?, ?, ?, ?)'
  const params = [name, category, spec, price || null, status || 'In Stock', image || null]
  const [result] = await pool.query(query, params)
  return result.insertId
}

const updateProduct = async ({ id, name, category, spec, price, image }) => {
  const query =
    'UPDATE products SET name = ?, category = ?, spec = ?, price = ?, image = ? WHERE id = ?'
  const params = [name, category, spec, price || null, image || null, id]
  const [result] = await pool.query(query, params)
  return result.affectedRows
}

const deleteProductById = async (id) => {
  const query = 'DELETE FROM products WHERE id = ?'
  const [result] = await pool.query(query, [id])
  return result.affectedRows
}

module.exports = {
  fetchProducts,
  fetchProductById,
  createProduct,
  updateProduct,
  deleteProductById,
}
