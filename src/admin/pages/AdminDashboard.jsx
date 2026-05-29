import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiFileText, FiUsers } from 'react-icons/fi'
import { adminListPublications, adminRegistrationStats } from '../../lib/api'
import { Alert, Card } from '../ui'

function StatCard({ label, value, accent = 'green' }) {
  const accents = {
    green: 'bg-green100/10 text-green200',
    red: 'bg-red/10 text-red',
    slate: 'bg-slate-100 text-slate-600',
  }
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5">
      <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">{label}</p>
      <p className="mt-2 text-3xl font-bold text-green200">{value ?? '—'}</p>
      <span className={`mt-3 inline-block rounded-sm px-2 py-0.5 text-[10px] font-semibold uppercase ${accents[accent]}`}>
        live
      </span>
    </div>
  )
}

export default function AdminDashboard() {
  const [stats, setStats] = useState(null)
  const [pubCount, setPubCount] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    Promise.all([adminRegistrationStats(), adminListPublications({ per_page: 1 })])
      .then(([statsRes, pubsRes]) => {
        if (cancelled) return
        setStats(statsRes)
        setPubCount(pubsRes?.total ?? 0)
      })
      .catch((err) => {
        if (cancelled) return
        setError(err.message || 'Failed to load dashboard.')
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => { cancelled = true }
  }, [])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-green200">Dashboard</h1>
        <p className="mt-1 text-sm text-slate-500">An overview of summit activity at a glance.</p>
      </div>

      {error && <Alert kind="error">{error}</Alert>}

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <StatCard label="Publications" value={loading ? '…' : pubCount} />
        <StatCard label="Total registrations" value={loading ? '…' : stats?.total} />
        <StatCard label="In-person" value={loading ? '…' : stats?.in_person} accent="slate" />
        <StatCard label="Deal room" value={loading ? '…' : stats?.deal_room} accent="red" />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card
          title="Registrations by sector"
          action={
            <Link
              to="/admin/registrations"
              className="text-xs font-semibold text-green100 hover:underline"
            >
              View all →
            </Link>
          }
        >
          {loading ? (
            <p className="text-sm text-slate-500">Loading…</p>
          ) : stats?.by_sector?.length ? (
            <ul className="divide-y divide-slate-100">
              {stats.by_sector.map((row) => (
                <li key={row.sector} className="flex items-center justify-between py-2 text-sm">
                  <span className="text-slate-700">{row.sector}</span>
                  <span className="font-semibold text-green200">{row.total}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-slate-500">No registrations yet.</p>
          )}
        </Card>

        <Card title="Quick actions">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Link
              to="/admin/publications"
              className="flex items-center gap-3 rounded-md border border-slate-200 p-4 transition hover:border-green100 hover:bg-green700"
            >
              <FiFileText className="h-5 w-5 text-green100" />
              <div>
                <p className="text-sm font-semibold text-green200">Manage publications</p>
                <p className="text-xs text-slate-500">Create, edit and remove posts.</p>
              </div>
            </Link>
            <Link
              to="/admin/registrations"
              className="flex items-center gap-3 rounded-md border border-slate-200 p-4 transition hover:border-green100 hover:bg-green700"
            >
              <FiUsers className="h-5 w-5 text-green100" />
              <div>
                <p className="text-sm font-semibold text-green200">Review registrations</p>
                <p className="text-xs text-slate-500">View and update attendees.</p>
              </div>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  )
}
