import { useCallback, useEffect, useState } from 'react'
import { FiEdit2, FiEye, FiTrash2 } from 'react-icons/fi'
import {
  adminDeleteRegistration,
  adminListRegistrations,
  adminUpdateRegistration,
} from '../../lib/api'
import { Alert, Badge, Button, Card, Input, Modal, Select } from '../ui'
import RegistrationForm from './RegistrationForm'

function flattenErrors(err) {
  if (err?.status === 422 && err.errors) {
    return Object.fromEntries(
      Object.entries(err.errors).map(([k, v]) => [k, Array.isArray(v) ? v[0] : String(v)]),
    )
  }
  return {}
}

function DetailRow({ label, value }) {
  return (
    <div className="grid grid-cols-3 gap-2 py-1.5 text-sm">
      <dt className="col-span-1 text-xs font-semibold uppercase tracking-wide text-slate-400">{label}</dt>
      <dd className="col-span-2 text-slate-700">{value || <span className="text-slate-300">—</span>}</dd>
    </div>
  )
}

export default function AdminRegistrations() {
  const [data, setData] = useState({ data: [], total: 0, current_page: 1, last_page: 1 })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [query, setQuery] = useState('')
  const [mode, setMode] = useState('')
  const [page, setPage] = useState(1)

  const [viewing, setViewing] = useState(null)
  const [editing, setEditing] = useState(null)
  const [formError, setFormError] = useState(null)
  const [formErrors, setFormErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [deleting, setDeleting] = useState(null)

  const load = useCallback(() => {
    setLoading(true)
    setError(null)
    adminListRegistrations({ q: query, attendance_mode: mode, page, per_page: 10 })
      .then((res) => setData(res))
      .catch((err) => setError(err.message || 'Failed to load registrations.'))
      .finally(() => setLoading(false))
  }, [query, mode, page])

  useEffect(() => { load() }, [load])

  const openView = (row) => setViewing(row)
  const closeView = () => setViewing(null)

  const openEdit = (row) => {
    setViewing(null)
    setEditing(row)
    setFormError(null)
    setFormErrors({})
  }
  const closeEdit = () => {
    if (submitting) return
    setEditing(null)
    setFormError(null)
    setFormErrors({})
  }

  const handleSubmit = async (payload) => {
    setSubmitting(true)
    setFormError(null)
    setFormErrors({})
    try {
      await adminUpdateRegistration(editing.id, payload)
      setEditing(null)
      load()
    } catch (err) {
      setFormError(err.message || 'Failed to save registration.')
      setFormErrors(flattenErrors(err))
    } finally {
      setSubmitting(false)
    }
  }

  const handleDelete = async (row) => {
    const label = `${row.first_name || ''} ${row.last_name || ''}`.trim() || row.email
    if (!window.confirm(`Delete registration for "${label}"? This cannot be undone.`)) return
    setDeleting(row.id)
    try {
      await adminDeleteRegistration(row.id)
      if (viewing?.id === row.id) setViewing(null)
      load()
    } catch (err) {
      setError(err.message || 'Failed to delete registration.')
    } finally {
      setDeleting(null)
    }
  }

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-xl font-bold text-green200">Registrations</h1>
        <p className="mt-1 text-sm text-slate-500">View, edit and remove summit registrations.</p>
      </header>

      {error && <Alert kind="error">{error}</Alert>}

      <Card>
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Input
            placeholder="Search by name, email or organization…"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setPage(1) }}
            className="sm:max-w-sm"
          />
          <Select value={mode} onChange={(e) => { setMode(e.target.value); setPage(1) }}
            className="sm:max-w-[200px]">
            <option value="">All attendance modes</option>
            <option value="Attend In-Person">In-Person</option>
            <option value="Attend Virtually">Virtually</option>
          </Select>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100 text-left text-[11px] uppercase tracking-wide text-slate-400">
                <th className="py-2 pr-3 font-medium">Name</th>
                <th className="py-2 pr-3 font-medium">Email</th>
                <th className="py-2 pr-3 font-medium">Organization</th>
                <th className="py-2 pr-3 font-medium">Sector</th>
                <th className="py-2 pr-3 font-medium">Mode</th>
                <th className="py-2 pr-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading && (
                <tr><td colSpan={6} className="py-6 text-center text-slate-500">Loading…</td></tr>
              )}
              {!loading && data.data.length === 0 && (
                <tr><td colSpan={6} className="py-6 text-center text-slate-500">No registrations found.</td></tr>
              )}
              {!loading && data.data.map((row) => (
                <tr key={row.id} className="border-b border-slate-50 last:border-0">
                  <td className="py-3 pr-3">
                    <div className="font-medium text-green200">
                      {[row.title, row.first_name, row.last_name].filter(Boolean).join(' ') || '—'}
                    </div>
                    {row.country && <div className="text-xs text-slate-400">{row.country}</div>}
                  </td>
                  <td className="py-3 pr-3 text-slate-600">{row.email}</td>
                  <td className="py-3 pr-3 text-slate-600">{row.organization || '—'}</td>
                  <td className="py-3 pr-3 text-slate-600">{row.sector || '—'}</td>
                  <td className="py-3 pr-3">
                    {row.attendance_mode === 'Attend Virtually'
                      ? <Badge tone="yellow">Virtual</Badge>
                      : row.attendance_mode === 'Attend In-Person'
                        ? <Badge tone="green">In-Person</Badge>
                        : <Badge tone="slate">—</Badge>}
                  </td>
                  <td className="py-3 pr-3 text-right">
                    <div className="inline-flex gap-2">
                      <Button variant="secondary" onClick={() => openView(row)} className="px-3 py-1.5 text-xs">
                        <FiEye className="h-3.5 w-3.5" /> View
                      </Button>
                      <Button variant="secondary" onClick={() => openEdit(row)} className="px-3 py-1.5 text-xs">
                        <FiEdit2 className="h-3.5 w-3.5" /> Edit
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

      <Modal open={!!viewing} title="Registration details" onClose={closeView}>
        {viewing && (
          <div>
            <dl className="divide-y divide-slate-100">
              <DetailRow label="Name" value={[viewing.title, viewing.first_name, viewing.last_name].filter(Boolean).join(' ')} />
              <DetailRow label="Email" value={viewing.email} />
              <DetailRow label="Phone" value={viewing.phone} />
              <DetailRow label="Nationality" value={viewing.nationality} />
              <DetailRow label="Country" value={viewing.country} />
              <DetailRow label="Organization" value={viewing.organization} />
              <DetailRow label="Industry" value={viewing.industry} />
              <DetailRow label="Org type" value={viewing.org_type} />
              <DetailRow label="Attending as" value={viewing.attending_as} />
              <DetailRow label="Sector" value={viewing.sector} />
              <DetailRow label="Deal room" value={viewing.deal_room} />
              <DetailRow label="Deal room role" value={viewing.deal_room_role} />
              <DetailRow label="Attendance mode" value={viewing.attendance_mode} />
              <DetailRow label="Dietary" value={viewing.dietary} />
              <DetailRow label="Accessibility" value={viewing.accessibility} />
              <DetailRow label="Other requests" value={viewing.other_requests} />
              <DetailRow label="Heard about" value={viewing.heard_about} />
              <DetailRow label="Objective" value={viewing.objective} />
            </dl>
            <div className="mt-5 flex justify-end gap-2">
              <Button variant="secondary" onClick={closeView}>Close</Button>
              <Button onClick={() => openEdit(viewing)}>Edit</Button>
            </div>
          </div>
        )}
      </Modal>

      <Modal open={!!editing} title="Edit registration" onClose={closeEdit}>
        <RegistrationForm
          initial={editing}
          onSubmit={handleSubmit}
          onCancel={closeEdit}
          submitting={submitting}
          error={formError}
          errors={formErrors}
        />
      </Modal>
    </div>
  )
}
