import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/common/Icon'
import SEO from '../components/common/SEO'
import './PageStyles.css'
import './FeaturesPage.css'

const showcaseSpices = [
  { name: 'Turmeric', image: '/images/spices/Turmeric_X.png', benefit: 'Anti-inflammatory powerhouse' },
  { name: 'Ginger', image: '/images/spices/Ginger_X.png', benefit: 'Digestive & nausea relief' },
  { name: 'Cinnamon', image: '/images/spices/Cinnamon_X.png', benefit: 'Blood sugar support' },
  { name: 'Black Cumin Seed', image: '/images/spices/BlackCuminSeed_X.png', benefit: 'Immune system boost' },
  { name: 'Cardamom', image: '/images/spices/Cardamom_X.png', benefit: 'Digestive wellness' },
  { name: 'Clove', image: '/images/spices/Clove_X.png', benefit: 'Natural pain relief' },
]

const features = [
  {
    icon: 'book' as const,
    title: 'Spice Index',
    description: 'Browse 40+ healing spices with comprehensive profiles including notable compounds, growth origins, and hardiness zones.',
    details: [
      'Scientific names and traditional names',
      'Notable compounds and active ingredients',
      'Growth origin and geographic regions',
      'Hardiness zones for home growing',
      'Healing potential with evidence levels'
    ]
  },
  {
    icon: 'search' as const,
    title: 'Keyword Search',
    description: 'Search by symptom, condition, or spice name to find natural remedies quickly.',
    details: [
      'Search by health condition (inflammation, sleep, digestion)',
      'Search by spice name or scientific name',
      'Filter by herb or spice category',
      'Clear text and filter options',
      'Sort by relevance or alphabetically'
    ]
  },
  {
    icon: 'cabinet' as const,
    title: 'Digital Cabinet',
    description: 'Track what\'s in your pantry, fridge, and medicine cabinet. Digital scan feature to quickly add items.',
    details: [
      'Organize by Pantry, Fridge, Cupboard, Medicine Cabinet',
      'Digital scan to add items quickly',
      'Track quantities and expiration dates',
      '"Use what you have" recommendations',
      'Coming soon: Barcode scanning & AI recognition'
    ]
  },
  {
    icon: 'heart' as const,
    title: 'Personalized Recommendations',
    description: 'Create your profile and get personalized spice recommendations based on your health goals.',
    details: [
      'Create your health profile',
      'Select conditions you want to address',
      'Get matched spices based on your needs',
      'Save favorites for quick access',
      'Integration with your Digital Cabinet'
    ]
  },
  {
    icon: 'map' as const,
    title: 'Spice Pairing Guide',
    description: 'Discover which spices pair well together for enhanced flavor and health benefits.',
    details: [
      'Complementary spice combinations',
      'Synergistic health benefits',
      'Culinary pairing suggestions',
      'Traditional remedy blends',
      'Taste profile matching'
    ]
  },
  {
    icon: 'globe' as const,
    title: 'Growth & Origin Info',
    description: 'Learn where spices come from, their hardiness zones, and how to grow them yourself.',
    details: [
      'Geographic origin regions',
      'USDA hardiness zones',
      'Growing difficulty ratings',
      'Cultivation tips',
      'Seasonal availability'
    ]
  }
]

export default function FeaturesPage() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    await new Promise(resolve => setTimeout(resolve, 500))
    setIsSubmitted(true)
    console.log('Email submitted:', email)
  }

  return (
    <div className="page features-page">
      <SEO
        title="Features"
        description="Explore SpiceCraft's powerful features: Spice Index, Digital Cabinet, Remedy Road Maps, personalized recommendations, and more. Your complete herbal wellness toolkit."
        keywords="spice database, herbal remedies, digital cabinet, wellness app features, spice guide"
        canonical="/features"
      />
      <section className="page-hero">
        <div className="container">
          <h1>Features</h1>
          <p className="page-subtitle">
            Everything you need to harness the healing power of spices — rooted in ancestral wisdom, backed by research.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="spice-showcase">
            <h2>Explore Our Spice Library</h2>
            <p className="showcase-subtitle">Discover the healing potential of nature's most powerful spices</p>
            <div className="showcase-grid">
              {showcaseSpices.map((spice, idx) => (
                <div key={idx} className="showcase-card">
                  <div className="showcase-image">
                    <img
                      src={spice.image}
                      alt={spice.name}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h3>{spice.name}</h3>
                  <p>{spice.benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="features-detail-grid">
            {features.map((feature, idx) => (
              <div key={idx} className="feature-detail-card">
                <div className="feature-detail-header">
                  <span className="feature-detail-icon">
                    <Icon name={feature.icon} size="xl" />
                  </span>
                  <h2>{feature.title}</h2>
                </div>
                <p className="feature-detail-description">{feature.description}</p>
                <ul className="feature-detail-list">
                  {feature.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="coming-soon-section">
            <h2>Coming Soon</h2>
            <div className="coming-soon-grid">
              <div className="coming-soon-item">
                <span className="coming-soon-icon">
                  <Icon name="camera" size="xl" />
                </span>
                <h3>Barcode Scanning</h3>
                <p>Scan spice jars to instantly add them to your cabinet</p>
              </div>
              <div className="coming-soon-item">
                <span className="coming-soon-icon">
                  <Icon name="cpu" size="xl" />
                </span>
                <h3>AI Image Recognition</h3>
                <p>Take a photo of a spice and let AI identify it for you</p>
              </div>
              <div className="coming-soon-item">
                <span className="coming-soon-icon">
                  <Icon name="users" size="xl" />
                </span>
                <h3>Community Features</h3>
                <p>Connect with other spice enthusiasts, share recipes and tips</p>
              </div>
              <div className="coming-soon-item">
                <span className="coming-soon-icon">
                  <Icon name="gamepad" size="xl" />
                </span>
                <h3>Spice Trivia</h3>
                <p>Test your knowledge and learn while having fun</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="features-cta">
            <h2>Be the First to Know</h2>
            <p>Join our waitlist to get early access when we launch.</p>

            {isSubmitted ? (
              <div className="email-success">
                <span className="success-icon">
                  <Icon name="check" size="lg" />
                </span>
                <p>You're on the list! We'll notify you when we launch.</p>
              </div>
            ) : (
              <form onSubmit={handleEmailSubmit} className="features-email-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="email-input"
                  required
                />
                <button type="submit" className="btn btn--primary btn--lg">
                  Join Waitlist
                </button>
              </form>
            )}

            <p className="features-cta-note">
              <Link to="/disclaimer">Read our health disclaimer</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
