import { useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import AuthShell from '../AuthShell'
import { useAuth } from '../AuthContext'
import { Alert, Button, Field, Input } from '../ui'

export default function AdminLogin() {
  const { login, isAuthenticated, isAdmin, loading } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const redirectTo = location.state?.from || '/admin'

  const [form, setForm] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})
  const [generalError, setGeneralError] = useState(null)
  const [submitting, setSubmitting] = useState(false)

  if (!loading && isAuthenticated && isAdmin) {
    return <Navigate to={redirectTo} replace />
  }

  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setGeneralError(null)
    setErrors({})
    setSubmitting(true)
    try {
      await login(form)
      navigate(redirectTo, { replace: true })
    } catch (err) {
      if (err.status === 422 && err.errors) {
        // Flatten Laravel's { field: [msg] } shape down to a single string per field.
        const flat = Object.fromEntries(
          Object.entries(err.errors).map(([k, v]) => [k, Array.isArray(v) ? v[0] : String(v)]),
        )
        setErrors(flat)
        setGeneralError(err.message || 'Please correct the errors below.')
      } else {
        setGeneralError(err.message || 'Unable to sign in. Please try again.')
      }
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <AuthShell
      title="Sign in"
      subtitle="Access the Invest Lagos admin console."
      footer={
        <span>
          Need an admin account?{' '}
          <Link to="/admin/signup" className="font-semibold text-green100 hover:underline">
            Create one
          </Link>
        </span>
      }
    >
      <form onSubmit={onSubmit} className="space-y-4" noValidate>
        {generalError && <Alert kind="error">{generalError}</Alert>}

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

        <Field label="Password" htmlFor="password" error={errors.password} required>
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            value={form.password}
            onChange={onChange}
            required
          />
        </Field>

        <Button type="submit" loading={submitting} className="w-full">
          Sign in
        </Button>
      </form>
    </AuthShell>
  )
}
