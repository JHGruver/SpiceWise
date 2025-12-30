import { ScanResult, StatusLevel } from '../data/bioData'
import './DashboardResults.css'

interface Props {
  data: ScanResult
}

const statusColors: Record<StatusLevel, string> = {
  optimal: 'var(--status-optimal)',
  good: 'var(--status-good)',
  attention: 'var(--status-attention)',
  warning: 'var(--status-warning)',
  critical: 'var(--status-critical)',
}

export default function DashboardResults({ data }: Props) {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    }).format(date)
  }

  return (
    <div className="dashboard-results">
      {/* Header with Overview */}
      <header className="results-header fade-in">
        <div className="results-title-section">
          <h1 className="results-title">Your Wellness Profile</h1>
          <p className="results-timestamp">Scanned on {formatDate(data.timestamp)}</p>
        </div>
      </header>

      {/* Main Scores */}
      <section className="scores-section fade-in fade-in-delay-1">
        <div className="score-cards">
          <div className="score-card glass-card glow-accent">
            <div className="score-ring" style={{ '--progress': data.overallWellness, '--color': 'var(--accent-energy)' } as React.CSSProperties}>
              <svg viewBox="0 0 100 100">
                <circle className="score-ring-bg" cx="50" cy="50" r="45" />
                <circle className="score-ring-fill" cx="50" cy="50" r="45"
                  strokeDasharray={`${data.overallWellness * 2.83} 283`} />
              </svg>
              <div className="score-value">
                <span className="score-number">{data.overallWellness}</span>
                <span className="score-unit">%</span>
              </div>
            </div>
            <h3 className="score-label">Overall Wellness</h3>
            <p className="score-desc">Biochemistry markers in optimal range</p>
          </div>

          <div className="score-card glass-card glow-spirit">
            <div className="score-ring" style={{ '--progress': data.vitalityScore, '--color': 'var(--accent-spirit)' } as React.CSSProperties}>
              <svg viewBox="0 0 100 100">
                <circle className="score-ring-bg" cx="50" cy="50" r="45" />
                <circle className="score-ring-fill" cx="50" cy="50" r="45"
                  strokeDasharray={`${data.vitalityScore * 2.83} 283`} />
              </svg>
              <div className="score-value">
                <span className="score-number">{data.vitalityScore}</span>
                <span className="score-unit">%</span>
              </div>
            </div>
            <h3 className="score-label">Vitality Score</h3>
            <p className="score-desc">Body systems performance</p>
          </div>

          <div className="score-card glass-card glow-vitality">
            <div className="score-ring" style={{ '--progress': data.balanceScore, '--color': 'var(--accent-vitality)' } as React.CSSProperties}>
              <svg viewBox="0 0 100 100">
                <circle className="score-ring-bg" cx="50" cy="50" r="45" />
                <circle className="score-ring-fill" cx="50" cy="50" r="45"
                  strokeDasharray={`${data.balanceScore * 2.83} 283`} />
              </svg>
              <div className="score-value">
                <span className="score-number">{data.balanceScore}</span>
                <span className="score-unit">%</span>
              </div>
            </div>
            <h3 className="score-label">Energy Balance</h3>
            <p className="score-desc">Chakra alignment score</p>
          </div>
        </div>
      </section>

      {/* Chakra Section */}
      <section className="chakra-section fade-in fade-in-delay-2">
        <h2 className="section-title">
          <span className="section-icon">✧</span>
          Chakra Energy Map
        </h2>
        <div className="chakra-grid">
          {data.chakras.map((chakra, index) => (
            <div
              key={chakra.id}
              className="chakra-card glass-card"
              style={{ '--chakra-color': chakra.color } as React.CSSProperties}
            >
              <div className="chakra-visual">
                <div className="chakra-orb" style={{ background: chakra.color }}>
                  <span className="chakra-percentage">{Math.round(chakra.balance)}%</span>
                </div>
                <div className="chakra-bar-container">
                  <div
                    className="chakra-bar-fill"
                    style={{ height: `${chakra.balance}%`, background: chakra.color }}
                  ></div>
                </div>
              </div>
              <div className="chakra-info">
                <h4 className="chakra-name">{chakra.name}</h4>
                <p className="chakra-sanskrit">{chakra.sanskritName}</p>
                <span className={`status-indicator status-${chakra.status}`}>
                  {chakra.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Body Systems */}
      <section className="systems-section fade-in fade-in-delay-3">
        <h2 className="section-title">
          <span className="section-icon">⬡</span>
          Body Systems
        </h2>
        <div className="systems-grid">
          {data.systems.map(system => (
            <div key={system.id} className="system-card glass-card">
              <span className="system-icon">{system.icon}</span>
              <div className="system-info">
                <h4 className="system-name">{system.name}</h4>
                <div className="system-score-bar">
                  <div
                    className="system-score-fill"
                    style={{
                      width: `${system.overallScore}%`,
                      background: statusColors[system.status]
                    }}
                  ></div>
                </div>
                <div className="system-meta">
                  <span className="system-percent">{Math.round(system.overallScore)}%</span>
                  <span className={`status-indicator status-${system.status}`}>
                    {system.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Minerals */}
      <section className="markers-section fade-in fade-in-delay-4">
        <h2 className="section-title">
          <span className="section-icon">💎</span>
          Mineral Analysis
        </h2>
        <div className="markers-grid">
          {data.minerals.map(marker => (
            <div key={marker.id} className="marker-card glass-card">
              <div className="marker-header">
                <h4 className="marker-name">{marker.name}</h4>
                <span className={`status-indicator status-${marker.status}`}>
                  {marker.status}
                </span>
              </div>
              <div className="marker-value-row">
                <span className="marker-value">{marker.value}</span>
                <span className="marker-unit">{marker.unit}</span>
              </div>
              <div className="marker-range">
                <div className="range-bar">
                  <div className="range-optimal"
                    style={{
                      left: `${(marker.optimalRange.min / (marker.optimalRange.max * 1.5)) * 100}%`,
                      width: `${((marker.optimalRange.max - marker.optimalRange.min) / (marker.optimalRange.max * 1.5)) * 100}%`
                    }}
                  ></div>
                  <div className="range-marker"
                    style={{
                      left: `${Math.min((marker.value / (marker.optimalRange.max * 1.5)) * 100, 100)}%`,
                      background: statusColors[marker.status]
                    }}
                  ></div>
                </div>
                <div className="range-labels">
                  <span>{marker.optimalRange.min}</span>
                  <span>{marker.optimalRange.max}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Amino Acids */}
      <section className="markers-section fade-in fade-in-delay-5">
        <h2 className="section-title">
          <span className="section-icon">🧬</span>
          Amino Acid Profile
        </h2>
        <div className="markers-grid">
          {data.aminoAcids.map(marker => (
            <div key={marker.id} className="marker-card glass-card">
              <div className="marker-header">
                <h4 className="marker-name">{marker.name}</h4>
                <span className={`status-indicator status-${marker.status}`}>
                  {marker.status}
                </span>
              </div>
              <div className="marker-value-row">
                <span className="marker-value">{marker.value}</span>
                <span className="marker-unit">{marker.unit}</span>
              </div>
              <p className="marker-desc">{marker.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tissue Health */}
      <section className="markers-section fade-in">
        <h2 className="section-title">
          <span className="section-icon">🦴</span>
          Tissue & Structure
        </h2>
        <div className="markers-grid markers-grid-wide">
          {data.tissues.map(marker => (
            <div key={marker.id} className="marker-card glass-card">
              <div className="marker-header">
                <h4 className="marker-name">{marker.name}</h4>
                <span className={`status-indicator status-${marker.status}`}>
                  {marker.status}
                </span>
              </div>
              <div className="marker-gauge">
                <div className="gauge-fill" style={{
                  width: `${Math.min(Math.max(marker.value, 0), 100)}%`,
                  background: statusColors[marker.status]
                }}></div>
              </div>
              <div className="marker-value-row">
                <span className="marker-value">{marker.value}</span>
                <span className="marker-unit">{marker.unit}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Toxins & Parasites */}
      <section className="markers-section fade-in">
        <h2 className="section-title">
          <span className="section-icon">🔬</span>
          Toxins & Pathogens
        </h2>
        <div className="dual-grid">
          <div className="toxin-group">
            <h3 className="group-title">Toxin Load</h3>
            <div className="toxin-cards">
              {data.toxins.map(marker => (
                <div key={marker.id} className={`toxin-card glass-card toxin-${marker.status}`}>
                  <div className="toxin-header">
                    <h4>{marker.name}</h4>
                    <span className={`status-indicator status-${marker.status}`}>
                      {marker.status}
                    </span>
                  </div>
                  <div className="toxin-value">
                    <span className="value">{marker.value}</span>
                    <span className="max">/ {marker.optimalRange.max} {marker.unit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="toxin-group">
            <h3 className="group-title">Pathogen Detection</h3>
            <div className="toxin-cards">
              {data.parasites.map(marker => (
                <div key={marker.id} className={`toxin-card glass-card toxin-${marker.status}`}>
                  <div className="toxin-header">
                    <h4>{marker.name}</h4>
                    <span className={`status-indicator status-${marker.status}`}>
                      {marker.status}
                    </span>
                  </div>
                  <div className="toxin-value">
                    <span className="value">{marker.value}</span>
                    <span className="max">/ {marker.optimalRange.max} {marker.unit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <footer className="results-disclaimer fade-in">
        <p>
          <strong>Note:</strong> This is a simulated wellness scan for demonstration purposes only.
          Results are randomly generated and should not be used for medical decisions.
          Always consult healthcare professionals for actual health assessments.
        </p>
      </footer>
    </div>
  )
}
