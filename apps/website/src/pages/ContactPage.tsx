import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/common/Icon'
import SEO from '../components/common/SEO'
import './PageStyles.css'
import './ContactPage.css'

const contactInfo = [
  {
    icon: 'mail' as const,
    title: 'Email',
    value: 'hello@spicecraft.com',
    link: 'mailto:hello@spicecraft.com'
  },
  {
    icon: 'map-pin' as const,
    title: 'Location',
    value: 'Atlanta, Georgia',
    link: null
  },
  {
    icon: 'clock' as const,
    title: 'Response Time',
    value: 'Within 24-48 hours',
    link: null
  }
]

const faqItems = [
  {
    question: 'When will SpiceCraft launch?',
    answer: 'We\'re targeting Autumn-Winter 2025 for our official launch. Join the waitlist to be notified!'
  },
  {
    question: 'Is there a free version?',
    answer: 'Yes! Our Free tier gives you access to 15 spices forever. You can upgrade anytime to unlock all features.'
  },
  {
    question: 'Do you provide medical advice?',
    answer: 'No. SpiceCraft provides educational information only. Always consult a healthcare provider for medical advice.'
  }
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // TODO: Connect to backend
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitted(true)
    setIsLoading(false)
    console.log('Contact form submitted:', formData)
  }

  return (
    <div className="page contact-page">
      <SEO
        title="Contact Us"
        description="Get in touch with the SpiceCraft team. We're here to answer your questions about herbs, spices, and natural wellness."
        keywords="contact SpiceCraft, herbal wellness support, spice app help"
        canonical="/contact"
      />
      <section className="page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p className="page-subtitle">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>
                Have questions about SpiceCraft? Want to share feedback or suggest a feature?
                We're here to help.
              </p>

              <div className="contact-cards">
                {contactInfo.map((item, idx) => (
                  <div key={idx} className="contact-card">
                    <span className="contact-icon">
                      <Icon name={item.icon} size="lg" />
                    </span>
                    <div className="contact-card-content">
                      <h3>{item.title}</h3>
                      {item.link ? (
                        <a href={item.link}>{item.value}</a>
                      ) : (
                        <p>{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="contact-social">
                <h3>Follow Us</h3>
                <p>Stay connected for updates, tips, and spice wisdom.</p>
                <div className="social-links">
                  <a href="#" className="social-link" aria-label="Instagram">
                    <Icon name="instagram" size="lg" />
                  </a>
                  <a href="#" className="social-link" aria-label="Twitter">
                    <Icon name="twitter" size="lg" />
                  </a>
                  <a href="#" className="social-link" aria-label="Facebook">
                    <Icon name="facebook" size="lg" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              {isSubmitted ? (
                <div className="form-success">
                  <span className="success-icon">
                    <Icon name="check-circle" size="2xl" />
                  </span>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. We'll get back to you within 24-48 hours.</p>
                  <button
                    className="btn btn--outline"
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({ name: '', email: '', subject: 'general', message: '' })
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    >
                      <option value="general">General Inquiry</option>
                      <option value="support">Support</option>
                      <option value="feedback">Feedback</option>
                      <option value="partnership">Partnership</option>
                      <option value="press">Press / Media</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn--primary btn--lg submit-btn"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section section--alt">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqItems.map((item, idx) => (
              <div key={idx} className="faq-item">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
          <div className="faq-cta">
            <p>
              Have more questions? Check out our <Link to="/pricing">Pricing page</Link> or
              read our <Link to="/disclaimer">Health Disclaimer</Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
