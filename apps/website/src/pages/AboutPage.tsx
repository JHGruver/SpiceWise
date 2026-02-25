import { Link } from 'react-router-dom'
import Icon from '../components/common/Icon'
import SEO from '../components/common/SEO'
import './PageStyles.css'
import './AboutPage.css'

const values = [
  {
    icon: 'globe' as const,
    title: 'Wildlife & Gratitude',
    description: 'We treasure the presence of wildlife and embody a deep gratitude for the vast contributions made by both the animal and plant kingdoms that support research.'
  },
  {
    icon: 'book' as const,
    title: 'Access & History',
    description: 'We appreciate the ease of access to a multitude of spices in these modern times, realizing the extensive history surrounding their availability.'
  },
  {
    icon: 'leaf' as const,
    title: 'Natural World',
    description: 'We pay homage to the natural world with her elemental forces, respecting her rhythms and acknowledging her many components from fungi to mineral, soil, root, leaf, stem, fruit, and seed.'
  },
  {
    icon: 'heart' as const,
    title: 'Connection to Nature',
    description: 'We value deepening connections to Nature, cherishing its beauty as well as revering our host planet as the source of every material resource we all rely on.'
  }
]

export default function AboutPage() {
  return (
    <div className="page about-page">
      <SEO
        title="About Us"
        description="Learn about SpiceCraft's mission to bridge ancient wellness wisdom with modern science. Discover our evidence-based approach to spice-based healing."
        keywords="about SpiceCraft, spice wellness, ancestral wisdom, natural healing, evidence-based spices"
        canonical="/about"
      />
      <section className="page-hero">
        <div className="container">
          <h1>About SpiceCraft</h1>
          <p className="page-subtitle">
            Bridging ancient knowledge with modern tools at the forefront of a spice revival.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section">
        <div className="container">
          <div className="about-mission">
            <div className="mission-content">
              <h2>Our Mission</h2>
              <p className="mission-lead">
                SpiceCraft was created to make the healing power of spices known to everyone.
              </p>
              <p>
                We believe that your kitchen cabinet holds the potential for natural wellness,
                and we're here to help you unlock it. For thousands of years, cultures around
                the world have used spices not just for flavor, but for their remarkable
                healing properties.
              </p>
              <p>
                Our mission is to preserve and share this ancestral wisdom while making it
                relevant for modern life—backed by scientific research and presented in
                a way that's easy to understand and apply.
              </p>
            </div>
            <div className="mission-image">
              <img
                src="/images/spices/Turmeric_X.png"
                alt="Turmeric - a healing spice"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section section--alt">
        <div className="container">
          <h2 className="section-title">At Our Core</h2>
          <p className="section-subtitle">
            These principles guide everything we do at SpiceCraft.
          </p>
          <div className="values-grid">
            {values.map((value, idx) => (
              <div key={idx} className="value-card">
                <span className="value-icon">
                  <Icon name={value.icon} size="xl" />
                </span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="about-cta">
            <h2>Join the Spice Revival</h2>
            <p>
              Be part of a community reconnecting with natural wellness wisdom.
              Sign up for early access and be the first to experience SpiceCraft.
            </p>
            <Link to="/pricing" className="btn btn--primary btn--lg">
              Join the Waitlist
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
