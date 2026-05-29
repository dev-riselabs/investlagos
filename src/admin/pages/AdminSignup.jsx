import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import AuthShell from '../AuthShell'
import { useAuth } from '../AuthContext'
import { Alert, Button, Field, Input } from '../ui'

export default function AdminSignup() {
  const { register, isAuthenticated, isAdmin, loading } = useAuth()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  })
  const [errors, setErrors] = useState({})
  const [generalError, setGeneralError] = useState(null)
  const [submitting, setSubmitting] = useState(false)

  if (!loading && isAuthenticated && isAdmin) {
    return <Navigate to="/admin" replace />
  }

  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setGeneralError(null)
    setErrors({})

    if (form.password !== form.password_confirmation) {
      setErrors({ password_confirmation: 'Passwords do not match.' })
      return
    }

    setSubmitting(true)
    try {
      await register(form)
      navigate('/admin', { replace: true })
    } catch (err) {
      if (err.status === 422 && err.errors) {
        const flat = Object.fromEntries(
          Object.entries(err.errors).map(([k, v]) => [k, Array.isArray(v) ? v[0] : String(v)]),
        )
        setErrors(flat)
        setGeneralError(err.message || 'Please correct the errors below.')
      } else {
        setGeneralError(err.message || 'Unable to create account. Please try again.')
      }
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <AuthShell
      title="Create admin account"
      subtitle="Bootstrap a new admin for the Invest Lagos console."
      footer={
        <span>
          Already have an account?{' '}
          <Link to="/admin/login" className="font-semibold text-green100 hover:underline">
            Sign in
          </Link>
        </span>
      }
    >
      <form onSubmit={onSubmit} className="space-y-4" noValidate>
        {generalError && <Alert kind="error">{generalError}</Alert>}

        <Field label="Full name" htmlFor="name" error={errors.name} required>
          <Input id="name" name="name" value={form.name} onChange={onChange} required />
        </Field>

        <Field label="Email" htmlFor="email" error={errors.email} required>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={onChange}
            required
          />
        </Field>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label="Password" htmlFor="password" error={errors.password} required>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              value={form.password}
              onChange={onChange}
              required
            />
          </Field>
          <Field
            label="Confirm password"
            htmlFor="password_confirmation"
            error={errors.password_confirmation}
            required
          >
            <Input
              id="password_confirmation"
              name="password_confirmation"
              type="password"
              autoComplete="new-password"
              value={form.password_confirmation}
              onChange={onChange}
              required
            />
          </Field>
        </div>

        <Button type="submit" loading={submitting} className="w-full">
          Create account
        </Button>
      </form>
    </AuthShell>
  )
}
