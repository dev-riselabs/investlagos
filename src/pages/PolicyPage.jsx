import { IoMdSearch } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import {
  FiArrowUpRight,
  FiArrowRight,
  FiFilter,
  FiBookOpen,
} from "react-icons/fi";
import {
  LuFileText,
  LuChartBar,
  LuBuilding2,
  LuLeaf,
  LuScale,
  LuBriefcase,
  LuGraduationCap,
  LuHeartPulse,
} from "react-icons/lu";
import InformationSection from "../components/HomePage/InformationSection";
import SpeakersCTA from '../components/Speakers/SpeakersCTA'
import { Reveal, Spotlight, MouseTilt } from "../lib/animations";
import { TrendingUp } from "lucide-react";

/* ─────────────────── HERO ─────────────────── */

function PolicyHero() {
  return (
    <section
      className="relative overflow-hidden px-4 md:px-10 lg:px-20 py-16 text-white lg:py-20"
      style={{
        backgroundImage: "url(/policy-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative mx-auto max-w-310 space-x-6">
        <h1 className="text-3xl font-bold font-inter text-white leading-tight sm:text-4xl lg:text-5xl">
          Policy Centre
        </h1>
        <p className="max-w-2xl text-sm leading-7 text-white font-inter sm:text-lg">
          A hub of evidence-based research, policy briefs and strategic insights
          shaping the future of investment, economic transformation and
          sustainable growth across Lagos State.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────── STATS ─────────────────── */

const policyStats = [
  { value: "12", label: "Research Reports" },
  { value: "5", label: "Policy Briefs" },
  { value: "20", label: "LGAs " },
  { value: "100K", label: "Total Downloads" },
];

function PolicyStats() {
  return (
    <section className="border-y border-gray-100 bg-slate450 py-14">
      <div className="mx-auto grid max-w-310 grid-cols-2 gap-8 px-6 md:grid-cols-4">
        {policyStats.map((s) => (
          <div key={s.label} className="text-center space-y-2">
            <p className="text-3xl font-bold font-inter text-green100 sm:text-5xl">
              {s.value}
            </p>
            <p className="text-sm text-violet font-medium">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────── RESEARCH FOCUS AREAS ─────────────────── */

const focusAreas = [
  {
    title: "Economic Policy",
    desc: "Access data-driven insights, market trends, and economic indicators shaping investment decisions in Lagos and across Africa.",
    accent: "bg-green100/15 text-green100",
  },
  {
    title: "Sector Deep Dives",
    desc: "Explore detailed analyses of priority sectors including infrastructure, technology, healthcare, manufacturing, energy, and the creative economy.",
    accent: "bg-green100/15 text-green100",
  },
  {
    title: "Investment Outlook",
    desc: "Discover emerging opportunities, growth projections, and strategic developments positioning Lagos for long-term economic expansion.",
    accent: "bg-green100/15 text-green100",
  },
];

function ResearchFocusAreas() {
  return (
    <section className="bg-white px-4 md:px-10 lg:px-20 py-16 lg:py-20">
      <div className="mx-auto max-w-310">
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold font-jost text-green400 sm:text-3xl">
            Research Focus Areas
          </h2>
          <p className=" max-w-[50ch] text-sm leading-relaxed text-green400 font-jost">
            Our research informs policy decisions across Lagos most critical
            economic development challenges
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-3 lg:grid-cols-3 h-full">
          {focusAreas.map(({ icon: Icon, title, desc, accent }, i) => (
            <Reveal
              key={title}
              direction="up"
              delay={i * 90}
              distance={26}
              className="h-full"
            >
              <MouseTilt intensity={6} className="h-full">
                <article className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate250 il-card flex flex-col gap-3 h-full">
                  <span
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-md ${accent}`}
                  >
                    <TrendingUp className="h-5 w-5" />
                  </span>
                  <h3 className="text-base font-jost font-bold text-black300">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-violet">{desc}</p>
                </article>
              </MouseTilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── FILTER BAR ─────────────────── */

function PolicyFilterBar() {
  return (
    <div className="bg-green200 px-4 md:px-10 lg:px-20 py-10">
      <div className="ml-auto max-w-310 flex items-center md:justify-end flex-wrap gap-3">
        <div className="flex items-center gap-3 rounded-md border border-white px-5 py-2.5">
          <IoMdSearch className="h-5 w-5 text-white" />
          <input
            type="text"
            placeholder="Search policy briefs and reports..."
            className="flex-1 bg-transparent text-sm text-white placeholder:text-white/80 focus:outline-none"
          />
        </div>
        <div className="relative flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm text-slate-600 sm:w-44">
          <FiFilter className="w-5 h-5 text-black200" />
          <select className="w-full  pr-6 focus:outline-none">
            <option>All Topics</option>
          </select>
        </div>
        <div className="relative flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm text-slate-600 sm:w-36">
          <FiFilter className="w-5 h-5 text-black200" />
          <select className="w-full pr-6 focus:outline-none">
            <option>All Years</option>
          </select>
        </div>
        <div className="relative flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm text-slate-600 sm:w-36">
          <FiFilter className="w-5 h-5 text-black200" />
          <select className="w-full pr-6 focus:outline-none">
            <option>All</option>
          </select>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────── POLICY BRIEFS GRID ─────────────────── */

const policyBriefs = [
  {
    tag: "Report",
    year: "2025",
    lang: "English",
    event: "Invest Lagos 3.0",
    category: "trade",
    title: "Ease of Doing Business Reforms",
    desc: "Learn about the policies, reforms, and initiatives improving the business environment and enhancing investor confidence in Lagos.",
  },
  {
    tag: "Report",
    year: "2025",
    lang: "English",
    event: "Invest Lagos 3.0",
    category: "trade",
    title: "Public-Private Partnerships",
    desc: "Explore frameworks and opportunities enabling collaboration between government and the private sector to deliver transformative projects.",
  },
  {
    tag: "Report",
    year: "2025",
    lang: "English",
    event: "Invest Lagos 3.0",
    category: "trade",
    title: "Regulatory Insights",
    desc: "Stay informed on key regulatory developments, investment guidelines, and policy updates relevant to businesses and investors.",
  },
  {
    tag: "Report",
    year: "2025",
    lang: "English",
    event: "Invest Lagos 3.0",
    category: "trade",
    title: "Development Agenda",
    desc: "Understand the long-term vision, priorities and policy direction driving Lagos’ economic growth and competitiveness.",
  },
];

function PolicyBriefCard({ brief }) {
  const { tag, year, title, desc, event, lang, category } = brief;
  return (
    <article className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate250 il-card">
      <span
        className={`inline-flex h-11 md:h-16 w-11 md:w-16 shrink-0 items-center justify-center rounded-md bg-linear-to-br from-green750/30 to-orange/20`}
      >
        <FiBookOpen className="h-6 w-6 md:h-7 md:w-7 text-blue100" />
      </span>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4 ">
          <div className="flex flex-col gap-3">
            <h3 className="text-base font-bold text-black100">{title}</h3>

            <div className="flex items-start gap-2 font-jost text-violet text-sm">
              <span className=" bg-green750/10 rounded-full px-3 py-1.5 text-xs font-jost tracking-wide text-green750">
                {tag}
              </span>

              <span>{year}</span>
              <span className="text-violet">•</span>
              <span>{event}</span>
              <span className="text-violet">•</span>
              <span>{lang}</span>
            </div>
          </div>

          <p className="text-base leading-6 text-violet">{desc}</p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="bg-slate350 rounded-md px-2 py-1.5 text-black300 text-sm self-start">
            {category}
          </div>
          <button className="border border-blue100 rounded-md px-5 py-2 text-blue100 font-jost text-xs font-black self-start">
            View Summary
          </button>
        </div>
      </div>
    </article>
  );
}

function PolicyBriefsGrid() {
  return (
    <section className="bg-white px-4 md:px-10 lg:px-20 py-14 lg:py-20">
      <div className="mx-auto max-w-310">
        <h2 className="text-2xl font-bold text-green400 text-center font-jost sm:text-3xl">
          Policy
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {policyBriefs.map((brief, i) => (
            <Reveal
              key={`${brief.title}-${i}`}
              direction="up"
              delay={(i % 4) * 90}
              distance={26}
            >
              <MouseTilt intensity={5}>
                <PolicyBriefCard brief={brief} />
              </MouseTilt>
            </Reveal>
          ))}
        </div>

        {/* <div className="mt-10 flex justify-center">
          <a
            href="/publications"
            className="inline-flex items-center gap-2 rounded-md bg-green100 px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
          >
            View All Publications
            <FiArrowRight className="h-4 w-4" />
          </a>
        </div> */}
      </div>
    </section>
  );
}

/* ─────────────────── SEARCH CTA ─────────────────── */

// function PolicySearchCTA() {
//   return (
//     <section className="bg-white px-6 py-12">
//       <div className="mx-auto max-w-310">
//         <div className="flex flex-col items-stretch gap-3 rounded-lg bg-green200 p-3 sm:flex-row sm:items-center">
//           <div className="flex flex-1 items-center gap-3 rounded-md bg-white/10 px-5 py-3">
//             <IoMdSearch className="h-5 w-5 text-white/70" />
//             <input
//               type="text"
//               placeholder="Pan Africa Growth, Lagos Africa..."
//               className="flex-1 bg-transparent text-sm text-white placeholder:text-white/60 focus:outline-none"
//             />
//           </div>
//           <a
//             href="#"
//             className="flex items-center justify-center gap-3 rounded-md bg-green100 px-6 py-3 font-jost text-sm font-semibold text-white transition hover:opacity-90"
//           >
//             <span>Investment Information Hub</span>
//             <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
//               <FiArrowUpRight className="h-4 w-4 text-white" />
//             </span>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

export default function PolicyPage() {
  return (
    <>
      <Spotlight color="rgba(255, 255, 255, 0.16)" size={620}>
        <Reveal direction="fade" duration={900}>
          <PolicyHero />
        </Reveal>
      </Spotlight>
      <Reveal direction="up">
        <PolicyStats />
      </Reveal>
      <Reveal direction="up">
        <ResearchFocusAreas />
      </Reveal>
      <Reveal direction="down" duration={600}>
        <PolicyFilterBar />
      </Reveal>
      <Reveal direction="up">
        <PolicyBriefsGrid />
      </Reveal>
      <Reveal direction="up">
        <InformationSection />
      </Reveal>
      <Reveal direction="up">
         <SpeakersCTA />
      </Reveal>
      {/* <Reveal direction="up">
        <PolicySearchCTA />
      </Reveal> */}
    </>
  );
}
