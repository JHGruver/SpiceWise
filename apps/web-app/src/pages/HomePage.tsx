import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../context/UserContext'
import { herbsAndSpices, healthConditions } from '../data/mockData'
import Icon from '../components/common/Icon'
import SpiceIcon from '../components/common/SpiceIcon'
import './HomePage.css'

// Spice of the week rotates based on week number
const getSpiceOfTheWeek = () => {
  const weekNumber = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000))
  return herbsAndSpices[weekNumber % herbsAndSpices.length]
}

// Daily tips rotate based on day
const dailyTips = [
  { title: 'Golden Morning', tip: 'Add turmeric and black pepper to your eggs for an anti-inflammatory breakfast boost.', icon: 'sunrise' as const, spice: 'turmeric' },
  { title: 'Digestive Aid', tip: 'Chew on a small piece of fresh ginger before meals to stimulate digestion.', icon: 'stomach' as const, spice: 'ginger' },
  { title: 'Sweet Dreams', tip: 'A pinch of cinnamon in warm milk can help promote restful sleep.', icon: 'sleep' as const, spice: 'cinnamon' },
  { title: 'Immune Boost', tip: 'Crush fresh garlic and let it sit for 10 minutes before cooking to maximize allicin.', icon: 'shield' as const, spice: 'garlic' },
  { title: 'Mental Clarity', tip: 'The aroma of rosemary can improve memory and concentration.', icon: 'lightning' as const, spice: 'rosemary' },
  { title: 'Calm & Focus', tip: 'Peppermint tea after lunch aids digestion and sharpens focus.', icon: 'tea' as const, spice: 'peppermint' },
  { title: 'Metabolism Fire', tip: 'A dash of cayenne in your morning lemon water can kickstart your metabolism.', icon: 'flame' as const, spice: 'cayenne' },
]

const getDailyTip = () => {
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / (24 * 60 * 60 * 1000))
  return dailyTips[dayOfYear % dailyTips.length]
}

// Seasonal content
const getSeasonalContent = () => {
  const month = new Date().getMonth()
  if (month >= 2 && month <= 4) {
    return { season: 'Spring', theme: 'Renewal & Detox', spices: ['ginger', 'turmeric', 'peppermint'], color: '#7CB342' }
  } else if (month >= 5 && month <= 7) {
    return { season: 'Summer', theme: 'Cool & Refresh', spices: ['basil', 'peppermint', 'ginger'], color: '#FF7043' }
  } else if (month >= 8 && month <= 10) {
    return { season: 'Autumn', theme: 'Warmth & Immunity', spices: ['cinnamon', 'ginger', 'turmeric'], color: '#FF8A65' }
  }
  return { season: 'Winter', theme: 'Comfort & Healing', spices: ['cinnamon', 'garlic', 'cayenne'], color: '#5C6BC0' }
}

// Time-based greeting
const getGreeting = () => {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good morning'
  if (hour < 17) return 'Good afternoon'
  return 'Good evening'
}

// Recipe ideas that rotate
const recipeIdeas = [
  { dish: 'Golden Turmeric Latte', spices: ['turmeric', 'cinnamon', 'ginger'], time: '5 min' },
  { dish: 'Immune-Boosting Soup', spices: ['garlic', 'ginger', 'cayenne'], time: '30 min' },
  { dish: 'Fresh Basil Pesto', spices: ['basil', 'garlic'], time: '10 min' },
  { dish: 'Rosemary Roasted Vegetables', spices: ['rosemary', 'garlic'], time: '40 min' },
  { dish: 'Peppermint Chocolate Mousse', spices: ['peppermint'], time: '15 min' },
]

const getRecipeIdea = () => {
  const dayOfWeek = new Date().getDay()
  return recipeIdeas[dayOfWeek % recipeIdeas.length]
}

export default function HomePage() {
  const { user, hasCompletedProfile } = useUser()
  const [spiceOfWeek] = useState(getSpiceOfTheWeek())
  const [dailyTip] = useState(getDailyTip())
  const [seasonal] = useState(getSeasonalContent())
  const [recipeIdea] = useState(getRecipeIdea())
  const [greeting] = useState(getGreeting())

  // Calculate profile completion percentage
  const profileProgress = () => {
    let completed = 0
    const total = 4
    if (user.name) completed++
    if (user.conditions.length > 0) completed++
    if (user.goals.length > 0) completed++
    if (user.savedHerbs.length > 0) completed++
    return Math.round((completed / total) * 100)
  }

  return (
    <div className="home-page">
      {/* Compact Greeting */}
      <section className="dashboard-greeting container">
        <div className="greeting-content">
          <h1 className="greeting-text">
            {greeting}{user.name ? `, ${user.name}` : ''}
          </h1>
          <p className="greeting-subtitle">
            {hasCompletedProfile
              ? 'Your personalized spice journey awaits'
              : 'Discover the healing power of herbs & spices'
            }
          </p>
        </div>
        <div className="greeting-date">
          {new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
        </div>
      </section>

      {/* Optimized Dashboard Grid */}
      <div className="dashboard-grid container">

        {/* Spice of the Week - Compact Hero */}
        <Link to={`/explore/${spiceOfWeek.id}`} className="dashboard-card spice-of-week">
          <div className="card-badge">Featured</div>
          <div className="spice-week-content">
            <div className="spice-week-image">
              <SpiceIcon name={spiceOfWeek.iconName} size="xl" />
            </div>
            <div className="spice-week-info">
              <h2 className="spice-week-name">{spiceOfWeek.name}</h2>
              <p className="spice-week-scientific">{spiceOfWeek.scientificName}</p>
              <p className="spice-week-desc">{spiceOfWeek.description.slice(0, 80)}...</p>
              <div className="spice-week-benefits">
                {spiceOfWeek.healthBenefits.slice(0, 2).map(b => (
                  <span key={b.condition} className="benefit-pill">{b.condition}</span>
                ))}
              </div>
            </div>
          </div>
        </Link>

        {/* Your Journey / Profile Progress */}
        <div className="dashboard-card your-journey">
          <div className="card-header">
            <Icon name="user" size="sm" />
            <h3>Your Journey</h3>
          </div>
          {hasCompletedProfile ? (
            <div className="journey-stats">
              <div className="journey-stat">
                <span className="stat-number">{user.conditions.length}</span>
                <span className="stat-label">Goals</span>
              </div>
              <div className="journey-stat">
                <span className="stat-number">{user.savedHerbs.length}</span>
                <span className="stat-label">Saved</span>
              </div>
              <div className="journey-stat">
                <span className="stat-number">{user.cabinet.length}</span>
                <span className="stat-label">Cabinet</span>
              </div>
              <Link to="/remedies" className="journey-cta">View Recommendations →</Link>
            </div>
          ) : (
            <div className="journey-setup">
              <div className="progress-ring">
                <svg viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" className="progress-bg" />
                  <circle
                    cx="50" cy="50" r="45"
                    className="progress-fill"
                    style={{ strokeDasharray: `${profileProgress() * 2.83} 283` }}
                  />
                </svg>
                <span className="progress-text">{profileProgress()}%</span>
              </div>
              <p className="journey-prompt">Complete profile for personalized tips</p>
              <Link to="/profile" className="journey-cta-primary">Set Up Profile</Link>
            </div>
          )}
        </div>

        {/* Primary Navigation */}
        <div className="dashboard-card primary-navigation">
          <div className="card-header">
            <Icon name="sparkle" size="sm" />
            <h3>Quick Access</h3>
          </div>
          <div className="actions-grid">
            <Link to="/explore" className="action-btn">
              <Icon name="book" size="md" />
              <div className="action-text">
                <span>Explore</span>
                <small>{herbsAndSpices.length} herbs</small>
              </div>
            </Link>
            <Link to="/remedies" className="action-btn">
              <Icon name="heart" size="md" />
              <div className="action-text">
                <span>Remedies</span>
                <small>For you</small>
              </div>
            </Link>
            <Link to="/recipes" className="action-btn">
              <Icon name="cooking" size="md" />
              <div className="action-text">
                <span>Recipes</span>
                <small>Cook now</small>
              </div>
            </Link>
            <Link to="/community" className="action-btn">
              <Icon name="community" size="md" />
              <div className="action-text">
                <span>Community</span>
                <small>Connect</small>
              </div>
            </Link>
            {!hasCompletedProfile && (
              <Link to="/profile" className="action-btn action-btn-highlight">
                <Icon name="user" size="md" />
                <div className="action-text">
                  <span>Profile</span>
                  <small>Complete</small>
                </div>
              </Link>
            )}
          </div>
        </div>

        {/* Daily Wellness Tip */}
        <Link to={`/explore/${dailyTip.spice}`} className="dashboard-card daily-tip">
          <div className="card-header">
            <Icon name={dailyTip.icon} size="sm" />
            <h3>Daily Tip</h3>
          </div>
          <h4 className="tip-title">{dailyTip.title}</h4>
          <p className="tip-text">{dailyTip.tip}</p>
          <span className="tip-link">Learn about {dailyTip.spice} →</span>
        </Link>

        {/* Seasonal Spotlight */}
        <div className="dashboard-card seasonal-spotlight" style={{ '--season-color': seasonal.color } as React.CSSProperties}>
          <div className="card-header">
            <Icon name="leaf" size="sm" />
            <h3>{seasonal.season}</h3>
          </div>
          <p className="seasonal-theme">{seasonal.theme}</p>
          <div className="seasonal-spices">
            {seasonal.spices.map(spiceId => {
              const spice = herbsAndSpices.find(s => s.id === spiceId)
              return spice ? (
                <Link to={`/explore/${spice.id}`} key={spice.id} className="seasonal-spice">
                  <SpiceIcon name={spice.iconName} size="md" />
                  <span>{spice.name}</span>
                </Link>
              ) : null
            })}
          </div>
        </div>

        {/* Quick Discover - Merged Recipe + Community */}
        <div className="dashboard-card quick-discover">
          <div className="card-header">
            <Icon name="sparkle" size="sm" />
            <h3>Discover</h3>
          </div>
          <Link to="/recipes" className="discover-item">
            <div className="discover-icon">
              <Icon name="cooking" size="md" />
            </div>
            <div className="discover-content">
              <h4>{recipeIdea.dish}</h4>
              <span className="discover-meta">
                <Icon name="history" size="xs" /> {recipeIdea.time}
              </span>
            </div>
          </Link>
          <Link to="/community" className="discover-item">
            <div className="discover-icon discover-icon-alt">
              <Icon name="tea" size="md" />
            </div>
            <div className="discover-content">
              <h4>Virtual Spice Tasting</h4>
              <span className="discover-meta">Coming Soon</span>
            </div>
          </Link>
        </div>

        {/* Health Conditions Quick Access (if user has set them) */}
        {user.conditions.length > 0 && (
          <div className="dashboard-card health-focus">
            <div className="card-header">
              <Icon name="shield" size="sm" />
              <h3>Your Focus Areas</h3>
            </div>
            <div className="focus-chips">
              {user.conditions.slice(0, 4).map(conditionId => {
                const condition = healthConditions.find(c => c.id === conditionId)
                return condition ? (
                  <Link to="/remedies" key={condition.id} className="focus-chip">
                    <Icon name={condition.iconName as any} size="xs" />
                    <span>{condition.name}</span>
                  </Link>
                ) : null
              })}
            </div>
            <Link to="/profile" className="edit-link">Edit health profile →</Link>
          </div>
        )}

      </div>
    </div>
  )
}
