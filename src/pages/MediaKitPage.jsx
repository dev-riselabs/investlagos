import { useState } from 'react'
import { FiDownload, FiCheck, FiArrowUpRight } from 'react-icons/fi'
import { LuFileText, LuInfo, LuImage, LuBookOpen } from 'react-icons/lu'

const BOILERPLATE = `Invest Lagos is Lagos State's flagship investment engagement platform, designed to connect global investors with structured opportunities across priority sectors of the Lagos economy. The 3.0 edition deepens dialogue, partnerships and transactions that translate ambition into measurable investment outcomes for Lagos and Africa.`

/* ─────────────────── HERO ─────────────────── */

function MediaKitHero() {
  return (
    <section className="relative overflow-hidden bg-white skyline-bg px-6 py-14 lg:py-20">
      <div className="relative mx-auto max-w-[1240px]">
        <h1 className="text-2xl font-bold leading-tight text-green200 sm:text-3xl lg:text-[32px]">
          Media Kits
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
          Access a Media Kit including news, capacity, logos, branding assets and where speaker
          information and more downloadable press to support editorial and reportage coverage of
          Invest Lagos 3.0.
        </p>
      </div>
    </section>
  )
}

/* ─────────────────── ABOUT (Boilerplate) ─────────────────── */

function AboutBoilerplate() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(BOILERPLATE)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard may be unavailable — fail silently */
    }
  }

  return (
    <section className="bg-green200 px-6 py-12 lg:py-16">
      <div className="mx-auto max-w-[1240px]">
        <h2 className="flex items-center gap-3 text-lg font-bold text-white sm:text-xl">
          <LuFileText className="h-5 w-5" />
          About Invest Lagos 3.0 (Boilerplate)
        </h2>

        <div className="mt-6 rounded-md bg-white px-6 py-5 text-sm leading-7 text-slate-700">
          {BOILERPLATE}
        </div>

        <button
          type="button"
          onClick={copy}
          className="mt-5 inline-flex items-center gap-2 rounded-md bg-green100 px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-white transition hover:opacity-90"
        >
          {copied ? <FiCheck className="h-4 w-4" /> : <LuFileText className="h-4 w-4" />}
          {copied ? 'Copied' : 'Copy Boilerplate'}
        </button>
      </div>
    </section>
  )
}

/* ─────────────────── ESSENTIAL INFO ─────────────────── */

const essentialInfo = [
  { label: 'Event', value: 'Invest Lagos 3.0' },
  { label: 'Date', value: 'June 8 – 10, 2026 (Monday – Wednesday)' },
  { label: 'Location', value: 'Lagos, Nigeria' },
  {
    label: 'Host',
    value:
      'Ministry of Commerce, Cooperatives, Trade and Investment (MCCTI), Lagos State Government',
  },
  { label: 'Social Handle', value: '@investlagos_' },
  { label: 'Official Website', value: 'www.investlagos.com' },
]

function EssentialInfo() {
  return (
    <section className="bg-white px-6 py-14 lg:py-16">
      <div className="mx-auto max-w-[1240px]">
        <h2 className="flex items-center gap-3 text-lg font-bold text-green200 sm:text-xl">
          <LuInfo className="h-5 w-5 text-green100" />
          Essential Info
        </h2>
        <p className="mt-3 text-sm text-slate-500">
          Use this quick reference when writing about Invest Lagos 3.0.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {essentialInfo.map((item) => (
            <div
              key={item.label}
              className="flex gap-4 rounded-md bg-white px-5 py-4 ring-1 ring-slate-100"
            >
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green100/10 text-green100">
                <FiCheck className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-bold text-slate-900">{item.label}</p>
                <p className="mt-1 text-[13px] leading-6 text-slate-500">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── DOWNLOADABLE MEDIA ASSETS ─────────────────── */

const brandAssets = [
  'Official Invest Lagos full logo (PNG / SVG)',
  'Speaker Photos, brand secondary logo lockups (PNG / SVG)',
  'Brand Color palette, typography, photography and event imagery',
]

function DownloadableMediaAssets() {
  return (
    <section className="bg-[#F4F8F5] px-6 py-14 lg:py-16">
      <div className="mx-auto max-w-[1240px]">
        <h2 className="flex items-center gap-3 text-lg font-bold text-green200 sm:text-xl">
          <LuImage className="h-5 w-5 text-green100" />
          Downloadable Media Assets
        </h2>
        <p className="mt-3 max-w-3xl text-sm text-slate-500">
          Download the Invest Lagos 3.0 media kit and brand assets for use in editorial coverage.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {/* Media Kit PDF card */}
          <article className="flex flex-col items-center rounded-lg bg-white p-8 text-center shadow-sm ring-1 ring-slate-100">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-green100/10 text-green100">
              <LuFileText className="h-6 w-6" />
            </span>
            <h3 className="mt-4 text-base font-bold text-slate-900">Download The Media Kit (PDF)</h3>
            <p className="mt-2 max-w-sm text-[13px] leading-6 text-slate-500">
              A complete PDF with boilerplate, key facts and approved imagery for media use.
            </p>
            <a
              href="/DealBook for Invest Lagos 3.0.pdf"
              download
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-green100 px-6 py-2.5 text-xs font-semibold uppercase tracking-wide text-white transition hover:opacity-90"
            >
              <FiDownload className="h-4 w-4" />
              Download Media Kit
            </a>
          </article>

          {/* Brand Assets card */}
          <article className="flex flex-col rounded-lg bg-white p-8 shadow-sm ring-1 ring-slate-100">
            <div className="flex flex-col items-center text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-green100/10 text-green100">
                <LuImage className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-base font-bold text-slate-900">Access Brand Assets</h3>
            </div>
            <ul className="mt-5 space-y-2 self-center text-[13px] leading-6 text-slate-600">
              {brandAssets.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green100" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="mt-6 inline-flex items-center justify-center gap-2 self-center rounded-md bg-green100 px-6 py-2.5 text-xs font-semibold uppercase tracking-wide text-white transition hover:opacity-90"
            >
              <FiArrowUpRight className="h-4 w-4" />
              Access Brand Assets
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── USAGE GUIDELINES ─────────────────── */

const usageGuidelines = [
  {
    label: 'Live Coverage',
    body: 'Posting #InvestLagos3.0 across all social media and editorial features.',
  },
  {
    label: 'Hashtags',
    body: '',
    tags: ['#INVESTLAGOS', '#NaijaInvest', '#Lagos', '#Africa'],
  },
  {
    label: 'Mentions',
    body: 'Always include accurate event names, official handles and partner attribution where applicable.',
  },
  {
    label: 'Citations',
    body: 'For research and quoted material, cite Invest Lagos 3.0 and the supporting agency by name.',
  },
]

function UsageGuidelines() {
  return (
    <section className="bg-white px-6 py-14 lg:py-16">
      <div className="mx-auto max-w-[1240px]">
        <h2 className="flex items-center gap-3 text-lg font-bold text-green200 sm:text-xl">
          <LuBookOpen className="h-5 w-5 text-green100" />
          Usage Guidelines
        </h2>

        <div className="mt-6 space-y-5">
          {usageGuidelines.map((g) => (
            <div key={g.label} className="border-b border-slate-100 pb-5 last:border-b-0">
              <p className="text-sm font-bold text-slate-900">&lt; {g.label}</p>
              {g.body && (
                <p className="mt-2 text-[13px] leading-6 text-slate-500">{g.body}</p>
              )}
              {g.tags && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {g.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-sm bg-green100/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-green100"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function MediaKitPage() {
  return (
    <>
      <MediaKitHero />
      <AboutBoilerplate />
      <EssentialInfo />
      <DownloadableMediaAssets />
      <UsageGuidelines />
    </>
  )
}
