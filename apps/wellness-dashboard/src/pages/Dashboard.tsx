import { useScan } from '../context/ScanContext'
import EmptyState from '../components/EmptyState'
import ScanningState from '../components/ScanningState'
import DashboardResults from '../components/DashboardResults'
import Header from '../components/Header'
import './Dashboard.css'

export default function Dashboard() {
  const { scanData, isScanning, hasScanned } = useScan()

  return (
    <div className="dashboard">
      <Header />
      <main className="main-content">
        <div className="container">
          {!hasScanned && !isScanning && <EmptyState />}
          {isScanning && <ScanningState />}
          {hasScanned && scanData && <DashboardResults data={scanData} />}
        </div>
      </main>
    </div>
  )
}
