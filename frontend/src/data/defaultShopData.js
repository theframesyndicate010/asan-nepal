const fanBanner = ''
const washerBanner = ''
const tvBanner = ''

export const productImageMap = {
  fanBanner,
  washerBanner,
  tvBanner,
  'fan-banner': '',
  'washer-banner': '',
  'tv-banner': '',
}

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/product' },
  { label: 'Contact', to: '/contact' },
]

export const stats = [
  { value: '25K+', label: 'Customers Served' },
  { value: '150+', label: 'Product Variants' },
  { value: '1 to 10 Years', label: 'Warranty Coverage' },
]

export const categoryCards = [
  {
    code: 'WM',
    title: 'Washing Machines',
    text: 'Front-load and top-load units with intelligent wash programs up to 10KG.',
    tag: 'EMI and installation support',
  },
  {
    code: 'AC',
    title: 'Air Conditioners',
    text: 'Inverter AC systems engineered for fast cooling and improved power efficiency.',
    tag: '1 Ton to 2 Ton capacity',
  },
  {
    code: 'CL',
    title: 'Air Coolers',
    text: 'Tower and desert coolers built for long summer operation with low noise output.',
    tag: 'Ideal for dry season',
  },
  {
    code: 'FN',
    title: 'Fans',
    text: 'Ceiling, pedestal and table fans with strong airflow and reliable motors.',
    tag: 'BLDC energy-saving models',
  },
  {
    code: 'TV',
    title: 'Smart TVs',
    text: '4K UHD smart displays with integrated apps for entertainment, sports and gaming.',
    tag: '32 to 65 inch range',
  },
  {
    code: 'OF',
    title: 'Best Deals',
    text: 'Bundle pricing with delivery, installation and extended service support.',
    tag: 'Seasonal promotions',
  },
]

export const washerHighlights = [
  'Front-load and top-load lineup designed for daily and heavy-load use',
  'Low-vibration motor architecture with quick and hygienic wash programs',
  'Professional installation assistance and dependable service coverage',
]

export const tvHighlights = [
  'Smart interface with streaming applications and effortless screen casting',
  'Slim industrial design with vivid color output and clear, balanced sound',
  'Wall-mount support with secure delivery across major service locations',
]

export const productFilters = ['All', 'Fridges', 'AC', 'Washing Machines', 'Coolers', 'Fans', 'Smart TVs']

export const productCatalog = [
  {
    name: 'Glacier Pro 260L',
    category: 'Fridges',
    spec: 'Double-door inverter refrigerator with humidity lock and quick freeze mode.',
    price: 'NPR 89,900',
    image: '',
  },
  {
    name: 'FrostMax 320L',
    category: 'Fridges',
    spec: 'Convertible cooling zones with efficient compressor and low operating noise.',
    price: 'NPR 104,500',
    image: '',
  },
  {
    name: 'Arctic 1.5 Ton Inverter',
    category: 'AC',
    spec: 'Split AC with turbo cooling, 4-way airflow and smart energy-saving profiles.',
    price: 'NPR 78,900',
    image: '',
  },
  {
    name: 'Polar 2.0 Ton Smart AC',
    category: 'AC',
    spec: 'High-capacity cooling with auto-clean cycle and remote app temperature control.',
    price: 'NPR 96,000',
    image: '',
  },
  {
    name: 'Turbo Wash 8KG',
    category: 'Washing Machines',
    spec: 'Front-load washer with quick wash, child lock and anti-vibration drum design.',
    price: 'NPR 63,500',
    image: washerBanner,
  },
  {
    name: 'CleanSpin 10KG',
    category: 'Washing Machines',
    spec: 'Top-load model with smart rinse optimization and deep-clean family cycles.',
    price: 'NPR 71,900',
    image: washerBanner,
  },
  {
    name: 'Breeze Tower X1',
    category: 'Coolers',
    spec: 'Tower cooler with ice chamber, wide air throw and low-noise night operation.',
    price: 'NPR 19,900',
    image: '',
  },
  {
    name: 'Desert Chill 75L',
    category: 'Coolers',
    spec: 'Desert cooler with large tank capacity, inverter compatibility and strong airflow.',
    price: 'NPR 24,800',
    image: '',
  },
  {
    name: 'AeroCeil BLDC 1200mm',
    category: 'Fans',
    spec: 'Energy-saving ceiling fan with stable RPM and silent motor operation.',
    price: 'NPR 8,400',
    image: '',
  },
  {
    name: 'WindPro Pedestal 18"',
    category: 'Fans',
    spec: 'Pedestal fan with oscillation control, heavy-duty stand and speed memory.',
    price: 'NPR 6,200',
    image: '',
  },
  {
    name: 'Vision 43" 4K',
    category: 'Smart TVs',
    spec: '4K UHD smart TV with Dolby audio, app store and voice-enabled remote.',
    price: 'NPR 54,900',
    image: '',
  },
  {
    name: 'Cinema 55" QLED',
    category: 'Smart TVs',
    spec: 'QLED panel with high contrast engine, gaming mode and screen casting support.',
    price: 'NPR 86,900',
    status: 'Low Stock',
    image: '',
  },
  {
    name: 'FrostFree 260L - V2',
    category: 'Fridges',
    spec: 'Double door frost-free refrigerator with smart inverter technology and wide shelves.',
    price: 'NPR 45,500',
    image: washerBanner,
  },
  {
    name: 'IceMax 400L - V2',
    category: 'Fridges',
    spec: 'Side-by-side refrigerator featuring dual cooling layers and power freeze mode.',
    price: 'NPR 89,000',
    image: washerBanner,
  },
  {
    name: 'CoolBreeze 1 Ton - V2',
    category: 'AC',
    spec: 'Split AC with advanced dust filters, rapid cooling and silent operation mode.',
    price: 'NPR 52,000',
    image: '',
  },
  {
    name: 'ArcticInverter 1.5 Ton - V2',
    category: 'AC',
    spec: 'Energy-saving inverter AC built for extreme summer temperatures with auto-swing.',
    price: 'NPR 74,500',
    image: '',
  },
  {
    name: 'WashPro 8KG - V2',
    category: 'Washing Machines',
    spec: 'Front-load washer with quick wash, child lock and anti-vibration drum design.',
    price: 'NPR 63,500',
    image: washerBanner,
  },
  {
    name: 'CleanSpin 10KG - V2',
    category: 'Washing Machines',
    spec: 'Top-load model with smart rinse optimization and deep-clean family cycles.',
    price: 'NPR 71,900',
    image: washerBanner,
  },
  {
    name: 'Breeze Tower X1 - V2',
    category: 'Coolers',
    spec: 'Tower cooler with ice chamber, wide air throw and low-noise night operation.',
    price: 'NPR 19,900',
    image: '',
  },
  {
    name: 'Desert Chill 75L - V2',
    category: 'Coolers',
    spec: 'Desert cooler with large tank capacity, inverter compatibility and strong airflow.',
    price: 'NPR 24,800',
    image: '',
  },
  {
    name: 'AeroCeil BLDC 1200mm - V2',
    category: 'Fans',
    spec: 'Energy-saving ceiling fan with stable RPM and silent motor operation.',
    price: 'NPR 8,400',
    image: fanBanner,
  },
  {
    name: 'WindPro Pedestal 18" - V2',
    category: 'Fans',
    spec: 'Pedestal fan with oscillation control, heavy-duty stand and speed memory.',
    price: 'NPR 6,200',
    image: fanBanner,
  },
  {
    name: 'Vision 43" 4K - V2',
    category: 'Smart TVs',
    spec: '4K UHD smart TV with Dolby audio, app store and voice-enabled remote.',
    price: 'NPR 54,900',
    image: '',
  },
  {
    name: 'Cinema 55" QLED - V2',
    category: 'Smart TVs',
    spec: 'QLED panel with high contrast engine, gaming mode and screen casting support.',
    price: 'NPR 86,900',
    image: '',
  },
]

export const detail =[
  '1000+ clients across Jhapa',
  '150+ product variants with local support',
  '2-year warranty with genuine spare parts',
  '24/7 customer support available',
]

export const footerColumns = [
  {
    title: 'Shop',
    links: ['Washing Machines', 'Air Conditioners', 'Coolers', 'Fans', 'Smart TVs'],
  },
  {
    title: 'Customer Care',
    links: ['Order Tracking', 'Installation Support', 'Warranty Terms', 'EMI Assistance', 'Contact Center'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Store Locator', 'Dealer Partnership', 'Careers', 'Privacy Policy'],
  },
]

export const socialLinks = ['Facebook', 'Instagram', 'YouTube', 'LinkedIn']

export const contactEmail = ''
export const contactPhone = '+977 980-6015350'
export const contactPhoneDial = '+9779806015350'
export const contactWhatsApp = '+977 980-6015350'
export const contactWhatsAppDial = '9779806015350'

export const buildCompanyDetails = ({ email, phone, phoneDial }) => [
  { label: 'Founder', value: 'Ashish Sangroula' },
  { label: 'Registered Name', value: 'ASAN' },
  { label: 'Head Office', value: 'Charpane, Birtamod, Nepal' },
  { label: 'Working Hours', value: 'Sun - Fri, 9:00 AM to 7:00 PM' },
  { label: 'Service Coverage', value: 'All over the Jhapa' },
  { label: 'Customer Care', value: phone, href: phoneDial ? `tel:${phoneDial}` : undefined },
  { label: 'Support Email', value: email, href: email ? `mailto:${email}` : undefined },
]

export const buildContactPoints = ({ email, phone, phoneDial, whatsapp, whatsappDial }) => [
  {
    title: 'Sales Hotline',
    value: phone,
    note: 'Call for immediate product consultation and pricing.',
    href: phoneDial ? `tel:${phoneDial}` : undefined,
  },
  {
    title: 'Service WhatsApp',
    value: whatsapp,
    note: 'Share model photos or order ID for quick follow-up.',
    href: whatsappDial ? `https://wa.me/${whatsappDial}` : undefined,
  },
  {
    title: 'Email Support',
    value: email,
    note: 'Share your requirement and get a detailed quote response.',
    href: email ? `mailto:${email}` : undefined,
  },
  {
    title: 'Showroom Address',
    value: 'Charpane, Birtamod, Nepal',
    note: 'Visit our display center to compare models directly.',
  },
]

export const defaultShopData = {
  navLinks,
  stats,
  categoryCards,
  washerHighlights,
  tvHighlights,
  productFilters,
  productCatalog,
  footerColumns,
  socialLinks,
  contactEmail,
  contactPhone,
  contactPhoneDial,
  contactWhatsApp,
  contactWhatsAppDial,
  companyDetails: buildCompanyDetails({
    email: contactEmail,
    phone: contactPhone,
    phoneDial: contactPhoneDial,
  }),
  contactPoints: buildContactPoints({
    email: contactEmail,
    phone: contactPhone,
    phoneDial: contactPhoneDial,
    whatsapp: contactWhatsApp,
    whatsappDial: contactWhatsAppDial,
  }),
}