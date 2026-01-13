import { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/common/Icon'
import SEO from '../components/common/SEO'
import './HomePage.css'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  color: string
  opacity: number
  rotation: number
}

const testimonials = [
  {
    name: 'Camilla M.',
    title: 'Yoga Instructor & Mom',
    quote: 'I needed quick, healthy options for my family with allergies. SpiceCraft made it easy to find natural solutions we can trust.',
    rating: 5,
  },
  {
    name: 'Chet R.',
    title: 'First-time Cook',
    quote: 'I don\'t know how to cook, but this app gave me simple guidance on adding healing spices to my meals. My inflammation has improved!',
    rating: 5,
  },
  {
    name: 'Dolores L.',
    title: 'Grandmother & Gardener',
    quote: 'Finally found an app that connects me to the ancestral wellness wisdom I grew up with. Now I garden with my grandkids using what I learned here.',
    rating: 5,
  },
]

const popularSpices = [
  { name: 'Turmeric', image: '/images/spices/Turmeric_X.png', benefit: 'Anti-inflammatory' },
  { name: 'Ginger', image: '/images/spices/Ginger_X.png', benefit: 'Digestive Health' },
  { name: 'Black Cumin Seed', image: '/images/spices/BlackCuminSeed_X.png', benefit: 'Immune Support' },
  { name: 'Cinnamon', image: '/images/spices/Cinnamon_X.png', benefit: 'Blood Sugar Balance' },
]

const features = [
  {
    icon: 'book' as const,
    title: 'Spice Index',
    description: 'Explore 50+ healing spices with research-backed benefits, origins, and how to use them in your daily life.'
  },
  {
    icon: 'search' as const,
    title: 'Symptom Search',
    description: 'Search for what bothers you—bloating, fatigue, joint pain, stress—and discover natural spice remedies.'
  },
  {
    icon: 'map' as const,
    title: 'Remedy Road Maps',
    description: 'Follow guided paths that show you which spices work together for specific health goals.'
  },
]

// Spice colors for particles
const SPICE_COLORS = [
  '#C9A961', // Gold/Turmeric
  '#B87333', // Copper/Cinnamon
  '#8B4513', // Saddle Brown
  '#D4A574', // Tan
  '#CD853F', // Peru
  '#DEB887', // Burlywood
  '#A0522D', // Sienna
  '#DAA520', // Goldenrod
]

export default function HomePage() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // Custom cursor and particle state
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [isInHero, setIsInHero] = useState(false)
  const [particles, setParticles] = useState<Particle[]>([])
  const [bgOffset, setBgOffset] = useState({ x: 0, y: 0 })

  const heroRef = useRef<HTMLElement>(null)
  const lastMousePos = useRef({ x: 0, y: 0 })
  const particleId = useRef(0)
  const animationFrame = useRef<number>()

  // Handle mouse movement in hero section
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!heroRef.current) return

    const rect = heroRef.current.getBoundingClientRect()
    const isInside = (
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom
    )

    setIsInHero(isInside)

    if (isInside) {
      // Update cursor position relative to hero
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      setCursorPos({ x: e.clientX, y: e.clientY })

      // Calculate movement delta for particles
      const deltaX = e.clientX - lastMousePos.current.x
      const deltaY = e.clientY - lastMousePos.current.y
      const speed = Math.sqrt(deltaX * deltaX + deltaY * deltaY)

      // Create particles based on movement speed
      if (speed > 3) {
        const numParticles = Math.min(Math.floor(speed / 5), 4)
        const newParticles: Particle[] = []

        for (let i = 0; i < numParticles; i++) {
          newParticles.push({
            id: particleId.current++,
            x: e.clientX + (Math.random() - 0.5) * 20,
            y: e.clientY + (Math.random() - 0.5) * 20,
            size: Math.random() * 6 + 3,
            color: SPICE_COLORS[Math.floor(Math.random() * SPICE_COLORS.length)],
            opacity: 1,
            rotation: Math.random() * 360,
          })
        }

        setParticles(prev => [...prev, ...newParticles].slice(-50)) // Limit to 50 particles
      }

      // Calculate parallax background offset (inverted movement)
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const offsetX = ((x - centerX) / centerX) * -15 // Max 15px offset
      const offsetY = ((y - centerY) / centerY) * -10 // Max 10px offset

      setBgOffset({ x: offsetX, y: offsetY })

      lastMousePos.current = { x: e.clientX, y: e.clientY }
    }
  }, [])

  // Animate particles (fade out)
  useEffect(() => {
    const animate = () => {
      setParticles(prev =>
        prev
          .map(p => ({
            ...p,
            opacity: p.opacity - 0.02,
            y: p.y + 1, // Slight falling effect
            rotation: p.rotation + 2,
          }))
          .filter(p => p.opacity > 0)
      )
      animationFrame.current = requestAnimationFrame(animate)
    }

    animationFrame.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current)
      }
    }
  }, [])

  // Add/remove mouse event listener
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    // TODO: Connect to Supabase or email service
    // For now, simulate submission
    await new Promise(resolve => setTimeout(resolve, 500))
    setIsSubmitted(true)
    setIsLoading(false)
    console.log('Email submitted:', email)
  }

  return (
    <div className="home-page">
      <SEO
        title="Natural Healing Through Spices"
        description="Discover the healing power of herbs and spices with SpiceCraft. Your personal guide to natural wellness through everyday kitchen ingredients. Launching next week!"
        keywords="herbs, spices, health benefits, natural remedies, cooking, wellness, turmeric, ginger, cinnamon, natural health"
        canonical="/"
      />
      {/* Custom Spoon Cursor */}
      {isInHero && (
        <div
          className="spoon-cursor"
          style={{
            left: cursorPos.x,
            top: cursorPos.y,
          }}
        >
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="10" cy="8" rx="6" ry="8" fill="#C9A961" stroke="#8B7355" strokeWidth="1.5"/>
            <path d="M10 16 L12 28 Q10 30 8 28 L10 16" fill="#8B7355" stroke="#6B5344" strokeWidth="1"/>
            <ellipse cx="10" cy="8" rx="3.5" ry="5" fill="#DEB887" opacity="0.6"/>
          </svg>
        </div>
      )}

      {/* Herb Particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="herb-particle"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: particle.opacity,
            transform: `rotate(${particle.rotation}deg)`,
          }}
        />
      ))}

      {/* Hero Section */}
      <section className={`hero ${isInHero ? 'hero--custom-cursor' : ''}`} ref={heroRef}>
        <div
          className="hero-background"
          style={{
            transform: `translate(${bgOffset.x}px, ${bgOffset.y}px)`,
          }}
        >
          <img
            src="/images/brand/Gemini_Generated_Image_jz446njz446njz44.png"
            alt="Aromatic spices and herbs arranged beautifully"
            className="hero-image"
            fetchPriority="high"
            decoding="async"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content">
          <div className="launch-badge">
            <Icon name="star-filled" size="sm" />
            <span>Launching Next Week</span>
          </div>
          <h1>SpiceCraft</h1>
          <p className="hero-tagline">Spice-based Wellness Wisdom at Your Fingertips</p>

          {/* Email Capture Form */}
          <div className="email-capture">
            {isSubmitted ? (
              <div className="email-success">
                <span className="success-icon">
                  <Icon name="check" size="lg" />
                </span>
                <p>You're on the list! We'll email you the moment the app launches.</p>
              </div>
            ) : (
              <form onSubmit={handleEmailSubmit} className="email-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="email-input"
                  required
                />
                <button type="submit" className="btn btn--primary btn--lg" disabled={isLoading}>
                  {isLoading ? 'Joining...' : 'Get Early Access'}
                </button>
              </form>
            )}
            <p className="waitlist-note">Join 2,000+ people waiting for launch. No spam, ever.</p>
          </div>
        </div>
      </section>

      {/* What You'll Get Section */}
      <section className="section section--alt value-section">
        <div className="container">
          <h2 className="section-title">Why Spices? Why Now?</h2>
          <p className="section-subtitle">
            Turn your spice rack into your first line of natural wellness support.
          </p>
          <div className="features-grid">
            {features.map((feature, idx) => (
              <div key={idx} className="feature-card">
                <span className="feature-icon">
                  <Icon name={feature.icon} size="xl" />
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Questions Section */}
      <section className="section questions-section">
        <div className="container">
          <h2 className="section-title">Find Answers to Everyday Health Questions</h2>
          <div className="questions-grid">
            <div className="question-card">
              <span className="question-icon">
                <Icon name="moon" size="xl" />
              </span>
              <h3>"I can't sleep at night"</h3>
              <p>Discover calming spices like chamomile, lavender, and nutmeg that promote restful sleep.</p>
            </div>
            <div className="question-card">
              <span className="question-icon">
                <Icon name="flame" size="xl" />
              </span>
              <h3>"My joints hurt all the time"</h3>
              <p>Learn about anti-inflammatory powerhouses like turmeric, ginger, and boswellia.</p>
            </div>
            <div className="question-card">
              <span className="question-icon">
                <Icon name="heart-pulse" size="xl" />
              </span>
              <h3>"I'm stressed and anxious"</h3>
              <p>Find adaptogenic herbs like ashwagandha, holy basil, and lemon balm for calm.</p>
            </div>
            <div className="question-card">
              <span className="question-icon">
                <Icon name="utensils" size="xl" />
              </span>
              <h3>"My digestion is off"</h3>
              <p>Explore digestive aids like fennel, peppermint, ginger, and cardamom.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Spice Preview */}
      <section className="section section--alt herbs-preview">
        <div className="container">
          <h2 className="section-title">Explore 50+ Healing Spices</h2>
          <p className="section-subtitle">
            Each spice profile includes benefits, how to use it, what it pairs with, and the research behind it.
          </p>
          <div className="herbs-preview-grid">
            {popularSpices.map(spice => (
              <div key={spice.name} className="herb-preview-card">
                <img
                  src={spice.image}
                  alt={spice.name}
                  className="herb-preview-image"
                  loading="lazy"
                  decoding="async"
                />
                <h3>{spice.name}</h3>
                <span className="herb-preview-benefit">{spice.benefit}</span>
              </div>
            ))}
          </div>
          <Link to="/features" className="preview-link">
            See All Spices →
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="section how-it-works">
        <div className="container">
          <h2 className="section-title">Simple to Start, Easy to Use</h2>
          <div className="steps-grid">
            <div className="step-card">
              <span className="step-number">1</span>
              <h3>Tell Us About You</h3>
              <p>Share your health goals and concerns. We'll personalize your experience.</p>
            </div>
            <div className="step-card">
              <span className="step-number">2</span>
              <h3>Search or Browse</h3>
              <p>Look up symptoms, explore spices, or follow curated remedy paths.</p>
            </div>
            <div className="step-card">
              <span className="step-number">3</span>
              <h3>Start Feeling Better</h3>
              <p>Use what's already in your kitchen to support your natural wellness journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section--alt testimonials">
        <div className="container">
          <h2 className="section-title">Early Users Love SpiceCraft</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="testimonial-card">
                <div className="testimonial-stars">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Icon key={i} name="star-filled" size="sm" />
                  ))}
                </div>
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <p className="testimonial-author">— {testimonial.name}</p>
                <p className="testimonial-title">{testimonial.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section trust-section">
        <div className="container">
          <h2 className="section-title">Information You Can Trust</h2>
          <div className="trust-grid">
            <div className="trust-item">
              <Icon name="check" size="lg" />
              <div>
                <h4>Research-Backed</h4>
                <p>Every benefit is sourced from scientific studies and traditional medicine systems.</p>
              </div>
            </div>
            <div className="trust-item">
              <Icon name="check" size="lg" />
              <div>
                <h4>No Miracle Claims</h4>
                <p>We don't promise cures. We provide information to help you make informed choices.</p>
              </div>
            </div>
            <div className="trust-item">
              <Icon name="check" size="lg" />
              <div>
                <h4>No Products to Sell</h4>
                <p>We're not pushing supplements. Use spices you already have or can easily find.</p>
              </div>
            </div>
            <div className="trust-item">
              <Icon name="check" size="lg" />
              <div>
                <h4>Culturally Rooted</h4>
                <p>Honoring wisdom from India, China, Africa, the Middle East, and beyond.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section cta-section">
        <div className="container cta-content">
          <div className="cta-badge">
            <Icon name="star-filled" size="sm" />
            <span>Free to Join</span>
          </div>
          <h2>Be First in Line</h2>
          <p className="cta-lead">
            SpiceCraft launches next week. Join the waitlist now and be the first to explore the healing power of your kitchen.
          </p>

          {/* CTA Email Capture */}
          <div className="cta-email-capture">
            {isSubmitted ? (
              <div className="email-success">
                <span className="success-icon">
                  <Icon name="check" size="lg" />
                </span>
                <p>You're on the list! Check your inbox for a confirmation.</p>
              </div>
            ) : (
              <form onSubmit={handleEmailSubmit} className="email-form email-form--cta">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="email-input"
                  required
                />
                <button type="submit" className="btn btn--primary btn--lg" disabled={isLoading}>
                  {isLoading ? 'Joining...' : 'Join the Waitlist'}
                </button>
              </form>
            )}
          </div>

          <div className="cta-features">
            <span><Icon name="check" size="sm" /> Free to use</span>
            <span><Icon name="check" size="sm" /> No spam</span>
            <span><Icon name="check" size="sm" /> Unsubscribe anytime</span>
          </div>
          <div className="cta-contact">
            <p>Questions? <a href="mailto:hello@spicecraft.com">hello@spicecraft.com</a></p>
          </div>
        </div>
      </section>
    </div>
  )
}
