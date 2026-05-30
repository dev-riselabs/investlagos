import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMdSearch, IoIosArrowDown } from 'react-icons/io'
import { FiArrowUpRight } from 'react-icons/fi'
import { FaPlay } from 'react-icons/fa'
import { fetchPublications, fetchPublicationFilters } from '../lib/api'
import { slugify, FALLBACK_PUBLICATION_CONTENT } from '../lib/publications'
import { Reveal, Spotlight, MouseTilt } from '../lib/animations'

/* ─────────────────── STATIC FALLBACK ─────────────────── */
// Used only when the API is unreachable or empty so the marketing
// page never renders an empty grid in local/preview environments.

const RAW_FALLBACK_PUBLICATIONS = [
  {
    img: '/Lagos Unveils Investment Deal Book, Bold Vision for a 21st-Century Economy.png',
    tag: 'Report',
    date: '2024',
    title: 'Lagos Investment Guide',
    desc: 'A comprehensive overview highlighting investment opportunities, sectoral entry points and incentives across Lagos State.',
    accent: 'bg-red',
  },
  {
    img: '/Vision for a 21st-Century Economy.png',
    tag: 'Report',
    date: '2024',
    title: 'Economic Facts & Figures',
    desc: 'A snapshot of key macroeconomic trends, indicators and demographic data for investors and decision-makers.',
    accent: 'bg-[#3B7FCD]',
  },
  {
    img: '/Century Economy.png',
    tag: 'Policy',
    date: '2024',
    title: 'Policy Briefs',
    desc: 'A concise analysis of recent legislation, reforms and emerging policies shaping the business environment in Lagos.',
    accent: 'bg-yellow',
  },
  {
    img: '/Lagos Unveils Investment Deal Book, Bold Vision for a 21st-Century Economy.png',
    tag: 'Report',
    date: '2024',
    title: 'Industry Reports',
    desc: 'In-depth reports examining sector performance, investment trends, challenges and emerging market opportunities.',
    accent: 'bg-red',
  },
  {
    img: '/Vision for a 21st-Century Economy.png',
    tag: 'Case Study',
    date: '2024',
    title: 'Investment Case Studies',
    desc: 'Real-world examples of successful investments, partnerships and projects contributing to Lagos\u2019 economic transformation.',
    accent: 'bg-[#3B7FCD]',
  },
  {
    img: '/Century Economy.png',
    tag: 'Communiqué',
    date: '2024',
    title: 'Summit Reports & Communiqués',
    desc: 'Official summit outcomes, communiqués, key takeaways, thought leadership pieces and resources from past Invest Lagos engagements.',
    accent: 'bg-yellow',
  },
]

export const fallbackPublications = RAW_FALLBACK_PUBLICATIONS.map((p) => ({
  ...p,
  slug: slugify(p.title),
  content: FALLBACK_PUBLICATION_CONTENT,
}))

const ACCENT_CYCLE = ['bg-red', 'bg-[#3B7FCD]', 'bg-yellow']

/**
 * Normalize the API row into the shape the card component expects.
 * Accent falls back to a deterministic cycle so cards stay visually
 * varied even when the admin hasn't set one explicitly.
 */
function mapApiPublication(row, index) {
  return {
    img: row.image_url || row.image || '/Lagos Unveils Investment Deal Book, Bold Vision for a 21st-Century Economy.png',
    tag: row.tag || 'Report',
    date: row.year ? String(row.year) : '',
    title: row.title,
    desc: row.description,
    accent: row.accent || ACCENT_CYCLE[index % ACCENT_CYCLE.length],
    slug: row.slug || slugify(row.title || ''),
    category: row.category || '',
    content: row.content || '',
    fileUrl: row.file_url || '',
    externalUrl: row.external_url || '',
  }
}

/* ─────────────────── SECTIONS ─────────────────── */

function PublicationsHero() {
  return (
    <section
      className="relative overflow-hidden bg-[#04191D] px-6 py-16 text-white lg:py-20"
      style={{
        backgroundImage: 'url(/bg_third_mainland_bridge.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#04191D]/95 via-[#04191D]/80 to-[#04191D]/40" />
      <div className="relative mx-auto max-w-[1240px]">
        <h1 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">Publications</h1>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-200 sm:text-base">
          Research reports, investment guides, policy papers, case studies, communiqués and briefing
          documents that provide deeper insights into Lagos&apos; economy and investment opportunities.
        </p>
      </div>
    </section>
  )
}

function PublicationsFilterBar({ query, onQueryChange, category, onCategoryChange, year, onYearChange, categories, years }) {
  return (
    <div className="bg-green100 px-6 py-6">
      <div className="mx-auto max-w-[1100px]">
        <div className="flex flex-col items-stretch gap-3 rounded-full bg-green200 p-2 sm:flex-row sm:items-center">
          <div className="flex flex-1 items-center gap-3 rounded-full bg-white/95 px-5 py-2.5">
            <IoMdSearch className="h-5 w-5 text-slate-500" />
            <input
              type="text"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder="Search publications..."
              className="flex-1 bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
            />
          </div>
          <div className="relative flex items-center rounded-full bg-white/95 px-5 py-2.5 text-sm text-slate-600 sm:w-44">
            <select
              value={category}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="w-full appearance-none bg-transparent pr-6 focus:outline-none"
            >
              <option value="">Categories</option>
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <IoIosArrowDown className="pointer-events-none absolute right-4 h-4 w-4 text-slate-500" />
          </div>
          <div className="relative flex items-center rounded-full bg-white/95 px-5 py-2.5 text-sm text-slate-600 sm:w-36">
            <select
              value={year}
              onChange={(e) => onYearChange(e.target.value)}
              className="w-full appearance-none bg-transparent pr-6 focus:outline-none"
            >
              <option value="">All Years</option>
              {years.map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
            <IoIosArrowDown className="pointer-events-none absolute right-4 h-4 w-4 text-slate-500" />
          </div>
        </div>
      </div>
    </div>
  )
}

function PublicationCard({ pub }) {
  const to = pub.slug ? `/publications/${pub.slug}` : '#'
  return (
    <article className="flex flex-col overflow-hidden rounded-md bg-white shadow-[0_4px_12px_rgba(0,0,0,0.06)] il-card">
      <Link to={to} className="block aspect-[4/3] w-full overflow-hidden il-card-media">
        <img src={pub.img} alt={pub.title} className="h-full w-full object-cover transition duration-300 hover:scale-[1.02]" />
      </Link>
      <div className="flex flex-1 flex-col gap-3 px-6 pt-5 pb-6">
        <div className="flex items-center gap-3 text-[11px] font-medium text-slate-500">
          <span className="rounded-sm bg-slate-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-600">
            {pub.tag}
          </span>
          <span className="text-slate-400">•</span>
          <span>{pub.date}</span>
        </div>
        <h3 className="text-base font-bold text-black100">
          <Link to={to} className="transition hover:text-green100">{pub.title}</Link>
        </h3>
        <p className="text-[13px] leading-6 text-slate-500">{pub.desc}</p>
        <Link
          to={to}
          className="mt-auto inline-flex w-fit items-center gap-1 pt-2 text-xs font-semibold text-green100 transition hover:opacity-80"
        >
          {pub.tag || 'Read'} <span aria-hidden="true">»</span>
        </Link>
      </div>
      <div className={`h-1 w-full ${pub.accent}`} />
    </article>
  )
}


function PublicationsGrid({ items, loading, error }) {
  return (
    <section className="bg-[#F7F8FA] px-6 py-14 lg:py-20">
      <div className="mx-auto max-w-[1240px]">
        {loading && (
          <p className="py-10 text-center text-sm text-slate-500">Loading publications…</p>
        )}
        {!loading && error && (
          <p className="py-10 text-center text-sm text-red-600">{error}</p>
        )}
        {!loading && !error && items.length === 0 && (
          <p className="py-10 text-center text-sm text-slate-500">No publications match your filters.</p>
        )}
        {!loading && !error && items.length > 0 && (
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((pub, i) => (
              <Reveal
                key={`${pub.title}-${i}`}
                direction="up"
                delay={(i % 6) * 90}
                distance={26}
              >
                <MouseTilt intensity={5}>
                  <PublicationCard pub={pub} />
                </MouseTilt>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

function PublicationsDealBook() {
  return (
    <section className="dealbook-bg flex flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:gap-10 md:px-10 md:py-14 lg:px-20">
      <div className="md:flex-1">
        <img src="/lagos.png" alt="Lagos Investment Deal Book" className="max-h-130" />
      </div>
      <div className="flex max-w-sm flex-col gap-6 md:flex-1 md:items-center">
        <h3 className="font-jost text-2xl font-medium text-green100 md:text-center md:text-4xl">
          Download Our
          <br className="hidden md:block" /> Investment Deal Book
        </h3>
        <a
          href="/DealBook for Invest Lagos 3.0.pdf"
          download
          className="flex items-center gap-2 self-start rounded-sm bg-red py-1.5 pl-4 pr-5 md:gap-4 md:self-center md:p-2.5 md:px-8"
        >
          <span className="font-jost text-xs font-bold text-white">Download</span>
          <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-white/20 backdrop-blur-md backdrop-brightness-90 md:h-9 md:w-9">
            <FaPlay className="h-4 w-4 text-white md:h-5 md:w-5" />
          </div>
        </a>
      </div>
    </section>
  )
}

function PublicationsSearchCTA() {
  return (
    <section className="bg-white px-6 py-12">
      <div className="mx-auto max-w-[1240px]">
        <div className="flex flex-col items-stretch gap-3 rounded-lg bg-green200 p-3 sm:flex-row sm:items-center">
          <div className="flex flex-1 items-center gap-3 rounded-md bg-white/10 px-5 py-3">
            <IoMdSearch className="h-5 w-5 text-white/70" />
            <input
              type="text"
              placeholder="Pan Africa Growth, Lagos Africa..."
              className="flex-1 bg-transparent text-sm text-white placeholder:text-white/60 focus:outline-none"
            />
          </div>
          <a
            href="#"
            className="flex items-center justify-center gap-3 rounded-md bg-green100 px-6 py-3 font-jost text-sm font-semibold text-white transition hover:opacity-90"
          >
            <span>Investment Information Hub</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
              <FiArrowUpRight className="h-4 w-4 text-white" />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default function PublicationsPage() {
  const [query, setQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')
  const [category, setCategory] = useState('')
  const [year, setYear] = useState('')
  const [categories, setCategories] = useState([])
  const [years, setYears] = useState([])
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Load filter options once.
  useEffect(() => {
    let cancelled = false
    fetchPublicationFilters()
      .then((res) => {
        if (cancelled) return
        setCategories(Array.isArray(res?.categories) ? res.categories : [])
        setYears(Array.isArray(res?.years) ? res.years : [])
      })
      .catch(() => {
        // Filters are optional; failing here just hides the dropdown options.
      })
    return () => { cancelled = true }
  }, [])

  // Debounce the search input so we don't hammer the API.
  useEffect(() => {
    const t = setTimeout(() => setDebouncedQuery(query.trim()), 300)
    return () => clearTimeout(t)
  }, [query])

  // Fetch publications whenever the query or filters change.
  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)
    fetchPublications({ q: debouncedQuery, category, year, per_page: 24 })
      .then((res) => {
        if (cancelled) return
        const rows = Array.isArray(res?.data) ? res.data : []
        if (rows.length === 0 && !debouncedQuery && !category && !year) {
          // Empty CMS — keep the marketing layout populated.
          setItems(fallbackPublications)
        } else {
          setItems(rows.map(mapApiPublication))
        }
      })
      .catch(() => {
        if (cancelled) return
        // API unreachable — fall back gracefully.
        setItems(fallbackPublications)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => { cancelled = true }
  }, [debouncedQuery, category, year])

  const visibleItems = useMemo(() => items, [items])

  return (
    <>
      <Spotlight color="rgba(99, 202, 168, 0.20)" size={600}>
        <Reveal direction="fade" duration={900}>
          <PublicationsHero />
        </Reveal>
      </Spotlight>
      <Reveal direction="down" duration={600}>
        <PublicationsFilterBar
          query={query}
          onQueryChange={setQuery}
          category={category}
          onCategoryChange={setCategory}
          year={year}
          onYearChange={setYear}
          categories={categories}
          years={years}
        />
      </Reveal>
      <Reveal direction="up">
        <PublicationsGrid items={visibleItems} loading={loading} error={error} />
      </Reveal>
      <Reveal direction="up">
        <PublicationsDealBook />
      </Reveal>
      <Reveal direction="up">
        <PublicationsSearchCTA />
      </Reveal>
    </>
  )
}
