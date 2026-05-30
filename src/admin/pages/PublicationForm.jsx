import { useEffect, useState } from 'react'
import { Alert, Button, Field, Input, Select, Textarea } from '../ui'

const ACCENT_OPTIONS = [
  { value: '', label: 'Auto (cycle)' },
  { value: 'bg-red', label: 'Red' },
  { value: 'bg-[#3B7FCD]', label: 'Blue' },
  { value: 'bg-yellow', label: 'Yellow' },
  { value: 'bg-green100', label: 'Green' },
]

const emptyForm = {
  title: '',
  category: '',
  tag: 'Report',
  year: new Date().getFullYear(),
  description: '',
  content: '',
  external_url: '',
  accent: '',
  is_published: true,
}

/**
 * Single form used for both creating and editing a publication.
 * Uses FormData under the hood so file uploads are streamed correctly.
 */
export default function PublicationForm({ initial, onSubmit, onCancel, submitting, error, errors = {} }) {
  const [form, setForm] = useState(emptyForm)
  const [imageFile, setImageFile] = useState(null)
  const [fileFile, setFileFile] = useState(null)
  const [removeImage, setRemoveImage] = useState(false)
  const [removeFile, setRemoveFile] = useState(false)

  useEffect(() => {
    if (initial) {
      setForm({
        title: initial.title ?? '',
        category: initial.category ?? '',
        tag: initial.tag ?? 'Report',
        year: initial.year ?? new Date().getFullYear(),
        description: initial.description ?? '',
        content: initial.content ?? '',
        external_url: initial.external_url ?? '',
        accent: initial.accent ?? '',
        is_published: !!initial.is_published,
      })
      setImageFile(null)
      setFileFile(null)
      setRemoveImage(false)
      setRemoveFile(false)
    } else {
      setForm(emptyForm)
    }
  }, [initial])

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const fd = new FormData()
    Object.entries(form).forEach(([k, v]) => {
      if (v === '' || v === null || v === undefined) return
      if (typeof v === 'boolean') fd.append(k, v ? '1' : '0')
      else fd.append(k, String(v))
    })
    if (imageFile) fd.append('image', imageFile)
    if (fileFile) fd.append('file', fileFile)
    if (initial && removeImage && !imageFile) fd.append('remove_image', '1')
    if (initial && removeFile && !fileFile) fd.append('remove_file', '1')
    onSubmit(fd)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {error && <Alert kind="error">{error}</Alert>}

      <Field label="Title" htmlFor="title" error={errors.title} required>
        <Input id="title" value={form.title} onChange={(e) => update('title', e.target.value)} required />
      </Field>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Field label="Tag" htmlFor="tag" error={errors.tag}>
          <Input id="tag" value={form.tag} onChange={(e) => update('tag', e.target.value)} />
        </Field>
        <Field label="Category" htmlFor="category" error={errors.category}>
          <Input id="category" value={form.category} onChange={(e) => update('category', e.target.value)} />
        </Field>
        <Field label="Year" htmlFor="year" error={errors.year} required>
          <Input id="year" type="number" min={1900} max={2100} value={form.year}
            onChange={(e) => update('year', e.target.value)} required />
        </Field>
      </div>

      <Field label="Short description" htmlFor="description" error={errors.description} required>
        <Textarea id="description" value={form.description}
          onChange={(e) => update('description', e.target.value)} required />
      </Field>

      <Field label="Long content (optional)" htmlFor="content" error={errors.content}>
        <Textarea id="content" rows={4} value={form.content}
          onChange={(e) => update('content', e.target.value)} />
      </Field>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="External URL" htmlFor="external_url" error={errors.external_url}
          hint="Used as the 'Read' link when no file is uploaded.">
          <Input id="external_url" type="url" value={form.external_url}
            onChange={(e) => update('external_url', e.target.value)} placeholder="https://…" />
        </Field>
        <Field label="Accent color" htmlFor="accent" error={errors.accent}>
          <Select id="accent" value={form.accent} onChange={(e) => update('accent', e.target.value)}>
            {ACCENT_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </Select>
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Cover image" htmlFor="image" error={errors.image}
          hint={initial?.image_url ? 'Current image will be replaced.' : 'jpg, png or webp (max 4 MB).'}>
          <input id="image" type="file" accept="image/*"
            onChange={(e) => setImageFile(e.target.files?.[0] || null)}
            className="block w-full text-sm text-slate-600 file:mr-3 file:rounded-md file:border-0 file:bg-green100 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-white hover:file:bg-green300" />
          {initial?.image_url && !imageFile && (
            <label className="mt-2 flex items-center gap-2 text-xs text-slate-500">
              <input type="checkbox" checked={removeImage} onChange={(e) => setRemoveImage(e.target.checked)} />
              Remove current image
            </label>
          )}
        </Field>
        <Field label="Document" htmlFor="file" error={errors.file} hint="pdf, doc, docx or zip (max 20 MB).">
          <input id="file" type="file" accept=".pdf,.doc,.docx,.zip"
            onChange={(e) => setFileFile(e.target.files?.[0] || null)}
            className="block w-full text-sm text-slate-600 file:mr-3 file:rounded-md file:border-0 file:bg-green100 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-white hover:file:bg-green300" />
          {initial?.file_url && !fileFile && (
            <label className="mt-2 flex items-center gap-2 text-xs text-slate-500">
              <input type="checkbox" checked={removeFile} onChange={(e) => setRemoveFile(e.target.checked)} />
              Remove current document
            </label>
          )}
        </Field>
      </div>

      <label className="flex items-center gap-2 text-sm text-slate-600">
        <input type="checkbox" checked={form.is_published}
          onChange={(e) => update('is_published', e.target.checked)} />
        Published (visible on the public site)
      </label>

      <div className="flex justify-end gap-2 pt-2">
        <Button type="button" variant="secondary" onClick={onCancel} disabled={submitting}>Cancel</Button>
        <Button type="submit" loading={submitting}>{initial ? 'Save changes' : 'Create publication'}</Button>
      </div>
    </form>
  )
}
