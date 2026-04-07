import { useState, useRef, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import './DevMenu.css'

const PROD_DOMAIN = 'spicemight.com'

const devLinks = {
  'Marketing Website': [
    { label: 'Home', path: '/', basePath: '/' },
    { label: 'Features', path: '/features', basePath: '/' },
    { label: 'Community', path: '/community', basePath: '/' },
    { label: 'Suppliers', path: '/suppliers', basePath: '/' },
    { label: 'About', path: '/about', basePath: '/' },
    { label: 'Pricing', path: '/pricing', basePath: '/' },
    { label: 'Contact', path: '/contact', basePath: '/' },
  ],
  'Web App': [
    { label: 'Home', path: '/', basePath: '/app' },
    { label: 'Explore', path: '/explore', basePath: '/app' },
    { label: 'Encyclopedia', path: '/encyclopedia', basePath: '/app' },
    { label: 'Remedies', path: '/remedies', basePath: '/app' },
    { label: 'Recipes', path: '/recipes', basePath: '/app' },
    { label: 'Cabinet', path: '/cabinet', basePath: '/app' },
    { label: 'Community', path: '/community', basePath: '/app' },
    { label: 'Profile', path: '/profile', basePath: '/app' },
  ],
  'Wellness Dashboard': [
    { label: 'Dashboard', path: '/', basePath: '/wellness' },
  ],
}

// Local development port mapping
const localPorts: Record<string, number> = {
  '/': 3003,
  '/app': 3000,
  '/wellness': 3001,
}

export default function DevMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0 })
  const toggleRef = useRef<HTMLButtonElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const isProduction = window.location.hostname === PROD_DOMAIN ||
                       window.location.hostname === `www.${PROD_DOMAIN}`

  const updatePosition = useCallback(() => {
    if (toggleRef.current) {
      const rect = toggleRef.current.getBoundingClientRect()
      setDropdownPos({
        top: rect.bottom + 8,
        left: rect.left,
      })
    }
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node
      if (
        toggleRef.current && !toggleRef.current.contains(target) &&
        dropdownRef.current && !dropdownRef.current.contains(target)
      ) {
        setIsOpen(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  // Update position when opening and on scroll/resize
  useEffect(() => {
    if (isOpen) {
      updatePosition()
      window.addEventListener('scroll', updatePosition, true)
      window.addEventListener('resize', updatePosition)
      return () => {
        window.removeEventListener('scroll', updatePosition, true)
        window.removeEventListener('resize', updatePosition)
      }
    }
  }, [isOpen, updatePosition])

  const navigateTo = (basePath: string, path: string) => {
    if (isProduction) {
      // Production: use subdirectory paths
      const fullPath = basePath === '/' ? path : `${basePath}${path === '/' ? '' : path}`
      window.location.href = `https://${PROD_DOMAIN}${fullPath}`
    } else {
      // Local development: use localhost with ports
      const port = localPorts[basePath]
      window.location.href = `http://localhost:${port}${path}`
    }
    setIsOpen(false)
  }

  const getDisplayPath = (basePath: string) => {
    if (isProduction) {
      return basePath === '/' ? '/' : basePath
    }
    return `:${localPorts[basePath]}`
  }

  return (
    <div className="dev-menu-container">
      <button
        ref={toggleRef}
        className={`dev-menu-toggle ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Navigation menu"
        aria-expanded={isOpen}
      >
        <span className="hamburger-icon">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      {isOpen && createPortal(
        <div
          ref={dropdownRef}
          className="dev-menu-dropdown"
          style={{
            position: 'fixed',
            top: dropdownPos.top,
            left: dropdownPos.left,
          }}
        >
          <div className="dev-menu-header">
            <span className="dev-menu-badge">{isProduction ? 'NAV' : 'DEV'}</span>
            <span className="dev-menu-title">SpiceMight Navigation</span>
          </div>

          {Object.entries(devLinks).map(([section, links]) => (
            <div key={section} className="dev-menu-section">
              <h4 className="dev-menu-section-title">{section}</h4>
              <div className="dev-menu-links">
                {links.map((link) => (
                  <button
                    key={`${link.basePath}${link.path}`}
                    className="dev-menu-link"
                    onClick={() => navigateTo(link.basePath, link.path)}
                  >
                    <span className="link-label">{link.label}</span>
                    <span className="link-port">{getDisplayPath(link.basePath)}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}

          <div className="dev-menu-footer">
            <span>{isProduction ? 'spicemight.com' : 'Local Development'}</span>
          </div>
        </div>,
        document.body
      )}
    </div>
  )
}
