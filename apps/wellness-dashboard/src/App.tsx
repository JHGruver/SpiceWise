import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ScanProvider } from './context/ScanContext'
import Dashboard from './pages/Dashboard'
import './styles/App.css'

export default function App() {
  return (
    <ScanProvider>
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ScanProvider>
  )
}
