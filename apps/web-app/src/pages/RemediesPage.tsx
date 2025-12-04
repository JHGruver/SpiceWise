import { Link } from 'react-router-dom'
import { useUser } from '../context/UserContext'
import { herbsAndSpices, healthConditions, getRecommendationsForCondition } from '../data/mockData'
import SpiceIcon from '../components/common/SpiceIcon'
import Icon, { IconName } from '../components/common/Icon'
import './RemediesPage.css'

export default function RemediesPage() {
  const { user } = useUser()

  // Get recommendations based on user's conditions
  const recommendations = user.conditions.flatMap(conditionId => {
    const herbs = getRecommendationsForCondition(conditionId)
    const condition = healthConditions.find(c => c.id === conditionId)
    return herbs.map(herb => ({
      herb,
      condition: condition?.name || conditionId,
      conditionIconName: condition?.iconName || 'pill',
    }))
  })

  // Remove duplicates, keeping track of all conditions each herb helps with
  const uniqueRecommendations = recommendations.reduce((acc, rec) => {
    const existing = acc.find(r => r.herb.id === rec.herb.id)
    if (existing) {
      if (!existing.conditions.includes(rec.condition)) {
        existing.conditions.push(rec.condition)
      }
    } else {
      acc.push({
        herb: rec.herb,
        conditions: [rec.condition],
      })
    }
    return acc
  }, [] as { herb: typeof herbsAndSpices[0], conditions: string[] }[])

  // Sort by number of matching conditions
  uniqueRecommendations.sort((a, b) => b.conditions.length - a.conditions.length)

  const hasProfile = user.conditions.length > 0

  return (
    <div className="page remedies-page">
      <div className="container">
        <header className="page-header">
          <h1 className="page-title">Your Remedies</h1>
          <p className="page-subtitle">
            Personalized herb and spice recommendations based on your health profile
          </p>
        </header>

        {!hasProfile ? (
          <div className="no-profile">
            <div className="no-profile-content">
              <Icon name="user" size="xl" className="no-profile-icon" />
              <h2>Set Up Your Profile First</h2>
              <p>
                Tell us about your health concerns and goals so we can provide
                personalized recommendations just for you.
              </p>
              <Link to="/profile" className="setup-profile-btn">
                Set Up Profile
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="profile-summary-bar">
              <span className="summary-label">Recommendations for:</span>
              <div className="conditions-list">
                {user.conditions.map(conditionId => {
                  const condition = healthConditions.find(c => c.id === conditionId)
                  return (
                    <span key={conditionId} className="condition-chip">
                      <Icon name={condition?.iconName as IconName || 'pill'} size="xs" /> {condition?.name}
                    </span>
                  )
                })}
              </div>
              <Link to="/profile" className="edit-profile-link">Edit</Link>
            </div>

            <div className="recommendations-list">
              {uniqueRecommendations.map(({ herb, conditions }) => (
                <div key={herb.id} className="recommendation-card">
                  <div className="rec-header">
                    <div className="rec-herb-info">
                      <SpiceIcon name={herb.iconName} size="md" className="rec-emoji" />
                      <div>
                        <h3 className="rec-name">{herb.name}</h3>
                        <span className={`rec-category ${herb.category}`}>{herb.category}</span>
                      </div>
                    </div>
                    <div className="rec-match">
                      <span className="match-count">{conditions.length}</span>
                      <span className="match-label">match{conditions.length > 1 ? 'es' : ''}</span>
                    </div>
                  </div>

                  <div className="rec-helps-with">
                    <span className="helps-label">Helps with:</span>
                    {conditions.map(c => (
                      <span key={c} className="helps-tag">{c}</span>
                    ))}
                  </div>

                  <div className="rec-benefits">
                    {herb.healthBenefits
                      .filter(b => conditions.some(c =>
                        c.toLowerCase().includes(b.condition.toLowerCase()) ||
                        b.condition.toLowerCase().includes(c.toLowerCase().split(' ')[0])
                      ))
                      .slice(0, 2)
                      .map((benefit, idx) => (
                        <p key={idx} className="benefit-text">
                          • {benefit.description}
                        </p>
                      ))
                    }
                  </div>

                  <div className="rec-usage">
                    <span className="usage-label">Try it in:</span>
                    <span className="usage-text">{herb.culinaryUses.slice(0, 3).join(', ')}</span>
                  </div>

                  <Link to={`/explore/${herb.id}`} className="learn-more-btn">
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>

            {uniqueRecommendations.length === 0 && (
              <div className="no-recommendations">
                <Icon name="search" size="xl" className="no-rec-icon" />
                <p>No specific recommendations found for your conditions.</p>
                <p>Try adding more health concerns to your profile.</p>
              </div>
            )}

            <div className="disclaimer-box">
              <p>
                <strong>Disclaimer:</strong> These recommendations are for educational
                purposes only. Always consult with a healthcare professional before
                using herbs or spices for medicinal purposes.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
