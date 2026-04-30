import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import AboutPage from '../../pages/AboutUs'
import ContactPage from '../../pages/ContactPage'
import HomePage from '../../pages/HomePage'
import ProductDetailPage from '../../pages/ProductDetailPage'
import ProductPage from '../../pages/ProductPage'

const AppShell = ({ shopData, apiStatus }) => {
  const location = useLocation()
  const {
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
    companyDetails,
    contactPoints,
  } = shopData

  useEffect(() => {
    console.log('AppShell: Initializing scroll animations...')
    console.log('AppShell: shopData status:', Object.keys(shopData).length > 0 ? 'loaded' : 'empty')
    
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        console.log('IntersectionObserver: Processing', entries.length, 'entries')
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log('IntersectionObserver: Adding in-view to', entry.target.className)
            entry.target.classList.add('in-view')
            intersectionObserver.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    const observeAnimatedElements = () => {
      const animatedElements = Array.from(document.querySelectorAll('[data-animate="true"]'))
      console.log('observeAnimatedElements: Found', animatedElements.length, 'animated elements')

      animatedElements.forEach((element, index) => {
        if (element.dataset.observed === 'true') return
        element.style.setProperty('--stagger', `${(index % 6) * 0.09}s`)
        element.dataset.observed = 'true'
        
        // Force visible immediately for initial render
        element.classList.add('in-view')
        console.log('observeAnimatedElements: Adding in-view immediately to element', index)
        
        // Still observe for future intersection changes
        intersectionObserver.observe(element)
      })
    }

    observeAnimatedElements()

    const mutationObserver = new MutationObserver(() => {
      observeAnimatedElements()
    })

    mutationObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      mutationObserver.disconnect()
      intersectionObserver.disconnect()
    }
  }, [location.pathname])

  return (
    <div className="shop-shell">
      {apiStatus?.message ? (
        <div className={`api-status ${apiStatus.state}`} role="status">
          {apiStatus.message}
        </div>
      ) : null}

      <Header navLinks={navLinks} />

      <main className="site-main pb-0">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                stats={stats}
                categoryCards={categoryCards}
                washerHighlights={washerHighlights}
                tvHighlights={tvHighlights}
              />
            }
          />
          <Route
            path="/product"
            element={<ProductPage productFilters={productFilters} productCatalog={productCatalog} />}
          />
          <Route
            path="/product/:id"
            element={<ProductDetailPage productCatalog={productCatalog} />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/product_page"
            element={<ProductPage productFilters={productFilters} productCatalog={productCatalog} />}
          />
          <Route
            path="/contact"
            element={
              <ContactPage
                contactEmail={contactEmail}
                contactPhone={contactPhone}
                contactPhoneDial={contactPhoneDial}
                contactWhatsApp={contactWhatsApp}
                contactWhatsAppDial={contactWhatsAppDial}
                companyDetails={companyDetails}
                contactPoints={contactPoints}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer footerColumns={footerColumns} socialLinks={socialLinks} />
    </div>
  )
}

export default AppShell