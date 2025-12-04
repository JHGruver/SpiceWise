import { useState } from 'react'
import Icon, { IconName } from '../components/common/Icon'
import './PageStyles.css'
import './CommunityPage.css'

type TabType = 'games' | 'education' | 'connection'

const tabs: { id: TabType; label: string; icon: JSX.Element }[] = [
  {
    id: 'games',
    label: 'Games',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <line x1="6" y1="12" x2="6" y2="12.01" />
        <line x1="10" y1="12" x2="10" y2="12.01" />
        <line x1="14" y1="10" x2="14" y2="10.01" />
        <line x1="18" y1="12" x2="18" y2="12.01" />
        <line x1="14" y1="14" x2="14" y2="14.01" />
      </svg>
    ),
  },
  {
    id: 'education',
    label: 'Learn',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    id: 'connection',
    label: 'Connect',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
]

const games: { id: string; title: string; description: string; iconName: IconName; status: string }[] = [
  {
    id: 'trivia',
    title: 'Spice Trivia',
    description: 'Test your knowledge about healing spices',
    iconName: 'target',
    status: 'coming-soon',
  },
  {
    id: 'match',
    title: 'Spice Match',
    description: 'Match spices with their health benefits',
    iconName: 'cards',
    status: 'coming-soon',
  },
  {
    id: 'guess',
    title: 'Guess the Spice',
    description: 'Identify spices from clues',
    iconName: 'search',
    status: 'coming-soon',
  },
]

const educationTopics: { id: string; title: string; description: string; lessons: number; iconName: IconName }[] = [
  {
    id: 'basics',
    title: 'Spice Basics',
    description: 'Learn the fundamentals of cooking with spices',
    lessons: 5,
    iconName: 'book',
  },
  {
    id: 'pairing',
    title: 'Spice Pairing',
    description: 'Discover which spices work well together',
    lessons: 8,
    iconName: 'handshake',
  },
  {
    id: 'health',
    title: 'Health & Wellness',
    description: 'Understanding the healing properties of spices',
    lessons: 6,
    iconName: 'heart',
  },
  {
    id: 'history',
    title: 'Spice History',
    description: 'Journey through the history of the spice trade',
    lessons: 4,
    iconName: 'history',
  },
]

const connectionFeatures: { id: string; title: string; description: string; iconName: IconName; status: string }[] = [
  {
    id: 'tastings',
    title: 'Virtual Tastings',
    description: 'Join live sessions with spice experts',
    iconName: 'tea',
    status: 'coming-soon',
  },
  {
    id: 'recipes',
    title: 'Recipe Sharing',
    description: 'Share and discover spice-forward recipes',
    iconName: 'book',
    status: 'coming-soon',
  },
  {
    id: 'forums',
    title: 'Discussion Forums',
    description: 'Connect with fellow spice enthusiasts',
    iconName: 'chat',
    status: 'coming-soon',
  },
  {
    id: 'hosts',
    title: 'Become a Host',
    description: 'Lead tastings and earn rewards',
    iconName: 'sparkle',
    status: 'coming-soon',
  },
]

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState<TabType>('games')

  return (
    <div className="page community-page">
      <div className="container">
        <header className="page-header">
          <h1 className="page-title">Community Hub</h1>
          <p className="page-subtitle">Learn, play, and connect with spice enthusiasts</p>
        </header>

        <div className="community-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`community-tab ${activeTab === tab.id ? 'community-tab--active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="tab-icon">{tab.icon}</span>
              <span className="tab-label">{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="community-content">
          {activeTab === 'games' && (
            <div className="games-section">
              <div className="section-header">
                <h2>Games & Trivia</h2>
                <p>Have fun while learning about spices</p>
              </div>
              <div className="games-grid">
                {games.map((game) => (
                  <div key={game.id} className={`game-card ${game.status === 'coming-soon' ? 'game-card--disabled' : ''}`}>
                    <Icon name={game.iconName} size="lg" className="game-icon" />
                    <h3>{game.title}</h3>
                    <p>{game.description}</p>
                    {game.status === 'coming-soon' && (
                      <span className="coming-soon-badge">Coming Soon</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'education' && (
            <div className="education-section">
              <div className="section-header">
                <h2>Learning Paths</h2>
                <p>Expand your spice knowledge</p>
              </div>
              <div className="education-grid">
                {educationTopics.map((topic) => (
                  <div key={topic.id} className="education-card">
                    <div className="education-card-header">
                      <Icon name={topic.iconName} size="lg" className="education-icon" />
                      <span className="lesson-count">{topic.lessons} lessons</span>
                    </div>
                    <h3>{topic.title}</h3>
                    <p>{topic.description}</p>
                    <button className="start-learning-btn" disabled>
                      Coming Soon
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'connection' && (
            <div className="connection-section">
              <div className="section-header">
                <h2>Connect & Share</h2>
                <p>Join our growing community</p>
              </div>
              <div className="connection-grid">
                {connectionFeatures.map((feature) => (
                  <div key={feature.id} className={`connection-card ${feature.status === 'coming-soon' ? 'connection-card--disabled' : ''}`}>
                    <Icon name={feature.iconName} size="lg" className="connection-icon" />
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                    {feature.status === 'coming-soon' && (
                      <span className="coming-soon-badge">Coming Soon</span>
                    )}
                  </div>
                ))}
              </div>

              <div className="host-cta">
                <div className="host-cta-content">
                  <h3>Interested in Hosting?</h3>
                  <p>Lead virtual tastings, share your expertise, and earn rewards as a community host.</p>
                  <button className="host-cta-btn" disabled>
                    Join Waitlist
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
