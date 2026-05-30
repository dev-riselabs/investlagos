import { FaSquareFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaRegCalendarAlt } from "react-icons/fa";
import { LuCircleArrowRight } from "react-icons/lu";

const footerLinks = [
  "About",
  "The Summit",
  "Investment Hub",
  "Media Centre",
  "Research",
  "Contact",
];

const socialIcons = [
  {
    label: "Facebook",
    icon: FaSquareFacebook,
    url: "https://www.facebook.com/profile.php?id=61564549807377",
  },
  {
    label: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/investlagos_?igsh=MXM3cXA4ZjFjcGQxaw%3D%3D",
  },
  {
    label: "YouTube",
    icon: FaYoutube,
    url: "https://www.youtube.com/@invest-lagos",
  },
  {
    label: "X",
    icon: FaXTwitter,
    url: "https://x.com/investlagos_",
  },
];

const Footer = () => {
  return (
    <footer className=" bg-green100 p-5 sm:p-8 lg:p-14">
      <div className="bg-white rounded-2xl">
        <div className="mx-auto max-w-310 px-6 pt-10 pb-8">
          {/* ── Dark green CTA card ── */}
          <div className="flex flex-col items-stretch gap-0 overflow-hidden rounded-xl bg-green200 shadow-footer sm:flex-row sm:items-center px-4 py-6 md:px-9 md:py-7.5 sm:divide-x-2 divide-white">
            <div className="flex sm:flex-1 md:items-center gap-4 lg:px-8 py-7">
              <div className="flex h-12 w-12 sm:h-17.5 sm:w-17.5 shrink-0 items-center justify-center rounded-md bg-green300">
                <FaRegCalendarAlt className="text-white w-7 h-7 md:w-10 md:h-10" />
              </div>
              <span className="text-sm text-white sm:text-lg font-inter">
                Partnerships. Growth. Lagos. Africa.
              </span>
            </div>

            <div className="flex-1 flex sm:justify-end">
              <div className="flex  items-center justify-center md:flex-row px-2 md:px-8 py-4 md:py-6.5 bg-white rounded-3xl md:rounded-full w-full md:w-auto gap-2 md:gap-5">
                <a
                  href="/DealBook for Invest Lagos 3.0.pdf"
                  download
                  className="text-xs sm:text-base font-bold text-red!"
                >
                  Download Investment Deal Book
                </a>
                <LuCircleArrowRight className="text-green100 w-6 md:w-8 h-6  md:h-8" />
              </div>
            </div>
          </div>

          {/* ── Navigation links ── */}
          <ul className="mt-8 grid grid-cols-2 sm:grid-cols-none sm:flex sm:flex-row sm:flex-wrap items-center justify-center sm:justify-start gap-x-10 gap-y-3 font-dmSans pb-8 text-sm md:text-base font-medium list-disc">
            {footerLinks.map((l) => (
              <li
                key={l}
                className="marker:text-black hover:marker:text-green ml-3"
              >
                <Link
                  to={l}
                  className=" transition text-black hover:text-green!"
                >
                  {l}
                </Link>
              </li>
            ))}
          </ul>

          {/* ── Logo + social icons ── */}
          <div className="mt-8 flex flex-col gap-6 items-center sm:flex-row sm:items-center sm:justify-between border-t border-black/20 pt-6 sm:border-t-0 sm:pt-0">
            <img
              src="/logo.png"
              alt="Invest Lagos"
              className="h-16 w-auto object-contain"
            />
            <div className="flex items-center gap-5">
              {socialIcons.map(({ label, icon: Icon, url }) => (
                <a key={label} href={url} aria-label={label} className="">
                  <Icon className="w-6 h-6 text-black" />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-6 border-t border-black/20" />

          {/* ── Legal links ── */}
          <ul className="mt-5 space-y-1.5 text-xs text-black text-center sm:text-left font-manrope font-light border-b border-black/20 pb-5 sm:border-b-0 sm:pb-0">
            <li>
              •{" "}
              <a href="#" className="hover:underline">
                Accessibility
              </a>
            </li>
            <li>
              •{" "}
              <a href="#" className="hover:underline">
                Terms &amp; Conditions
              </a>
            </li>
            <li>
              •{" "}
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>

          {/* ── Bottom Info Row ── */}
          <div className="mt-6 flex flex-col items-center sm:items-start font-manrope gap-5 text-[11px] leading-5 text-black font-light sm:flex-row sm:justify-between">
            <p className="max-w-xs text-center sm:text-left">
              Invest in Lagos is the flagship investment engagement platform
              designed to connect investors with opportunities across key
              sectors of the Lagos economy. The 3.0 edition is structured to
              drive partnerships that translate into measurable economic
              outcomes.
            </p>
            <div className="flex flex-col gap-px items-center text-center sm:text-left sm:items-start">
              <p>
                Ministry of Commerce, Cooperatives, Trade and Investment [MCCTI]
              </p>
              <p>Lagos State Government,</p>
              <p>Alausa, Nigeria.</p>
            </div>
            <div className="flex flex-col gap-px items-center text-center sm:text-left sm:items-start border-t border-black/20 pt-5 sm:border-t-0 sm:pt-0">
              <p>Copyright 2026. All Rights Reserved. Invest Lagos</p>
              <p>
                Website Designed &amp; Developed by{" "}
<<<<<<< HEAD
                <a href="eventsintel.com" className="font-bold">
                  Events Intel
                </a>
=======
                <a href="https://eventsintel.com" target="_blank" className="font-bold">Events Intel</a>
>>>>>>> 7448c7330a54abad8834fe1b0af628e9d820c749
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
