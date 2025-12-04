import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../context/UserContext'
import { herbsAndSpices } from '../data/mockData'
import SpiceIcon from '../components/common/SpiceIcon'
import './PageStyles.css'
import './CabinetPage.css'

type CabinetLocation = 'all' | 'pantry' | 'fridge' | 'cupboard' | 'medicine-cabinet'

const locationLabels: Record<CabinetLocation, string> = {
  all: 'All Items',
  pantry: 'Pantry',
  fridge: 'Fridge',
  cupboard: 'Cupboard',
  'medicine-cabinet': 'Medicine Cabinet',
}

const locationIcons: Record<CabinetLocation, JSX.Element> = {
  all: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="21" x2="9" y2="9" />
    </svg>
  ),
  pantry: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 3h18v18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3z" />
      <path d="M3 9h18" />
      <path d="M3 15h18" />
    </svg>
  ),
  fridge: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <line x1="4" y1="10" x2="20" y2="10" />
      <line x1="12" y1="6" x2="12" y2="6.01" />
      <line x1="12" y1="14" x2="12" y2="14.01" />
    </svg>
  ),
  cupboard: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="12" y1="3" x2="12" y2="21" />
      <line x1="8" y1="12" x2="8" y2="12.01" />
      <line x1="16" y1="12" x2="16" y2="12.01" />
    </svg>
  ),
  'medicine-cabinet': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="12" y1="8" x2="12" y2="16" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  ),
}

export default function CabinetPage() {
  const { user, removeFromCabinet, addToCabinet } = useUser()
  const [activeLocation, setActiveLocation] = useState<CabinetLocation>('all')
  const [showAddModal, setShowAddModal] = useState(false)
  const [selectedSpice, setSelectedSpice] = useState('')
  const [selectedLocation, setSelectedLocation] = useState<Exclude<CabinetLocation, 'all'>>('pantry')

  const filteredItems = activeLocation === 'all'
    ? user.cabinet
    : user.cabinet.filter(item => item.location === activeLocation)

  const getHerbById = (id: string) => herbsAndSpices.find(h => h.id === id)

  const handleAddItem = () => {
    if (selectedSpice && selectedLocation) {
      addToCabinet({
        herbSpiceId: selectedSpice,
        location: selectedLocation,
      })
      setShowAddModal(false)
      setSelectedSpice('')
      setSelectedLocation('pantry')
    }
  }

  const availableToAdd = herbsAndSpices.filter(
    h => !user.cabinet.some(c => c.herbSpiceId === h.id)
  )

  return (
    <div className="page cabinet-page">
      <div className="container">
        <header className="page-header">
          <h1 className="page-title">Digital Cabinet</h1>
          <p className="page-subtitle">Track what spices you have at home</p>
        </header>

        <div className="cabinet-actions">
          <button
            className="add-item-btn"
            onClick={() => setShowAddModal(true)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            Add Item
          </button>
          <button className="scan-btn" disabled title="Coming Soon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <line x1="7" y1="8" x2="7" y2="16" />
              <line x1="10" y1="8" x2="10" y2="16" />
              <line x1="13" y1="8" x2="13" y2="16" />
              <line x1="17" y1="8" x2="17" y2="16" />
            </svg>
            Scan Barcode
          </button>
        </div>

        <div className="location-tabs">
          {(Object.keys(locationLabels) as CabinetLocation[]).map((location) => (
            <button
              key={location}
              className={`location-tab ${activeLocation === location ? 'location-tab--active' : ''}`}
              onClick={() => setActiveLocation(location)}
            >
              <span className="tab-icon">{locationIcons[location]}</span>
              <span className="tab-label">{locationLabels[location]}</span>
              {location !== 'all' && (
                <span className="tab-count">
                  {user.cabinet.filter(i => i.location === location).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {filteredItems.length === 0 ? (
          <div className="cabinet-empty">
            <div className="empty-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="48" height="48">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <line x1="3" y1="9" x2="21" y2="9" />
                <line x1="9" y1="21" x2="9" y2="9" />
              </svg>
            </div>
            <h3>Your {activeLocation === 'all' ? 'cabinet' : locationLabels[activeLocation].toLowerCase()} is empty</h3>
            <p>Add spices to track what you have at home</p>
            <button className="add-first-btn" onClick={() => setShowAddModal(true)}>
              Add Your First Item
            </button>
          </div>
        ) : (
          <div className="cabinet-grid">
            {filteredItems.map((item) => {
              const herb = getHerbById(item.herbSpiceId)
              if (!herb) return null
              return (
                <div key={item.id} className="cabinet-card">
                  <div className="cabinet-card-header">
                    <SpiceIcon name={herb.iconName} size="md" className="herb-emoji" />
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCabinet(item.id)}
                      aria-label="Remove from cabinet"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                  </div>
                  <h3 className="cabinet-card-title">{herb.name}</h3>
                  <p className="cabinet-card-location">
                    <span className="location-icon">{locationIcons[item.location]}</span>
                    {locationLabels[item.location]}
                  </p>
                  <Link to={`/explore/${herb.id}`} className="view-details-link">
                    View Details
                  </Link>
                </div>
              )
            })}
          </div>
        )}
      </div>

      {showAddModal && (
        <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowAddModal(false)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <h2 className="modal-title">Add to Cabinet</h2>

            <div className="form-group">
              <label>Select Spice</label>
              <select
                value={selectedSpice}
                onChange={(e) => setSelectedSpice(e.target.value)}
                className="form-select"
              >
                <option value="">Choose a spice...</option>
                {availableToAdd.map(herb => (
                  <option key={herb.id} value={herb.id}>
                    {herb.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Storage Location</label>
              <div className="location-options">
                {(['pantry', 'fridge', 'cupboard', 'medicine-cabinet'] as const).map(loc => (
                  <button
                    key={loc}
                    className={`location-option ${selectedLocation === loc ? 'location-option--active' : ''}`}
                    onClick={() => setSelectedLocation(loc)}
                  >
                    <span className="option-icon">{locationIcons[loc]}</span>
                    <span>{locationLabels[loc]}</span>
                  </button>
                ))}
              </div>
            </div>

            <button
              className="modal-submit"
              onClick={handleAddItem}
              disabled={!selectedSpice}
            >
              Add to Cabinet
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
