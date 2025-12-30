import { useScan } from '../context/ScanContext'
import { useState, useEffect } from 'react'
import './ScanningState.css'

const scanPhases = [
  { range: [0, 15], text: 'Calibrating bioresonance frequencies...', icon: '◎' },
  { range: [15, 30], text: 'Scanning mineral concentrations...', icon: '⬡' },
  { range: [30, 45], text: 'Analyzing amino acid profiles...', icon: '⬢' },
  { range: [45, 60], text: 'Mapping tissue integrity...', icon: '◈' },
  { range: [60, 75], text: 'Detecting pathogenic signatures...', icon: '⬣' },
  { range: [75, 90], text: 'Balancing chakra frequencies...', icon: '✧' },
  { range: [90, 100], text: 'Compiling wellness report...', icon: '❂' },
]

export default function ScanningState() {
  const { scanProgress } = useScan()
  const [currentPhase, setCurrentPhase] = useState(scanPhases[0])

  useEffect(() => {
    const phase = scanPhases.find(p =>
      scanProgress >= p.range[0] && scanProgress < p.range[1]
    ) || scanPhases[scanPhases.length - 1]
    setCurrentPhase(phase)
  }, [scanProgress])

  return (
    <div className="scanning-state">
      <div className="scanning-content">
        {/* Scanning Animation */}
        <div className="scan-visualization">
          <div className="scan-outer-ring">
            <div className="scan-wave wave-1"></div>
            <div className="scan-wave wave-2"></div>
            <div className="scan-wave wave-3"></div>
          </div>

          <div className="scan-inner-ring">
            <div className="chakra-dots">
              <span className="chakra-scan-dot" style={{ '--delay': '0s', '--color': 'var(--chakra-root)' } as React.CSSProperties}></span>
              <span className="chakra-scan-dot" style={{ '--delay': '0.2s', '--color': 'var(--chakra-sacral)' } as React.CSSProperties}></span>
              <span className="chakra-scan-dot" style={{ '--delay': '0.4s', '--color': 'var(--chakra-solar)' } as React.CSSProperties}></span>
              <span className="chakra-scan-dot" style={{ '--delay': '0.6s', '--color': 'var(--chakra-heart)' } as React.CSSProperties}></span>
              <span className="chakra-scan-dot" style={{ '--delay': '0.8s', '--color': 'var(--chakra-throat)' } as React.CSSProperties}></span>
              <span className="chakra-scan-dot" style={{ '--delay': '1.0s', '--color': 'var(--chakra-third-eye)' } as React.CSSProperties}></span>
              <span className="chakra-scan-dot" style={{ '--delay': '1.2s', '--color': 'var(--chakra-crown)' } as React.CSSProperties}></span>
            </div>
          </div>

          <div className="scan-center">
            <span className="scan-center-icon">{currentPhase.icon}</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="scan-progress-container">
          <div className="scan-progress-bar">
            <div
              className="scan-progress-fill"
              style={{ width: `${scanProgress}%` }}
            ></div>
          </div>
          <div className="scan-progress-info">
            <span className="scan-progress-text">{currentPhase.text}</span>
            <span className="scan-progress-percent">{Math.round(scanProgress)}%</span>
          </div>
        </div>

        {/* Data Stream Effect */}
        <div className="data-stream">
          {[...Array(20)].map((_, i) => (
            <span
              key={i}
              className="data-particle"
              style={{
                '--x': `${Math.random() * 100}%`,
                '--delay': `${Math.random() * 2}s`,
                '--duration': `${1 + Math.random() * 2}s`
              } as React.CSSProperties}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
