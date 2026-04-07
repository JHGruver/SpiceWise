import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/common/Icon'
import SEO from '../components/common/SEO'
import { submitWaitlist } from '../utils/formSubmit'
import './PageStyles.css'
import './PricingPage.css'

const pricingTiers = [
  {
    name: 'Freemium',
    price: 'Free',
    priceNote: 'forever',
    description: 'Explore the basics',
    features: [
      'Access 22 spice profiles featuring notable compounds and growing zones',
      'Peruse research-backed benefits',
      'Save your favorites',
    ],
    cta: 'Get Started Free',
    featured: false,
    icon: 'leaf' as const,
    tierClass: 'basic',
  },
  {
    name: 'The Essentials',
    price: '$29',
    priceNote: 'one-time purchase',
    description: 'Lifetime access to the full database',
    features: [
      'Full spice database access',
      'Keyword search feature',
      'Access Remedy Road Maps',
      'Lifetime updates',
    ],
    cta: 'Get Lifetime Access',
    featured: true,
    icon: 'book' as const,
    tierClass: 'featured',
  },
  {
    name: 'Premium',
    price: '$7',
    priceNote: '/month subscription',
    description: 'Training + Community',
    features: [
      'Spicetress & Spicemeister course',
      'Grow-along invitations',
      'Community access',
      'Leadership opportunities',
    ],
    cta: 'Coming Soon',
    featured: false,
    icon: 'sparkles' as const,
    tierClass: 'premium',
  }
]

const faqs = [
  {
    question: 'When does the app launch?',
    answer: 'We\'re launching in summer 2026! Join the waitlist to be the first to know.'
  },
  {
    question: 'Is SpiceMight free?',
    answer: 'Yes! The app and membership are completely free. We\'re building a community-driven movement for spice-based wellness.'
  },
  {
    question: 'What is a Spicetress or Spicemeister?',
    answer: 'These are ranking members in our community who have trained with us to learn core remedy techniques, share spice recipes, grow their own spices, and potentially host private spice events.'
  },
  {
    question: 'What are grow-alongs?',
    answer: 'Grow-alongs are regional and seasonal community events where members learn to grow their own spices together, sharing tips and experiences.'
  },
  {
    question: 'Is my data safe?',
    answer: 'Your privacy is our priority. We never sell your data and use encryption to protect your information.'
  },
  {
    question: 'Is this medical advice?',
    answer: 'No. SpiceMight provides educational information only. Always consult a healthcare professional for medical advice.'
  }
]

export default function PricingPage() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setIsLoading(true)
    const success = await submitWaitlist({ email, source: 'PricingPage' })
    if (success) {
      setIsSubmitted(true)
    }
    setIsLoading(false)
  }

  return (
    <div className="page pricing-page">
      <SEO
        title="Pricing"
        description="Simple, transparent pricing for SpiceMight. Start free, upgrade when ready. 7-day free trial on all paid plans."
        keywords="SpiceMight pricing, wellness app subscription, spice app plans, spice guide pricing"
        canonical="/pricing"
      />

      {/* Hero Section */}
      <section className="pricing-hero">
        <div className="container">
          <span className="pricing-hero-badge">
            <Icon name="star-filled" size="sm" />
            LAUNCHING THIS SUMMER!
          </span>
          <h1>Choose Your Path</h1>
          <p className="pricing-hero-subtitle">
            Join the spice wellness movement. Start as a member, grow into an advocate, lead as a host.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section pricing-cards-section">
        <div className="container">
          <div className="pricing-grid">
            {pricingTiers.map((tier, idx) => (
                <div key={idx} className={`pricing-card pricing-card--${tier.tierClass}`}>

                  <div className="pricing-card-header">
                    <span className="pricing-icon">
                      <Icon name={tier.icon} size="lg" />
                    </span>
                    <h3 className="pricing-name">{tier.name}</h3>
                    <div className="pricing-price">
                      <span className="price-amount">{tier.price}</span>
                      <span className="price-note">{tier.priceNote}</span>
                    </div>
                    <p className="pricing-description">{tier.description}</p>
                  </div>

                  <ul className="pricing-features">
                    {tier.features.map((feature, i) => (
                      <li key={i}>
                        <span className="feature-check">
                          <Icon name="check" size="sm" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    className="pricing-cta"
                    onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {tier.cta}
                  </button>
                </div>
              ))}
          </div>

          {/* Trust Indicators */}
          <div className="pricing-trust">
            <div className="trust-item">
              <Icon name="check-circle" size="md" />
              <span>100% Free to start</span>
            </div>
            <div className="trust-item">
              <Icon name="check-circle" size="md" />
              <span>Community driven</span>
            </div>
            <div className="trust-item">
              <Icon name="check-circle" size="md" />
              <span>Learn at your pace</span>
            </div>
            <div className="trust-item">
              <Icon name="check-circle" size="md" />
              <span>Grow together</span>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section className="section section--alt" id="waitlist-form">
        <div className="container">
          <div className="waitlist-cta">
            <h2>Join the Waitlist</h2>
            <p>Be the first to access SpiceMight when we launch this summer.</p>

            {isSubmitted ? (
              <div className="waitlist-success">
                <span className="success-icon">
                  <Icon name="check" size="lg" />
                </span>
                <div>
                  <p className="success-title">You're on the list!</p>
                  <p className="success-subtitle">We'll email you the moment we launch.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleEmailSubmit} className="waitlist-form">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="waitlist-input"
                  required
                />
                <button type="submit" className="btn btn--primary btn--lg" disabled={isLoading}>
                  {isLoading ? 'Joining...' : 'Get Early Access'}
                </button>
              </form>
            )}
            <p className="waitlist-note">
              <Icon name="check" size="sm" /> Join hundreds of people on our waitlist
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section section--alt">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`faq-item ${openFaq === idx ? 'faq-item--open' : ''}`}
              >
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  aria-expanded={openFaq === idx}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">
                    <Icon name={openFaq === idx ? 'minus' : 'chevron-right'} size="sm" />
                  </span>
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section pricing-final-cta">
        <div className="container">
          <h2>Ready to Start Your Wellness Journey?</h2>
          <p>Join hundreds of people discovering the healing power of spices.</p>
          <div className="final-cta-actions">
            <button
              className="btn btn--primary btn--lg"
              onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Join the Waitlist
            </button>
            <Link to="/features" className="btn btn--outline btn--lg">
              Explore Features
            </Link>
          </div>
          <p className="final-cta-note">
            Questions? <Link to="/contact">Contact us</Link> or read our <Link to="/disclaimer">health disclaimer</Link>.
          </p>
        </div>
      </section>
    </div>
  )
}
