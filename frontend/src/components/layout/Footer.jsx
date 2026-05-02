import { Link } from 'react-router-dom'
import brandLogo from '../../assets/extracted-chat-images/chatimg-002.png'

const Footer = ({ footerColumns, socialLinks, contactWhatsAppDial }) => {
  const getHref = (columnTitle, link) => {
    if (columnTitle === 'Shop') {
      return `/product?category=${encodeURIComponent(link)}`
    }
    if (columnTitle === 'Customer Care') {
      return '/contact#contact-form'
    }
    if (columnTitle === 'Company') {
      if (link === 'About Us') return '/about'
      if (link === 'Store Locator') return '/contact#store-location'
      if (link === 'Privacy Policy') return '/privacy'
      if (link === 'Careers') return '/contact'
    }
    return '#'
  }

  const getContactState = (link) => {
    if (link === 'Installation Support') {
      return {
        prefilledTopic: 'Installation / Service',
        prefilledMessage: 'Namaste ASAN, I would like to request installation support for my appliance. Please let me know the available slots and any required documents.'
      }
    }
    if (link === 'Warranty Terms') {
      return {
        prefilledTopic: 'Warranty / Parts',
        prefilledMessage: 'Namaste ASAN, I have a query regarding the Warranty Terms of my product.'
      }
    }
    if (link === 'EMI Assistance') {
      return {
        prefilledTopic: 'Other',
        prefilledMessage: 'Namaste ASAN, I am interested in EMI assistance for my purchase.'
      }
    }
    if (link === 'Contact Center') {
      return { prefilledTopic: 'Other', prefilledMessage: 'Namaste ASAN, I would like to get in touch with your team for a general inquiry.' }
    }
    return { prefilledTopic: 'Other', prefilledMessage: `Namaste ASAN, I have a query regarding ${link}.` }
  }

  return (
    <footer className="site-footer">
      <div className="footer-grid mx-auto w-full max-w-6xl px-6 py-12 md:px-10">
        <section className="footer-brand scroll-reveal reveal-up" data-animate="true">
          <div className="footer-brand-row">
            <img className="brand-logo-image" src={brandLogo} alt="ASAN Electronics" />
          </div>
          <p className="footer-note">
            ASAN supplies trusted appliances and displays with authentic warranty, reliable
            logistics and service-ready customer support.
          </p>
          <div className="social-row">
            {socialLinks.map((item) => (
              <a 
                key={item.label} 
                href={item.url} 
                className="social-chip"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.label}
              </a>
            ))}
          </div>
        </section>

        <div className="footer-links">
          {footerColumns.map((column) => (
            <section key={column.title} className="footer-col scroll-reveal reveal-up" data-animate="true">
              <h4 className="footer-title">{column.title}</h4>
              {column.links.map((link) => {
                const href = getHref(column.title, link)
                const isInternal = href.startsWith('/')

                if (isInternal) {
                  const state = column.title === 'Customer Care' ? getContactState(link) : undefined
                  return (
                    <Link key={link} to={href} state={state} className="footer-link">
                      {link}
                    </Link>
                  )
                }

                return (
                  <a
                    key={link}
                    href={href}
                    className="footer-link"
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {link}
                  </a>
                )
              })}
            </section>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer