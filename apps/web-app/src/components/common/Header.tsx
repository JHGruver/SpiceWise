import { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUser } from '../../context/UserContext'
import Icon from './Icon'
import DevMenu from './DevMenu'
import './Header.css'

export default function Header() {
  const { user, hasCompletedProfile } = useUser()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  const handleMenuItemClick = (path: string) => {
    setIsMenuOpen(false)
    navigate(path)
  }

  return (
    <header className="header">
      <div className="header-content container">
        <div className="header-left">
          <DevMenu />
          <Link to="/" className="logo">
            <Icon name="leaf" size="md" className="logo-icon" />
            <span className="logo-text">SpiceWise</span>
          </Link>
        </div>
        <div className="header-actions" ref={menuRef}>
          <button
            className={`profile-button ${isMenuOpen ? 'active' : ''}`}
            aria-label="Profile menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {user.name ? (
              <span className="profile-avatar">
                {user.name.charAt(0).toUpperCase()}
              </span>
            ) : (
              <Icon name="user" size="sm" />
            )}
          </button>

          {isMenuOpen && (
            <div className="profile-menu">
              <div className="profile-menu-header">
                {user.name ? (
                  <>
                    <span className="menu-avatar">{user.name.charAt(0).toUpperCase()}</span>
                    <div className="menu-user-info">
                      <span className="menu-user-name">{user.name}</span>
                      {!hasCompletedProfile && (
                        <span className="menu-profile-status">Profile incomplete</span>
                      )}
                    </div>
                  </>
                ) : (
                  <div className="menu-user-info">
                    <span className="menu-user-name">Welcome, Guest</span>
                    <span className="menu-profile-status">Set up your profile</span>
                  </div>
                )}
              </div>

              <div className="profile-menu-divider" />

              <nav className="profile-menu-nav">
                <button
                  className="profile-menu-item"
                  onClick={() => handleMenuItemClick('/profile')}
                >
                  <Icon name="user" size="sm" />
                  <span>My Profile</span>
                  {!hasCompletedProfile && <span className="menu-badge">Setup</span>}
                </button>

                <button
                  className="profile-menu-item"
                  onClick={() => handleMenuItemClick('/profile')}
                >
                  <Icon name="heart" size="sm" />
                  <span>Saved Spices</span>
                  {user.savedHerbs.length > 0 && (
                    <span className="menu-count">{user.savedHerbs.length}</span>
                  )}
                </button>

                <button
                  className="profile-menu-item"
                  onClick={() => handleMenuItemClick('/profile')}
                >
                  <Icon name="sparkle" size="sm" />
                  <span>My Cabinet</span>
                  {user.cabinet.length > 0 && (
                    <span className="menu-count">{user.cabinet.length}</span>
                  )}
                </button>
              </nav>

              <div className="profile-menu-divider" />

              <nav className="profile-menu-nav">
                <button
                  className="profile-menu-item"
                  onClick={() => handleMenuItemClick('/profile')}
                >
                  <Icon name="cooking" size="sm" />
                  <span>Preferences</span>
                </button>

                <button
                  className="profile-menu-item"
                  onClick={() => handleMenuItemClick('/')}
                >
                  <Icon name="chat" size="sm" />
                  <span>Help & Support</span>
                </button>
              </nav>

              <div className="profile-menu-divider" />

              <nav className="profile-menu-nav">
                <button
                  className="profile-menu-item sign-out"
                  onClick={() => {
                    setIsMenuOpen(false)
                    // For now, just navigate home. In a real app, this would clear user data
                  }}
                >
                  <Icon name="history" size="sm" />
                  <span>Sign Out</span>
                </button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
