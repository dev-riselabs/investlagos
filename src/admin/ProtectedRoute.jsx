import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from './AuthContext'

/**
 * Gate that only lets authenticated admins through. Anything else gets
 * bounced to /admin/login (preserving the destination for post-login redirect).
 */
export default function ProtectedRoute({ children }) {
  const { isAuthenticated, isAdmin, loading } = useAuth()
  const location = useLocation()

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-green700">
        <div className="text-sm text-green200">Loading…</div>
      </div>
    )
  }

  if (!isAuthenticated || !isAdmin) {
    return <Navigate to="/admin/login" replace state={{ from: location.pathname }} />
  }

  return children
}
