import { useState } from 'react'
import { useUser } from '../context/UserContext'
import { healthConditions, healthGoals, dietaryRestrictions, allergies, herbsAndSpices } from '../data/mockData'
import { Link } from 'react-router-dom'
import SpiceIcon from '../components/common/SpiceIcon'
import Icon, { IconName } from '../components/common/Icon'
import './ProfilePage.css'

export default function ProfilePage() {
  const { user, updateProfile, toggleCondition, toggleGoal } = useUser()
  const [activeTab, setActiveTab] = useState<'profile' | 'saved'>('profile')

  const savedHerbsList = herbsAndSpices.filter(h => user.savedHerbs.includes(h.id))

  return (
    <div className="page profile-page">
      <div className="container">
        <header className="page-header">
          <h1 className="page-title">Your Profile</h1>
          <p className="page-subtitle">
            Personalize your experience for better recommendations
          </p>
        </header>

        <div className="profile-tabs">
          <button
            className={`tab-btn ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            Health Profile
          </button>
          <button
            className={`tab-btn ${activeTab === 'saved' ? 'active' : ''}`}
            onClick={() => setActiveTab('saved')}
          >
            Saved ({user.savedHerbs.length})
          </button>
        </div>

        {activeTab === 'profile' && (
          <div className="profile-content">
            {/* Name Section */}
            <section className="profile-section">
              <h2>Your Name</h2>
              <input
                type="text"
                className="name-input"
                placeholder="Enter your name"
                value={user.name}
                onChange={(e) => updateProfile({ name: e.target.value })}
              />
            </section>

            {/* Health Conditions */}
            <section className="profile-section">
              <h2>Health Concerns</h2>
              <p className="section-hint">Select any conditions you'd like help managing</p>
              <div className="options-grid">
                {healthConditions.map(condition => (
                  <button
                    key={condition.id}
                    className={`option-btn ${user.conditions.includes(condition.id) ? 'selected' : ''}`}
                    onClick={() => toggleCondition(condition.id)}
                  >
                    <Icon name={condition.iconName as IconName} size="md" className="option-icon" />
                    <span className="option-label">{condition.name}</span>
                  </button>
                ))}
              </div>
            </section>

            {/* Health Goals */}
            <section className="profile-section">
              <h2>Wellness Goals</h2>
              <p className="section-hint">What are you hoping to achieve?</p>
              <div className="options-grid">
                {healthGoals.map(goal => (
                  <button
                    key={goal.id}
                    className={`option-btn ${user.goals.includes(goal.id) ? 'selected' : ''}`}
                    onClick={() => toggleGoal(goal.id)}
                  >
                    <span className="option-label">{goal.name}</span>
                  </button>
                ))}
              </div>
            </section>

            {/* Dietary Restrictions */}
            <section className="profile-section">
              <h2>Dietary Preferences</h2>
              <div className="options-grid small">
                {dietaryRestrictions.map(diet => (
                  <button
                    key={diet.id}
                    className={`option-btn small ${user.dietaryRestrictions.includes(diet.id) ? 'selected' : ''}`}
                    onClick={() => updateProfile({
                      dietaryRestrictions: user.dietaryRestrictions.includes(diet.id)
                        ? user.dietaryRestrictions.filter(d => d !== diet.id)
                        : [...user.dietaryRestrictions, diet.id]
                    })}
                  >
                    {diet.name}
                  </button>
                ))}
              </div>
            </section>

            {/* Allergies */}
            <section className="profile-section">
              <h2>Allergies & Sensitivities</h2>
              <div className="options-grid small">
                {allergies.map(allergy => (
                  <button
                    key={allergy.id}
                    className={`option-btn small warning ${user.allergies.includes(allergy.id) ? 'selected' : ''}`}
                    onClick={() => updateProfile({
                      allergies: user.allergies.includes(allergy.id)
                        ? user.allergies.filter(a => a !== allergy.id)
                        : [...user.allergies, allergy.id]
                    })}
                  >
                    {allergy.name}
                  </button>
                ))}
              </div>
            </section>

            {/* Profile Summary */}
            <section className="profile-summary">
              <h2>Your Profile Summary</h2>
              <div className="summary-content">
                {user.name && <p><strong>Name:</strong> {user.name}</p>}
                {user.conditions.length > 0 && (
                  <p><strong>Concerns:</strong> {user.conditions.map(c =>
                    healthConditions.find(hc => hc.id === c)?.name
                  ).join(', ')}</p>
                )}
                {user.goals.length > 0 && (
                  <p><strong>Goals:</strong> {user.goals.map(g =>
                    healthGoals.find(hg => hg.id === g)?.name
                  ).join(', ')}</p>
                )}
                {(user.conditions.length === 0 && user.goals.length === 0) && (
                  <p className="empty-state">Select some concerns or goals above to get personalized recommendations!</p>
                )}
              </div>
              {(user.conditions.length > 0 || user.goals.length > 0) && (
                <Link to="/remedies" className="view-recommendations-btn">
                  View My Recommendations →
                </Link>
              )}
            </section>
          </div>
        )}

        {activeTab === 'saved' && (
          <div className="saved-content">
            {savedHerbsList.length > 0 ? (
              <div className="saved-grid">
                {savedHerbsList.map(herb => (
                  <Link to={`/explore/${herb.id}`} key={herb.id} className="saved-card">
                    <SpiceIcon name={herb.iconName} size="md" className="saved-emoji" />
                    <span className="saved-name">{herb.name}</span>
                    <span className={`saved-category ${herb.category}`}>{herb.category}</span>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="empty-saved">
                <Icon name="heart" size="xl" className="empty-icon" />
                <h3>No saved herbs yet</h3>
                <p>Browse the encyclopedia and tap the heart to save your favorites</p>
                <Link to="/explore" className="browse-btn">
                  Browse Spices
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
