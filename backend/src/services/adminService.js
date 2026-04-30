const pool = require('../db/pool')

const findAdminByUsername = async (username) => {
  const query = 'SELECT id, username, password_hash FROM admins WHERE username = ? LIMIT 1'
  const [rows] = await pool.query(query, [username])
  return rows[0]
}

const createAdmin = async ({ username, passwordHash }) => {
  const query = 'INSERT INTO admins (username, password_hash) VALUES (?, ?)'
  const [result] = await pool.query(query, [username, passwordHash])
  return result.insertId
}

module.exports = {
  findAdminByUsername,
  createAdmin,
}
