import { useNavigate } from 'react-router-dom'
import { useUser } from '../../context/UserContext'
import './OnboardingStyles.css'

export default function WelcomePage() {
  const navigate = useNavigate()
  const { completeOnboardingStep } = useUser()

  const handleContinue = () => {
    completeOnboardingStep('hasSeenWelcome')
    navigate('/onboarding/disclaimer')
  }

  return (
    <div className="onboarding-page welcome-page">
      <div className="onboarding-content">
        <div className="welcome-logo">
          <img src="/images/brand/logo.png" alt="SpiceMight" className="welcome-logo-image" />
        </div>

        <h1 className="welcome-title">Welcome to SpiceMight</h1>
        <p className="welcome-tagline">explore the power and potential of spice at your fingertips...</p>

        <div className="welcome-features">
          <div className="welcome-feature">
            <span className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
            </span>
            <span>Browse 40+ healing spices</span>
          </div>
          <div className="welcome-feature">
            <span className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
              </svg>
            </span>
            <span>Track your digital cabinet</span>
          </div>
          <div className="welcome-feature">
            <span className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </span>
            <span>Get personalized recommendations</span>
          </div>
          <div className="welcome-feature">
            <span className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </span>
            <span>Join our wellness community</span>
          </div>
        </div>

        <button className="onboarding-btn onboarding-btn--primary" onClick={handleContinue}>
          Get Started
        </button>
      </div>
    </div>
  )
}
