import React from 'react'

/* ─── Icons ─────────────────────────────────────────────────────────────── */
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
)

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 7L2 7" />
  </svg>
)

/* ─── DATA: Technical & Programmes Committee ─────────────────────────────── */
const techBioTop = [
  {
    name: 'Dr. Toyosi Akerele-Ogunsiji',
    role: 'Member, Technical & Programmes Committee',
    photo: '/governance/Dr. Toyosi Akerele-Ogunsiji.png',
    bio: [
      'Dr. Toyosi Akerele-Ogunsiji is the Founder of RISE Networks, a leading social enterprise advancing youth development, data science and digital literacy across Africa. She has trained tens of thousands of young Nigerians through technology-driven programmes.',
      'A Forbes Africa "30 Under 30" honouree, she has consulted for the African Development Bank, the World Bank and the British Council on initiatives that bridge education and the future of work.',
    ],
  },
  {
    name: 'Dr. Olamide Adekunle Okulaja',
    role: 'Member, Technical & Programmes Committee',
    photo: '/governance/Dr. Olamide Adekunle Okulaja.png',
    bio: [
      'Dr. Olamide Adekunle Okulaja is a public health and development specialist with extensive experience in healthcare policy, programme management and stakeholder engagement across Africa.',
      'He has led multi-country initiatives in partnership with the WHO, UNICEF and major development partners, with a focus on systems strengthening and sustainable health financing. He currently advises governments and private sector institutions on social-impact strategy.',
    ],
  },
]

const techMembers = [
  { name: 'Mrs. Adesuwa Ladoja', role: 'Member, Technical & Programmes Committee', photo: '/governance/Adesuwa Ladoja.png' },
  { name: 'Mr. Charles Edosomwan', role: 'Member, Technical & Programmes Committee', photo: '/governance/Charles Edosomwan.png' },
]

const techBioBottom = [
  {
    name: 'Mr. Ayo Otuyalo',
    role: 'Member, Technical & Programmes Committee',
    photo: '/governance/Ayo Otuyalo.png',
    bio: [
      'Ayo Otuyalo is a strategist and creative leader with over two decades of experience in branding, marketing and corporate communications. He has shaped campaigns for some of Africa\'s most recognised brands and serves on multiple advisory boards.',
      'His expertise spans integrated marketing, customer experience design and stakeholder communications — capabilities he brings to the strategic positioning of Invest Lagos 3.0.',
    ],
  },
  {
    name: 'Mr. Babatunde Onigbanjo',
    role: 'Member, Technical & Programmes Committee',
    photo: '/governance/Babatunde Onigbanjo.png',
    bio: [
      'Mr. Babatunde Onigbanjo is a distinguished legal practitioner with deep expertise in commercial law, public policy and government regulation. He currently provides advisory support to Lagos State on investment, trade and regulatory matters.',
      'He has played a key role in shaping the legal frameworks underpinning several of the state\'s economic and investment promotion initiatives.',
    ],
  },
  {
    name: 'Mr. Ayiri Oladunmoye',
    role: 'Member, Technical & Programmes Committee',
    photo: '/governance/Ayiri Oladunmoye.png',
    bio: [
      'Ayiri Oladunmoye is an experienced executive with a strong background in finance, business development and economic strategy. He has held senior leadership roles across financial services and consulting firms in Nigeria and abroad.',
      'He advises governments and corporates on investment promotion, market entry and economic policy design.',
    ],
  },
]

/* ─── DATA: Other sub-committees ─────────────────────────────────────────── */
const legalMembers = [
  { name: 'Ms. Lola Talabi-Oni', role: 'Member, Legal & Compliance Sub-Committee', photo: '/governance/Ms Lola Talabi-Oni.png' },
  { name: 'Mr. Gboyega Akosile', role: 'Member, Legal & Compliance Sub-Committee', photo: '/governance/Mr Gboyega Akosile.png' },
]

const eventMembers = [
  { name: 'Mrs. Ajibola Yewande Ponnle', role: 'Member, Event & Guest Management Committee', photo: '/governance/Mrs. Ajibola Yewande Ponnle.png' },
  { name: 'Mrs. Moji Hunponu-Wusu', role: 'Member, Event & Guest Management Committee', photo: '/governance/Mrs. Moji Hunponu-Wusu.png' },
]

const logisticsMembers = [
  { name: 'Mr. Kunle Fagbemi', role: 'Member, Logistics, Security, Protocol & Transportation Sub-Committee', photo: '/governance/Kunle Fagbemi.png' },
  { name: 'Mr. Akintayo Sanwo-Olu', role: 'Member, Logistics, Security, Protocol & Transportation Sub-Committee', photo: '/governance/Akintayo Sanwo-Olu.png' },
  { name: 'Mr. Taiye Nelson', role: 'Member, Logistics, Security, Protocol & Transportation Sub-Committee', photo: '/governance/Mr. Taiye Nelson.png' },
]

/* ─── MEMBER CARD (same size as LOC card, no bio) ────────────────────────── */
function MemberCard({ name, role, photo }) {
  return (
    <article className="flex flex-col">
      <div className="overflow-hidden rounded-xl bg-slate-100">
        <img src={photo} alt={name} className="block w-full object-cover object-top" style={{ aspectRatio: '3/4' }} loading="lazy" />
      </div>
      <div className="mt-6 flex flex-1 flex-col">
        <h3 className="text-base font-black text-slate-800 sm:text-lg">{name}</h3>
        <p className="mt-1 text-sm font-semibold text-green200">{role}</p>
        <div className="mt-6 flex items-center gap-3">
          <button aria-label="LinkedIn" className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-700 text-white hover:opacity-80">
            <LinkedInIcon />
          </button>
          <button aria-label="Email" className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-300 text-slate-500 hover:border-green200 hover:text-green200">
            <MailIcon />
          </button>
        </div>
      </div>
    </article>
  )
}

/* ─── BIO CARD ───────────────────────────────────────────────────────────── */
function BioCard({ name, role, photo, bio }) {
  return (
    <article className="flex flex-col">
      <div className="overflow-hidden rounded-xl bg-slate-100">
        <img src={photo} alt={name} className="block w-full object-cover object-top" style={{ aspectRatio: '3/4' }} loading="lazy" />
      </div>
      <div className="mt-6 flex flex-1 flex-col">
        <h3 className="text-base font-black text-slate-800 sm:text-lg">{name}</h3>
        <p className="mt-1 text-sm font-semibold text-green200">{role}</p>
        <div className="mt-4 space-y-3">
          {bio.map((p, i) => (
            <p key={i} className="text-[13px] leading-relaxed text-slate-500">{p}</p>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-3">
          <button aria-label="LinkedIn" className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-700 text-white hover:opacity-80"><LinkedInIcon /></button>
          <button aria-label="Email" className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-300 text-slate-500 hover:border-green200 hover:text-green200"><MailIcon /></button>
        </div>
      </div>
    </article>
  )
}

/* ─── SECTION HEADING ────────────────────────────────────────────────────── */
function SubSectionHeading({ title }) {
  return (
    <div className="mb-10">
      <h2 className="text-lg font-black text-slate-800 sm:text-xl">{title}</h2>
      <div className="mt-2 h-[3px] w-10 rounded-full bg-green200" />
    </div>
  )
}

/* ─── MAIN EXPORT ────────────────────────────────────────────────────────── */
const GovernanceAdditionalCommittees = () => {
  return (
    <section className="bg-white px-6 py-12 lg:py-16">
      <div className="mx-auto max-w-[1240px] space-y-20">

        {/* Technical & Programmes Committee */}
        <div>
          <SubSectionHeading title="Technical & Programmes Committee" />
          {/* Top two bio cards */}
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:gap-16 mb-20">
            {techBioTop.map((m) => <BioCard key={m.name} {...m} />)}
          </div>
          {/* Middle two member cards */}
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:gap-16 mb-20">
            {techMembers.map((m) => <MemberCard key={m.name} {...m} />)}
          </div>
          {/* Bottom three bio cards */}
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
            {techBioBottom.map((m) => <BioCard key={m.name} {...m} />)}
          </div>
        </div>

        {/* Legal & Compliance Sub-Committee */}
        <div>
          <SubSectionHeading title="Legal & Compliance Sub-Committee" />
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:gap-16">
            {legalMembers.map((m) => <MemberCard key={m.name} {...m} />)}
          </div>
        </div>

        {/* Event & Guest Management Committee */}
        <div>
          <SubSectionHeading title="Event & Guest Management Committee" />
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:gap-16">
            {eventMembers.map((m) => <MemberCard key={m.name} {...m} />)}
          </div>
        </div>

        {/* Logistics, Security, Protocol & Transportation Sub-Committee */}
        <div>
          <SubSectionHeading title="Logistics, Security, Protocol & Transportation Sub-Committee" />
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
            {logisticsMembers.map((m) => <MemberCard key={m.name} {...m} />)}
          </div>
        </div>

      </div>
    </section>
  )
}

export default GovernanceAdditionalCommittees
