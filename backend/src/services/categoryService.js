const pool = require('../db/pool')

const fetchAllCategories = async () => {
  const query = 'SELECT name FROM categories ORDER BY name ASC'
  const [rows] = await pool.query(query)
  return rows.map((row) => row.name)
}

module.exports = {
  fetchAllCategories,
}
