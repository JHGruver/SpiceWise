import SEO from '../components/common/SEO'
import './PageStyles.css'

export default function DisclaimerPage() {
  return (
    <div className="page disclaimer-page">
      <SEO
        title="Health Disclaimer"
        description="Important health disclaimer for SpiceMight. Our information is for educational purposes only and not intended as medical advice."
        keywords="health disclaimer, medical disclaimer, spice information disclaimer"
        canonical="/disclaimer"
      />
      <section className="page-hero">
        <div className="container">
          <h1>Health Disclaimer</h1>
          <p className="page-subtitle">
            Important information about how to use SpiceMight responsibly.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container disclaimer-content">
          <div className="disclaimer-section">
            <h2>Educational Purpose Only</h2>
            <p>
              The information provided by SpiceMight, including but not limited to text, graphics,
              images, and other material contained on the application and website, is for <strong>informational
              and educational purposes only</strong>. The content is not intended to be a substitute for
              professional medical advice, diagnosis, or treatment.
            </p>
          </div>

          <div className="disclaimer-section">
            <h2>Not Medical Advice</h2>
            <p>
              SpiceMight does not provide medical advice. The information about spices and their
              potential health benefits is compiled from traditional uses and published research, but should
              not be interpreted as medical recommendations.
            </p>
            <p>
              <strong>Always seek the advice of your physician or other qualified health provider</strong> with
              any questions you may have regarding a medical condition. Never disregard professional medical
              advice or delay in seeking it because of something you have read on SpiceMight.
            </p>
          </div>

          <div className="disclaimer-section">
            <h2>What We Do NOT Do</h2>
            <ul>
              <li>We do not sell supplements or spice products</li>
              <li>We do not suggest specific dosages</li>
              <li>We do not claim to cure, treat, or prevent any disease</li>
              <li>We do not provide personalized medical recommendations</li>
              <li>We do not replace consultation with healthcare professionals</li>
            </ul>
          </div>

          <div className="disclaimer-section">
            <h2>What We DO Provide</h2>
            <ul>
              <li>Educational information about spices</li>
              <li>Historical and traditional use information</li>
              <li>Links to published research when available</li>
              <li>General wellness information</li>
              <li>Culinary usage suggestions</li>
            </ul>
          </div>

          <div className="disclaimer-section">
            <h2>Individual Variation</h2>
            <p>
              Spices may affect individuals differently. What works for one person may not work
              for another, and some substances may cause adverse reactions in certain individuals. Factors
              such as age, health status, medications, and individual sensitivities can all affect how your
              body responds to any substance.
            </p>
          </div>

          <div className="disclaimer-section">
            <h2>Drug Interactions</h2>
            <p>
              Many spices can interact with prescription medications, over-the-counter drugs,
              and other supplements. <strong>If you are taking any medications, please consult with your
              healthcare provider or pharmacist before adding new spices to your routine.</strong>
            </p>
          </div>

          <div className="disclaimer-section">
            <h2>Special Populations</h2>
            <p>
              If you are pregnant, nursing, planning to become pregnant, have a chronic health condition,
              or are under 18 years of age, please consult with a healthcare professional before using
              any spices for health purposes.
            </p>
          </div>

          <div className="disclaimer-section">
            <h2>Emergency Situations</h2>
            <p>
              <strong>If you think you may have a medical emergency, call your doctor or emergency services
              immediately.</strong> SpiceMight does not recommend or endorse any specific tests,
              physicians, products, procedures, opinions, or other information that may be mentioned on
              the application or website.
            </p>
          </div>

          <div className="disclaimer-section">
            <h2>Accuracy of Information</h2>
            <p>
              While we strive to provide accurate and up-to-date information, SpiceMight makes no
              warranties or representations about the accuracy, completeness, or suitability of the
              information contained on the application or website. The field of spice-based wellness and
              nutrition is constantly evolving, and information may become outdated.
            </p>
          </div>

          <div className="disclaimer-section">
            <h2>Use at Your Own Risk</h2>
            <p>
              Reliance on any information provided by SpiceMight is solely at your own risk. We
              are not liable for any damages or negative consequences from any treatment, action, or
              application of information from our services.
            </p>
          </div>

          <div className="disclaimer-section">
            <h2>External Links</h2>
            <p>
              SpiceMight may contain links to external websites. We are not responsible for the
              content, accuracy, or privacy practices of these external sites.
            </p>
          </div>

          <div className="disclaimer-section contact-section">
            <h2>Questions?</h2>
            <p>
              If you have any questions about this disclaimer or our services, please contact us at{' '}
              <a href="mailto:hello@spicemight.world">hello@spicemight.world</a>
            </p>
          </div>

          <div className="disclaimer-section">
            <p className="last-updated">
              <em>Last updated: November 2025</em>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
