import { IoMdSearch } from "react-icons/io";
import { FiArrowUpRight } from "react-icons/fi";
import InvestmentSection from "../components/HomePage/InvestmentSection";
import FutureSection from "../components/HomePage/FutureSection";
import { Reveal, Spotlight, MouseTilt } from "../lib/animations";

/* ─────────────────── HERO ─────────────────── */

function AboutHero() {
  return (
    <section
      className="relative overflow-hidden bg-[#032F74CC] px-4 md:px-10 lg:px-20 py-14 text-white lg:py-20"
      style={{
        backgroundImage: "url(/youth_skills.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-linear-to-r from-[#032F74CC]/99 via-[#032F74CC]/95 to-[#032F74CC]/85" />
      <div className="relative mx-auto max-w-310">
        <div className="inline-flex items-center gap-3 border-l-4 border-white/80 p-5">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-white">
            Invest Lagos 3.0
          </p>
        </div>
        <h1 className="mt-6 max-w-3xl text-2xl font-bold leading-tight sm:text-3xl lg:text-[34px] lg:leading-tight">
          Theme: Lagos &mdash; The Business Gateway to Africa
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
          Where investment meets scale, structure and sustained opportunity
        </p>
      </div>
    </section>
  );
}

/* ─────────────────── EXECUTIVE SUMMARY ─────────────────── */

function ExecutiveSummary() {
  return (
    <section className="bg-white px-6 py-14 lg:py-20">
      <div className="mx-auto max-w-275">
        <h2 className="text-2xl font-black text-green100 sm:text-3xl">
          Executive Summary
        </h2>
        {/* <div className="mt-3 h-0.5 w-14 bg-green100/60" /> */}

        {/* First block: paragraphs flowing around top-right image */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-5 text-[13px] leading-7 text-slate-600 sm:text-sm">
            <p>
              Invest Lagos 3.0 is conceived as a Presidential scale investment
              and innovation platform that consolidates Lagos State’s position
              as Africa’s most credible sub sovereign gateway to capital, trade,
              technology and talent. It reflects the economic maturity of
              imperative for structured, high Lagos and responds to the global
              confidence urban growth engines capable of absorbing long-term
              investment.
            </p>
            <p>
              Lagos already operates at national and continental scale.
              Contributing over thirty percent of Nigeria’s GDP and handling
              approximately seventy percent of national maritime cargo
              throughput, the state anchors West Africa’s trade architecture. It
              hosts more than 2,500 startups and commands Africa’s most vibrant
              innovation ecosystem. Its financial services depth, expanding
              industrial corridors, embedded power initiatives, inland waterways
              activation under Omi Eko and aviation development through Lekki
              International Airport collectively position it as a fully
              integrated gateway economy
            </p>
          </div>
          <div className="mt-8 lg:mt-0">
            <MouseTilt intensity={6}>
              <img
                src="/es1.jpg"
                alt="Lagos cityscape"
                className="aspect-4/3 w-full rounded-md object-cover shadow-md"
              />
            </MouseTilt>
          </div>
        </div>

        <div className="space-y-5 text-[13px] leading-7 text-slate-600 sm:text-sm mt-10">
          <p>
            Invest Lagos 3.0 translates these structural strengths into a
            disciplined global platform. In addition to its Presidential and
            subnational positioning, Invest Lagos 3.0 will formally integrate
            Lagos State’s structured engagement with Commonwealth economies and
            other strategic international trade partners. This integration
            ensures that Lagos’ capital mobilisation strategy is supported by
            organised diplomatic corridors, institutional trade relationships
            and cross border investment frameworks. International convening
            partners, including the Commonwealth Enterprise and Investment
            Council, will participate within a structured Diplomatic Investment
            Pavilion, supporting curated investor engagement rather than
            operating as a parallel summit identity.
          </p>
          <p>
            The summit will be opened by the President of the Federal Republic
            of Nigeria, reinforcing federal alignment and national economic
            coherence. Federal Honorable Ministers will participate across
            sectoral dialogues. Select sub sovereign Governors, including Enugu,
            Imo, Kano and Kaduna, will engage in structured competitiveness
            discussions, demonstrating coordinated subnational ambition. Private
            sector leadership will anchor the platform, with Abdulsamad Rabiu,
            Chairman of BUA Group invited to serve s Summit Chair and Mr. Aig
            Aigboje Imokhuedeas Co-Chairs, supported by leading financial
            institution
          </p>
        </div>

        {/* Second block: image left, text right */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <MouseTilt intensity={6}>
              <img
                src="/es2.jpg"
                alt="Lagos infrastructure"
                className="aspect-4/3 w-full rounded-md object-cover shadow-md"
              />
            </MouseTilt>
          </div>
          <div className="mt-8 space-y-5 text-[13px] leading-7 text-slate-600 sm:text-sm lg:mt-0">
            <p>
              The summit architecture is designed around five integrated
              pillars: Presidential Leadership Plenary, Panel Sessions, Pavilion
              Ecosystem Activation, Deal Room 2.0 Transaction Platform and a
              Masterclass and Talent Exchange Programme.
            </p>
            <p>
              The Pavilion Ecosystem will replace traditional exhibition formats
              with curated, sector -led economic zones. Innovation and AI,
              Creative Economy, Diplomatic Investment, Aviation, Marine and
              Waterways, Healthcare and Life Sciences, FinTech, Industrial
              Zones, Education and Workforce Development, Insurance and Risk
              Architecture, Energy Transition, Construction and Infrastructure,
              and Smart City Security will each operate as structured platforms
              led by credible private sector chairs and aligned with relevant
              Commissioners. These Pavilions will integrate enterprise
              demonstrations, investor engagement and sector -specific
              masterclasses.
            </p>
          </div>
        </div>

        {/* Full-width closing paragraphs */}
        <div className="mt-10 space-y-5 text-[13px] leading-7 text-slate-600 sm:text-sm">
          <p>
            The Deal Room will function as the commercial engine of the summit.
            8 to 12 curated, investment-ready projects will be profiled within a
            secure, invitation -only environment supported by development
            finance institutions and transaction advisors. Structured due
            diligence sessions, blended finance clinics and MOU drafting suites
            will facilitate measurable outcomes, including signed term sheets
            and defined pathways toward financial close.
          </p>
          <p>
            The Masterclass and Talent Exchange Programme will reinforce Lagos’
            commitment to aligning capital with capability. Artificial
            intelligence workshops, aviation engineering sessions, startup
            scaling clinics, trade facilitation seminars and risk structuring
            masterclasses will strengthen workforce readiness and deepen
            sectoral expertise. Arise TV will serve as the principal broadcast
            partner, ensuring live global coverage, structured interviews and
            sustained post-summit visibility. International media engagement,
            diplomatic outreach and digital amplification will position Invest
            Lagos 3.0 asa globally referenced economic platform.
          </p>
          <p>
            Success will be measured through multi-billion-dollar capital
            commitments, structured MoUs, unicorn scale pathways, workforce
            agreements, diplomatic trade frameworks and defined financial close
            timelines. Invest Lagos 3.0 institutionalises Lagos as Africa’s
            innovation capital, West Africa’s trade gateway and Nigeria’s most
            consequential subnational economic platform. It establishes a
            recurring global convening architecture anchored in Lagos State and
            reinforces its trajectory toward becoming one of the world’s leading
            city economies
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── SEARCH CTA ─────────────────── */

function AboutSearchCTA() {
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

export default function AboutPage() {
  return (
    <>
      <Spotlight color="rgba(255, 255, 255, 0.16)" size={620}>
        <Reveal direction="fade" duration={900}>
          <AboutHero />
        </Reveal>
      </Spotlight>
      <Reveal direction="up">
        <ExecutiveSummary />
      </Reveal>
      <Reveal direction="up">
        <InvestmentSection />
      </Reveal>
      <Spotlight color="rgba(99, 202, 168, 0.20)" size={560}>
        <Reveal direction="up">
          <FutureSection />
        </Reveal>
      </Spotlight>
      {/* <Reveal direction="up">
        <AboutSearchCTA />
      </Reveal> */}
    </>
  );
}
