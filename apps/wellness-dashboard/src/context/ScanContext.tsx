import { createContext, useContext, useState, ReactNode } from 'react'
import { ScanResult, generateScanData } from '../data/bioData'

interface ScanContextType {
  scanData: ScanResult | null
  isScanning: boolean
  scanProgress: number
  hasScanned: boolean
  startScan: () => void
  resetScan: () => void
}

const ScanContext = createContext<ScanContextType | undefined>(undefined)

export function ScanProvider({ children }: { children: ReactNode }) {
  const [scanData, setScanData] = useState<ScanResult | null>(null)
  const [isScanning, setIsScanning] = useState(false)
  const [scanProgress, setScanProgress] = useState(0)
  const [hasScanned, setHasScanned] = useState(false)

  const startScan = () => {
    setIsScanning(true)
    setScanProgress(0)
    setHasScanned(false)

    // Simulate scanning progress
    const progressInterval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        // Variable speed for more realistic feel
        const increment = Math.random() * 3 + 1
        return Math.min(prev + increment, 100)
      })
    }, 100)

    // Complete scan after ~8 seconds
    setTimeout(() => {
      clearInterval(progressInterval)
      setScanProgress(100)

      setTimeout(() => {
        const data = generateScanData()
        setScanData(data)
        setIsScanning(false)
        setHasScanned(true)
      }, 500)
    }, 8000)
  }

  const resetScan = () => {
    setScanData(null)
    setIsScanning(false)
    setScanProgress(0)
    setHasScanned(false)
  }

  return (
    <ScanContext.Provider value={{
      scanData,
      isScanning,
      scanProgress,
      hasScanned,
      startScan,
      resetScan
    }}>
      {children}
    </ScanContext.Provider>
  )
}

export function useScan() {
  const context = useContext(ScanContext)
  if (context === undefined) {
    throw new Error('useScan must be used within a ScanProvider')
  }
  return context
}
