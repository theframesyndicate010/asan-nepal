const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.asannepal.com/api'

const requestJson = async (path, { signal } = {}) => {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    signal,
    headers: { Accept: 'application/json' },
  })

  if (!response.ok) {
    const error = new Error(`API responded with ${response.status}`)
    error.status = response.status
    throw error
  }

  return response.json()
}

export const fetchShopData = ({ signal } = {}) => requestJson('/shop', { signal })

export const fetchProducts = ({ category, signal } = {}) => {
  const query = category ? `?category=${encodeURIComponent(category)}` : ''
  return requestJson(`/products${query}`, { signal })
}

export const fetchProductById = ({ id, signal } = {}) => {
  if (!id && id !== 0) {
    return Promise.reject(new Error('Product id is required'))
  }

  return requestJson(`/products/${encodeURIComponent(id)}`, { signal })
}
