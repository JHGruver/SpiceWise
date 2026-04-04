import { useState } from 'react'

import Icon from '../components/common/Icon'
import SEO from '../components/common/SEO'
import { submitWaitlist } from '../utils/formSubmit'
import './PageStyles.css'
import './FeaturesPage.css'

const showcaseSpices = [
  { name: 'Turmeric', image: '/images/spices/Turmeric_X.png', benefit: 'Anti-inflammatory powerhouse' },
  { name: 'Ginger', image: '/images/spices/Ginger_X.png', benefit: 'Digestive & nausea relief' },
  { name: 'Cinnamon', image: '/images/spices/Cinnamon_X.png', benefit: 'Blood sugar support' },

  { name: 'Cardamom', image: '/images/spices/Cardamom_X.png', benefit: 'Digestive wellness' },
  { name: 'Clove', image: '/images/spices/Clove_X.png', benefit: 'Natural pain relief' },
]

const features = [
  {
    icon: 'book' as const,
    title: 'Spice Index',
    details: [
      'Browse 40+ spices, both common and rare',
      'Notable compounds and scientific names',
      'Growth origin and hardiness zones',
      'Evidence based healing potential'
    ]
  },
  {
    icon: 'search' as const,
    title: 'Keyword Search',
    details: [
      'Search spice by common or scientific name',
      'Search by health condition (digestion, insomnia, gout)',
      'Save favorites for quick access'
    ]
  },
  {
    icon: 'map' as const,
    title: 'Remedy Road Maps',
    details: [
      'Spice groupings for common conditions and ailments',
      'Explore maps like Digestive Diamonds, Joint Joy, Cancer Cancellers, Matters of the Heart and more'
    ]
  }
]

export default function FeaturesPage() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    const success = await submitWaitlist({ email, source: 'FeaturesPage' })
    if (success) {
      setIsSubmitted(true)
    }
  }

  return (
    <div className="page features-page">
      <SEO
        title="Features"
        description="Explore SpiceMight's powerful features: Spice Index, Keyword Search, and Remedy Road Maps. Your complete spice-based wellness toolkit."
        keywords="spice database, spice remedies, wellness app features, spice guide"
        canonical="/features"
      />
      <section className="page-hero">
        <div className="container">
          <h1>Features</h1>
          <p className="page-subtitle">
            Empowering you to harness the healing power of spices
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="spice-showcase">
            <h2>Explore Our Spice Library</h2>
            <p className="showcase-subtitle">Discover the healing potential</p>
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
                  <Icon name="users" size="xl" />
                </span>
                <h3>Virtual Training</h3>
                <p>Become a Spicetress/Spicemeister, participate in grow-alongs, host pop-up spice crafting circles</p>
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
              <span>Read our health disclaimer</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
