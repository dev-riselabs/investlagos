import { useCallback, useEffect, useState } from 'react'
import { FiEdit2, FiPlus, FiTrash2 } from 'react-icons/fi'
import {
  adminCreatePublication,
  adminDeletePublication,
  adminListPublications,
  adminUpdatePublication,
} from '../../lib/api'
import { Alert, Badge, Button, Card, Input, Modal, Select } from '../ui'
import PublicationForm from './PublicationForm'

function flattenErrors(err) {
  if (err?.status === 422 && err.errors) {
    return Object.fromEntries(
      Object.entries(err.errors).map(([k, v]) => [k, Array.isArray(v) ? v[0] : String(v)]),
    )
  }
  return {}
}

export default function AdminPublications() {
  const [data, setData] = useState({ data: [], total: 0, current_page: 1, last_page: 1 })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState('')
  const [page, setPage] = useState(1)

  // Modal state.
  const [editing, setEditing] = useState(null) // null = closed, {} = create, {id…} = edit
  const [formError, setFormError] = useState(null)
  const [formErrors, setFormErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [deleting, setDeleting] = useState(null)

  const load = useCallback(() => {
    setLoading(true)
    setError(null)
    adminListPublications({ q: query, status, page, per_page: 10 })
      .then((res) => setData(res))
      .catch((err) => setError(err.message || 'Failed to load publications.'))
      .finally(() => setLoading(false))
  }, [query, status, page])

  useEffect(() => { load() }, [load])

  const openCreate = () => {
    setEditing({})
    setFormError(null)
    setFormErrors({})
  }
  const openEdit = (row) => {
    setEditing(row)
    setFormError(null)
    setFormErrors({})
  }
  const closeModal = () => {
    if (submitting) return
    setEditing(null)
    setFormError(null)
    setFormErrors({})
  }

  const handleSubmit = async (formData) => {
    setSubmitting(true)
    setFormError(null)
    setFormErrors({})
    try {
      if (editing && editing.id) {
        await adminUpdatePublication(editing.id, formData)
      } else {
        await adminCreatePublication(formData)
      }
      setEditing(null)
      load()
    } catch (err) {
      setFormError(err.message || 'Failed to save publication.')
      setFormErrors(flattenErrors(err))
    } finally {
      setSubmitting(false)
    }
  }

  const handleDelete = async (row) => {
    if (!window.confirm(`Delete "${row.title}"? This cannot be undone.`)) return
    setDeleting(row.id)
    try {
      await adminDeletePublication(row.id)
      load()
    } catch (err) {
      setError(err.message || 'Failed to delete publication.')
    } finally {
      setDeleting(null)
    }
  }

  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-xl font-bold text-green200">Publications</h1>
          <p className="mt-1 text-sm text-slate-500">Create, update and remove publications shown on the site.</p>
        </div>
        <Button onClick={openCreate}><FiPlus className="h-4 w-4" /> New publication</Button>
      </header>

      {error && <Alert kind="error">{error}</Alert>}

      <Card>
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Input
            placeholder="Search by title, description or category…"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setPage(1) }}
            className="sm:max-w-sm"
          />
          <Select value={status} onChange={(e) => { setStatus(e.target.value); setPage(1) }}
            className="sm:max-w-[180px]">
            <option value="">All statuses</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
          </Select>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100 text-left text-[11px] uppercase tracking-wide text-slate-400">
                <th className="py-2 pr-3 font-medium">Title</th>
                <th className="py-2 pr-3 font-medium">Category</th>
                <th className="py-2 pr-3 font-medium">Year</th>
                <th className="py-2 pr-3 font-medium">Status</th>
                <th className="py-2 pr-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading && (
                <tr><td colSpan={5} className="py-6 text-center text-slate-500">Loading…</td></tr>
              )}
              {!loading && data.data.length === 0 && (
                <tr><td colSpan={5} className="py-6 text-center text-slate-500">No publications found.</td></tr>
              )}
              {!loading && data.data.map((row) => (
                <tr key={row.id} className="border-b border-slate-50 last:border-0">
                  <td className="py-3 pr-3">
                    <div className="font-medium text-green200">{row.title}</div>
                    <div className="text-xs text-slate-400 line-clamp-1">{row.description}</div>
                  </td>
                  <td className="py-3 pr-3 text-slate-600">{row.category || '—'}</td>
                  <td className="py-3 pr-3 text-slate-600">{row.year}</td>
                  <td className="py-3 pr-3">
                    {row.is_published ? <Badge tone="green">Published</Badge> : <Badge tone="yellow">Draft</Badge>}
                  </td>
                  <td className="py-3 pr-3 text-right">
                    <div className="inline-flex gap-2">
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

      <Modal open={editing !== null} title={editing?.id ? 'Edit publication' : 'New publication'} onClose={closeModal}>
        <PublicationForm
          initial={editing?.id ? editing : null}
          onSubmit={handleSubmit}
          onCancel={closeModal}
          submitting={submitting}
          error={formError}
          errors={formErrors}
        />
      </Modal>
    </div>
  )
}
