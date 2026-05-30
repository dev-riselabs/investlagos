import { useEffect, useState } from 'react'
import { Alert, Button, Field, Input, Select, Textarea } from '../ui'

/**
 * Edit form for a single registration. Mirrors the public registration
 * form fields but with admin-friendly free-text controls.
 */
export default function RegistrationForm({ initial, onSubmit, onCancel, submitting, error, errors = {} }) {
  const [form, setForm] = useState(initial || {})

  useEffect(() => { setForm(initial || {}) }, [initial])

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const payload = { ...form }
    payload.consent_updates = !!payload.consent_updates
    payload.consent_media = !!payload.consent_media
    onSubmit(payload)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {error && <Alert kind="error">{error}</Alert>}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Field label="Title" htmlFor="title" error={errors.title}>
          <Input id="title" value={form.title || ''} onChange={(e) => update('title', e.target.value)} />
        </Field>
        <Field label="First name" htmlFor="first_name" error={errors.first_name}>
          <Input id="first_name" value={form.first_name || ''} onChange={(e) => update('first_name', e.target.value)} />
        </Field>
        <Field label="Last name" htmlFor="last_name" error={errors.last_name}>
          <Input id="last_name" value={form.last_name || ''} onChange={(e) => update('last_name', e.target.value)} />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Email" htmlFor="email" error={errors.email}>
          <Input id="email" type="email" value={form.email || ''} onChange={(e) => update('email', e.target.value)} />
        </Field>
        <Field label="Phone" htmlFor="phone" error={errors.phone}>
          <Input id="phone" value={form.phone || ''} onChange={(e) => update('phone', e.target.value)} />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Nationality" htmlFor="nationality" error={errors.nationality}>
          <Input id="nationality" value={form.nationality || ''} onChange={(e) => update('nationality', e.target.value)} />
        </Field>
        <Field label="Country" htmlFor="country" error={errors.country}>
          <Input id="country" value={form.country || ''} onChange={(e) => update('country', e.target.value)} />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Organization" htmlFor="organization" error={errors.organization}>
          <Input id="organization" value={form.organization || ''} onChange={(e) => update('organization', e.target.value)} />
        </Field>
        <Field label="Industry" htmlFor="industry" error={errors.industry}>
          <Input id="industry" value={form.industry || ''} onChange={(e) => update('industry', e.target.value)} />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Field label="Org type" htmlFor="org_type" error={errors.org_type}>
          <Input id="org_type" value={form.org_type || ''} onChange={(e) => update('org_type', e.target.value)} />
        </Field>
        <Field label="Attending as" htmlFor="attending_as" error={errors.attending_as}>
          <Input id="attending_as" value={form.attending_as || ''} onChange={(e) => update('attending_as', e.target.value)} />
        </Field>
        <Field label="Sector" htmlFor="sector" error={errors.sector}>
          <Input id="sector" value={form.sector || ''} onChange={(e) => update('sector', e.target.value)} />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Field label="Deal room" htmlFor="deal_room" error={errors.deal_room}>
          <Select id="deal_room" value={form.deal_room || 'No'} onChange={(e) => update('deal_room', e.target.value)}>
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </Select>
        </Field>
        <Field label="Deal room role" htmlFor="deal_room_role" error={errors.deal_room_role}>
          <Input id="deal_room_role" value={form.deal_room_role || ''}
            onChange={(e) => update('deal_room_role', e.target.value)}
            disabled={form.deal_room !== 'Yes'} />
        </Field>
        <Field label="Attendance mode" htmlFor="attendance_mode" error={errors.attendance_mode}>
          <Select id="attendance_mode" value={form.attendance_mode || ''}
            onChange={(e) => update('attendance_mode', e.target.value)}>
            <option value="">—</option>
            <option value="Attend In-Person">Attend In-Person</option>
            <option value="Attend Virtually">Attend Virtually</option>
          </Select>
        </Field>
      </div>

      <Field label="Dietary requirements" htmlFor="dietary" error={errors.dietary}>
        <Textarea id="dietary" value={form.dietary || ''} onChange={(e) => update('dietary', e.target.value)} />
      </Field>
      <Field label="Accessibility" htmlFor="accessibility" error={errors.accessibility}>
        <Textarea id="accessibility" value={form.accessibility || ''} onChange={(e) => update('accessibility', e.target.value)} />
      </Field>
      <Field label="Other requests" htmlFor="other_requests" error={errors.other_requests}>
        <Textarea id="other_requests" value={form.other_requests || ''} onChange={(e) => update('other_requests', e.target.value)} />
      </Field>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Heard about us via" htmlFor="heard_about" error={errors.heard_about}>
          <Input id="heard_about" value={form.heard_about || ''} onChange={(e) => update('heard_about', e.target.value)} />
        </Field>
        <Field label="Primary objective" htmlFor="objective" error={errors.objective}>
          <Input id="objective" value={form.objective || ''} onChange={(e) => update('objective', e.target.value)} />
        </Field>
      </div>

      <div className="flex flex-wrap gap-4 text-sm text-slate-600">
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={!!form.consent_updates}
            onChange={(e) => update('consent_updates', e.target.checked)} />
          Consent: updates
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={!!form.consent_media}
            onChange={(e) => update('consent_media', e.target.checked)} />
          Consent: media
        </label>
      </div>

      <div className="flex justify-end gap-2 pt-2">
        <Button type="button" variant="secondary" onClick={onCancel} disabled={submitting}>Cancel</Button>
        <Button type="submit" loading={submitting}>Save changes</Button>
      </div>
    </form>
  )
}
