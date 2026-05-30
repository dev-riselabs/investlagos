import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPageLayout from './layout/Landing_Page_Layout'
import HomePage from './pages/HomePage'
import SectorsPage from './pages/SectorsPage'
import IncentivesPage from './pages/IncentivesPage'
import AgendaPage from './pages/AgendaPage'
import SpeakersPage from './pages/SpeakersPage'
import DealRoomPage from './pages/DealRoomPage'
import RegisterPage from './pages/RegisterPage'
import GovernancePage from './pages/GovernancePage'
import PublicationsPage from './pages/PublicationsPage'
import { AuthProvider } from './admin/AuthContext'
import ProtectedRoute from './admin/ProtectedRoute'
import AdminLayout from './admin/AdminLayout'
import AdminLogin from './admin/pages/AdminLogin'
import AdminSignup from './admin/pages/AdminSignup'
import AdminDashboard from './admin/pages/AdminDashboard'
import AdminPublications from './admin/pages/AdminPublications'
import AdminRegistrations from './admin/pages/AdminRegistrations'
import AdminSubscribers from './admin/pages/AdminSubscribers'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPageLayout />}>
            <Route index element={<HomePage />} />
            <Route path="sectors" element={<SectorsPage />} />
            <Route path="incentives" element={<IncentivesPage />} />
            <Route path="agenda" element={<AgendaPage />} />
            <Route path="speakers" element={<SpeakersPage />} />
            <Route path="deal-room" element={<DealRoomPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="governance" element={<GovernancePage />} />
            <Route path="publications" element={<PublicationsPage />} />
            <Route path="pressroom/publications" element={<PublicationsPage />} />
          </Route>

          {/* Admin auth (public) */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/signup" element={<AdminSignup />} />

          {/* Admin console (protected) */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<AdminDashboard />} />
            <Route path="publications" element={<AdminPublications />} />
            <Route path="registrations" element={<AdminRegistrations />} />
            <Route path="subscribers" element={<AdminSubscribers />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App