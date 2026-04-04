import { Link } from 'react-router-dom'
import SEO from '../components/common/SEO'
import './PageStyles.css'

export default function TermsPage() {
  return (
    <div className="page terms-page">
      <SEO
        title="Terms of Service"
        description="SpiceMight Terms of Service. Read our terms and conditions for using the SpiceMight application and website."
        keywords="terms of service, terms and conditions, user agreement, legal terms"
        canonical="/terms"
      />
      <section className="page-hero">
        <div className="container">
          <h1>Terms of Service</h1>
          <p className="page-subtitle">
            Please read these terms carefully before using SpiceMight.
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
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using SpiceMight (the "Service"), you agree to be bound by these Terms
              of Service ("Terms"). If you do not agree to these Terms, please do not use the Service.
            </p>
            <p>
              We reserve the right to modify these Terms at any time. Continued use of the Service
              after any such changes constitutes your acceptance of the new Terms.
            </p>
          </div>

          <div className="disclaimer-section">
            <h2>2. Description of Service</h2>
            <p>
              SpiceMight is an educational platform that provides information about spices and
              their traditional uses. The Service includes:
            </p>
            <ul>
              <li>A searchable database of spices</li>
              <li>Information about traditional and historical uses</li>
              <li>Digital cabinet tracking features</li>
              <li>Personalized recommendations based on user preferences</li>
            </ul>
            <p>
              <strong>Important:</strong> SpiceMight does not provide medical advice, diagnosis, or
              treatment. See our <Link to="/disclaimer">Health Disclaimer</Link> for more information.
            </p>
          </div>

          <div className="disclaimer-section">
            <h2>3. User Accounts</h2>
            <p>To access certain features, you may need to create an account. You agree to:</p>
            <ul>
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized access</li>
              <li>Accept responsibility for all activities under your account</li>
            </ul>
            <p>
              We reserve the right to suspend or terminate accounts that violate these Terms or
              engage in fraudulent activity.
            </p>
          </div>

          <div className="disclaimer-section">
            <h2>4. Subscription and Payments</h2>
            <p>
              SpiceMight offers both free and paid subscription tiers. For paid subscriptions:
            </p>
            <ul>
              <li>Payments are processed securely through our payment provider</li>
              <li>Subscriptions automatically renew unless cancelled</li>
              <li>You may cancel at any time; cancellation takes effect at the end of the billing period</li>
              <li>Refunds are available within 14 days of initial purchase if you haven't substantially used the Service</li>
            </ul>
          </div>

          <div className="disclaimer-section">
            <h2>5. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use the Service for any unlawful purpose</li>
              <li>Share your account credentials with others</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt the Service</li>
              <li>Copy, modify, or distribute our content without permission</li>
              <li>Use automated tools to access the Service (scraping, bots, etc.)</li>
              <li>Use the information for commercial purposes without our consent</li>
            </ul>
          </div>

          <div className="disclaimer-section">
            <h2>6. Intellectual Property</h2>
            <p>
              All content on SpiceMight, including text, graphics, logos, images, and software, is
              the property of SpiceMight or its licensors and is protected by copyright, trademark,
              and other intellectual property laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, or create derivative works from our content
              without explicit written permission.
            </p>
          </div>

          <div className="disclaimer-section">
            <h2>7. User Content</h2>
            <p>
              You retain ownership of content you submit to the Service. By submitting content, you
              grant us a non-exclusive, worldwide, royalty-free license to use, display, and
              distribute that content in connection with the Service.
            </p>
            <p>
              You are responsible for ensuring you have the right to submit any content and that
              it does not violate any third-party rights.
            </p>
          </div>

          <div className="disclaimer-section">
            <h2>8. Disclaimer of Warranties</h2>
            <p>
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND,
              EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED,
              ERROR-FREE, OR COMPLETELY SECURE.
            </p>
            <p>
              WE MAKE NO WARRANTIES REGARDING THE ACCURACY, COMPLETENESS, OR USEFULNESS OF ANY
              INFORMATION PROVIDED THROUGH THE SERVICE.
            </p>
          </div>

          <div className="disclaimer-section">
            <h2>9. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, SPICEMIGHT SHALL NOT BE LIABLE FOR ANY
              INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM
              YOUR USE OF THE SERVICE.
            </p>
            <p>
              OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE TWELVE (12)
              MONTHS PRECEDING THE CLAIM.
            </p>
          </div>

          <div className="disclaimer-section">
            <h2>10. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless SpiceMight and its officers, directors,
              employees, and agents from any claims, damages, or expenses arising from your
              use of the Service or violation of these Terms.
            </p>
          </div>

          <div className="disclaimer-section">
            <h2>11. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the
              State of Georgia, United States, without regard to its conflict of law provisions.
            </p>
          </div>

          <div className="disclaimer-section">
            <h2>12. Dispute Resolution</h2>
            <p>
              Any disputes arising from these Terms or your use of the Service shall first be
              addressed through good-faith negotiations. If negotiations fail, disputes shall
              be resolved through binding arbitration in Atlanta, Georgia.
            </p>
          </div>

          <div className="disclaimer-section">
            <h2>13. Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable, the remaining provisions
              shall continue in full force and effect.
            </p>
          </div>

          <div className="disclaimer-section contact-section">
            <h2>14. Contact Information</h2>
            <p>
              For questions about these Terms, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> <a href="mailto:hello@spicemight.world">hello@spicemight.world</a>
            </p>
            <p>
              <strong>Address:</strong> SpiceMight, Atlanta, Georgia, USA
            </p>
          </div>

          <div className="disclaimer-section">
            <p>
              <Link to="/privacy">View Privacy Policy</Link> | <Link to="/disclaimer">View Health Disclaimer</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
