import React from "react";
import { Reveal, MouseTilt } from "../../lib/animations";

/* ─── Icons ─────────────────────────────────────────────────────────────── */
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="#008751" className="h-3.5 w-3.5">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const MailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="#008751"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-3.5 w-3.5"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 7L2 7" />
  </svg>
);

/* ─── DATA ───────────────────────────────────────────────────────────────── */
const financeMembers = [
  {
    name: "Yomi Oluyomi",
    role: "Chair",
    photo: "/governance-images/Yomi Oluyomi.png",
  },
  {
    name: "Ope George",
    role: "Member",
    photo: "/governance-images/Ope George.png",
  },
  {
    name: "Biola Alabi",
    role: "Member",
    photo: "/governance-images/Biola Alabi.png",
  },
];

const mediaSmallCards = [
  {
    name: "Gbenga Omotosho",
    role: "Chair",
    photo: "/governance-images/Gbenga Omotosho.png",
  },
  {
    name: "Charlotte Bailey",
    role: "Member, Media and Communications Committee",
    photo: "/governance-images/Charlotte Bailey (CWEIC).png",
  },
  {
    name: "AQ Hamza (CWEIC)",
    role: "Member, Media and Communications Committee",
    photo: "/governance-images/AQ Hamza (CWEIC).png",
  },
  {
    name: "Pride Azefor (CWEIC)",
    role: "Member, Media and Communications Committee",
    photo: "/governance-images/Pride Azefor (CWEIC).png",
  },
  {
    name: "Sean Leno (CWEIC)",
    role: "Member, Media and Communications Committee",
    photo: "/governance-images/Sean Leno.jpeg",
  },
];

const mediaBioCards = [
  {
    name: "Mr. Abdeen Bolaji Abimbola",
    role: "Member, Media, Communications & Publicity Sub-Committee",
    photo: "/governance-images/Mr Abdeen Bolaji Abimbola.png",
    bio: [
      "Bolaji Abimbola is the Managing Director/CEO of Integrated Indigo, Limited,  one of Nigeria’s leading PR/Strategic Communications Consultancy firms. He has vast experience cutting across Public Relations, Advertising, Events &  Experiential Marketing. He worked with MC Seeks Associates, an Advertising  Agency, as a Copywriter/Client Service Executive. He also worked with  Consumer Goods & Services Ltd. before joining MediaCraft Associates as  Senior Executive/Business Development. He later joined BD Consult Limited as  a Media Relations Manager and rose to Head of Media Relations and Strategy.",

      "He is an Alumnus of the prestigious Lagos Business School, International  School of Management and Strathmore Business School, Kenya. He is a  graduate of The Polytechnic Ibadan, where he graduated in 2005 as the Best  Graduating Student in Mass Communication with a 4.38 CGPA.",

      "He is a fellow of the Institute of Brand Management of Nigeria (IBMN) and the  Institute of Management Consultants (IMC). He is a member of the Nigerian  Institute of Public Relations (NIPR), APCON & NIM. He is also a fellow of the  African Public Relations Association APRA.   He is the Secretary General of the Public Relations Consultants of Nigeria  (PRCAN). He has won several awards, including the NIPR Presidential Award  2019 and the NIPR  2021 PR Practitioner of the Year award.",

      "Bolaji has worked on many leading corporate and product brands, such as  ExxonMobil, Indomie Instant Noodles, Lafarge, Panasonic, BlackBerry,  Samsung, Mastercard Foundation, Nigerian Bottling Company, Nigerian  Breweries, Huawei, Indrive, Arla, Famfa Oil, Glovo, Unilever, Lekki Port, Lagos  Free Zone, Lekki Gardens, to name but a few.",

      "He made the PR POWER LIST of the Top 50 PR practitioners in Nigeria in the  maiden edition in 2022 and 2024.",
    ],
  },
  {
    name: "Mr Gboyega Akosile",
    role: "Special Adviser on Media and Publicity to the Governor of Lagos State and Member, Media & Publicity, Communications Committee",
    photo: "/governance-images/Mr Gboyega Akosile.png",
    bio: [
      "Mr. Gboyega Akosile is a seasoned journalist, theatre practitioner,  public relations expert, and entrepreneur with over two decades of  experience in journalism, media, and strategic communication. He  currently serves as Special Adviser on Media and Publicity to the  Governor of Lagos State, Mr. Babajide Sanwo-Olu, a position he  assumed on 13th March 2024.",

      "Prior to his appointment, Mr. Akosile served as Chief Press Secretary to  Governor Sanwo-Olu from 2019 to 2024, having earlier been Deputy  Chief Press Secretary during the Governor’s first term.",
    ],
  },
  {
    name: "Mr Lami Adekola",
    role: "Member, Media, Communications & Publicity Sub-Committee",
    photo: "/governance-images/Mr Lami Adekola.png",
    bio: [
      "Lami Adekola is a senior finance and public policy executive with  over two decades of leadership experience across banking,  investment, and economic development. He currently serves as  Director of Policy and Public Affairs at EnterpriseNGR, where he  plays a strategic role in shaping reforms that strengthen Nigeria’s  competitiveness as a global investment destination.",

      "He has been  actively involved in major national initiatives, including the  development of the Lagos International Financial Centre, and is  recognized for building high impact partnerships between  government, industry, and international stakeholders.",
      "His work is  focused on attracting investment, deepening capital markets, and  positioning Lagos as a leading financial and business hub in Africa.",
    ],
  },

  {
    name: "Mrs. Nana Hauwa Adeeyo",
    role: "Member, Media, Communications & Publicity Sub-Committee",
    photo: "/governance-images/Mrs. Nana Hauwa Adeeyo.png",
    bio: [
      "Senior Special Assistant to the governor on Commerce Cooperatives Trade  and investment",
    ],
  },
];

const mediaBottomCards = [
  {
    name: "Mr. Lami Adekola",
    role: "Member, Media, Communications & Publicity Sub-Committee",
    photo: "/governance-images/Mr Lami Adekola.png",
  },
  {
    name: "Mrs. Mary Aderinola Ojulari",
    role: "Member, Media, Communications & Publicity Sub-Committee",
    photo: "/governance-images/Mrs Mary Aderinola Ojulari.png",
  },
];

/* ─── MEMBER CARD (same size as LOC card, no bio) ────────────────────────── */
function MemberCard({ name, role, photo }) {
  return (
    <article className="flex flex-col il-card shadow-card rounded-xl bg-white ring-1 ring-slate-100 w-full h-full">
      <div className="overflow-hidden rounded-t-xl bg-slate-100 il-card-media">
        <img
          src={photo}
          alt={name}
          className="block w-full object-cover object-top max-h-100"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col p-4 md:p-6 space-y-3">
        <div className="space-y-1">
          <h3 className="text-base font-bold font-jost text-green450 sm:text-lg">
            {name}
          </h3>
          <p className=" text-sm font-semibold text-slate900">{role}</p>
        </div>

        <div className=" flex items-center gap-3 mt-auto">
          <button
            aria-label="LinkedIn"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-green550 text-white transition-opacity hover:opacity-80"
          >
            <LinkedInIcon />
          </button>
          {/* <button
            aria-label="Email"
            className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-300 text-slate-500 transition-colors hover:border-green200 hover:text-green200"
          >
            <MailIcon />
          </button> */}
        </div>
      </div>
    </article>
  );
}

/* ─── BIO CARD ───────────────────────────────────────────────────────────── */
function BioCard({ name, role, photo, bio }) {
  return (
    <article className="flex flex-col il-card shadow-card rounded-xl bg-white ring-1 ring-slate-100 w-full h-full">
      <div className="overflow-hidden rounded-t-xl bg-slate-100 il-card-media">
        <img
          src={photo}
          alt={name}
          className="block w-full object-cover object-top max-h-100"
          loading="lazy"
        />
      </div>
      <div className=" flex flex-1 flex-col p-4 md:p-6 gap-2">
        <h3 className="text-base font-bold font-jost text-green450 sm:text-lg">
          {name}
        </h3>
        <p className="text-sm font-semibold text-slate900 font-jost">{role}</p>
        <div className=" space-y-3">
          {bio.map((p, i) => (
            <p
              key={i}
              className="text-[13px] leading-relaxed text-slate900 font-jost"
            >
              {p}
            </p>
          ))}
        </div>
        <div className=" flex items-center gap-3 mt-auto">
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-green550 text-white hover:opacity-80">
            <LinkedInIcon />
          </button>
          {/* <button className="flex h-8 w-8 items-center justify-center rounded-full bg-green550 hover:border-green200 hover:text-green200">
            <MailIcon />
          </button> */}
        </div>
      </div>
    </article>
  );
}

/* ─── SECTION HEADING ────────────────────────────────────────────────────── */
function SubSectionHeading({ title }) {
  return (
    <div className="mb-10">
      <h2 className="text-lg font-bold text-black font-jost sm:text-2xl">
        {title}
      </h2>
      <div className="mt-2 h-1 md:h-2 w-16 bg-slate200" />
    </div>
  );
}

/* ─── MAIN EXPORT ────────────────────────────────────────────────────────── */
const GovernanceSubCommittees = () => {
  return (
    <section className="bg-white px-4 md:px-10 lg:px-20 py-12 lg:py-16">
      <div className="mx-auto max-w-310 space-y-20">
        {/* Finance Sub-Committee */}
        <div>
          <SubSectionHeading title="Finance Sub-Committee" />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-9">
            {financeMembers.map((m, i) => (
              <Reveal
                key={m.name}
                direction="up"
                delay={(i % 3) * 110}
                distance={26}
              >
                <MouseTilt intensity={4} className="h-full">
                  <MemberCard {...m} />
                </MouseTilt>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Media, Communications & Publicity Sub-Committee */}
        <div>
          <SubSectionHeading title="Media, Communications & Publicity Sub-Committee" />

          {/* Top member cards */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-9 mb-20">
            {mediaSmallCards.map((m, i) => (
              <Reveal
                key={m.name}
                direction="up"
                delay={(i % 3) * 100}
                distance={26}
              >
                <MouseTilt intensity={4} className="h-full">
                  <MemberCard {...m} />
                </MouseTilt>
              </Reveal>
            ))}
          </div>

          {/* Bio cards */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-16 mb-20">
            {mediaBioCards.map((m, i) => (
              <Reveal key={m.name} direction="up" delay={i * 130} distance={28}>
                <MouseTilt intensity={4} className="h-full">
                  <BioCard {...m} />
                </MouseTilt>
              </Reveal>
            ))}
          </div>

          {/* Bottom member cards */}
          {/* <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
            {mediaBottomCards.map((m, i) => (
              <Reveal key={m.name} direction="up" delay={i * 110} distance={26}>
                <MouseTilt intensity={4}>
                  <MemberCard {...m} />
                </MouseTilt>
              </Reveal>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default GovernanceSubCommittees;
