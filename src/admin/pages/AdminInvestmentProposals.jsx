import { useCallback, useEffect, useState } from 'react'
import { FiEye, FiTrash2 } from 'react-icons/fi'
import {
  adminDeleteInvestmentProposal,
  adminListInvestmentProposals,
  adminUpdateInvestmentProposal,
} from '../../lib/api'
import { Alert, Badge, Button, Card, Input, Modal, Select, Textarea } from '../ui'
import { SECTORS } from '../../components/InvestmentProposal/proposalOptions'

const STATUS_OPTIONS = [
  { value: 'pending',      label: 'Pending',      tone: 'yellow' },
  { value: 'under_review', label: 'Under review', tone: 'slate'  },
  { value: 'approved',     label: 'Approved',     tone: 'green'  },
  { value: 'rejected',     label: 'Rejected',     tone: 'red'    },
]

const statusMeta = (value) =>
  STATUS_OPTIONS.find((s) => s.value === value) || { label: value || '—', tone: 'slate' }

function DetailRow({ label, value }) {
  return (
    <div className="grid grid-cols-3 gap-2 py-1.5 text-sm">
      <dt className="col-span-1 text-xs font-semibold uppercase tracking-wide text-slate-400">{label}</dt>
      <dd className="col-span-2 text-slate-700 break-words">
        {value || <span className="text-slate-300">—</span>}
      </dd>
    </div>
  )
}

function formatMoney(v) {
  if (v === null || v === undefined || v === '') return null
  const n = Number(v)
  if (Number.isNaN(n)) return v
  return `$${n.toLocaleString(undefined, { maximumFractionDigits: 2 })}`
}

export default function AdminInvestmentProposals() {
  const [data, setData] = useState({ data: [], total: 0, current_page: 1, last_page: 1 })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [query, setQuery] = useState('')
  const [sector, setSector] = useState('')
  const [status, setStatus] = useState('')
  const [page, setPage] = useState(1)

  const [viewing, setViewing] = useState(null)
  const [statusDraft, setStatusDraft] = useState('pending')
  const [notesDraft, setNotesDraft] = useState('')
  const [saving, setSaving] = useState(false)
  const [saveError, setSaveError] = useState(null)
  const [deleting, setDeleting] = useState(null)

  const load = useCallback(() => {
    setLoading(true)
    setError(null)
    adminListInvestmentProposals({ q: query, sector, status, page, per_page: 10 })
      .then((res) => setData(res))
      .catch((err) => setError(err.message || 'Failed to load investment proposals.'))
      .finally(() => setLoading(false))
  }, [query, sector, status, page])

  useEffect(() => { load() }, [load])

  const openView = (row) => {
    setViewing(row)
    setStatusDraft(row.status || 'pending')
    setNotesDraft(row.admin_notes || '')
    setSaveError(null)
  }
  const closeView = () => {
    if (saving) return
    setViewing(null)
    setSaveError(null)
  }

  const handleSave = async () => {
    if (!viewing) return
    setSaving(true)
    setSaveError(null)
    try {
      const res = await adminUpdateInvestmentProposal(viewing.id, {
        status: statusDraft,
        admin_notes: notesDraft,
      })
      setViewing(res?.data || null)
      load()
    } catch (err) {
      setSaveError(err.message || 'Failed to update proposal.')
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async (row) => {
    const label = row.project_title || row.project_owner_email
    if (!window.confirm(`Delete proposal "${label}"? This cannot be undone.`)) return
    setDeleting(row.id)
    try {
      await adminDeleteInvestmentProposal(row.id)
      if (viewing?.id === row.id) setViewing(null)
      load()
    } catch (err) {
      setError(err.message || 'Failed to delete proposal.')
    } finally {
      setDeleting(null)
    }
  }

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-xl font-bold text-green200">Investment Proposals</h1>
        <p className="mt-1 text-sm text-slate-500">
          Review project proposals submitted through the Deal Room form, update their status and add internal notes.
        </p>
      </header>

      {error && <Alert kind="error">{error}</Alert>}

      <Card>
        <div className="mb-4 grid gap-3 sm:grid-cols-3">
          <Input
            placeholder="Search title, owner, organization or email…"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setPage(1) }}
          />
          <Select value={sector} onChange={(e) => { setSector(e.target.value); setPage(1) }}>
            <option value="">All sectors</option>
            {SECTORS.map((s) => <option key={s} value={s}>{s}</option>)}
          </Select>
          <Select value={status} onChange={(e) => { setStatus(e.target.value); setPage(1) }}>
            <option value="">All statuses</option>
            {STATUS_OPTIONS.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
          </Select>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100 text-left text-[11px] uppercase tracking-wide text-slate-400">
                <th className="py-2 pr-3 font-medium">Project</th>
                <th className="py-2 pr-3 font-medium">Project Owner</th>
                <th className="py-2 pr-3 font-medium">Sector</th>
                <th className="py-2 pr-3 font-medium">Investment Est. (USD)</th>
                <th className="py-2 pr-3 font-medium">Status</th>
                <th className="py-2 pr-3 font-medium">Submitted</th>
                <th className="py-2 pr-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading && (
                <tr><td colSpan={7} className="py-6 text-center text-slate-500">Loading…</td></tr>
              )}
              {!loading && data.data.length === 0 && (
                <tr><td colSpan={7} className="py-6 text-center text-slate-500">No investment proposals found.</td></tr>
              )}
              {!loading && data.data.map((row) => {
                const meta = statusMeta(row.status)
                return (
                  <tr key={row.id} className="border-b border-slate-50 last:border-0 align-top">
                    <td className="py-3 pr-3">
                      <div className="font-medium text-green200">{row.project_title || '—'}</div>
                      {row.organization && (
                        <div className="text-xs text-slate-400">{row.organization}</div>
                      )}
                    </td>
                    <td className="py-3 pr-3">
                      <div className="text-slate-700">{row.project_owner || '—'}</div>
                      <div className="text-xs text-slate-400">{row.project_owner_email}</div>
                    </td>
                    <td className="py-3 pr-3 text-slate-600">{row.sector || '—'}</td>
                    <td className="py-3 pr-3 text-slate-600">{formatMoney(row.investment_estimate_usd) || '—'}</td>
                    <td className="py-3 pr-3"><Badge tone={meta.tone}>{meta.label}</Badge></td>
                    <td className="py-3 pr-3 text-xs text-slate-500">
                      {row.created_at ? new Date(row.created_at).toLocaleDateString() : '—'}
                    </td>
                    <td className="py-3 pr-3 text-right">
                      <div className="inline-flex gap-2">
                        <Button variant="secondary" onClick={() => openView(row)} className="px-3 py-1.5 text-xs">
                          <FiEye className="h-3.5 w-3.5" /> View
                        </Button>
                        <Button
                          variant="danger"
                          loading={deleting === row.id}
                          onClick={() => handleDelete(row)}
                          className="px-3 py-1.5 text-xs"
                        >
                          <FiTrash2 className="h-3.5 w-3.5" /> Delete
                        </Button>
                      </div>
                    </td>
                  </tr>
                )
              })}
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

      <Modal open={!!viewing} title="Investment proposal" onClose={closeView} maxWidth="max-w-3xl">
        {viewing && (
          <div className="space-y-6">
            {saveError && <Alert kind="error">{saveError}</Alert>}

            <section>
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">Project information</h3>
              <dl className="divide-y divide-slate-100">
                <DetailRow label="Project title" value={viewing.project_title} />
                <DetailRow label="Location" value={viewing.project_location} />
                <DetailRow label="Sector" value={viewing.sector} />
                <DetailRow label="Project partners" value={viewing.project_partners} />
                <DetailRow label="Operating market" value={viewing.operating_market} />
                <DetailRow label="Current turnover" value={viewing.project_type} />
              </dl>
            </section>

            <section>
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">Promoter</h3>
              <dl className="divide-y divide-slate-100">
                <DetailRow label="Project owner" value={viewing.project_owner} />
                <DetailRow label="Borrower" value={viewing.borrower_fullname} />
                <DetailRow label="Title" value={viewing.project_owner_title} />
                <DetailRow label="Email" value={viewing.project_owner_email} />
                <DetailRow label="Phone" value={viewing.project_owner_phone} />
                <DetailRow label="Organization" value={viewing.organization} />
                <DetailRow label="About organization" value={viewing.organisation_summary} />
              </dl>
            </section>

            <section>
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">Project details</h3>
              <dl className="divide-y divide-slate-100">
                <DetailRow label="Description" value={viewing.project_description} />
                <DetailRow label="Project value (USD)" value={formatMoney(viewing.investment_estimate_usd)} />
                <DetailRow label="Amount already invested (USD)" value={formatMoney(viewing.amount_invested_usd)} />
                <DetailRow label="Financing needs (ticket size)" value={viewing.finance_needs} />
                <DetailRow label="Expected outcome" value={viewing.project_expected_outcome} />
                <DetailRow label="Project status" value={viewing.project_status} />
                <DetailRow label="Investment type" value={viewing.partnership_openness} />
                <DetailRow label="Documentation available" value={viewing.documentation_available} />
                <DetailRow label="Project timeframe" value={viewing.project_time_frame} />
                <DetailRow label="Deal type (financing)" value={viewing.finance_deal_type} />
                <DetailRow label="Deal type (non-financing)" value={viewing.non_finance_deal_type} />
                <DetailRow label="Other information" value={viewing.additional_information} />
                <DetailRow
                  label="Disclaimer"
                  value={viewing.disclaimer_accepted ? 'Accepted' : 'Not accepted'}
                />
                <DetailRow
                  label="Submitted"
                  value={viewing.created_at ? new Date(viewing.created_at).toLocaleString() : null}
                />
              </dl>
            </section>

            <section className="rounded-md border border-slate-200 bg-slate-50 p-4">
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">Review</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1 block text-[11px] font-medium uppercase tracking-wide text-slate-500">Status</span>
                  <Select value={statusDraft} onChange={(e) => setStatusDraft(e.target.value)}>
                    {STATUS_OPTIONS.map((s) => (
                      <option key={s.value} value={s.value}>{s.label}</option>
                    ))}
                  </Select>
                </label>
                <div className="text-xs text-slate-500 self-end pb-2">
                  {viewing.reviewed_at
                    ? `Last reviewed on ${new Date(viewing.reviewed_at).toLocaleString()}`
                    : 'Not yet reviewed.'}
                </div>
              </div>
              <label className="mt-3 block">
                <span className="mb-1 block text-[11px] font-medium uppercase tracking-wide text-slate-500">Internal notes</span>
                <Textarea
                  value={notesDraft}
                  onChange={(e) => setNotesDraft(e.target.value)}
                  placeholder="Notes from the review team (not shown to the sponsor)."
                  rows={4}
                />
              </label>
            </section>

            <div className="flex justify-end gap-2">
              <Button variant="secondary" onClick={closeView} disabled={saving}>Close</Button>
              <Button onClick={handleSave} loading={saving}>Save changes</Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}
