import { useEffect, useState } from 'react'
import { defaultShopData } from '../data/defaultShopData'
import { fetchShopData } from '../api/products'
import { normalizeShopData } from '../utils/shopData'

export const useShopData = () => {
  const [shopData, setShopData] = useState({
    ...defaultShopData,
    productCatalog: [],
    productFilters: ['All'],
  })
  const [apiStatus, setApiStatus] = useState({ state: 'loading', message: 'Loading catalog...' })

  useEffect(() => {
    let isActive = true
    const controller = new AbortController()

    const loadShopData = async () => {
      try {
        const payload = await fetchShopData({ signal: controller.signal })
        if (!isActive) return
        setShopData(normalizeShopData(payload))
        setApiStatus({ state: 'ready', message: '' })
      } catch (error) {
        if (!isActive || error?.name === 'AbortError') return
        setShopData({
          ...defaultShopData,
          productCatalog: [],
          productFilters: ['All'],
        })
        setApiStatus({ state: 'fallback', message: 'API unavailable, using local data.' })
      }
    }

    loadShopData()

    return () => {
      isActive = false
      controller.abort()
    }
  }, [])

  return { shopData, apiStatus }
}
