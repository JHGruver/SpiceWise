import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../context/UserContext'
import './OnboardingStyles.css'

const instructions = [
  {
    title: 'Explore Spices',
    description: 'Browse our comprehensive library of healing spices. Learn about their origins, compounds, and health benefits.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.35-4.35"></path>
      </svg>
    ),
  },
  {
    title: 'Build Your Cabinet',
    description: 'Track what spices you have at home. Organize by location and never forget what\'s in your pantry.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="3" y1="9" x2="21" y2="9"></line>
        <line x1="9" y1="21" x2="9" y2="9"></line>
      </svg>
    ),
  },
  {
    title: 'Get Personalized',
    description: 'Set your health goals and conditions to receive tailored spice recommendations just for you.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    ),
  },
  {
    title: 'Join the Community',
    description: 'Connect with other spice enthusiasts, play trivia games, and discover new ways to use spices.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
]

export default function InstructionsPage() {
  const navigate = useNavigate()
  const { completeOnboardingStep } = useUser()
  const [currentStep, setCurrentStep] = useState(0)

  const handleNext = () => {
    if (currentStep < instructions.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      completeOnboardingStep('hasCompletedInstructions')
      navigate('/')
    }
  }

  const handleSkip = () => {
    completeOnboardingStep('hasCompletedInstructions')
    navigate('/')
  }

  const instruction = instructions[currentStep]

  return (
    <div className="onboarding-page instructions-page">
      <div className="onboarding-content">
        <button className="skip-btn" onClick={handleSkip}>
          Skip
        </button>

        <div className="instructions-carousel">
          <div className="instruction-item">
            <div className="instruction-icon">
              {instruction.icon}
            </div>
            <h2 className="instruction-title">{instruction.title}</h2>
            <p className="instruction-description">{instruction.description}</p>
          </div>
        </div>

        <div className="instructions-dots">
          {instructions.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentStep ? 'dot--active' : ''}`}
              onClick={() => setCurrentStep(index)}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>

        <div className="onboarding-actions">
          {currentStep > 0 && (
            <button
              className="onboarding-btn onboarding-btn--secondary"
              onClick={() => setCurrentStep(currentStep - 1)}
            >
              Back
            </button>
          )}
          <button
            className="onboarding-btn onboarding-btn--primary"
            onClick={handleNext}
          >
            {currentStep === instructions.length - 1 ? 'Get Started' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  )
}
