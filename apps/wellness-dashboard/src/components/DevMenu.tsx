import { useState, useRef, useEffect } from 'react'
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
  const menuRef = useRef<HTMLDivElement>(null)

  const isProduction = window.location.hostname === PROD_DOMAIN ||
                       window.location.hostname === `www.${PROD_DOMAIN}`

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
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
    <div className="dev-menu-container" ref={menuRef}>
      <button
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

      {isOpen && (
        <div className="dev-menu-dropdown">
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
        </div>
      )}
    </div>
  )
}
