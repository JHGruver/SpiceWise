import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../context/UserContext'
import './OnboardingStyles.css'

export default function DisclaimerPage() {
  const navigate = useNavigate()
  const { completeOnboardingStep } = useUser()
  const [hasRead, setHasRead] = useState(false)

  const handleAccept = () => {
    completeOnboardingStep('hasAcceptedDisclaimer')
    navigate('/onboarding/instructions')
  }

  return (
    <div className="onboarding-page disclaimer-page">
      <div className="onboarding-content">
        <div className="disclaimer-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
            <line x1="12" y1="9" x2="12" y2="13"></line>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
        </div>

        <h1 className="disclaimer-title">Health Disclaimer</h1>
        <p className="disclaimer-subtitle">Please read carefully before continuing</p>

        <div className="disclaimer-content">
          <div className="disclaimer-box">
            <h3>Educational Purposes Only</h3>
            <p>
              The information provided by SpiceCraft is for educational purposes only and is
              not intended as medical advice, diagnosis, or treatment.
            </p>
          </div>

          <div className="disclaimer-box">
            <h3>Consult Healthcare Providers</h3>
            <p>
              Always consult with a qualified healthcare provider before starting any new
              health regimen or if you have questions about a medical condition.
            </p>
          </div>

          <div className="disclaimer-box">
            <h3>No Medical Claims</h3>
            <p>
              We do not sell supplements, suggest dosages, or make claims to cure any disease.
              Individual results may vary.
            </p>
          </div>
        </div>

        <label className="disclaimer-checkbox">
          <input
            type="checkbox"
            checked={hasRead}
            onChange={(e) => setHasRead(e.target.checked)}
          />
          <span className="checkbox-mark"></span>
          <span className="checkbox-label">
            I have read and understand this health disclaimer
          </span>
        </label>

        <div className="onboarding-actions">
          <button
            className="onboarding-btn onboarding-btn--secondary"
            onClick={() => navigate('/onboarding/welcome')}
          >
            Back
          </button>
          <button
            className="onboarding-btn onboarding-btn--primary"
            onClick={handleAccept}
            disabled={!hasRead}
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  )
}
