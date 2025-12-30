import { useState } from 'react'
import { Link } from 'react-router-dom'
import { herbsAndSpices } from '../data/mockData'
import { useUser } from '../context/UserContext'
import SpiceIcon from '../components/common/SpiceIcon'
import './EncyclopediaPage.css'

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filterCategory, setFilterCategory] = useState<'all' | 'herb' | 'spice'>('all')
  const { user, toggleSavedHerb } = useUser()

  const filteredHerbs = herbsAndSpices.filter(herb => {
    const matchesSearch = herb.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      herb.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      herb.healthBenefits.some(b => b.condition.toLowerCase().includes(searchQuery.toLowerCase())) ||
      herb.healingPotential.some(p => p.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = filterCategory === 'all' || herb.category === filterCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="page encyclopedia-page">
      <div className="container">
        <header className="page-header">
          <h1 className="page-title">Explore Spices</h1>
          <p className="page-subtitle">
            Discover {herbsAndSpices.length} healing herbs and spices
          </p>
        </header>

        <div className="search-filter-bar">
          <div className="search-wrapper">
            <span className="search-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </span>
            <input
              type="search"
              placeholder="Search by name, benefit, or condition..."
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="filter-buttons">
            <button
              className={`filter-btn ${filterCategory === 'all' ? 'active' : ''}`}
              onClick={() => setFilterCategory('all')}
            >
              All
            </button>
            <button
              className={`filter-btn ${filterCategory === 'herb' ? 'active' : ''}`}
              onClick={() => setFilterCategory('herb')}
            >
              Herbs
            </button>
            <button
              className={`filter-btn ${filterCategory === 'spice' ? 'active' : ''}`}
              onClick={() => setFilterCategory('spice')}
            >
              Spices
            </button>
          </div>
        </div>

        <div className="herbs-grid">
          {filteredHerbs.map(herb => (
            <div key={herb.id} className="herb-card">
              <button
                className={`save-btn ${user.savedHerbs.includes(herb.id) ? 'saved' : ''}`}
                onClick={() => toggleSavedHerb(herb.id)}
                aria-label={user.savedHerbs.includes(herb.id) ? 'Remove from saved' : 'Save'}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill={user.savedHerbs.includes(herb.id) ? 'currentColor' : 'none'}
                  stroke="currentColor"
                  strokeWidth="2"
                  width="18"
                  height="18"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>
              <Link to={`/explore/${herb.id}`} className="herb-card-link">
                <div className="herb-image-wrapper">
                  <SpiceIcon name={herb.iconName} size="lg" className="herb-emoji" />
                </div>
                <div className="herb-info">
                  <h3 className="herb-name">{herb.name}</h3>
                  <span className={`herb-category ${herb.category}`}>
                    {herb.category}
                  </span>
                  <p className="herb-description">{herb.description.slice(0, 80)}...</p>
                  <div className="herb-benefits">
                    {herb.healthBenefits.slice(0, 2).map(benefit => (
                      <span key={benefit.condition} className="benefit-tag">
                        {benefit.condition}
                      </span>
                    ))}
                    {herb.healthBenefits.length > 2 && (
                      <span className="benefit-tag more">+{herb.healthBenefits.length - 2}</span>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {filteredHerbs.length === 0 && (
          <div className="no-results">
            <span className="no-results-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="48" height="48">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </span>
            <p>No herbs or spices found matching "{searchQuery}"</p>
            <button className="clear-search" onClick={() => setSearchQuery('')}>
              Clear search
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
