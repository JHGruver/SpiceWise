import { Link } from 'react-router-dom'
import SEO from '../components/common/SEO'
import './PageStyles.css'

export default function PrivacyPage() {
  return (
    <div className="page privacy-page">
      <SEO
        title="Privacy Policy"
        description="SpiceCraft Privacy Policy. Learn how we collect, use, and protect your personal information."
        keywords="privacy policy, data protection, personal information, GDPR, CCPA"
        canonical="/privacy"
      />
      <section className="page-hero">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p className="page-subtitle">
            Your privacy matters to us. Here's how we handle your information.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container disclaimer-content">
          <div className="disclaimer-section">
            <p className="last-updated">
              <em>Last updated: November 2025</em>
            </p>
          </div>

          <div className="disclaimer-section">
            <h2>Introduction</h2>
            <p>
              SpiceCraft ("we," "our," or "us") is committed to protecting your privacy. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your information when you
              use our website and mobile application (collectively, the "Service").
            </p>
            <p>
              Please read this Privacy Policy carefully. By using the Service, you agree to the
              collection and use of information in accordance with this policy.
            </p>
          </div>

          <div className="disclaimer-section">
            <h2>Information We Collect</h2>
            <h3>Information You Provide</h3>
            <ul>
              <li><strong>Account Information:</strong> Email address, name, and password when you create an account</li>
              <li><strong>Health Profile:</strong> Health concerns, wellness goals, and dietary preferences you choose to share</li>
              <li><strong>Digital Cabinet Data:</strong> Information about spices and ingredients you add to your virtual cabinet</li>
              <li><strong>Communications:</strong> Messages you send us through our contact forms or email</li>
            </ul>

            <h3>Information Collected Automatically</h3>
            <ul>
              <li><strong>Usage Data:</strong> Pages visited, features used, and time spent on the Service</li>
              <li><strong>Device Information:</strong> Device type, operating system, and browser type</li>
              <li><strong>Analytics Data:</strong> We use Plausible Analytics, a privacy-focused analytics tool that does not use cookies or collect personal data</li>
            </ul>
          </div>

          <div className="disclaimer-section">
            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve the Service</li>
              <li>Personalize your experience and recommendations</li>
              <li>Send you updates about the Service (with your consent)</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Analyze usage patterns to improve our features</li>
              <li>Protect against fraudulent or unauthorized activity</li>
            </ul>
          </div>

          <div className="disclaimer-section">
            <h2>Data Sharing and Disclosure</h2>
            <p>We do not sell your personal information. We may share your information in the following circumstances:</p>
            <ul>
              <li><strong>Service Providers:</strong> With third-party vendors who help us operate the Service (e.g., hosting, email delivery)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
            </ul>
          </div>

          <div className="disclaimer-section">
            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction. However,
              no method of transmission over the Internet is 100% secure.
            </p>
          </div>

          <div className="disclaimer-section">
            <h2>Your Rights and Choices</h2>
            <p>Depending on your location, you may have the following rights:</p>
            <ul>
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Request correction of inaccurate data</li>
              <li><strong>Deletion:</strong> Request deletion of your data</li>
              <li><strong>Portability:</strong> Request transfer of your data to another service</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
            </ul>
            <p>
              To exercise these rights, please contact us at{' '}
              <a href="mailto:spiciety21@gmail.com">spiciety21@gmail.com</a>.
            </p>
          </div>

          <div className="disclaimer-section">
            <h2>Cookies and Tracking</h2>
            <p>
              We use Plausible Analytics, which is a privacy-focused analytics tool that does not use
              cookies, does not track users across websites, and is fully compliant with GDPR, CCPA,
              and PECR. We do not use any tracking cookies or third-party advertising cookies.
            </p>
          </div>

          <div className="disclaimer-section">
            <h2>Children's Privacy</h2>
            <p>
              The Service is not intended for children under 13 years of age. We do not knowingly
              collect personal information from children under 13. If you are a parent or guardian
              and believe your child has provided us with personal information, please contact us.
            </p>
          </div>

          <div className="disclaimer-section">
            <h2>International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your own.
              We ensure appropriate safeguards are in place to protect your information in accordance
              with applicable data protection laws.
            </p>
          </div>

          <div className="disclaimer-section">
            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes
              by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </div>

          <div className="disclaimer-section contact-section">
            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> <a href="mailto:spiciety21@gmail.com">spiciety21@gmail.com</a>
            </p>
            <p>
              <strong>Address:</strong> SpiceCraft, Atlanta, Georgia, USA
            </p>
          </div>

          <div className="disclaimer-section">
            <p>
              <Link to="/terms">View Terms of Service</Link> | <Link to="/disclaimer">View Health Disclaimer</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
