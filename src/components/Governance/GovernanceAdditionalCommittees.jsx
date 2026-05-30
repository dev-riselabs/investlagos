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

/* ─── DATA: Technical & Programmes Committee ─────────────────────────────── */
const techBioTop = [
  {
    name: "Dr. Olamide Adekunle Okulaja",
    role: "Member, Technical & Programmes Committee",
    photo: "/governance-images/Dr. Olamide Adekunle Okulaja.png",
    principle:
      "GUIDING PRINCIPLES  Institutional coherence.   Financial sustainability.   Measurable scale.",
    appointments: [
      " Technical Adviser to the Honourable Commissioner  |  Lagos State Ministry of  Commerce, Cooperatives, Trade and Investment - Provides technical support to the Honourable Commissioner across the  Ministry’s industrial policy, investment promotion, cooperative financialisation, and MSME access-to-finance portfolios.",
      "Technical Adviser to the Honourable Commissioner  |  Lagos State Ministry of  Health - Provides technical support to the Honourable Commissioner across the  Ministry’s health financing, diagnostic infrastructure, primary health care, and  disease elimination portfolios.",
      "Chief Growth Officer  |  Maisha Meds  ·  Nigeria, Kenya, Uganda, Tanzania - Leads enterprise-wide expansion across frontline pharmacies and clinics,  integrating digital infrastructure with facility financing and structuring blended  capital aligned to public delivery",
    ],
    expertise: [
      "Industrial policy and economic strategy ",
      "Subnational investment promotion",
      "Cooperative financialisation ",
      "MSME access to finance ",
      "Public-private partnership design   - ",
      "Blended finance and donor-private capital alignment ",
      "Health systems reform  ",
      "Health financing architecture",
      "Governance and institutional reform ",
      "Digital health and interoperability",
    ],
    bio: [
      "Dr. Olamide Okulaja serves as Technical Adviser to the Honourable  Commissioner at the Lagos State Ministry of Commerce, Cooperatives, Trade  and Investment, and at the Lagos State Ministry of Health. Across both portfolios,  his work supports the development of durable institutional architecture and the  design of mechanisms that allow markets to function more equitably, public  systems to operate more efficiently, and financing to reach productive actors at  scale. He combines training in medicine and health economics with applied  experience in governance reform, financing design, and digital transformation.",
    ],
  },
  {
    name: "Dr. Toyosi Akerele-Ogunsiji",
    role: "Co- Chair, Technical and Programmes Committee",
    photo: "/governance-images/Dr. Toyosi Akerele-Ogunsiji.png",
    bio: [
      "Dr. Toyosi Akerele-Ogunsiji is the Founder of Rise Networks and Rise  Interactive Studios, Africa, and a globally respected multidisciplinary  professional in Artificial Intelligence for Development, Media  Innovation, Youth Development, EdTech and Public Policy. Named  by Forbes as one of the 20 Most Powerful Young Women in Africa  and listed among the Top 30 Global Artificial Intelligence  Ambassadors by Swiss Cognitive, she also serves on the UNDP  #AI4Dev Reference Group. She holds a master’s in public  administration from the Harvard Kennedy School, has completed  Executive Education at the University of Cambridge, University of  New Hampshire and Pan-Atlantic University, an undergrad degree in  Civil Law.",

      "She earned a PhD in Defence and Strategic Studies from the Nigerian  Defence Academy, where her Dissertation examined the impact of AI  on Nigeria’s national and economic security in the Fourth Industrial  Revolution, highlighting the nexus between emerging technologies,  governance and human behaviour.",

      "At Rise Networks, a foremost Data and AI for Development  organization, she leads efforts to empower Nigerians with world-class  digital skills, foster inclusive opportunities and build a future-ready  workforce. Rise Networks is Nigeria’s representative in the Microsoft  Global TVET AI Community of Practice and built West Africa’s first  career job chatbot, recognized by the UN’s AI for Good initiative.",

      "She’s led pioneering AI and technology initiatives across Africa and  with her leadership, the organization also executed the landmark UK  Government FCDO-commissioned AI for Border Governance study. ",

      "Through Rise Interactive Studios, a creative innovation company  working at the intersection of Fil, Music, Culture & Tech, Dr. Toyosi  created and produced MAKEMATION, Africa’s first feature film on  Artificial Intelligence.",
    ],
  },
];

const techMembers = [
  {
    name: "Mrs. Ajibola Yewande Ponnle",
    role: "Member, Technical and Programmes Committee",
    photo: "/governance-images/Mrs. Ajibola Yewande Ponnle.png",
    bio: [
      "Ajibola Ponnle is a transformational leader with a cross-sector background in economics, organisational psychology, and public administration. She is a Fellow of the Institute of Chartered Accountants of Nigeria and the Chartered Institute of Personnel Management, and a certified leadership coach. Her career covers both public and private sectors, with expertise in finance, human capital management, and organisational development.",
      "She is the Founder and CEO of Human Investment Group and previously served as Honourable Commissioner for Establishments, Training, and Pensions in Lagos State. Her professional experience includes roles at Arthur Andersen (now KPMG) and British American Tobacco. ",
      "Ajibola is an alumna of the University of Ibadan, the University of London, and Harvard Kennedy School of Public Leadership. She is committed to advancing human-centered public service transformation across Nigeria and Africa.",
    ],
  },
];

const techBioBottom = [
  {
    name: "Peju Ibekwe",
    role: "Member, Technical & Programmes Committee",
    photo: "/governance-images/Peju Ibekwe.png",
    bio: [
      "Commonwealth Enterprise and Investment Olapeju Ibekwe is a distinguished social impact leader and sustainability advocate, widely recognised for her visionary leadership in advancing the Sustainable Development Goals (SDGs) across Africa. As the CEO of Sterling One Foundation, Olapeju has led transformative initiatives that address critical challenges in healthcare, education, gender equality, climate action, and food security. Under her guidance, the Foundation has emerged as a catalyst for systemic change, leveraging strategic partnerships and innovative solutions to create measurable and sustainable impact.",

      "Olapeju’s strategic foresight as a filmmaker and advocate for social change led to the production and successful execution of Chatroom, a groundbreaking film and gender-based violence advocacy campaign tool. The project has engaged over 1500 participants across more than nine states, addressing gender-based violence through powerful storytelling and community engagement. This initiative not only amplified voices but also inspired policy and community-driven action to combat systemic inequalities.",

      "With over two decades of experience spanning corporate strategy, sustainability, and branding, Olapeju’s career is marked by exceptional achievements. She has held key roles at Sterling Bank, including Marketing Manager for Corporate and Investment Banking and Head of Branding, where she led corporate transformation initiatives that enhanced organisational growth and visibility.",

      "Beyond the Sterling One Foundation, she serves on the boards of the United Nations Global Compact Network Nigeria, NECA ESG Advisory Board, the UN Women GBV Fund, the Health Workers Fund and Quality Education Development Associates (QEDA). Her governance contributions underscore her commitment to impactful leadership and sustainable development.",

      "Olapeju’s exceptional contributions have earned her accolades, including The Peak Performer’s Admirable Women in Leadership Recognition for the 2023/2024 period, the Leadership Impact Award in Nonprofit Management, and recognition as one of Ventures Africa’s 20 Women of Impact. These honours reflect her unwavering dedication to creating opportunities and empowering communities across Africa.. In this role he provides senior and strategic advisory services to deepen trade and investment across the Commonwealth of Nations and beyond, recruits top Nigerian businesses as strategic partners, and attracts global investors to Nigeria.",
    ],
  },
  {
    name: "Obinna Anyanwu",
    role: "Member, Technical & Programmes Committee",
    photo: "/governance-images/Obinna Anyanwu.png",
    bio: [
      "Obinna has distinguished himself in his chosen career with great academic and professional qualifications from prestigious institutions across the world.",

      "He currently serves as the Country Director Nigeria, Commonwealth Enterprise and Investment Council. In this role he provides senior and strategic advisory services to deepen trade and investment across the Commonwealth of Nations and beyond, recruits top Nigerian businesses as strategic partners, and attracts global investors to Nigeria.",
    ],
  },
  {
    name: "Ayo Otuyalo",
    role: "Member, Technical & Programmes Committee",
    photo: "/governance-images/Ayo Otuyalo.png",
    bio: [],
  },
];

/* ─── DATA: Other sub-committees ─────────────────────────────────────────── */
const legalMembers = [
  {
    name: "Bukola Odoe",
    role: "Chair, Legal & Compliance Sub-Committee",
    photo: "/governance-images/Bukola Odoe.png",
  },
  {
    name: "Michael Ojomo",
    role: "Member, Legal & Compliance Sub-Committee",
    photo: "/governance-images/Michael Ojomo.png",
  },
];

const eventMembers = [
  {
    name: "Ayiri Oladunmoye",
    role: "Co-Chair, Events and Guest Management Committee",
    photo: "/governance-images/Ayiri Oladunmoye.png",
  },
  {
    name: "Biola Alabi",
    role: "Co-Chair, Events and Guest Management Committee",
    photo: "/governance-images/Biola Alabi.png",
  },
];

const logisticsMembers = [
  {
    name: "Mr. Taiye Nelson",
    role: "Chair",
    photo: "/governance-images/Mr. Taiye Nelson.png",
  },
  {
    name: "Kunle Fagbemi",
    role: "Member",
    photo: "/governance-images/Kunle Fagbemi.png",
  },
];

/* ─── MEMBER CARD (same size as LOC card, no bio) ────────────────────────── */
function MemberCard({ name, role, photo }) {
  return (
    <article className="flex flex-col il-card shadow-card rounded-xl bg-white ring-1 ring-slate-100 h-full">
      <div className="overflow-hidden rounded-t-xl il-card-media bg-slate150 max-h-120 h-full">
        <img
          src={photo}
          alt={name}
          className="block w-full object-cover object-top max-h-120 h-full"
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
function BioCard({
  name,
  role,
  photo,
  bio,
  appointments,
  expertise,
  principle,
}) {
  return (
    <article className="flex flex-col il-card shadow-card rounded-xl bg-white ring-1 ring-slate-100 h-full">
      <div className="overflow-hidden rounded-t-xl bg-slate150 il-card-media">
        <img
          src={photo}
          alt={name}
          className="block w-full object-cover object-top max-h-120"
          loading="lazy"
        />
      </div>
      <div className=" flex flex-1 flex-col p-4 md:p-6 gap-1">
        <h3 className="text-base font-bold text-green450 font-jost sm:text-lg">
          {name}
        </h3>
        <p className="text-sm font-semibold text-slate900 font-jost">{role}</p>
        <div className="mt-2 space-y-3">
          {bio.map((p, i) => (
            <p key={i} className="text-[13px] leading-relaxed text-slate900">
              {p}
            </p>
          ))}
        </div>
        {appointments && (
          <div className="space-y-2">
            <p className="mt-1 text-sm text-slate900 font-jost uppercase">
              Current appointments
            </p>
            <ol className="flex flex-col gap-1.5 list-decimal pl-3">
              {appointments.map((a, i) => (
                <li
                  key={i}
                  className="text-[13px] leading-relaxed text-slate900 "
                >
                  {a}
                </li>
              ))}
            </ol>
          </div>
        )}
        {expertise && (
          <div className="space-y-2">
            <p className="mt-1 text-sm text-slate900 font-jost uppercase">
              Areas of Expertise
            </p>
            <ul className="list-disc list-inside text-[13px] leading-relaxed text-slate-500 flex flex-col gap-1.5 pl-5">
              {expertise.map((e, i) => (
                <li
                  key={i}
                  className="text-[13px] leading-relaxed text-slate900"
                >
                  {e}
                </li>
              ))}
            </ul>
          </div>
        )}
        {principle && (
          <div className="space-y-2">
            <p className="text-sm text-slate900 font-jost">{principle}</p>
          </div>
        )}
        <div className=" flex items-center gap-3 mt-auto pt-5">
          <button
            aria-label="LinkedIn"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-green550 text-white transition-opacity hover:opacity-80"
          >
            <LinkedInIcon />
          </button>
          {/* <button aria-label="Email" className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-300 text-slate-500 hover:border-green200 hover:text-green200"><MailIcon /></button> */}
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
const GovernanceAdditionalCommittees = () => {
  return (
    <section className="bg-white px-4 md:px-10 lg:px-20 py-12 lg:py-16">
      <div className="mx-auto max-w-310 space-y-20">
        {/* Technical & Programmes Committee */}
        <div>
          <SubSectionHeading title="Technical & Programmes Committee" />
          {/* Top two bio cards */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-9 mb-20">
            {techBioTop.map((m, i) => (
              <Reveal key={m.name} direction="up" delay={i * 130} distance={28}>
                <MouseTilt intensity={4} className="h-full">
                  <BioCard {...m} />
                </MouseTilt>
              </Reveal>
            ))}
          </div>
          {/* Middle two member cards */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-9 mb-20">
            {techMembers.map((m, i) => (
              <Reveal key={m.name} direction="up" delay={i * 120} distance={26}>
                <MouseTilt intensity={4} className="h-full">
                  <BioCard {...m} />
                </MouseTilt>
              </Reveal>
            ))}
          </div>
          {/* Bottom three bio cards */}
          <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-3 lg:gap-9 h-full">
            {techBioBottom.map((m, i) => (
              <Reveal
                key={m.name}
                direction="up"
                delay={(i % 3) * 110}
                distance={28}
              >
                <MouseTilt intensity={4} className="h-full">
                  <BioCard {...m} />
                </MouseTilt>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Legal & Compliance Sub-Committee */}
        <div>
          <SubSectionHeading title="Legal & Compliance Sub-Committee" />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-9">
            {legalMembers.map((m, i) => (
              <Reveal key={m.name} direction="up" delay={i * 120} distance={26}>
                <MouseTilt intensity={4} className="h-full">
                  <MemberCard {...m} />
                </MouseTilt>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Event & Guest Management Committee */}
        <div>
          <SubSectionHeading title="Event & Guest Management Committee" />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-9">
            {eventMembers.map((m, i) => (
              <Reveal key={m.name} direction="up" delay={i * 120} distance={26}>
                <MouseTilt intensity={4} className="h-full">
                  <MemberCard {...m} />
                </MouseTilt>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Logistics, Security, Protocol & Transportation Sub-Committee */}
        <div>
          <SubSectionHeading title="Logistics, Security, Protocol & Transportation Sub-Committee" />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-9">
            {logisticsMembers.map((m, i) => (
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
      </div>
    </section>
  );
};

export default GovernanceAdditionalCommittees;
