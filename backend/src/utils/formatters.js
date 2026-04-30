const formatPrice = (value) => {
  if (value === null || value === undefined || value === '') return ''
  if (typeof value === 'number') {
    return `NPR ${value.toLocaleString('en-US')}`
  }
  if (typeof value === 'string') {
    const numericValue = Number(value)
    if (!Number.isNaN(numericValue)) {
      return `NPR ${numericValue.toLocaleString('en-US')}`
    }
    return value
  }
  return String(value)
}

const normalizeProduct = (row) => ({
  id: row.id,
  name: row.name,
  category: row.category,
  spec: row.spec,
  priceRaw: row.price,
  price: formatPrice(row.price),
  status: row.status || 'In Stock',
  image: row.image || 'fan-banner',
})

module.exports = {
  formatPrice,
  normalizeProduct,
}
