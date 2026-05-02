import {
  buildCompanyDetails,
  buildContactPoints,
  defaultShopData,
  productImageMap,
} from '../data/defaultShopData'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.asannepal.com/api'
const API_ORIGIN = API_BASE_URL.replace(/\/api\/?$/, '')

export const dialFromPhone = (value) => {
  if (!value) return ''
  return value.replace(/[^\d+]/g, '')
}

export const resolveImage = (imageValue, fallback) => {
  const fallbackImage = fallback || productImageMap['fan-banner']
  if (!imageValue) return fallbackImage
  if (typeof imageValue === 'string') {
    if (imageValue.startsWith('http://') || imageValue.startsWith('https://')) {
      return imageValue
    }

    if (imageValue.startsWith('/uploads/') || imageValue.startsWith('/assets/')) {
      return `${API_ORIGIN}${imageValue}`
    }
  }
  if (productImageMap[imageValue]) return productImageMap[imageValue]
  return imageValue
}

export const normalizeShopData = (apiData) => {
  if (!apiData || typeof apiData !== 'object') {
    return defaultShopData
  }

  const contact = apiData.contact || {}
  const resolvedEmail = apiData.contactEmail || contact.email || defaultShopData.contactEmail
  const resolvedPhone = apiData.contactPhone || contact.phone || defaultShopData.contactPhone
  const resolvedPhoneDial =
    apiData.contactPhoneDial ||
    contact.phoneDial ||
    dialFromPhone(resolvedPhone) ||
    defaultShopData.contactPhoneDial
  const resolvedWhatsApp = apiData.contactWhatsApp || contact.whatsapp || defaultShopData.contactWhatsApp
  const resolvedWhatsAppDial =
    apiData.contactWhatsAppDial ||
    contact.whatsappDial ||
    dialFromPhone(resolvedWhatsApp) ||
    defaultShopData.contactWhatsAppDial

  const resolvedCategories = apiData.categories || []
  
  const resolvedFooterColumns = apiData.footerColumns || (resolvedCategories.length > 0 ? defaultShopData.footerColumns.map(col => {
    if (col.title === 'Shop') {
      return { ...col, links: resolvedCategories }
    }
    return col
  }) : defaultShopData.footerColumns)

  const resolvedCategoryCards = apiData.categoryCards || (resolvedCategories.length > 0 ? resolvedCategories.map(catName => {
    const existing = defaultShopData.categoryCards.find(card => card.title === catName)
    if (existing) return existing
    return {
      code: catName.substring(0, 2).toUpperCase(),
      title: catName,
      text: `Quality ${catName} built for performance and durability in modern homes.`,
      tag: 'Authorized Dealer'
    }
  }) : defaultShopData.categoryCards)

  return {
    ...defaultShopData,
    ...apiData,
    contactEmail: resolvedEmail,
    contactPhone: resolvedPhone,
    contactPhoneDial: resolvedPhoneDial,
    contactWhatsApp: resolvedWhatsApp,
    contactWhatsAppDial: resolvedWhatsAppDial,
    footerColumns: resolvedFooterColumns,
    categoryCards: resolvedCategoryCards,
    companyDetails: apiData.companyDetails || buildCompanyDetails({
      email: resolvedEmail,
      phone: resolvedPhone,
      phoneDial: resolvedPhoneDial,
    }),
    contactPoints: apiData.contactPoints || buildContactPoints({
      email: resolvedEmail,
      phone: resolvedPhone,
      phoneDial: resolvedPhoneDial,
      whatsapp: resolvedWhatsApp,
      whatsappDial: resolvedWhatsAppDial,
    }),
  }
}
