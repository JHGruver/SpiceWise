import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/common/Icon'
import SEO from '../components/common/SEO'
import { submitWaitlist } from '../utils/formSubmit'
import './PageStyles.css'
import './SuppliersPage.css'

const supplierCategories = [
  {
    icon: 'globe' as const,
    title: 'Online Retailers',
    description: 'Curated list of trusted online spice vendors with quality ratings and reviews.',
    count: 'Coming Soon'
  },
  {
    icon: 'map-pin' as const,
    title: 'Local Shops',
    description: 'Find specialty spice shops and health stores in your area.',
    count: 'Coming Soon'
  },
  {
    icon: 'leaf' as const,
    title: 'Farm Direct',
    description: 'Connect directly with spice farmers for the freshest, most authentic products.',
    count: 'Coming Soon'
  }
]

const ratingFeatures = [
  {
    icon: 'star-filled' as const,
    title: 'Quality Ratings',
    description: 'Community-driven ratings based on product quality, freshness, and authenticity.'
  },
  {
    icon: 'check-circle' as const,
    title: 'Verified Reviews',
    description: 'Real reviews from verified SpiceMight members who have purchased from these suppliers.'
  },
  {
    icon: 'trending-up' as const,
    title: 'Rankings',
    description: 'See top-rated suppliers by category, updated weekly, monthly, and yearly.'
  }
]

const awardTiers = [
  {
    title: 'Weekly Top Picks',
    description: 'Highlighted suppliers based on recent positive reviews and ratings.',
    icon: 'star' as const
  },
  {
    title: 'Monthly Champions',
    description: 'Suppliers with consistently excellent ratings throughout the month.',
    icon: 'star-filled' as const
  },
  {
    title: 'Yearly Excellence',
    description: 'Our annual awards recognizing the best suppliers across all categories.',
    icon: 'heart' as const
  }
]

const previewSuppliers = [
  {
    name: 'Diaspora Co.',
    type: 'Online Retailer',
    specialty: 'Single-origin spices',
    rating: 5
  },
  {
    name: 'Burlap & Barrel',
    type: 'Online Retailer',
    specialty: 'Partner-sourced spices',
    rating: 5
  },
  {
    name: 'Penzeys Spices',
    type: 'Online & Retail',
    specialty: 'Wide selection',
    rating: 4
  }
]

export default function SuppliersPage() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setIsLoading(true)
    const success = await submitWaitlist({ email, source: 'SuppliersPage' })
    if (success) {
      setIsSubmitted(true)
    }
    setIsLoading(false)
  }

  return (
    <div className="page suppliers-page">
      <SEO
        title="Arbiter of Suppliers"
        description="Find trusted spice suppliers with community ratings and reviews. Discover top-rated online retailers, local shops, and farm-direct sources for quality spices."
        keywords="spice suppliers, buy spices online, quality spices, spice ratings, trusted vendors"
        canonical="/suppliers"
      />

      {/* Hero Section */}
      <section className="page-hero suppliers-hero">
        <div className="container">
          <span className="suppliers-badge">
            <Icon name="star-filled" size="sm" />
            Coming Soon
          </span>
          <h1>Arbiter of Suppliers</h1>
          <p className="page-subtitle">
            Your trusted guide to finding quality spices. Community-rated suppliers,
            verified reviews, and awards for excellence.
          </p>
        </div>
      </section>

      {/* Supplier Categories */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Find Your Source</h2>
          <p className="section-subtitle">
            Discover trusted suppliers across different categories.
          </p>
          <div className="supplier-categories-grid">
            {supplierCategories.map((category, idx) => (
              <div key={idx} className="supplier-category-card">
                <div className="supplier-category-icon">
                  <Icon name={category.icon} size="xl" />
                </div>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <span className="supplier-count">{category.count}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rating System */}
      <section className="section section--alt">
        <div className="container">
          <h2 className="section-title">How We Rate</h2>
          <p className="section-subtitle">
            Our rating system is powered by the SpiceMight community.
          </p>
          <div className="rating-features-grid">
            {ratingFeatures.map((feature, idx) => (
              <div key={idx} className="rating-feature-card">
                <span className="rating-feature-icon">
                  <Icon name={feature.icon} size="lg" />
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Supplier Awards</h2>
          <p className="section-subtitle">
            Recognizing excellence in the spice industry.
          </p>
          <div className="awards-grid">
            {awardTiers.map((award, idx) => (
              <div key={idx} className="award-card">
                <div className="award-icon">
                  <Icon name={award.icon} size="xl" />
                </div>
                <h3>{award.title}</h3>
                <p>{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preview Suppliers */}
      <section className="section section--alt">
        <div className="container">
          <h2 className="section-title">Featured Suppliers Preview</h2>
          <p className="section-subtitle">
            A sneak peek at some suppliers we're excited to feature.
          </p>
          <div className="preview-suppliers-grid">
            {previewSuppliers.map((supplier, idx) => (
              <div key={idx} className="preview-supplier-card">
                <div className="supplier-header">
                  <h3>{supplier.name}</h3>
                  <div className="supplier-rating">
                    {Array.from({ length: supplier.rating }).map((_, i) => (
                      <Icon key={i} name="star-filled" size="sm" />
                    ))}
                  </div>
                </div>
                <p className="supplier-type">{supplier.type}</p>
                <p className="supplier-specialty">{supplier.specialty}</p>
              </div>
            ))}
          </div>
          <p className="preview-note">
            Full supplier directory launching with the app. These are examples only.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="how-it-works-grid">
            <div className="how-step">
              <span className="step-number">1</span>
              <h3>Browse Suppliers</h3>
              <p>Search by category, location, or specialty to find suppliers that match your needs.</p>
            </div>
            <div className="how-step">
              <span className="step-number">2</span>
              <h3>Read Reviews</h3>
              <p>See what other SpiceMight members say about their experiences with each supplier.</p>
            </div>
            <div className="how-step">
              <span className="step-number">3</span>
              <h3>Shop Confidently</h3>
              <p>Make informed purchases knowing you're buying from community-vetted sources.</p>
            </div>
            <div className="how-step">
              <span className="step-number">4</span>
              <h3>Share Your Experience</h3>
              <p>Leave reviews to help other members find great suppliers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section suppliers-cta-section">
        <div className="container">
          <div className="suppliers-cta">
            <h2>Be Notified at Launch</h2>
            <p>
              Our supplier directory launches with the app. Join the waitlist to
              get early access and exclusive supplier deals.
            </p>

            {isSubmitted ? (
              <div className="suppliers-success">
                <span className="success-icon">
                  <Icon name="check" size="lg" />
                </span>
                <div>
                  <p className="success-title">You're on the list!</p>
                  <p className="success-subtitle">We'll notify you when the supplier directory goes live.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleEmailSubmit} className="suppliers-form">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="suppliers-input"
                  required
                />
                <button type="submit" className="btn btn--primary btn--lg" disabled={isLoading}>
                  {isLoading ? 'Joining...' : 'Get Notified'}
                </button>
              </form>
            )}

            <div className="suppliers-links">
              <Link to="/features">Explore Features</Link>
              <span>|</span>
              <Link to="/community">Join Community</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
