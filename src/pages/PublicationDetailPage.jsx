import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FiArrowLeft, FiDownload, FiExternalLink, FiCalendar } from 'react-icons/fi'
import { LuFolder, LuTag } from 'react-icons/lu'
import { fetchPublication } from '../lib/api'
import { fallbackPublications } from './PublicationsPage'

/* ─────────────────── Normalisers ─────────────────── */

function normaliseFromApi(row) {
  if (!row) return null
  return {
    img: row.image_url || row.image || '',
    tag: row.tag || 'Report',
    year: row.year ? String(row.year) : '',
    title: row.title || '',
    desc: row.description || '',
    category: row.category || '',
    content: row.content || '',
    fileUrl: row.file_url || '',
    externalUrl: row.external_url || '',
    accent: row.accent || 'bg-green100',
  }
}

function normaliseFromFallback(pub) {
  return {
    img: pub.img,
    tag: pub.tag,
    year: pub.date,
    title: pub.title,
    desc: pub.desc,
    category: '',
    content: pub.content,
    fileUrl: '',
    externalUrl: '',
    accent: pub.accent,
  }
}

/* ─────────────────── Sections ─────────────────── */

function PublicationHero({ pub }) {
  return (
    <section className="relative overflow-hidden bg-[#04191D] px-6 py-14 text-white lg:py-20">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'url(/bg_third_mainland_bridge.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#04191D]/95 via-[#04191D]/85 to-[#04191D]/60" />
      <div className="relative mx-auto max-w-[1240px]">
        <Link
          to="/publications"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-white/70 transition hover:text-yellow"
        >
          <FiArrowLeft className="h-4 w-4" /> Back to Publications
        </Link>
        <div className="mt-6 flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-wide">
          <span className="rounded-sm bg-white/10 px-3 py-1 text-white">
            <LuTag className="mr-1 inline h-3.5 w-3.5" />
            {pub.tag}
          </span>
          {pub.category && (
            <span className="rounded-sm bg-white/10 px-3 py-1 text-white">
              <LuFolder className="mr-1 inline h-3.5 w-3.5" />
              {pub.category}
            </span>
          )}
          {pub.year && (
            <span className="inline-flex items-center gap-1 text-white/70">
              <FiCalendar className="h-3.5 w-3.5" /> {pub.year}
            </span>
          )}
        </div>
        <h1 className="mt-4 max-w-4xl text-2xl font-black leading-tight sm:text-3xl lg:text-[40px]">
          {pub.title}
        </h1>
        {pub.desc && (
          <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-200 sm:text-base">{pub.desc}</p>
        )}
      </div>
    </section>
  )
}

function PublicationBody({ pub }) {
  const paragraphs = (pub.content || '').split(/\n{2,}/).filter(Boolean)
  return (
    <section className="bg-white px-6 py-12 lg:py-16">
      <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[1fr_320px]">
        <article className="min-w-0">
          {pub.img && (
            <img
              src={pub.img}
              alt={pub.title}
              className="mb-8 w-full rounded-md object-cover shadow-sm"
            />
          )}
          {paragraphs.length > 0 ? (
            paragraphs.map((p, i) => (
              <p key={i} className="mb-5 whitespace-pre-line text-[15px] leading-8 text-slate-700">
                {p}
              </p>
            ))
          ) : (
            <p className="text-sm text-slate-500">No additional content has been published for this item yet.</p>
          )}
        </article>

        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-md bg-[#F7F8FA] p-5 ring-1 ring-slate-100">
            <h3 className="text-xs font-bold uppercase tracking-wide text-slate-500">Publication</h3>
            <dl className="mt-3 space-y-2 text-[13px]">
              <div className="flex justify-between gap-3"><dt className="text-slate-500">Type</dt><dd className="font-semibold text-slate-800">{pub.tag}</dd></div>
              {pub.category && <div className="flex justify-between gap-3"><dt className="text-slate-500">Category</dt><dd className="font-semibold text-slate-800">{pub.category}</dd></div>}
              {pub.year && <div className="flex justify-between gap-3"><dt className="text-slate-500">Year</dt><dd className="font-semibold text-slate-800">{pub.year}</dd></div>}
            </dl>
          </div>

          {(pub.fileUrl || pub.externalUrl) && (
            <div className="space-y-3">
              {pub.fileUrl && (
                <a
                  href={pub.fileUrl}
                  download
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-green100 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-white transition hover:opacity-90"
                >
                  <FiDownload className="h-4 w-4" /> Download PDF
                </a>
              )}
              {pub.externalUrl && (
                <a
                  href={pub.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-green100 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-green100 transition hover:bg-green100/10"
                >
                  <FiExternalLink className="h-4 w-4" /> Read Online
                </a>
              )}
            </div>
          )}
        </aside>
      </div>
    </section>
  )
}

/* ─────────────────── Page ─────────────────── */

export default function PublicationDetailPage() {
  const { slug } = useParams()
  const [pub, setPub] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)
    setPub(null)
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })

    fetchPublication(slug)
      .then((res) => {
        if (cancelled) return
        const next = normaliseFromApi(res?.data)
        if (next) setPub(next)
        else throw new Error('Publication not found')
      })
      .catch(() => {
        if (cancelled) return
        // Fall back to the static list (used in local/preview).
        const match = fallbackPublications.find((p) => p.slug === slug)
        if (match) setPub(normaliseFromFallback(match))
        else setError('We couldn\u2019t find that publication.')
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => { cancelled = true }
  }, [slug])

  if (loading) {
    return (
      <section className="bg-white px-6 py-20">
        <p className="mx-auto max-w-[1240px] text-center text-sm text-slate-500">Loading publication…</p>
      </section>
    )
  }

  if (error || !pub) {
    return (
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-[1240px] text-center">
          <p className="text-sm text-slate-600">{error || 'Publication not found.'}</p>
          <Link
            to="/publications"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-green100 px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-white transition hover:opacity-90"
          >
            <FiArrowLeft className="h-4 w-4" /> Back to Publications
          </Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <PublicationHero pub={pub} />
      <PublicationBody pub={pub} />
    </>
  )
}
