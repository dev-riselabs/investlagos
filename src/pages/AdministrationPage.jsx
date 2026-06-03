import { IoMdSearch } from "react-icons/io";
import { FiArrowUpRight, FiUsers } from "react-icons/fi";
import {
  LuDollarSign,
  LuCalendar,
  LuHandshake,
  LuMegaphone,
  LuTruck,
  LuBuilding2,
} from "react-icons/lu";
import InformationSection from "../components/HomePage/InformationSection";
import { Reveal, Spotlight, MouseTilt } from "../lib/animations";
import { ArrowBigRight, ArrowRight } from "lucide-react";
import SpeakersCTA from "../components/Speakers/SpeakersCTA";
import FutureSection from "../components/HomePage/FutureSection";

/* ─────────────────── HERO ─────────────────── */

function AdministrationHero() {
  return (
    <section className="bg-green400 px-4 md:px-10 lg:px-20 py-14 text-white lg:py-20">
      <div className="mx-auto max-w-310 font-jost">
        <h1 className="text-2xl font-medium leading-tight sm:text-3xl lg:text-[32px]">
          Administrative Secretariat
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-white sm:text-base">
          This serves as the permanent administrative and technical body
          responsible for implementing the Summit's outcomes and coordinating
          future editions. Established to ensure continuity beyond the annual
          convenings, the Administration transforms high-level political
          commitments into measurable, operational reality.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────── INTRO (text + image) ─────────────────── */

function AdministrationIntro() {
  return (
    <section className="bg-white px-4 md:px-10 lg:px-20 py-16 lg:py-24">
      <div className="mx-auto grid max-w-310 items-center gap-12 lg:grid-cols-2 lg:gap-16 font-jost">
        <div>
          <h2 className="text-2xl font-medium leading-tight text-green400 sm:text-3xl lg:text-[32px]">
            Invent Lagos 3.0 Administration
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-black300">
            This serves as the permanent administrative and technical body
            responsible for implementing the Summit's outcomes and coordinating
            future editions. Established to ensure continuity beyond the annual
            convenings, the Administration transforms high-level political
            commitments into measurable, operational reality.
          </p>
          {/* <p className="mt-4 text-sm leading-relaxed text-black300">
            It is the structure behind the structure, enabling Lagos to host one of the most
            ambitious investment convenings on the continent.
          </p> */}
        </div>
        <div className="w-full">
          <MouseTilt intensity={6}>
            <img
              src="/administrative_subhero.png"
              alt="Administrative Secretariat at work"
              className="w-full rounded-2xl object-cover shadow-sm"
            />
          </MouseTilt>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── CORE RESPONSIBILITIES ─────────────────── */

const responsibilities = [
  {
    icon: LuDollarSign,
    title: "Delegate Services",
    desc: "Supporting participant registration, accreditation, enquiries and overall delegate experience before, during and after the summit.",
    accent: "bg-green100/15 text-green100",
  },
  {
    icon: FiUsers,
    title: "Stakeholder Engagement",
    desc: "Coordinating communication and engagement with government agencies, investors, sponsors, partners, speakers and institutional stakeholders.",
    accent: "bg-yellow/20 text-[#B8860B]",
  },
  {
    icon: LuCalendar,
    title: "Programme Coordination",
    desc: "Managing summit schedules, session planning, speaker logistics and programme implementation across all event activities.",
    accent: "bg-orange/15 text-orange",
  },
  {
    icon: LuHandshake,
    title: "Partnerships & Sponsorships",
    desc: "Facilitating collaboration with strategic partners, sponsors, development institutions, and private sector organizations supporting the summit.",
    accent: "bg-green100/15 text-green100",
  },
  {
    icon: LuMegaphone,
    title: "Media & Communications",
    desc: "Overseeing media relations, public communications, digital engagement, content management and information dissemination.",
    accent: "bg-yellow/20 text-[#B8860B]",
  },
  {
    icon: LuTruck,
    title: "Operations & Logistics",
    desc: "Ensuring seamless venue management, protocol services, transportation coordination, hospitality and event operations.",
    accent: "bg-orange/15 text-orange",
  },
];

function CoreResponsibilities() {
  return (
    <section className="bg-[#F5F7F6] px-4 md:px-10 lg:px-20 py-16 lg:py-20">
      <div className="mx-auto max-w-310 font-jost">
        <h2 className="text-2xl font-medium text-green400 sm:text-3xl">
          Our Core Responsibilities
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-green400">
          The Administrative Secretariat serves as the central coordinating
          office for Invest Lagos 3.0, providing administrative, operational and
          stakeholder support to ensure the successful planning and delivery of
          the summit.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {responsibilities.map(({ title, desc, accent }, i) => {
            const Icon =
              i % 3 === 0 ? LuDollarSign : i % 3 === 1 ? LuBuilding2 : FiUsers;
            return (
              <Reveal key={title} direction="up" delay={i * 90} distance={26}>
                <MouseTilt intensity={6}>
                  <article className="rounded-lg bg-white p-6 shadow-sm">
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-md ${
                        i % 3 === 0
                          ? "bg-green750/10"
                          : i % 3 === 1
                            ? "bg-orange/10"
                            : "bg-orange100/10"
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 ${
                          i % 3 === 0
                            ? "text-green750"
                            : i % 3 === 1
                              ? "text-orange"
                              : "text-orange100"
                        }`}
                      />
                    </span>
                    <h3 className="mt-4 text-sm font-bold text-slate-900">
                      {title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-500">
                      {desc}
                    </p>
                  </article>
                </MouseTilt>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── CONNECT CTA ─────────────────── */

function ConnectCTA() {
  return (
    <section className="bg-green100 px-4 md:px-10 lg:px-20 py-16 lg:py-20">
      <div className="mx-auto flex max-w-310 flex-col items-center text-center">
        <h2 className="text-2xl font-bold font-inter text-white sm:text-3xl">
          Connect with the Administrative Secretariat
        </h2>
        <p className="mt-4 max-w-5xl font-inter text-sm leading-7 text-white/80 sm:text-base">
          Reach out to the Invest Lagos 3.0 Secretariat for enquiries,
          stakeholder engagement, delegate support, partnerships and summit
          information. Our team is available to provide guidance and assistance
          throughout your Invest Lagos journey.
        </p>
        <a
          href="/contact"
          className="mt-8 inline-flex items-center justify-center rounded-md bg-red px-8 py-3 text-sm font-bold text-white! transition hover:opacity-90"
        >
          Contact Us &nbsp;&nbsp; <ArrowRight className="text-white w-4 h-4"/>
        </a>
      </div>
    </section>
  );
}

/* ─────────────────── SEARCH CTA ─────────────────── */

function AdministrationSearchCTA() {
  return (
    <section className="bg-white px-6 py-12">
      <div className="mx-auto max-w-310">
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
  );
}

export default function AdministrationPage() {
  return (
    <>
      <Spotlight color="rgba(253, 236, 63, 0.16)" size={560}>
        <Reveal direction="fade" duration={900}>
          <AdministrationHero />
        </Reveal>
      </Spotlight>
      <Reveal direction="up">
        <AdministrationIntro />
      </Reveal>
      <Reveal direction="up">
        <CoreResponsibilities />
      </Reveal>
      <Reveal direction="up">
        <ConnectCTA />
      </Reveal>
      <Reveal direction="up">
        <InformationSection />
      </Reveal>
      <Reveal direction="up">
        <FutureSection />
      </Reveal>
    </>
  );
}
