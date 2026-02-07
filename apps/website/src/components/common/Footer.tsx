import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src="/images/brand/logo.png" alt="SpiceCraft" className="footer-logo-image" />
            <span className="logo-text">SpiceCraft</span>
          </Link>
          <p className="footer-tagline">
            Spice-based Wellness Wisdom
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Product</h4>
            <ul>
              <li><Link to="/features">Features</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/suppliers">Suppliers</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Community</h4>
            <ul>
              <li><Link to="/community">Community Hub</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><a href="mailto:hello@spicecraft.world">hello@spicecraft.world</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Legal</h4>
            <ul>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
              <li><Link to="/disclaimer">Health Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} SpiceCraft. All rights reserved.</p>
          <div className="disclaimer">
            <p>
              <strong>Medical Disclaimer:</strong> The information provided by SpiceCraft is for educational purposes only
              and is not intended as medical advice, diagnosis, or treatment. Always consult with a qualified healthcare
              provider before starting any new health regimen or if you have questions about a medical condition.
            </p>
            <p>
              We do not sell supplements, suggest dosages, or make claims to cure any disease.
              Individual results may vary. <Link to="/disclaimer">Read full disclaimer</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
