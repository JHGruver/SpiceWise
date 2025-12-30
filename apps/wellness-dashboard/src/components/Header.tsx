import { useScan } from '../context/ScanContext'
import './Header.css'

export default function Header() {
  const { hasScanned, resetScan } = useScan()

  return (
    <header className="app-header">
      <div className="header-content container">
        <a href="/" className="logo">
          <span className="logo-icon">✧</span>
          <span className="logo-text">Wellness Dashboard</span>
        </a>

        <nav className="header-nav">
          {hasScanned && (
            <button className="btn btn-secondary btn-sm" onClick={resetScan}>
              <span className="btn-icon">↻</span>
              New Scan
            </button>
          )}
        </nav>
      </div>
    </header>
  )
}
