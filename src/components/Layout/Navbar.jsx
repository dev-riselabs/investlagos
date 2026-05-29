import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'



const navLinks = [
  { label: 'About', path: '/about' },
  { label: 'The Summit', path: '/the-summit', dropdown: true },
  { label: 'Investment In LA', path: '/sectors', dropdown: true },
  { label: 'Media Center', path: '/media', dropdown: true },
  { label: 'Pressroom', path: '/pressroom', dropdown: true },
  { label: 'Contact Us', path: '/contact' },
]

function TopStripe() {
  const colors = ['#007B5E', '#00A878', '#F4C430', '#E8722A', '#C0392B']
  return (
    <div className="flex h-4 w-full">
      {colors.map((c) => (
        <div key={c} className="flex-1" style={{ background: c }} />
      ))}
    </div>
  )
}

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <TopStripe />
      
      {/* Top white bar with partner branding */}
      <div className="mx-auto flex max-w-[1440px] items-center justify-between lg:justify-around gap-4 px-6 py-4">
        {/* Invest Lagos logo */}
        <Link to="/" className="shrink-0" onClick={() => setMobileOpen(false)}>
          <img src="/logo.png" alt="Invest Lagos" className="h-12 w-auto object-contain sm:h-14" />
        </Link>

        {/* Center: in collaboration with + Lagos crest */}
        <div className="hidden  md:flex flex-row-reverse items-center gap-5">
          <span className="text-sm  text-gray-900 font-semibold">in collaboration with</span>
          <img
            src="/lagos_state_government.png"
            alt="Lagos State Government"
            className="h-14 w-auto object-contain"
          />
        </div>

<div className="hidden md:flex flex-col items-end">
            <img
              src="/commonwealth.png"
              alt="Commonwealth"
              className="h-10 w-auto object-contain"
            />
            <span className="mt-0.5 text-[9px] font-medium text-gray-500">
              Strategic Initiative Partners
            </span>
          </div>
        <div className="hidden  md:flex flex-row items-center gap-5">
          <span className="text-sm  text-gray-900 font-semibold">Strategic Institutional Partner</span>
          <img
            src="/African_Export–Import_Bank_logo.svg-1 1.png"
            alt="Lagos State Government"
            className="h-14 w-auto object-contain"
          />
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-gray-600"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Green navigation bar */}
    <div className="bg-[#007B5E]">
        <div className="w-full">
          {/* Desktop nav */}
          <nav className="hidden w-full items-stretch text-[13px] font-semibold tracking-wider text-white lg:flex">
            {navLinks.map((l, index) => (
              <div key={l.label} className="flex flex-1 items-center">
                <NavLink
                  to={l.path}
                  className={({ isActive }) =>
                    `flex w-full items-center justify-center gap-2 py-4 transition ${
                      isActive 
                        ? 'bg-[#005f48] text-[#F4C430]' 
                        : 'hover:bg-[#006e54] hover:text-[#F4C430]'
                    }`
                  }
                >
                  {l.label}
                  {l.dropdown && <span className="text-[10px] opacity-80">▼</span>}
                </NavLink>
                
                {/* Vertical Divider line between items (skips after last link) */}
                {index < navLinks.length - 1 && (
                  <span className="h-5 w-[1px] bg-white/20 shrink-0" />
                )}
              </div>
            ))}
            
            {/* Search Icon Section with starting divider */}
            <div className="flex items-center px-6">
              <span className="mr-6 h-5 w-[1px] bg-white/20" />
              <a href="#search" className="text-white/80 hover:text-[#F4C430] transition" aria-label="Search">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="11" cy="11" r="7"/>
                  <path d="m21 21-4.3-4.3"/>
                </svg>
              </a>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t bg-[#007B5E] px-6 pb-4 lg:hidden">
          {navLinks.map((l) => (
            <NavLink
              key={l.label}
              to={l.path}
              onClick={() => setMobileOpen(false)}
              className="block border-b border-white/10 py-3 text-sm font-semibold text-white hover:text-[#F4C430]"
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}

export default Navbar