import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/common/Icon'
import SEO from '../components/common/SEO'
import './PageStyles.css'
import './PricingPage.css'

const pricingTiers = [
  {
    name: 'Free',
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: 'Perfect for curious explorers',
    features: [
      'Browse 15 popular spices',
      'Basic health benefit info',
      'Simple search',
      'Save 3 favorites',
      'Community access',
    ],
    cta: 'Get Started Free',
    featured: false,
    icon: 'leaf' as const,
  },
  {
    name: 'Spice Seeker',
    monthlyPrice: 4.99,
    yearlyPrice: 49,
    description: 'For wellness enthusiasts',
    features: [
      'Full database (50+ spices)',
      'Create your health profile',
      'Personalized recommendations',
      'Advanced search & filters',
      'Unlimited favorites',
      'Evidence citations',
    ],
    cta: 'Start 7-Day Free Trial',
    featured: true,
    icon: 'search' as const,
  },
  {
    name: 'Spice Master',
    monthlyPrice: 9.99,
    yearlyPrice: 99,
    description: 'The complete experience',
    features: [
      'Everything in Spice Seeker',
      'Digital Cabinet tracking',
      'Remedy Road Maps',
      '"Use what you have" mode',
      'Priority support',
      'Early access to features',
    ],
    cta: 'Start 7-Day Free Trial',
    featured: false,
    icon: 'cabinet' as const,
  }
]

const faqs = [
  {
    question: 'When does the app launch?',
    answer: 'We\'re launching next week! Join the waitlist to be the first to know and get exclusive early-bird pricing.'
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes! All paid plans include a 7-day free trial. Try everything risk-free before you commit.'
  },
  {
    question: 'Can I switch plans anytime?',
    answer: 'Absolutely. Upgrade, downgrade, or cancel anytime. Changes take effect at your next billing cycle.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, Apple Pay, Google Pay, and PayPal through our secure payment processor.'
  },
  {
    question: 'Is my data safe?',
    answer: 'Your privacy is our priority. We never sell your data and use bank-level encryption to protect your information.'
  },
  {
    question: 'Is this medical advice?',
    answer: 'No. SpiceCraft provides educational information only. Always consult a healthcare professional for medical advice.'
  }
]

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(true)
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 500))
    setIsSubmitted(true)
    setIsLoading(false)
  }

  const formatPrice = (monthly: number, yearly: number) => {
    if (monthly === 0) return { price: 'Free', period: 'forever' }
    if (isYearly) {
      const monthlyEquiv = (yearly / 12).toFixed(2)
      return { price: `$${monthlyEquiv}`, period: '/month' }
    }
    return { price: `$${monthly.toFixed(2)}`, period: '/month' }
  }

  const getSavings = (monthly: number, yearly: number) => {
    if (monthly === 0) return null
    const annualIfMonthly = monthly * 12
    const savings = Math.round(((annualIfMonthly - yearly) / annualIfMonthly) * 100)
    return savings
  }

  return (
    <div className="page pricing-page">
      <SEO
        title="Pricing"
        description="Simple, transparent pricing for SpiceCraft. Start free, upgrade when ready. 7-day free trial on all paid plans."
        keywords="SpiceCraft pricing, wellness app subscription, herbal app plans, spice guide pricing"
        canonical="/pricing"
      />

      {/* Hero Section */}
      <section className="pricing-hero">
        <div className="container">
          <span className="pricing-hero-badge">
            <Icon name="star-filled" size="sm" />
            Launching Next Week
          </span>
          <h1>Choose Your Wellness Journey</h1>
          <p className="pricing-hero-subtitle">
            Start free, upgrade when you're ready. All paid plans include a 7-day free trial.
          </p>

          {/* Billing Toggle */}
          <div className="billing-toggle">
            <span className={!isYearly ? 'billing-active' : ''}>Monthly</span>
            <button
              className="toggle-switch"
              onClick={() => setIsYearly(!isYearly)}
              aria-label={`Switch to ${isYearly ? 'monthly' : 'yearly'} billing`}
            >
              <span className={`toggle-slider ${isYearly ? 'toggle-yearly' : ''}`} />
            </button>
            <span className={isYearly ? 'billing-active' : ''}>
              Yearly
              <span className="billing-save">Save up to 17%</span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section pricing-cards-section">
        <div className="container">
          <div className="pricing-grid">
            {pricingTiers.map((tier, idx) => {
              const { price, period } = formatPrice(tier.monthlyPrice, tier.yearlyPrice)
              const savings = getSavings(tier.monthlyPrice, tier.yearlyPrice)

              return (
                <div key={idx} className={`pricing-card ${tier.featured ? 'pricing-card--featured' : ''}`}>
                  {tier.featured && (
                    <span className="pricing-badge">Most Popular</span>
                  )}

                  <div className="pricing-card-header">
                    <span className="pricing-icon">
                      <Icon name={tier.icon} size="lg" />
                    </span>
                    <h3 className="pricing-name">{tier.name}</h3>
                    <p className="pricing-description">{tier.description}</p>
                  </div>

                  <div className="pricing-price-wrapper">
                    <div className="pricing-price">
                      <span className="price-amount">{price}</span>
                      <span className="price-period">{period}</span>
                    </div>
                    {isYearly && savings && (
                      <p className="pricing-billed">
                        Billed ${tier.yearlyPrice}/year
                        <span className="pricing-savings">Save {savings}%</span>
                      </p>
                    )}
                    {!isYearly && tier.monthlyPrice > 0 && (
                      <p className="pricing-billed">
                        Billed monthly
                      </p>
                    )}
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
                    className={`pricing-cta ${tier.featured ? 'pricing-cta--primary' : ''}`}
                    onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {tier.cta}
                  </button>
                </div>
              )
            })}
          </div>

          {/* Trust Indicators */}
          <div className="pricing-trust">
            <div className="trust-item">
              <Icon name="check-circle" size="md" />
              <span>7-day free trial</span>
            </div>
            <div className="trust-item">
              <Icon name="check-circle" size="md" />
              <span>Cancel anytime</span>
            </div>
            <div className="trust-item">
              <Icon name="check-circle" size="md" />
              <span>No hidden fees</span>
            </div>
            <div className="trust-item">
              <Icon name="check-circle" size="md" />
              <span>Secure payment</span>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section className="section section--alt" id="waitlist-form">
        <div className="container">
          <div className="waitlist-cta">
            <h2>Join the Waitlist</h2>
            <p>Be the first to access SpiceCraft when we launch next week.</p>

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
              <Icon name="check" size="sm" /> Join 2,000+ people on the waitlist
            </p>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Compare Plans</h2>
          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Free</th>
                  <th className="comparison-featured">Spice Seeker</th>
                  <th>Spice Master</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Spice Database</td>
                  <td>15 spices</td>
                  <td className="comparison-featured">50+ spices</td>
                  <td>50+ spices</td>
                </tr>
                <tr>
                  <td>Health Profile</td>
                  <td><Icon name="minus" size="sm" /></td>
                  <td className="comparison-featured"><Icon name="check" size="sm" /></td>
                  <td><Icon name="check" size="sm" /></td>
                </tr>
                <tr>
                  <td>Personalized Recommendations</td>
                  <td><Icon name="minus" size="sm" /></td>
                  <td className="comparison-featured"><Icon name="check" size="sm" /></td>
                  <td><Icon name="check" size="sm" /></td>
                </tr>
                <tr>
                  <td>Favorites</td>
                  <td>3</td>
                  <td className="comparison-featured">Unlimited</td>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td>Digital Cabinet</td>
                  <td><Icon name="minus" size="sm" /></td>
                  <td className="comparison-featured"><Icon name="minus" size="sm" /></td>
                  <td><Icon name="check" size="sm" /></td>
                </tr>
                <tr>
                  <td>Remedy Road Maps</td>
                  <td><Icon name="minus" size="sm" /></td>
                  <td className="comparison-featured"><Icon name="minus" size="sm" /></td>
                  <td><Icon name="check" size="sm" /></td>
                </tr>
                <tr>
                  <td>Priority Support</td>
                  <td><Icon name="minus" size="sm" /></td>
                  <td className="comparison-featured"><Icon name="minus" size="sm" /></td>
                  <td><Icon name="check" size="sm" /></td>
                </tr>
              </tbody>
            </table>
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
          <p>Join thousands of people discovering the healing power of spices.</p>
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
