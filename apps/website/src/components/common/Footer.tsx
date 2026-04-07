import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src="/images/brand/logo.png" alt="SpiceMight" className="footer-logo-image" />
            <span className="logo-text">SpiceMight</span>
          </div>
          <p className="footer-tagline">
            Spice-based Wellness Wisdom
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Product</h4>
            <ul>
              <li><span>Features</span></li>
              <li><span>Pricing</span></li>
              <li><span>Suppliers</span></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><span>About Us</span></li>
              <li><span>Contact</span></li>
              <li><a href="mailto:hello@spicemight.com">hello@spicemight.com</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Legal</h4>
            <ul>
              <li><span>Privacy Policy</span></li>
              <li><span>Terms of Service</span></li>
              <li><span>Health Disclaimer</span></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} SpiceMight. All rights reserved.</p>
          <div className="disclaimer">
            <p>
              <strong>Medical Disclaimer:</strong> The information provided by SpiceMight is for educational purposes only
              and is not intended as medical advice, diagnosis, or treatment. Always consult with a qualified healthcare
              provider before starting any new health regimen or if you have questions about a medical condition.
            </p>
            <p>
              We do not sell supplements, suggest dosages, or make claims to cure any disease.
              Individual results may vary. Read full disclaimer
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
