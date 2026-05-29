const footerLinks = ['About', 'The Summit', 'Investment Hub', 'Media Centre', 'Research', 'Contact']
const socialIcons = [
  { label: 'Facebook', path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
  { label: 'X', path: 'M4 4l16 16M4 20L20 4' },
  { label: 'LinkedIn', path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' },
  { label: 'YouTube', path: 'M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z' },
]

const Footer = () => {
  return (
    <footer className=" bg-[#099567] p-5 sm:p-8 lg:p-14">
      <div className="bg-white text-gray-800 rounded-2xl">
 <div className="mx-auto max-w-[1240px] px-6 pt-10 pb-8">

        {/* ── Dark green CTA card ── */}
        <div className="flex flex-col items-stretch gap-0 overflow-hidden rounded-xl bg-[#07422e] sm:flex-row sm:items-center">
          <div className="flex flex-1 items-center gap-4 px-8 py-7">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-white/10">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
                <rect x="3" y="4" width="18" height="18" rx="2"/>
                <path d="M16 2v4M8 2v4M3 10h18"/>
                <rect x="7" y="14" width="2" height="2" fill="white"/>
                <rect x="11" y="14" width="2" height="2" fill="white"/>
                <rect x="15" y="14" width="2" height="2" fill="white"/>
              </svg>
            </div>
            <span className="text-base font-semibold text-white sm:text-lg">
              Partnerships. Growth. Lagos. Africa.
            </span>
          </div>

          <div className="hidden w-px self-stretch bg-white/20 sm:block" />

          <div className="flex items-center justify-center px-8 py-7">
            <a
              href="#"
              className="flex items-center gap-3 rounded-full border border-white/30 bg-white px-6 py-3 text-sm font-bold text-[#C0392B] transition hover:bg-gray-50"
            >
              Download Investment Deal Book
              <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#007B5E]">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#007B5E" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </a>
          </div>
        </div>

        {/* ── Navigation links ── */}
        <nav className="mt-8 flex flex-wrap gap-x-10 gap-y-3 border-b border-gray-200 pb-8 text-sm font-medium text-gray-700">
          {footerLinks.map((l) => (
            <a key={l} href="#" className="hover:text-[#007B5E] transition">{l}</a>
          ))}
        </nav>

        {/* ── Logo + social icons ── */}
        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <img src="/logo.png" alt="Invest Lagos" className="h-16 w-auto object-contain" />
          <div className="flex items-center gap-3">
            {socialIcons.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded border border-gray-300 text-gray-600 transition hover:border-[#007B5E] hover:text-[#007B5E]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 border-t border-gray-200" />

        {/* ── Legal links ── */}
        <ul className="mt-5 space-y-1 text-xs text-gray-500">
          <li>• <a href="#" className="hover:underline">Accessibility</a></li>
          <li>• <a href="#" className="hover:underline">Terms &amp; Conditions</a></li>
          <li>• <a href="#" className="hover:underline">Privacy Policy</a></li>
        </ul>

        {/* ── Bottom Info Row ── */}
        <div className="mt-6 flex flex-col gap-5 text-[11px] leading-5 text-gray-400 sm:flex-row sm:justify-between">
          <p className="max-w-xs">
            Invest in Lagos is the flagship investment engagement platform designed to connect
            investors with opportunities across key sectors of the Lagos economy. The 3.0 edition is
            structured to drive partnerships that translate into measurable economic outcomes.
          </p>
          <div>
            <p>Ministry of Commerce, Cooperatives, Trade and Investment [MCCTI]</p>
            <p>Lagos State Government,</p>
            <p>Alausa, Nigeria.</p>
          </div>
          <div className="sm:text-right">
            <p>Copyright 2026. All Rights Reserved. Invest Lagos</p>
            <p>
              Website Designed &amp; Developed by{' '}
              <span className="font-bold text-gray-600">Events Intel</span>
            </p>
          </div>
        </div>

      </div>
      </div>
     
    </footer>
  )
}

export default Footer