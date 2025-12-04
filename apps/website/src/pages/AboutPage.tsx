import { Link } from 'react-router-dom'
import Icon from '../components/common/Icon'
import SEO from '../components/common/SEO'
import './PageStyles.css'
import './AboutPage.css'

const values = [
  {
    icon: 'globe' as const,
    title: 'Cultural Attribution',
    description: 'We honor the ancestral origins of each spice and give credit to the cultures that have preserved this wisdom for generations.'
  },
  {
    icon: 'book' as const,
    title: 'Evidence-Based',
    description: 'Every health claim is backed by research, with clear indicators of evidence levels so you can make informed decisions.'
  },
  {
    icon: 'ban' as const,
    title: 'No Miracle Claims',
    description: 'We don\'t sell supplements, suggest dosages, or promise cures. Just honest, educational information.'
  },
  {
    icon: 'heart' as const,
    title: 'Accessible Wellness',
    description: 'Natural healing shouldn\'t be complicated. We make ancestral wisdom accessible to everyone.'
  }
]

const timeline = [
  {
    year: '2023',
    title: 'The Seed is Planted',
    description: 'Frustrated by the lack of accessible, culturally-rooted wellness tools, our founder began researching spice-based healing traditions from around the world.'
  },
  {
    year: '2024',
    title: 'Research & Development',
    description: 'We partnered with herbalists, healthcare professionals, and cultural consultants to build a comprehensive, evidence-based spice database.'
  },
  {
    year: '2025',
    title: 'SpiceCraft Launches',
    description: 'After extensive development and testing, SpiceCraft is ready to help people reconnect with natural wellness wisdom.'
  }
]

export default function AboutPage() {
  return (
    <div className="page about-page">
      <SEO
        title="About Us"
        description="Learn about SpiceCraft's mission to bridge ancient wellness wisdom with modern science. Discover our evidence-based approach to herbal healing."
        keywords="about SpiceCraft, herbal wellness, ancestral wisdom, natural healing, evidence-based herbs"
        canonical="/about"
      />
      <section className="page-hero">
        <div className="container">
          <h1>About SpiceCraft</h1>
          <p className="page-subtitle">
            Bridging ancient wisdom with modern science to help you live healthier.
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
                SpiceCraft was created to make the healing power of herbs and spices
                accessible to everyone.
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
          <h2 className="section-title">Our Values</h2>
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

      {/* Story Timeline */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Story</h2>
          <div className="timeline">
            {timeline.map((item, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-marker">
                  <span className="timeline-year">{item.year}</span>
                </div>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="section section--alt">
        <div className="container">
          <div className="about-approach">
            <div className="approach-image">
              <img
                src="/images/spices/Ginger_X.png"
                alt="Ginger root"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="approach-content">
              <h2>Our Approach</h2>
              <p>
                We combine traditional herbal knowledge with modern scientific research
                to provide you with accurate, evidence-based information. Every herb and
                spice in our encyclopedia is thoroughly researched, with clear indicators
                of the evidence level behind each health claim.
              </p>
              <ul className="approach-list">
                <li>Research-backed health benefits</li>
                <li>Traditional uses from multiple cultures</li>
                <li>Drug interaction warnings</li>
                <li>Culinary applications and recipes</li>
                <li>Growing and cultivation information</li>
              </ul>
            </div>
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
