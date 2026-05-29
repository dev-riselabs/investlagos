import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";

const navLinks = [
  { label: "About", path: "/about" },

  {
    label: "The Summit",
    path: "/the-summit",
    dropdown: true,
    children: [
      { label: "Governance Structure", path: "/the-summit/overview" },
      { label: "IL 1.0 & 2.0 Highlights", path: "/the-summit/agenda" },
      { label: "IL 3.0 Programme Flow", path: "/the-summit/speakers" },
      { label: "Administration", path: "/the-summit/speakers" },
    ],
  },

  {
    label: "INVESTMENT HUB",
    path: "/sectors",
    dropdown: true,
    children: [
      { label: "Deal Room", path: "/sectors/agriculture" },
      { label: "Future Leaders Corps", path: "/sectors/technology" },
      {
        label: "Business Exhibition & Cultural Showcase",
        path: "/sectors/technology",
      },
      { label: "Sectors", path: "/sectors/technology" },
      { label: "Incentives", path: "/sectors/technology" },
    ],
  },

  {
    label: "MEDIA CENTRE",
    path: "/media",
    dropdown: true,
    children: [
      { label: "Gallery", path: "/media/news" },
      { label: "Media Kits", path: "/media/gallery" },
      { label: "Press Releases", path: "/media/gallery" },
    ],
  },

  {
    label: "RESEARCH",
    path: "/pressroom",
    dropdown: true,
    children: [
      { label: "Policy Centre", path: "/pressroom/reports" },
      { label: "Data & Insights", path: "/pressroom/publications" },
      { label: "Publications", path: "/pressroom/publications" },
    ],
  },

  { label: "Contact Us", path: "/contact" },
];

function TopStripe() {
  const colors = ["#ED212B", "#3B7FCD", "#FDEC3F", "#10845B", "#562579"];
  return (
    <div className="flex h-2 md:h-4 w-full">
      {colors.map((c) => (
        <div key={c} className="flex-1" style={{ background: c }} />
      ))}
    </div>
  );
}

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <TopStripe />

      {/* Top white bar with partner branding */}
      <div className="mx-auto flex max-w-360 items-center justify-between lg:justify-around gap-4 px-6 py-4">
        {/* Invest Lagos logo */}
        <Link to="/" className="shrink-0" onClick={() => setMobileOpen(false)}>
          <img
            src="/logo.png"
            alt="Invest Lagos"
            className="h-12 w-auto object-contain sm:h-14"
          />
        </Link>

        {/* Center: in collaboration with + Lagos crest */}
        <div className="">
          <img
            src="/lagos_state_government.png"
            alt="Lagos State Government"
            className="h-14 w-auto object-contain"
          />
        </div>

        <div className="hidden md:flex items-center gap-2 lg:gap-5">
          <span className="text-sm text-black font-jost font-bold">
            in collaboration with
          </span>
          <img
            src="/commonwealth.png"
            alt="Commonwealth"
            className="h-10 w-auto object-contain"
          />
        </div>
        <div className="hidden md:flex flex-row items-center gap-2 lg:gap-5">
          <span className="text-sm font-jost text-black font-bold">
            Strategic Institutional Partner
          </span>
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
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* other partners on mobile */}
      <div className="flex items-center justify-between md:hidden gap-4 px-6 py-4">
        <div className="flex flex-col sm:items-center gap-1">
          <span className="text-[10px] text-black font-jost font-bold">
            in collaboration with
          </span>
          <img
            src="/commonwealth.png"
            alt="Commonwealth"
            className="h-10 w-auto object-contain"
          />
        </div>
        <div className="flex flex-col-reverse sm:flex-col items-center gap-1">
          <span className="text-[10px] font-jost text-black font-bold">
            Strategic Institutional Partner
          </span>
          <img
            src="/African_Export–Import_Bank_logo.svg-1 1.png"
            alt="Lagos State Government"
            className="h-14 w-auto object-contain"
          />
        </div>
      </div>

      {/* Green navigation bar */}
      <div className="bg-green100">
        <div className="w-full">
          {/* Desktop nav */}
          <nav className="hidden w-full items-stretch text-sm tracking-wider font-jost uppercase  lg:flex">
            {navLinks.map((l, index) => (
              <div
                key={l.label}
                className="relative flex flex-1 items-center group"
              >
                <NavLink
                  to={l.path}
                  className={({ isActive }) =>
                    `flex w-full items-center justify-center gap-2 py-4 transition text-white! ${
                      isActive
                        ? "bg-green text-[#F4C430]"
                        : "hover:bg-green hover:text-[#F4C430]"
                    }`
                  }
                >
                  {l.label}

                  {l.dropdown && (
                    <button className=" opacity-80">
                      <IoIosArrowDown className="w-4 h-4 text-white" />
                    </button>
                  )}
                </NavLink>

                {/* Dropdown */}
                {l.dropdown && l.children && (
                  <div className="absolute left-0 top-full z-50 hidden min-w-55 bg-white shadow-lg group-hover:block">
                    {l.children.map((item) => (
                      <Link
                        key={item.label}
                        to={item.path}
                        className="block px-5 py-3 text-sm text-black! hover:bg-green hover:text-white!"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}

                {/* Divider */}
                {index < navLinks.length - 1 && (
                  <span className="h-5 w-0.5 shrink-0 bg-white/80" />
                )}
              </div>
            ))}

            {/* Search */}
            <div className="flex items-center px-6">
              <span className="mr-6 h-5 w-0.5 bg-white/80" />

              <a
                href="#search"
                className="text-white/80 transition hover:text-[#F4C430]"
                aria-label="Search"
              >
                <IoMdSearch className="text-white w-5 h-5" />
              </a>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-24 left-0 z-10 w-full bg-green100 px-6 pb-4 lg:hidden">
          {navLinks.map((l) => (
            <div key={l.label}>
              {/* Main Nav Item */}
              <button
                onClick={() => {
                  if (l.dropdown) {
                    setOpenDropdown(openDropdown === l.label ? null : l.label);
                  } else {
                    setMobileOpen(false);
                  }
                }}
                className="flex w-full items-center justify-between border-b border-white/40 py-3 text-sm font-jost font-semibold uppercase text-white hover:text-yellow"
              >
                <span>{l.label}</span>

                {l.dropdown && (
                  <IoIosArrowDown
                    className={`transition-transform ${
                      openDropdown === l.label ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>

              {/* Dropdown */}
              {l.dropdown && openDropdown === l.label && l.children && (
                <div className="">
                  {l.children.map((item) => (
                    <NavLink
                      key={item.label}
                      to={item.path}
                      onClick={() => setMobileOpen(false)}
                      className="block border-b border-white/20 px-6 font-jost py-3 text-sm text-white! hover:text-yellow!"
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
