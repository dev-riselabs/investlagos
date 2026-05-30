import { Link } from 'react-router-dom'

/**
 * Branded card used by the admin login and signup pages so they share
 * the same hero-on-left / form-on-right composition.
 */
export default function AuthShell({ title, subtitle, children, footer }) {
  return (
    <div className="flex min-h-screen flex-col bg-green700 font-jost lg:flex-row">
      <section
        className="relative hidden flex-1 overflow-hidden bg-green200 px-12 py-16 text-white lg:flex lg:flex-col lg:justify-between"
        style={{
          backgroundImage: 'url(/bg_third_mainland_bridge.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green200/95 via-green200/85 to-green100/70" />
        <div className="relative">
          <Link to="/" className="inline-flex items-center">
            <img src="/logo_2.png" alt="Invest Lagos" className="h-12 w-auto object-contain" />
          </Link>
        </div>
        <div className="relative max-w-md">
          <h2 className="text-3xl font-bold leading-tight lg:text-4xl">Admin Console</h2>
          <p className="mt-4 text-sm leading-7 text-white/80">
            Manage publications, registrations and content for the Invest Lagos summit
            from a single, focused workspace.
          </p>
        </div>
        <div className="relative text-xs text-white/60">© {new Date().getFullYear()} Invest Lagos</div>
      </section>

      <section className="flex flex-1 items-center justify-center px-6 py-12 sm:px-12">
        <div className="w-full max-w-md">
          <Link
            to="/"
            className="mb-8 inline-block text-xs font-semibold uppercase tracking-wide text-green100 lg:hidden"
          >
            ← Back to site
          </Link>
          <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-[0_8px_24px_rgba(0,0,0,0.04)]">
            <h1 className="text-2xl font-bold text-green200">{title}</h1>
            {subtitle && <p className="mt-2 text-sm text-slate-500">{subtitle}</p>}
            <div className="mt-6">{children}</div>
          </div>
          {footer && <div className="mt-6 text-center text-sm text-slate-500">{footer}</div>}
        </div>
      </section>
    </div>
  )
}
