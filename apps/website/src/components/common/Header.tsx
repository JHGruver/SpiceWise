import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import DevMenu from './DevMenu'
import './Header.css'

const navLinks = [
  { to: '/features', label: 'Features' },
  { to: '/about', label: 'About' },
  { to: '/pricing', label: 'Pricing' },
]

const SECRET_CODE = '8675309'
const CLICK_THRESHOLD = 4
const CLICK_TIMEOUT = 2000 // Reset click count after 2s of inactivity

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [menuUnlocked, setMenuUnlocked] = useState(false)
  const [showCodeModal, setShowCodeModal] = useState(false)
  const [codeInput, setCodeInput] = useState('')
  const [codeError, setCodeError] = useState(false)

  const clickCount = useRef(0)
  const clickTimer = useRef<ReturnType<typeof setTimeout>>()
  const codeInputRef = useRef<HTMLInputElement>(null)

  const { pathname } = useLocation()
  const isHomePage = pathname === '/'

  // Re-lock when navigating away from homepage
  useEffect(() => {
    setMenuUnlocked(false)
    setIsMenuOpen(false)
    clickCount.current = 0
  }, [pathname])

  // Focus input when modal opens
  useEffect(() => {
    if (showCodeModal && codeInputRef.current) {
      codeInputRef.current.focus()
    }
  }, [showCodeModal])

  const handleLogoClick = (e: React.MouseEvent) => {
    if (!isHomePage || menuUnlocked) return // Normal link behavior on other pages

    e.preventDefault() // Prevent navigation on homepage during secret flow

    clickCount.current += 1

    // Reset timer
    if (clickTimer.current) clearTimeout(clickTimer.current)
    clickTimer.current = setTimeout(() => {
      clickCount.current = 0
    }, CLICK_TIMEOUT)

    if (clickCount.current >= CLICK_THRESHOLD) {
      clickCount.current = 0
      setShowCodeModal(true)
      setCodeInput('')
      setCodeError(false)
    }
  }

  const handleCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (codeInput === SECRET_CODE) {
      setMenuUnlocked(true)
      setShowCodeModal(false)
      setCodeInput('')
      setCodeError(false)
    } else {
      setCodeError(true)
      setCodeInput('')
      codeInputRef.current?.focus()
    }
  }

  const isSecretMode = isHomePage && !menuUnlocked

  return (
    <>
      <header className="site-header">
        {/* Skip to main content link for accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <div className="container header-content">
          <div className="header-left">
            {!isSecretMode && <DevMenu />}
            <Link
              to="/"
              className={`logo ${isHomePage && menuUnlocked ? 'logo--shifted' : ''}`}
              aria-label="SpiceMight home"
              onClick={handleLogoClick}
            >
              <img src="/images/brand/logo.png" alt="SpiceMight" className="logo-image" />
              <span className="logo-text">SpiceMight</span>
            </Link>
          </div>

          <nav
            className={`nav ${isMenuOpen ? 'nav--open' : ''} ${isSecretMode ? 'nav--secret' : ''} ${isHomePage && menuUnlocked ? 'nav--revealed' : ''}`}
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
            <Link to="/pricing" className={`cta-button ${isSecretMode ? 'cta-button--secret' : ''} ${isHomePage && menuUnlocked ? 'cta-button--revealed' : ''}`}>
              Join Waitlist
            </Link>
            <button
              className={`menu-toggle ${isSecretMode ? 'menu-toggle--secret' : ''} ${isHomePage && menuUnlocked ? 'menu-toggle--revealed' : ''}`}
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

      {/* Verification Code Modal */}
      {showCodeModal && (
        <div className="secret-modal-overlay" onClick={() => setShowCodeModal(false)}>
          <div className="secret-modal" onClick={e => e.stopPropagation()}>
            <button className="secret-modal-close" onClick={() => setShowCodeModal(false)}>
              &times;
            </button>
            <h3 className="secret-modal-title">Verification Required</h3>
            <p className="secret-modal-text">Enter your access code to continue.</p>
            <form onSubmit={handleCodeSubmit} className="secret-modal-form">
              <input
                ref={codeInputRef}
                type="text"
                inputMode="numeric"
                value={codeInput}
                onChange={e => { setCodeInput(e.target.value); setCodeError(false) }}
                placeholder="Enter code"
                className={`secret-modal-input ${codeError ? 'secret-modal-input--error' : ''}`}
                autoComplete="off"
              />
              {codeError && <p className="secret-modal-error">Invalid code. Try again.</p>}
              <button type="submit" className="secret-modal-submit">Verify</button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
