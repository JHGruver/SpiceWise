import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/common/Icon'
import SEO from '../components/common/SEO'
import './PageStyles.css'
import './CommunityPage.css'

const communityFeatures = [
  {
    icon: 'gamepad' as const,
    title: 'Games & Trivia',
    description: 'Test your spice knowledge with daily quizzes and fun challenges.',
    details: [
      'Daily spice trivia questions',
      'Earn points and climb the leaderboard',
      'Unlock badges and achievements',
      'Compete with fellow spice enthusiasts'
    ],
    status: 'Coming Soon'
  },
  {
    icon: 'book' as const,
    title: 'Education Hub',
    description: 'Learn about the fascinating world of spices through curated content.',
    details: [
      'Weekly "Spice of the Week" deep dives',
      'Beginner-friendly guides',
      'Traditional remedy recipes',
      'Expert articles and research summaries'
    ],
    status: 'Coming Soon'
  },
  {
    icon: 'users' as const,
    title: 'Connection',
    description: 'Connect with a community of people passionate about natural wellness.',
    details: [
      'Share your favorite spice remedies',
      'Follow other spice enthusiasts',
      'Join discussions and Q&A',
      'Get tips from experienced users'
    ],
    status: 'Coming Soon'
  }
]

const membershipBenefits = [
  {
    icon: 'star-filled' as const,
    title: 'Host Spice Parties',
    description: 'Become a certified host and lead tasting events in your community.'
  },
  {
    icon: 'heart' as const,
    title: 'Virtual Tastings',
    description: 'Join live virtual events to discover new spices with experts.'
  },
  {
    icon: 'trending-up' as const,
    title: 'Gamification Rewards',
    description: 'Earn points, badges, and unlock exclusive content as you learn.'
  }
]

const upcomingEvents = [
  {
    title: 'Introduction to Turmeric',
    date: 'Coming Soon',
    type: 'Virtual Tasting'
  },
  {
    title: 'Anti-Inflammatory Spice Challenge',
    date: 'Coming Soon',
    type: 'Weekly Quiz'
  },
  {
    title: 'Beginner\'s Guide to Adaptogens',
    date: 'Coming Soon',
    type: 'Education'
  }
]

export default function CommunityPage() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 500))
    setIsSubmitted(true)
    setIsLoading(false)
  }

  return (
    <div className="page community-page">
      <SEO
        title="Community"
        description="Join the SpiceCraft community. Play trivia games, learn from educational content, connect with fellow spice enthusiasts, and attend virtual tasting events."
        keywords="spice community, herbal wellness community, spice trivia, virtual tasting, wellness education"
        canonical="/community"
      />

      {/* Hero Section */}
      <section className="page-hero community-hero">
        <div className="container">
          <span className="community-badge">
            <Icon name="users" size="sm" />
            Coming Soon
          </span>
          <h1>Join the SpiceCraft Community</h1>
          <p className="page-subtitle">
            Learn, play, and connect with thousands of people passionate about natural wellness through spices.
          </p>
        </div>
      </section>

      {/* Main Features */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Community Features</h2>
          <p className="section-subtitle">
            More than just an app—SpiceCraft is a community of wellness seekers.
          </p>
          <div className="community-features-grid">
            {communityFeatures.map((feature, idx) => (
              <div key={idx} className="community-feature-card">
                <span className="community-status-badge">{feature.status}</span>
                <div className="community-feature-icon">
                  <Icon name={feature.icon} size="xl" />
                </div>
                <h3>{feature.title}</h3>
                <p className="community-feature-description">{feature.description}</p>
                <ul className="community-feature-list">
                  {feature.details.map((detail, i) => (
                    <li key={i}>
                      <Icon name="check" size="sm" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="section section--alt">
        <div className="container">
          <h2 className="section-title">Become a Member</h2>
          <p className="section-subtitle">
            Unlock exclusive community features with a SpiceCraft membership.
          </p>
          <div className="membership-grid">
            {membershipBenefits.map((benefit, idx) => (
              <div key={idx} className="membership-card">
                <span className="membership-icon">
                  <Icon name={benefit.icon} size="lg" />
                </span>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Host Program Teaser */}
      <section className="section">
        <div className="container">
          <div className="host-program">
            <div className="host-content">
              <span className="host-badge">
                <Icon name="star-filled" size="sm" />
                Host Program
              </span>
              <h2>Become a SpiceCraft Host</h2>
              <p>
                Love sharing your passion for spices? Become a certified SpiceCraft Host
                and lead tasting parties in your community. Earn rewards while helping
                others discover natural wellness.
              </p>
              <div className="host-requirements">
                <h4>Requirements:</h4>
                <ul>
                  <li><Icon name="check" size="sm" /> Complete host certification</li>
                  <li><Icon name="check" size="sm" /> Follow community guidelines</li>
                  <li><Icon name="check" size="sm" /> Host minimum 2 events per month</li>
                </ul>
              </div>
              <p className="host-cta-note">Host program launching with the app.</p>
            </div>
            <div className="host-visual">
              <div className="host-visual-icon">
                <Icon name="users" size="2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section section--alt">
        <div className="container">
          <h2 className="section-title">Upcoming Events</h2>
          <p className="section-subtitle">
            Be the first to join our community events when we launch.
          </p>
          <div className="events-grid">
            {upcomingEvents.map((event, idx) => (
              <div key={idx} className="event-card">
                <span className="event-type">{event.type}</span>
                <h3>{event.title}</h3>
                <p className="event-date">
                  <Icon name="clock" size="sm" />
                  {event.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section community-cta-section">
        <div className="container">
          <div className="community-cta">
            <h2>Be Part of the Community</h2>
            <p>
              Join our waitlist to be notified when community features launch.
              Early members get exclusive access and rewards.
            </p>

            {isSubmitted ? (
              <div className="community-success">
                <span className="success-icon">
                  <Icon name="check" size="lg" />
                </span>
                <div>
                  <p className="success-title">You're on the list!</p>
                  <p className="success-subtitle">We'll notify you when community features go live.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleEmailSubmit} className="community-form">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="community-input"
                  required
                />
                <button type="submit" className="btn btn--primary btn--lg" disabled={isLoading}>
                  {isLoading ? 'Joining...' : 'Join the Community'}
                </button>
              </form>
            )}

            <div className="community-links">
              <Link to="/features">Explore Features</Link>
              <span>|</span>
              <Link to="/suppliers">Find Suppliers</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
