/**
 * Tiny set of themed form primitives shared by the admin pages.
 * Matches the existing site palette (green100/green200/red, Jost font).
 */

export function Field({ label, htmlFor, error, hint, children, required }) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1.5 inline-block text-xs font-medium uppercase tracking-wide text-green200">
        {label} {required && <span className="text-red">*</span>}
      </span>
      {children}
      {hint && !error && <span className="mt-1 block text-[11px] text-slate-400">{hint}</span>}
      {error && <span className="mt-1 block text-[11px] text-red">{error}</span>}
    </label>
  )
}

const inputBase =
  'w-full rounded-md border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 shadow-form-input focus:border-green100 focus:outline-none focus:ring-2 focus:ring-green100/20'

export function Input(props) {
  return <input {...props} className={`${inputBase} ${props.className || ''}`} />
}

export function Textarea(props) {
  return <textarea {...props} className={`${inputBase} min-h-[96px] ${props.className || ''}`} />
}

export function Select({ children, ...props }) {
  return (
    <select {...props} className={`${inputBase} ${props.className || ''}`}>
      {children}
    </select>
  )
}

export function Button({ variant = 'primary', loading, children, className = '', ...props }) {
  const variants = {
    primary:
      'bg-green100 text-white hover:bg-green300 disabled:bg-green100/60',
    secondary:
      'bg-white border border-slate-200 text-green200 hover:bg-green700 disabled:opacity-60',
    danger:
      'bg-red text-white hover:opacity-90 disabled:opacity-60',
    ghost:
      'text-green200 hover:bg-green700 disabled:opacity-60',
  }
  return (
    <button
      {...props}
      disabled={loading || props.disabled}
      className={`inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold transition disabled:cursor-not-allowed ${variants[variant]} ${className}`}
    >
      {loading && (
        <span className="h-3 w-3 animate-spin rounded-full border-2 border-current border-t-transparent" />
      )}
      {children}
    </button>
  )
}

export function Alert({ kind = 'error', children }) {
  const styles = {
    error: 'border-red/30 bg-red/5 text-red',
    success: 'border-green100/30 bg-green100/5 text-green200',
    info: 'border-slate-200 bg-slate-50 text-slate-600',
  }
  if (!children) return null
  return (
    <div className={`rounded-md border px-4 py-3 text-sm ${styles[kind]}`}>{children}</div>
  )
}

export function Card({ title, action, children, className = '' }) {
  return (
    <section className={`rounded-lg border border-slate-200 bg-white ${className}`}>
      {(title || action) && (
        <header className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          {title && <h2 className="text-sm font-semibold text-green200">{title}</h2>}
          {action}
        </header>
      )}
      <div className="px-5 py-5">{children}</div>
    </section>
  )
}

export function Modal({ open, title, onClose, children, maxWidth = 'max-w-2xl' }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8">
      <button
        type="button"
        aria-label="Close"
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />
      <div className={`relative z-10 w-full ${maxWidth} max-h-full overflow-y-auto rounded-lg bg-white shadow-xl`}>
        <header className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
          <h2 className="text-base font-semibold text-green200">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
            aria-label="Close"
          >
            ✕
          </button>
        </header>
        <div className="px-6 py-5">{children}</div>
      </div>
    </div>
  )
}

export function Badge({ tone = 'slate', children }) {
  const tones = {
    slate: 'bg-slate-100 text-slate-600',
    green: 'bg-green100/10 text-green200',
    red: 'bg-red/10 text-red',
    yellow: 'bg-yellow/30 text-slate-800',
  }
  return (
    <span className={`inline-flex items-center rounded-sm px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${tones[tone]}`}>
      {children}
    </span>
  )
}
