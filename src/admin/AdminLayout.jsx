import { useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { FiFileText, FiGrid, FiLogOut, FiMenu, FiUsers, FiX } from 'react-icons/fi'
import { useAuth } from './AuthContext'

const navItems = [
  { to: '/admin', label: 'Dashboard', icon: FiGrid, end: true },
  { to: '/admin/publications', label: 'Publications', icon: FiFileText },
  { to: '/admin/registrations', label: 'Registrations', icon: FiUsers },
]

function SidebarLink({ to, label, icon: Icon, end, onNavigate }) {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onNavigate}
      className={({ isActive }) =>
        [
          'flex items-center gap-3 rounded-md px-4 py-2.5 text-sm font-medium transition',
          isActive
            ? 'bg-green100 text-white shadow-sm'
            : 'text-green200 hover:bg-green700 hover:text-green100',
        ].join(' ')
      }
    >
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </NavLink>
  )
}

export default function AdminLayout() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  const handleLogout = async () => {
    await logout()
    navigate('/admin/login', { replace: true })
  }

  return (
    <div className="flex min-h-screen bg-[#F5F7F6] font-jost text-slate-800">
      {/* Sidebar (desktop) */}
      <aside className="hidden w-64 shrink-0 flex-col border-r border-slate-200 bg-white lg:flex">
        <SidebarBody onNavigate={() => {}} user={user} onLogout={handleLogout} />
      </aside>

      {/* Sidebar (mobile drawer) */}
      {open && (
        <div className="fixed inset-0 z-40 flex lg:hidden">
          <div className="w-64 bg-white shadow-xl">
            <SidebarBody onNavigate={() => setOpen(false)} user={user} onLogout={handleLogout} />
          </div>
          <button
            type="button"
            aria-label="Close menu"
            className="flex-1 bg-black/40"
            onClick={() => setOpen(false)}
          />
        </div>
      )}

      <div className="flex min-w-0 flex-1 flex-col">
        {/* Top bar */}
        <header className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3 lg:px-8">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="rounded-md p-2 text-green200 hover:bg-green700 lg:hidden"
              aria-label="Open menu"
            >
              <FiMenu className="h-5 w-5" />
            </button>
            <div className="flex flex-col gap-0.5">
              <img src="/logo.png" alt="Invest Lagos" className="h-8 w-auto object-contain" />
              <p className="text-[11px] uppercase tracking-wide text-slate-400">Admin Console</p>
            </div>
          </div>
          <div className="hidden text-right sm:block">
            <p className="text-xs text-slate-400">Signed in as</p>
            <p className="text-sm font-medium text-green200">{user?.name || user?.email}</p>
          </div>
        </header>

        <main className="min-w-0 flex-1 px-4 py-6 lg:px-8 lg:py-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

function SidebarBody({ onNavigate, user, onLogout }) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
        <div className="flex flex-col gap-1">
          <img src="/logo.png" alt="Invest Lagos" className="h-10 w-auto object-contain" />
          <p className="text-[11px] uppercase tracking-wide text-slate-400">Admin Console</p>
        </div>
        <button
          type="button"
          onClick={onNavigate}
          className="rounded-md p-1.5 text-slate-400 hover:bg-green700 lg:hidden"
          aria-label="Close menu"
        >
          <FiX className="h-4 w-4" />
        </button>
      </div>
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navItems.map((item) => (
          <SidebarLink key={item.to} {...item} onNavigate={onNavigate} />
        ))}
      </nav>
      <div className="border-t border-slate-200 px-5 py-4">
        <p className="truncate text-xs text-slate-400">{user?.email}</p>
        <button
          type="button"
          onClick={onLogout}
          className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-red hover:opacity-80"
        >
          <FiLogOut className="h-4 w-4" />
          Sign out
        </button>
      </div>
    </div>
  )
}
