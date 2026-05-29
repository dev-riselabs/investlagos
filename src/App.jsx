import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPageLayout from './layout/Landing_Page_Layout'
import HomePage from './pages/HomePage'
import SectorsPage from './pages/SectorsPage'
import IncentivesPage from './pages/IncentivesPage'
import AgendaPage from './pages/AgendaPage'
import SpeakersPage from './pages/SpeakersPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPageLayout />}>
          <Route index element={<HomePage />} />
          <Route path="sectors" element={<SectorsPage />} />
          <Route path="incentives" element={<IncentivesPage />} />
          <Route path="speakers" element={<SpeakersPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App