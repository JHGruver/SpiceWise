import { useState } from 'react'
import { Link } from 'react-router-dom'
import { herbsAndSpices } from '../data/mockData'
import { useUser } from '../context/UserContext'
import SpiceIcon from '../components/common/SpiceIcon'
import Icon from '../components/common/Icon'
import './EncyclopediaPage.css'

export default function EncyclopediaPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filterCategory, setFilterCategory] = useState<'all' | 'herb' | 'spice'>('all')
  const { user, toggleSavedHerb } = useUser()

  const filteredHerbs = herbsAndSpices.filter(herb => {
    const matchesSearch = herb.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      herb.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      herb.healthBenefits.some(b => b.condition.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = filterCategory === 'all' || herb.category === filterCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="page encyclopedia-page">
      <div className="container">
        <header className="page-header">
          <h1 className="page-title">Herb & Spice Encyclopedia</h1>
          <p className="page-subtitle">
            Explore {herbsAndSpices.length} herbs and spices with evidence-based health benefits
          </p>
        </header>

        <div className="search-filter-bar">
          <div className="search-wrapper">
            <Icon name="search" size="sm" className="search-icon" />
            <input
              type="search"
              placeholder="Search by name, benefit, or use..."
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
              <Icon name="leaf" size="xs" /> Herbs
            </button>
            <button
              className={`filter-btn ${filterCategory === 'spice' ? 'active' : ''}`}
              onClick={() => setFilterCategory('spice')}
            >
              <Icon name="spice" size="xs" /> Spices
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
                <Icon name={user.savedHerbs.includes(herb.id) ? 'heart-filled' : 'heart'} size="sm" />
              </button>
              <Link to={`/encyclopedia/${herb.id}`} className="herb-card-link">
                <SpiceIcon name={herb.iconName} size="lg" className="herb-emoji" />
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
            <Icon name="search" size="xl" className="no-results-icon" />
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
