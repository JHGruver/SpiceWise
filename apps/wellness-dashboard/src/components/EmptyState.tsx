import { useScan } from '../context/ScanContext'
import './EmptyState.css'

export default function EmptyState() {
  const { startScan } = useScan()

  return (
    <div className="empty-state">
      <div className="empty-state-content">
        {/* Sacred Geometry Background */}
        <div className="sacred-geometry">
          <div className="geometry-ring ring-1"></div>
          <div className="geometry-ring ring-2"></div>
          <div className="geometry-ring ring-3"></div>
          <div className="geometry-center">
            <span className="center-symbol">❂</span>
          </div>
        </div>

        <h1 className="empty-title">
          Begin Your
          <span className="title-highlight"> Wellness Journey</span>
        </h1>

        <p className="empty-description">
          Discover your body's hidden patterns through advanced bioresonance analysis.
          Our holistic scan examines thousands of data points across minerals, amino acids,
          tissues, chakras, and more.
        </p>

        <div className="scan-features">
          <div className="feature-item">
            <span className="feature-icon">🧬</span>
            <div className="feature-text">
              <h4>Biochemistry Analysis</h4>
              <p>Minerals, amino acids, tissue health</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-icon">✨</span>
            <div className="feature-text">
              <h4>Energy Mapping</h4>
              <p>Chakra balance & vitality scores</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🔬</span>
            <div className="feature-text">
              <h4>Toxin Detection</h4>
              <p>Heavy metals, parasites, pathogens</p>
            </div>
          </div>
        </div>

        <button className="btn btn-scan" onClick={startScan}>
          <span className="scan-icon">◉</span>
          Begin Bioresonance Scan
        </button>

        <p className="scan-note">
          Simulation mode - Results are generated for demonstration purposes
        </p>
      </div>
    </div>
  )
}
