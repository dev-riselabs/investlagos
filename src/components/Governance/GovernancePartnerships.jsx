import React from "react";

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

/* ─── DATA: Partnerships & Sponsorships Committee ────────────────────────── */
const partnershipsTop = [
  {
    name: "Solape Hammond",
    role: "Chair, Partnerships and Sponsorships Committee",
    photo: "/governance-images/Solape Hammond.png",
  },
  {
    name: "Akintayo Sanwo-Olu",
    role: "Member, Partnerships & Sponsorships Committee",
    photo: "/governance-images/Akintayo Sanwo-Olu.png",
  },
  {
    name: "Adesuwa Ladoja",
    role: "Member, Partnerships & Sponsorships Committee",
    photo: "/governance-images/Adesuwa Ladoja.png",
  },
];

const partnershipsBios = [
  {
    name: "Mrs. Moji Hunponu-Wusu",
    role: "Chair, Partnerships and Sponsorships Committee",
    photo: "/governance-images/Mrs. Moji Hunponu-Wusu.png",
    bio: [],
  },
  {
    name: "Mrs Mary Aderinola Ojulari",
    role: "Member, Partnerships & Sponsorships Committee",
    photo: "/governance-images/Mrs Mary Aderinola Ojulari.png",
    bio: [
      "Aderinola Mary Ojulari is an accomplished business and finance executive  with over 25 years of experience in transforming organisations, driving  strategic growth, and fostering meaningful stakeholder relationships. She  holds an MBA and is currently a board member of an oil servicing company.  She has also served at board levels in renowned brands and businesses  across multiple sectors, including media, automotive, and services, both in the  diaspora and Nigeria. ",

      "Mary’s expertise spans financial management, strategic planning, and project  leadership, with a strong focus on sustainable development and continuous  improvement. Her passion for economic empowerment led her to establish  the Mary Ojulari Foundation, which supports young people (aged 18-35) and  women through initiatives in education, entrepreneurship, advocacy, and  community engagement. ",

      "The foundation’s flagship programme, the Vanguard Fellowship, provides  funding, mentorship, and training to aspiring entrepreneurs, enabling them to  develop sustainable, impactful businesses that address local challenges. ",

      "A visionary leader with a commitment to social change, Mary combines her  professional expertise with her dedication to uplifting communities,  positioning her as a transformative force in the business and philanthropic  landscapes.",
    ],
  },
];

const partnershipsWideBio = {
  name: "Charles Edosomwan",
  role: "Member, Partnerships and Sponsorships Committee",
  photo: "/governance-images/Charles Edosomwan.png",
  bio: [
    "Charles Edosowan is a certified computer engineer and digital marketer.  He has a budding desire to improve PR practice and its reputation in  Nigeria. To fulfill this desire, he founded TEKSIGHT Edge in 2014.Teksight  is an Integrated PR and Digital Communications agency based in Lagos,  Nigeria. Teksight has a special interest in tech and public relations.  ",

    "With a passion for technology sparked by his curiosity and quest for  knowledge, he pursued a degree in computer engineering at Covenant  University before graduating with a certification in Public Relations and  Crisis Management  from the London School of Public Relations in 2014.He graduated from  the Dublin-based Digital Marketing Institute with a professional diploma  in Digital Marketing,Digital Communication, and Media/Multimedlia in the  same year.  ",

    "Being an expert in the digital economy and e-commerce field, he holds 3  executive MBA degrees in strategy and management from the Accra  Business School, in Digital Economy from Alibaba Business School and a  Professional  Education Program in Blockchain Disruptive Technology from MIT. ",

    "Charles worked for prominent brands for brief periods before  establishing Teksight. He made effective use of his subject-matter  expertise in these companies amongst which include Bluebird  Communications Limited, etranzact  Limited, and Digi Engage Nigeria Limited. ",

    "As an exceptional Public Relations Professional, his company uses  technology and creativity to improve people's lives. Through in-depth  research and technology, the company is changing the public relations  space, which also includes reputation management, media relations, and  social media marketing.  ",

    "Charles' passion for refacing the PR and Communication models for  businesses brought him in contact with a good friend who introduced him  to a new brand in the market TECNO Mobile who had great products but  had bad perception in the market which hindered their sales. His rise in  the PR industry is worthy of not having discovered a severe lack within the  system of practice of PR in Nigeria and choosing a modus operandi to  chart a new course for PR. ",

    "He was able to achieve this by assembling a young team of optimistic and  vibrant young people that share similar brand vision and have a knack to  deliver value in their various departments. Charles has put in place a  system where clients give a vivid picture of their needs and values, then  come up with ideas that would get the client's desired results in record  time through technological research. His passion also led him to found  the London school of Public  Relations, Nigeria. Where people in the country can be trained and  exposed to an international insight of the industry.   ",

    "As part of his strategic expansion scheme, Charles decided to get into  publishing and content distribution to help the Africa market understand  Technology better, thus the birth of Techuncode.Techuncode formerly  Askifa.ng gained popularity becoming the largest and most followed tech  brand on Social media in Nigeria in the first 6 months of its launch.   Charles also founded Africa Tech Radio (ATR), the first online radio in  Africa with a 100% focus on the continent's technology, with the aim of  driving social impact around the digital economy in Nigeria and Africa. ",

    "He was listed among the Forbes' 30 Under 30 CEOs bringing new  meaning to PR in Nigeria, thereby,helping to change the African business  narrative.",

    "Life being all about leaving one's footprints in the sands of time, he has a  strong desire to leave a positive lasting impression in the lives of his  employees and clients alike. This he has begun by influencing his field of expertise through  TEKSIGHT thereby awakening a new dawn in PR.",
  ],
};

/* ─── DATA: Secretariat ──────────────────────────────────────────────────── */
const secretariatBios = [
  {
    name: "Mrs Ire Odega",
    role: "Co-Chair, LOC Secretariat",
    photo: "/governance-images/Mrs. Nana Hauwa Adeeyo.png",
    bio: [
      " Ire Odega is a dynamic project management and operations professional with experience spanning government advisory, investment facilitation, product management, and strategic programme execution. Currently serving as Special Adviser to the Honourable Commissioner for Commerce, Cooperative, Trade and Investment, Ire plays a key role in driving initiatives that strengthen investment attraction, trade promotion, stakeholder engagement, and economic development within Lagos State.",
      " Prior to this role, Ire built a strong foundation in Project Management, Product Management, and Operations, leading cross-functional initiatives across technology, fintech, and business transformation spaces. Her expertise includes programme coordination, stakeholder management, strategic partnerships, operational excellence, and execution of high impact projects.",
      "Ire has contributed to major investment and trade initiatives, including programmes designed to enhance export readiness, public-private collaboration, and positioning Lagos as a leading investment destination. She is passionate about leveraging innovation, technology, and strategic partnerships to drive sustainable growth and create meaningful impact.",
      "With a background that bridges public sector leadership and private sector execution, Ire brings a unique perspective to solving complex challenges, managing transformational projects, and enabling economic opportunities. She is committed to continuous learning, empowering others, and building solutions that create long-term value.",
    ],
  },
  {
    name: "Ms Lola Talabi-Oni",
    role: "Co-Chair, LOC Secretariat",
    photo: "/governance-images/Ms Lola Talabi-Oni.png",
    bio: [
      "Lola Talabi-Oni is a governance and public policy professional  with over 20 years of experience across the public and private  sectors in Africa, Europe, and North America. She currently  serves as Senior Special Assistant to the Governor of Lagos State  in the Office of the Deputy Chief of Staff. Previously, she held  advisory and consulting roles with the Lagos State Ministry of  Economic Planning & Budget, Global Citizen, Rockefeller  Philanthropy Advisors, and the National Bureau of Statistics,  where she led stakeholder engagement, policy coordination, and  data governance initiatives. She has also served in key secretariat  and coordination roles, including as Secretariat Lead for E1  Lagos and as a member of the Secretariat Team for the 2014  World Economic Forum Africa meeting. Lola holds an Executive  master’s in public administration from the London School of  Economics, with a focus on Public Economics.",
    ],
  },
];

const secretariatMembers = [
  {
    name: "Ms.Megan Wright (CWEIC)",
    role: "LOC Secretariat",
    photo: "/governance-images/Ms.Megan Wright (CWEIC).png",
  },
  {
    name: "Ms Omofolahan Olowu",
    role: "LOC Secretariat",
    photo: "/governance-images/Ms Omofolahan Olowu.png",
  },
];

/* ─── MEMBER CARD ────────────────────────────────────────────────────────── */
function MemberCard({ name, role, photo }) {
  return (
    <article className="flex flex-col il-card shadow-card rounded-xl bg-white ring-1 ring-slate-100 h-full">
      <div className="overflow-hidden rounded-t-xl il-card-media bg-slate150">
        <img
          src={photo}
          alt={name}
          className="block w-full object-cover object-top"
          style={{ aspectRatio: "3/4" }}
          loading="lazy"
        />
      </div>
      <div className=" flex flex-1 flex-col p-4 md:p-6 gap-1">
        <h3 className="text-base font-bold text-green450 font-jost sm:text-lg">
          {name}
        </h3>
        <p className="mt-1 text-sm font-semibold  text-slate900 font-jost">
          {role}
        </p>
        <div className="mt-6 flex items-center gap-3">
          <button
            aria-label="LinkedIn"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-green550 text-white transition-opacity hover:opacity-80"
          >
            <LinkedInIcon />
          </button>
          {/* <button aria-label="Email" className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-300 text-slate-500 hover:border-green200 hover:text-green200">
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
    <article className="flex flex-col il-card shadow-card rounded-xl bg-white ring-1 ring-slate-100 h-ful">
      <div className="overflow-hidden rounded-t-xl bg-slate150 il-card-media">
        <img
          src={photo}
          alt={name}
          className="block w-full object-cover object-top"
          style={{ aspectRatio: "3/4" }}
          loading="lazy"
        />
      </div>
      <div className=" flex flex-1 flex-col p-4 md:p-6 gap-1">
        <h3 className="text-base font-bold text-green450 font-jost sm:text-lg">
          {name}
        </h3>
        <p className="mt-1 text-sm font-semibold text-slate900 font-jost">
          {role}
        </p>
        <div className="mt-4 space-y-3">
          {bio.map((p, i) => (
            <p key={i} className="text-[13px] leading-relaxed  text-slate900">
              {p}
            </p>
          ))}
        </div>
        <div className="mt-auto flex items-center gap-3">
          <button
            aria-label="LinkedIn"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-green550 text-white transition-opacity hover:opacity-80"
          >
            <LinkedInIcon />
          </button>
          {/* <button
            aria-label="Email"
            className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-300 text-slate-500 hover:border-green200 hover:text-green200"
          >
            <MailIcon />
          </button> */}
        </div>
      </div>
    </article>
  );
}

/* ─── SECTION HEADING ────────────────────────────────────────────────────── */
function SectionHeading({ title }) {
  return (
    <div className="mb-10">
      <h2 className="text-lg font-black text-slate-800 sm:text-xl">{title}</h2>
      <div className="mt-2 h-1 w-10 rounded-full bg-green200" />
    </div>
  );
}

/* ─── MAIN EXPORT ────────────────────────────────────────────────────────── */
const GovernancePartnerships = () => {
  return (
    <section className="bg-white px-6 py-12 lg:py-16">
      <div className="mx-auto max-w-310 space-y-20">
        {/* Partnerships & Sponsorships Committee */}
        <div>
          <SectionHeading title="Partnerships & Sponsorships Committee" />

          {/* Top row: 3 member cards */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-9  mb-20">
            {partnershipsTop.map((m) => (
              <MemberCard key={m.name} {...m} />
            ))}
          </div>

          {/* Middle row: 2 bio cards */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-9 mb-20">
            {partnershipsBios.map((m) => (
              <BioCard key={m.name} {...m} />
            ))}
          </div>

          {/* Bottom row: 1 wide lead bio card */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-9">
            <BioCard {...partnershipsWideBio} />
          </div>
        </div>

        {/* Secretariat */}
        <div>
          <SectionHeading title="Secretariat" />

          {/* Top row: 2 bio cards */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-9 mb-20">
            {secretariatBios.map((m) => (
              <BioCard key={m.name} {...m} />
            ))}
          </div>

          {/* Bottom row: 2 member cards */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-9">
            {secretariatMembers.map((m) => (
              <MemberCard key={m.name} {...m} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovernancePartnerships;
