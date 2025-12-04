import { useParams, Link } from 'react-router-dom'
import { herbsAndSpices } from '../data/mockData'
import { useUser } from '../context/UserContext'
import SpiceIcon from '../components/common/SpiceIcon'
import './HerbDetailPage.css'

const evidenceLevelInfo = {
  traditional: { label: 'Traditional Use', color: '#888', description: 'Based on historical use' },
  preliminary: { label: 'Preliminary', color: '#17a2b8', description: 'Early research shows promise' },
  moderate: { label: 'Moderate Evidence', color: '#ffc107', description: 'Multiple studies support this' },
  strong: { label: 'Strong Evidence', color: '#28a745', description: 'Well-established by research' },
}

export default function HerbDetailPage() {
  const { id } = useParams<{ id: string }>()
  const { user, toggleSavedHerb, addToCabinet } = useUser()

  const herb = herbsAndSpices.find(h => h.id === id)

  if (!herb) {
    return (
      <div className="page herb-detail-page">
        <div className="container">
          <div className="not-found">
            <span className="not-found-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="48" height="48">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </span>
            <h2>Spice not found</h2>
            <Link to="/explore" className="back-link">Back to Explore</Link>
          </div>
        </div>
      </div>
    )
  }

  const isSaved = user.savedHerbs.includes(herb.id)
  const isInCabinet = user.cabinet.some(item => item.herbSpiceId === herb.id)

  const handleAddToCabinet = () => {
    if (!isInCabinet) {
      addToCabinet({
        herbSpiceId: herb.id,
        location: 'pantry',
      })
    }
  }

  return (
    <div className="page herb-detail-page">
      <div className="container">
        <Link to="/explore" className="back-nav">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Explore
        </Link>

        <header className="herb-header">
          <div className="herb-image-container">
            <img
              src={herb.imageUrl}
              alt={herb.name}
              className="herb-header-image"
              onError={(e) => {
                // Fallback to SpiceIcon if image fails to load
                e.currentTarget.style.display = 'none'
                e.currentTarget.nextElementSibling?.classList.remove('hidden')
              }}
            />
            <SpiceIcon name={herb.iconName} size="xl" className="herb-header-icon hidden" />
          </div>
          <div className="herb-header-info">
            <h1 className="herb-title">{herb.name}</h1>
            <p className="herb-scientific">{herb.scientificName}</p>
            <span className={`herb-category-badge ${herb.category}`}>
              {herb.category}
            </span>
          </div>
          <div className="herb-actions">
            <button
              className={`save-button ${isSaved ? 'saved' : ''}`}
              onClick={() => toggleSavedHerb(herb.id)}
            >
              <svg
                viewBox="0 0 24 24"
                fill={isSaved ? 'currentColor' : 'none'}
                stroke="currentColor"
                strokeWidth="2"
                width="18"
                height="18"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              {isSaved ? 'Saved' : 'Save'}
            </button>
            <button
              className={`cabinet-button ${isInCabinet ? 'in-cabinet' : ''}`}
              onClick={handleAddToCabinet}
              disabled={isInCabinet}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <line x1="3" y1="9" x2="21" y2="9" />
                <line x1="9" y1="21" x2="9" y2="9" />
              </svg>
              {isInCabinet ? 'In Cabinet' : 'Add to Cabinet'}
            </button>
          </div>
        </header>

        <section className="herb-section">
          <h2>About</h2>
          <p className="herb-about">{herb.description}</p>
          <div className="taste-profile">
            <strong>Taste Profile:</strong> {herb.tastProfile}
          </div>
        </section>

        {/* New IA v2 Section: Notable Compounds */}
        <section className="herb-section compounds-section">
          <h2>Notable Compounds</h2>
          <div className="compounds-grid">
            {herb.notableCompounds.map((compound, index) => (
              <div key={index} className="compound-card">
                <h3 className="compound-name">{compound.name}</h3>
                <p className="compound-description">{compound.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* New IA v2 Section: Growth & Origin */}
        <section className="herb-section origin-section">
          <h2>Growth & Origin</h2>
          <div className="origin-grid">
            <div className="origin-item">
              <span className="origin-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </span>
              <div className="origin-content">
                <h3>Geographic Origin</h3>
                <p>{herb.growthOrigin}</p>
              </div>
            </div>
            <div className="origin-item">
              <span className="origin-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </span>
              <div className="origin-content">
                <h3>Hardiness Zone</h3>
                <p>{herb.hardinessZone}</p>
              </div>
            </div>
          </div>
        </section>

        {/* New IA v2 Section: Healing Potential */}
        <section className="herb-section healing-section">
          <h2>Healing Potential</h2>
          <div className="healing-tags">
            {herb.healingPotential.map((potential, index) => (
              <span key={index} className="healing-tag">{potential}</span>
            ))}
          </div>
        </section>

        <section className="herb-section">
          <h2>Health Benefits</h2>
          <div className="benefits-list">
            {herb.healthBenefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <div className="benefit-header">
                  <h3>{benefit.condition}</h3>
                  <span
                    className="evidence-badge"
                    style={{ backgroundColor: evidenceLevelInfo[benefit.evidenceLevel].color }}
                    title={evidenceLevelInfo[benefit.evidenceLevel].description}
                  >
                    {evidenceLevelInfo[benefit.evidenceLevel].label}
                  </span>
                </div>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="herb-section">
          <h2>Culinary Uses</h2>
          <div className="tags-list">
            {herb.culinaryUses.map((use, index) => (
              <span key={index} className="culinary-tag">{use}</span>
            ))}
          </div>
        </section>

        <section className="herb-section">
          <h2>Pairs Well With</h2>
          <div className="tags-list">
            {herb.pairsWith.map((pair, index) => (
              <span key={index} className="pair-tag">{pair}</span>
            ))}
          </div>
        </section>

        <section className="herb-section precautions">
          <h2>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            Precautions
          </h2>
          <ul className="precautions-list">
            {herb.precautions.map((precaution, index) => (
              <li key={index}>{precaution}</li>
            ))}
          </ul>
        </section>

        <div className="disclaimer-box">
          <p>
            <strong>Disclaimer:</strong> This information is for educational purposes only
            and is not intended as medical advice. Always consult with a healthcare
            professional before using herbs or spices for medicinal purposes.
          </p>
        </div>
      </div>
    </div>
  )
}
