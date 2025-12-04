import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { UserProvider, useUser } from './context/UserContext'
import Layout from './components/common/Layout'
import HomePage from './pages/HomePage'
import ExplorePage from './pages/ExplorePage'
import HerbDetailPage from './pages/HerbDetailPage'
import CabinetPage from './pages/CabinetPage'
import CommunityPage from './pages/CommunityPage'
import ProfilePage from './pages/ProfilePage'
import { WelcomePage, DisclaimerPage, InstructionsPage } from './pages/onboarding'

// Wrapper component for onboarding routes (no nav/header)
function OnboardingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

// Protected route that checks onboarding status
function AppRoutes() {
  const { hasCompletedOnboarding } = useUser()

  // If onboarding not complete, show onboarding flow
  if (!hasCompletedOnboarding) {
    return (
      <Routes>
        <Route path="/onboarding/welcome" element={<OnboardingLayout><WelcomePage /></OnboardingLayout>} />
        <Route path="/onboarding/disclaimer" element={<OnboardingLayout><DisclaimerPage /></OnboardingLayout>} />
        <Route path="/onboarding/instructions" element={<OnboardingLayout><InstructionsPage /></OnboardingLayout>} />
        <Route path="*" element={<Navigate to="/onboarding/welcome" replace />} />
      </Routes>
    )
  }

  // Main app routes after onboarding is complete
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/explore/:id" element={<HerbDetailPage />} />
        <Route path="/cabinet" element={<CabinetPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        {/* Redirect old routes */}
        <Route path="/encyclopedia" element={<Navigate to="/explore" replace />} />
        <Route path="/encyclopedia/:id" element={<Navigate to="/explore/:id" replace />} />
        <Route path="/onboarding/*" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}

function App() {
  return (
    <UserProvider>
      <Router>
        <AppRoutes />
      </Router>
    </UserProvider>
  )
}

export default App
