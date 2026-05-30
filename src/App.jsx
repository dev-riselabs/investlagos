import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import LandingPageLayout from "./layout/Landing_Page_Layout";
import { AuthProvider } from "./admin/AuthContext";
import ProtectedRoute from "./admin/ProtectedRoute";

// Site-wide maintenance toggle. When VITE_MAINTENANCE_MODE=true, every
// public route redirects to /maintenance. Admin routes and /maintenance
// itself remain reachable.
const MAINTENANCE_MODE = import.meta.env.VITE_MAINTENANCE_MODE === "false";

// Route-level code splitting — each page becomes its own async chunk and
// is only fetched the first time the route is visited. This keeps the
// initial bundle small and well below Vite's chunk-size warning.
const HomePage = lazy(() => import("./pages/HomePage"));
const SectorsPage = lazy(() => import("./pages/SectorsPage"));
const IncentivesPage = lazy(() => import("./pages/IncentivesPage"));
const AgendaPage = lazy(() => import("./pages/AgendaPage"));
const SpeakersPage = lazy(() => import("./pages/SpeakersPage"));
const DealRoomPage = lazy(() => import("./pages/DealRoomPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const GovernancePage = lazy(() => import("./pages/GovernancePage"));
const PublicationsPage = lazy(() => import("./pages/PublicationsPage"));
const PublicationDetailPage = lazy(
  () => import("./pages/PublicationDetailPage"),
);
const AboutPage = lazy(() => import("./pages/AboutPage"));
const AdministrationPage = lazy(() => import("./pages/AdministrationPage"));
const PolicyPage = lazy(() => import("./pages/PolicyPage"));
const MediaKitPage = lazy(() => import("./pages/MediaKitPage"));
const MaintenancePage = lazy(() => import("./pages/MaintenancePage"));

// Admin console — kept in its own group of chunks; never loaded on
// the public marketing site.
const AdminLayout = lazy(() => import("./admin/AdminLayout"));
const AdminLogin = lazy(() => import("./admin/pages/AdminLogin"));
const AdminSignup = lazy(() => import("./admin/pages/AdminSignup"));
const AdminDashboard = lazy(() => import("./admin/pages/AdminDashboard"));
const AdminPublications = lazy(() => import("./admin/pages/AdminPublications"));
const AdminRegistrations = lazy(
  () => import("./admin/pages/AdminRegistrations"),
);
const AdminSubscribers = lazy(() => import("./admin/pages/AdminSubscribers"));

// Lightweight fallback shown while a route chunk is being fetched.
function RouteFallback() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center px-6 py-20">
      <p className="text-sm text-slate-500">Loading…</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            {/* Standalone maintenance page (no site chrome) — always reachable */}
            <Route path="/maintenance" element={<MaintenancePage />} />

            {!MAINTENANCE_MODE && (
              <Route path="/" element={<LandingPageLayout />}>
                <Route index element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="sectors" element={<SectorsPage />} />
                <Route path="incentives" element={<IncentivesPage />} />
                <Route path="agenda" element={<AgendaPage />} />
                <Route path="speakers" element={<SpeakersPage />} />
                <Route path="deal-room" element={<DealRoomPage />} />
                <Route path="register" element={<RegisterPage />} />
                <Route path="governance" element={<GovernancePage />} />
                <Route path="publications" element={<PublicationsPage />} />
                <Route
                  path="publications/:slug"
                  element={<PublicationDetailPage />}
                />
                <Route path="administration" element={<AdministrationPage />} />
                <Route
                  path="the-summit/administration"
                  element={<AdministrationPage />}
                />
                <Route path="policy" element={<PolicyPage />} />
                <Route path="pressroom/reports" element={<PolicyPage />} />
                <Route path="media-kit" element={<MediaKitPage />} />
                <Route path="media/kits" element={<MediaKitPage />} />
                <Route
                  path="pressroom/publications"
                  element={<PublicationsPage />}
                />
              </Route>
            )}

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

            {/* Catch-all: in maintenance mode any unmatched URL is redirected
                to /maintenance. Outside maintenance mode this falls through to
                the public layout, so existing 404 behaviour is unchanged. */}
            {MAINTENANCE_MODE && (
              <Route
                path="*"
                element={<Navigate to="/maintenance" replace />}
              />
            )}
          </Routes>
        </Suspense>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
