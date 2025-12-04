import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../context/UserContext'
import { herbsAndSpices, healthConditions } from '../data/mockData'
import SpiceIcon from '../components/common/SpiceIcon'
import Icon from '../components/common/Icon'
import './RecipesPage.css'

// Mock recipe suggestions based on dish type
const dishSuggestions: Record<string, { herbs: string[], reason: string }> = {
  'chicken': { herbs: ['rosemary', 'garlic', 'turmeric'], reason: 'These complement poultry and add anti-inflammatory benefits' },
  'pasta': { herbs: ['basil', 'garlic', 'cayenne'], reason: 'Classic Italian herbs with a metabolism boost' },
  'soup': { herbs: ['ginger', 'garlic', 'turmeric'], reason: 'Warming spices that support immunity' },
  'salad': { herbs: ['basil', 'peppermint'], reason: 'Fresh herbs that aid digestion' },
  'fish': { herbs: ['ginger', 'garlic', 'turmeric'], reason: 'Asian-inspired combo with heart-healthy benefits' },
  'rice': { herbs: ['turmeric', 'cinnamon', 'ginger'], reason: 'Aromatic spices that help balance blood sugar' },
  'beef': { herbs: ['rosemary', 'garlic', 'cayenne'], reason: 'Bold flavors that aid digestion' },
  'vegetables': { herbs: ['garlic', 'turmeric', 'basil'], reason: 'Enhance nutrients and add anti-inflammatory power' },
  'smoothie': { herbs: ['ginger', 'turmeric', 'cinnamon'], reason: 'Health-boosting additions for your blend' },
  'eggs': { herbs: ['turmeric', 'cayenne', 'basil'], reason: 'Morning metabolism boost' },
}

export default function RecipesPage() {
  const { user } = useUser()
  const [recipeInput, setRecipeInput] = useState('')
  const [suggestions, setSuggestions] = useState<{
    herbs: typeof herbsAndSpices,
    reason: string,
    userBenefits: string[]
  } | null>(null)

  const analyzeDish = () => {
    const input = recipeInput.toLowerCase()

    // Find matching dish type
    let matchedSuggestion = null
    for (const [dish, suggestion] of Object.entries(dishSuggestions)) {
      if (input.includes(dish)) {
        matchedSuggestion = suggestion
        break
      }
    }

    if (!matchedSuggestion) {
      // Default suggestions
      matchedSuggestion = {
        herbs: ['garlic', 'ginger', 'turmeric'],
        reason: 'These versatile ingredients work with most dishes'
      }
    }

    // Get full herb data
    const herbData = matchedSuggestion.herbs
      .map(id => herbsAndSpices.find(h => h.id === id))
      .filter(Boolean) as typeof herbsAndSpices

    // Check user health conditions for personalized benefits
    const userBenefits: string[] = []
    if (user.conditions.length > 0) {
      herbData.forEach(herb => {
        herb.healthBenefits.forEach(benefit => {
          const matchingCondition = user.conditions.find(c => {
            const conditionName = healthConditions.find(hc => hc.id === c)?.name || ''
            return conditionName.toLowerCase().includes(benefit.condition.toLowerCase()) ||
              benefit.condition.toLowerCase().includes(conditionName.toLowerCase().split(' ')[0])
          })
          if (matchingCondition) {
            const condName = healthConditions.find(hc => hc.id === matchingCondition)?.name
            userBenefits.push(`${herb.name} may help with your ${condName}`)
          }
        })
      })
    }

    setSuggestions({
      herbs: herbData,
      reason: matchedSuggestion.reason,
      userBenefits: [...new Set(userBenefits)], // Remove duplicates
    })
  }

  return (
    <div className="page recipes-page">
      <div className="container">
        <header className="page-header">
          <h1 className="page-title">Cook Assistant</h1>
          <p className="page-subtitle">
            Tell us what you're cooking and we'll suggest herbs and spices to boost both flavor and health
          </p>
        </header>

        <div className="recipe-input-section">
          <label htmlFor="recipe-input" className="input-label">
            What are you cooking today?
          </label>
          <div className="input-wrapper">
            <input
              id="recipe-input"
              type="text"
              className="recipe-input"
              placeholder="e.g., chicken stir fry, pasta, vegetable soup..."
              value={recipeInput}
              onChange={(e) => setRecipeInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && analyzeDish()}
            />
            <button
              className="analyze-btn"
              onClick={analyzeDish}
              disabled={!recipeInput.trim()}
            >
              Get Suggestions
            </button>
          </div>

          <div className="quick-options">
            <span className="quick-label">Quick picks:</span>
            {['Chicken', 'Pasta', 'Soup', 'Salad', 'Smoothie'].map(dish => (
              <button
                key={dish}
                className="quick-btn"
                onClick={() => {
                  setRecipeInput(dish)
                  setTimeout(() => {
                    const input = dish.toLowerCase()
                    const matchedSuggestion = dishSuggestions[input] || {
                      herbs: ['garlic', 'ginger', 'turmeric'],
                      reason: 'These versatile ingredients work with most dishes'
                    }
                    const herbData = matchedSuggestion.herbs
                      .map(id => herbsAndSpices.find(h => h.id === id))
                      .filter(Boolean) as typeof herbsAndSpices
                    setSuggestions({
                      herbs: herbData,
                      reason: matchedSuggestion.reason,
                      userBenefits: [],
                    })
                  }, 100)
                }}
              >
                {dish}
              </button>
            ))}
          </div>
        </div>

        {suggestions && (
          <div className="suggestions-section">
            <h2 className="suggestions-title">
              Suggested additions for your {recipeInput}
            </h2>
            <p className="suggestions-reason">{suggestions.reason}</p>

            {suggestions.userBenefits.length > 0 && (
              <div className="personal-benefits">
                <h3><Icon name="heart" size="sm" /> Personalized for You</h3>
                <ul>
                  {suggestions.userBenefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="suggested-herbs">
              {suggestions.herbs.map(herb => (
                <div key={herb.id} className="suggested-herb-card">
                  <div className="herb-card-header">
                    <SpiceIcon name={herb.iconName} size="md" className="herb-emoji" />
                    <div>
                      <h3>{herb.name}</h3>
                      <span className={`herb-type ${herb.category}`}>{herb.category}</span>
                    </div>
                  </div>
                  <p className="herb-taste">
                    <strong>Taste:</strong> {herb.tastProfile}
                  </p>
                  <div className="herb-benefits-preview">
                    {herb.healthBenefits.slice(0, 2).map(b => (
                      <span key={b.condition} className="mini-benefit">{b.condition}</span>
                    ))}
                  </div>
                  <Link to={`/explore/${herb.id}`} className="view-herb-link">
                    View Details →
                  </Link>
                </div>
              ))}
            </div>

            <div className="tips-section">
              <h3><Icon name="cooking" size="sm" /> Quick Tips</h3>
              <ul>
                <li>Add dried spices early in cooking to bloom their flavors</li>
                <li>Fresh herbs work best added at the end</li>
                <li>Start with small amounts - you can always add more!</li>
                <li>Turmeric absorbs better with black pepper and fat</li>
              </ul>
            </div>
          </div>
        )}

        {!suggestions && (
          <div className="empty-state">
            <Icon name="cooking" size="xl" className="empty-icon" />
            <h3>Ready to enhance your cooking?</h3>
            <p>Enter a dish above to get personalized herb and spice suggestions</p>
          </div>
        )}
      </div>
    </div>
  )
}
