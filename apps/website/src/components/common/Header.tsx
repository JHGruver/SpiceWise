import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import DevMenu from './DevMenu'
import './Header.css'

const navLinks = [
  { to: '/features', label: 'Features' },
  { to: '/community', label: 'Community' },
  { to: '/suppliers', label: 'Suppliers' },
  { to: '/about', label: 'About' },
  { to: '/pricing', label: 'Pricing' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="site-header">
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="container header-content">
        <div className="header-left">
          <DevMenu />
          <Link to="/" className="logo" aria-label="SpiceCraft home">
            <img src="/images/brand/logo.png" alt="SpiceCraft" className="logo-image" />
            <span className="logo-text">SpiceCraft</span>
          </Link>
        </div>

        <nav
          className={`nav ${isMenuOpen ? 'nav--open' : ''}`}
          aria-label="Main navigation"
          role="navigation"
        >
          <ul className="nav-list" role="menubar">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'nav-link--active' : ''}`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <Link to="/pricing" className="cta-button">
            Join Waitlist
          </Link>
          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="main-nav"
          >
            <span className="menu-icon" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </header>
  )
}
