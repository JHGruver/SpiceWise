import { useState, useRef, useEffect } from 'react'
import './DevMenu.css'

const devLinks = {
  'Marketing Website': [
    { label: 'Home', path: '/', port: 3003 },
    { label: 'Features', path: '/features', port: 3003 },
    { label: 'Community', path: '/community', port: 3003 },
    { label: 'Suppliers', path: '/suppliers', port: 3003 },
    { label: 'About', path: '/about', port: 3003 },
    { label: 'Pricing', path: '/pricing', port: 3003 },
    { label: 'Contact', path: '/contact', port: 3003 },
  ],
  'Web App': [
    { label: 'Home', path: '/', port: 3000 },
    { label: 'Explore', path: '/explore', port: 3000 },
    { label: 'Encyclopedia', path: '/encyclopedia', port: 3000 },
    { label: 'Remedies', path: '/remedies', port: 3000 },
    { label: 'Recipes', path: '/recipes', port: 3000 },
    { label: 'Cabinet', path: '/cabinet', port: 3000 },
    { label: 'Community', path: '/community', port: 3000 },
    { label: 'Profile', path: '/profile', port: 3000 },
  ],
  'Wellness Dashboard': [
    { label: 'Dashboard', path: '/', port: 3001 },
  ],
}

export default function DevMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

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

  const navigateTo = (port: number, path: string) => {
    const currentPort = window.location.port ? parseInt(window.location.port) : 80
    if (currentPort === port) {
      window.location.href = path
    } else {
      window.location.href = `http://localhost:${port}${path}`
    }
    setIsOpen(false)
  }

  return (
    <div className="dev-menu-container" ref={menuRef}>
      <button
        className={`dev-menu-toggle ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Developer menu"
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
            <span className="dev-menu-badge">DEV</span>
            <span className="dev-menu-title">Developer Navigation</span>
          </div>

          {Object.entries(devLinks).map(([section, links]) => (
            <div key={section} className="dev-menu-section">
              <h4 className="dev-menu-section-title">{section}</h4>
              <div className="dev-menu-links">
                {links.map((link) => (
                  <button
                    key={`${link.port}${link.path}`}
                    className="dev-menu-link"
                    onClick={() => navigateTo(link.port, link.path)}
                  >
                    <span className="link-label">{link.label}</span>
                    <span className="link-port">:{link.port}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}

          <div className="dev-menu-footer">
            <span>SpiceCraft Dev Dashboard</span>
          </div>
        </div>
      )}
    </div>
  )
}
