import brandLogo from '../../assets/extracted-chat-images/chatimg-002.png'

const Footer = ({ footerColumns, socialLinks }) => {
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
              <a key={item} href="#" className="social-chip">
                {item}
              </a>
            ))}
          </div>
        </section>

        <div className="footer-links">
          {footerColumns.map((column) => (
            <section key={column.title} className="footer-col scroll-reveal reveal-up" data-animate="true">
              <h4 className="footer-title">{column.title}</h4>
              {column.links.map((link) => (
                <a key={link} href="#" className="footer-link">
                  {link}
                </a>
              ))}
            </section>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer