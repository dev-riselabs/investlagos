import { useCallback, useEffect, useState } from 'react'
import { FiEye, FiTrash2, FiUsers } from 'react-icons/fi'
import {
  adminDeleteSubscriber,
  adminListSubscribers,
  adminSubscriberStats,
} from '../../lib/api'
import { Alert, Badge, Button, Card, Input, Select } from '../ui'

function DetailRow({ label, value }) {
  return (
    <div className="flex justify-between py-2 text-sm">
      <dt className="text-slate-400">{label}</dt>
      <dd className="font-medium text-green200">{value || '—'}</dd>
    </div>
  )
}

export default function AdminSubscribers() {
  const [data, setData] = useState({ data: [], total: 0, current_page: 1, last_page: 1 })
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [query, setQuery] = useState('')
  const [industry, setIndustry] = useState('')
  const [page, setPage] = useState(1)
  const [viewing, setViewing] = useState(null)
  const [deleting, setDeleting] = useState(null)

  const load = useCallback(() => {
    setLoading(true)
    setError(null)
    Promise.all([
      adminListSubscribers({ q: query, industry, page, per_page: 10 }),
      stats === null ? adminSubscriberStats() : Promise.resolve(null),
    ])
      .then(([listRes, statsRes]) => {
        setData(listRes)
        if (statsRes) setStats(statsRes)
      })
      .catch((err) => setError(err.message || 'Failed to load subscribers.'))
      .finally(() => setLoading(false))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, industry, page])

  useEffect(() => { load() }, [load])

  const handleDelete = async (row) => {
    if (!window.confirm(`Delete subscriber ${row.email}? This cannot be undone.`)) return
    setDeleting(row.id)
    try {
      await adminDeleteSubscriber(row.id)
      setData((prev) => ({
        ...prev,
        data: prev.data.filter((r) => r.id !== row.id),
        total: prev.total - 1,
      }))
      setStats((s) => s ? { ...s, total: s.total - 1, active: row.is_active ? s.active - 1 : s.active } : s)
    } catch (err) {
      setError(err.message || 'Delete failed.')
    } finally {
      setDeleting(null)
    }
  }

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-xl font-bold text-green200">Subscribers</h1>
        <p className="mt-1 text-sm text-slate-500">Manage newsletter and updates subscribers.</p>
      </header>

      {stats && (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          <StatCard label="Total" value={stats.total} />
          <StatCard label="Active" value={stats.active} />
          <StatCard label="Inactive" value={stats.inactive} />
        </div>
      )}

      {error && <Alert kind="error">{error}</Alert>}

      <Card>
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Input
            placeholder="Search by name, email or company…"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setPage(1) }}
            className="sm:max-w-sm"
          />
          <Select value={industry} onChange={(e) => { setIndustry(e.target.value); setPage(1) }}
            className="sm:max-w-[200px]">
            <option value="">All industries</option>
            {['Infrastructure','Technology & Innovation','Financial Services','Energy',
              'Manufacturing','Real Estate','Healthcare','Education','Logistics',
              'Creative Economy','Agriculture','Sports','Tourism & Hospitality',
            ].map((i) => <option key={i} value={i}>{i}</option>)}
          </Select>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100 text-left text-[11px] uppercase tracking-wide text-slate-400">
                <th className="py-2 pr-3 font-medium">Name</th>
                <th className="py-2 pr-3 font-medium">Email</th>
                <th className="py-2 pr-3 font-medium">Country</th>
                <th className="py-2 pr-3 font-medium">Industry</th>
                <th className="py-2 pr-3 font-medium">Status</th>
                <th className="py-2 pr-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading && (
                <tr><td colSpan={6} className="py-6 text-center text-slate-500">Loading…</td></tr>
              )}
              {!loading && data.data.length === 0 && (
                <tr><td colSpan={6} className="py-6 text-center text-slate-500">No subscribers found.</td></tr>
              )}
              {!loading && data.data.map((row) => (
                <tr key={row.id} className="border-b border-slate-50 last:border-0">
                  <td className="py-3 pr-3">
                    <div className="font-medium text-green200">
                      {[row.first_name, row.last_name].filter(Boolean).join(' ') || '—'}
                    </div>
                    {row.company_name && <div className="text-xs text-slate-400">{row.company_name}</div>}
                  </td>
                  <td className="py-3 pr-3 text-slate-600">{row.email}</td>
                  <td className="py-3 pr-3 text-slate-600">{row.country || '—'}</td>
                  <td className="py-3 pr-3 text-slate-600">{row.industry || '—'}</td>
                  <td className="py-3 pr-3">
                    {row.is_active
                      ? <Badge tone="green">Active</Badge>
                      : <Badge tone="slate">Inactive</Badge>}
                  </td>
                  <td className="py-3 pr-3 text-right">
                    <div className="inline-flex gap-2">
                      <Button variant="secondary" onClick={() => setViewing(row)} className="px-3 py-1.5 text-xs">
                        <FiEye className="h-3.5 w-3.5" /> View
                      </Button>
                      <Button variant="danger" loading={deleting === row.id}
                        onClick={() => handleDelete(row)} className="px-3 py-1.5 text-xs">
                        <FiTrash2 className="h-3.5 w-3.5" /> Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {data.last_page > 1 && (
          <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
            <span>Page {data.current_page} of {data.last_page} · {data.total} total</span>
            <div className="flex gap-2">
              <Button variant="secondary" disabled={page <= 1} onClick={() => setPage((p) => p - 1)}
                className="px-3 py-1.5 text-xs">Previous</Button>
              <Button variant="secondary" disabled={page >= data.last_page} onClick={() => setPage((p) => p + 1)}
                className="px-3 py-1.5 text-xs">Next</Button>
            </div>
          </div>
        )}
      </Card>

      {viewing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-base font-bold text-green200">Subscriber details</h2>
              <button type="button" onClick={() => setViewing(null)}
                className="text-slate-400 hover:text-green200">✕</button>
            </div>
            <dl className="divide-y divide-slate-100">
              <DetailRow label="Name" value={[viewing.first_name, viewing.last_name].filter(Boolean).join(' ')} />
              <DetailRow label="Email" value={viewing.email} />
              <DetailRow label="Gender" value={viewing.gender} />
              <DetailRow label="Country" value={viewing.country} />
              <DetailRow label="Industry" value={viewing.industry} />
              <DetailRow label="Job title" value={viewing.job_title} />
              <DetailRow label="Company" value={viewing.company_name} />
              <DetailRow label="Status" value={viewing.is_active ? 'Active' : 'Inactive'} />
              <DetailRow label="Subscribed" value={viewing.created_at?.slice(0, 10)} />
            </dl>
            <div className="mt-4 flex justify-end">
              <Button variant="secondary" onClick={() => setViewing(null)} className="px-4 py-2 text-sm">Close</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function StatCard({ label, value }) {
  return (
    <Card className="flex items-center gap-4 p-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green700">
        <FiUsers className="h-5 w-5 text-green100" />
      </div>
      <div>
        <p className="text-2xl font-bold text-green200">{value ?? '—'}</p>
        <p className="text-xs text-slate-500">{label}</p>
      </div>
    </Card>
  )
}
