import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import brandLogo from '../../assets/extracted-chat-images/chatimg-002.png'

const Header = ({ navLinks, contactPhoneDial }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/product?q=${encodeURIComponent(searchQuery.trim())}`)
      setIsMenuOpen(false)
    }
  }

  return (
    <>
      <header
        className="topbar scroll-reveal reveal-down mx-auto w-full max-w-6xl px-6 py-5 md:px-10"
        data-animate="true"
      >
        <Link to="/" className="brand" aria-label="ASAN">
          <img className="brand-logo-image" src={brandLogo} alt="ASAN Electronics" />
        </Link>
        <nav className="nav-list" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <form onSubmit={handleSearch} className="search-wrapper topbar-search">
          <input
            type="text"
            className="search-input"
            placeholder="Search products..."
            aria-label="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="search-submit-btn" aria-label="Submit search">
            <svg
              className="search-icon"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </form>
        <div className="header-actions">
          <a
            href={`tel:${contactPhoneDial}`}
            className="solid-btn small pulse-ring"
          >
            Talk to Sales
          </a>
          <button
            type="button"
            className={`menu-toggle${isMenuOpen ? ' active' : ''}`}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <div className={`mobile-nav${isMenuOpen ? ' open' : ''}`} id="mobile-nav" aria-hidden={!isMenuOpen}>
        <div className="mobile-nav-panel">
          <nav className="mobile-nav-list" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => `mobile-nav-link${isActive ? ' active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}

export default Header