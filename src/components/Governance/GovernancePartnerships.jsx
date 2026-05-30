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

/* ─── DATA: Partnerships & Sponsorships Committee ────────────────────────── */
const partnershipsTop = [
  { name: 'Ms. Solape Hammond', role: 'Member, Partnerships & Sponsorships Committee', photo: '/governance/Solape Hammond.png' },
  { name: 'Mr. Charles Edosomwan', role: 'Member, Partnerships & Sponsorships Committee', photo: '/governance/Charles Edosomwan.png' },
  { name: 'Ms. Bukola Odoe', role: 'Member, Partnerships & Sponsorships Committee', photo: '/governance/Bukola Odoe.png' },
]

const partnershipsBios = [
  {
    name: 'Ms. Peju Ibekwe',
    role: 'Member, Partnerships & Sponsorships Committee',
    photo: '/governance/Peju Ibekwe.png',
    bio: [
      'Peju Ibekwe is a seasoned business leader with extensive experience in partnerships, sponsorship strategy and corporate development across Africa.',
      'She has led successful collaborations between public institutions and global private-sector partners, with a strong focus on investment promotion and brand activation.',
    ],
  },
  {
    name: 'Mrs. Ire Odega',
    role: 'Member, Partnerships & Sponsorships Committee',
    photo: '/governance/Mrs Ire Odega.png',
    bio: [
      'Mrs. Ire Odega is an accomplished communications and partnerships specialist with a track record of building high-impact alliances for major international summits and conferences.',
      'Her work bridges government, multilateral institutions and the private sector, ensuring that flagship events deliver measurable economic and reputational value for their host destinations.',
      'She brings deep relationships across the global investment community to Invest Lagos 3.0, supporting the summit\'s sponsorship and partnership strategy.',
    ],
  },
]

const partnershipsWideBio = {
  name: 'Mr. Ayo Otuyalo',
  role: 'Lead, Partnerships & Sponsorships Committee',
  photo: '/governance/Ayo Otuyalo.png',
  bio: [
    'Mr. Ayo Otuyalo brings over two decades of leadership across branding, partnerships and corporate communications, having shaped some of the most recognised consumer and corporate campaigns on the African continent.',
    'In his capacity as Lead of the Partnerships & Sponsorships Committee, he is responsible for coordinating engagement with multinational sponsors, development partners and strategic institutional collaborators ahead of Invest Lagos 3.0.',
    'His extensive network across financial services, FMCG, technology and the creative industries positions the summit to attract a diverse mix of headline and supporting sponsors aligned with the state\'s economic agenda.',
  ],
}

/* ─── DATA: Secretariat ──────────────────────────────────────────────────── */
const secretariatBios = [
  {
    name: 'Mrs. Nana Hauwa Adeeyo',
    role: 'Member, Secretariat',
    photo: '/governance/Mrs. Nana Hauwa Adeeyo.png',
    bio: [
      'Mrs. Nana Hauwa Adeeyo is a public-sector administrator with deep experience in stakeholder coordination, programme management and institutional governance.',
      'She currently provides secretariat-level support to the Lagos State investment promotion portfolio, ensuring seamless coordination across committees, partners and external advisors for major state initiatives including Invest Lagos 3.0.',
    ],
  },
  {
    name: 'Ms. Omofolahan Olowu',
    role: 'Member, Secretariat',
    photo: '/governance/Ms Omofolahan Olowu.png',
    bio: [
      'Ms. Omofolahan Olowu is a project-management professional with a background in policy advisory, public-sector reform and event coordination for high-level government engagements.',
      'She leads day-to-day secretariat operations for the Invest Lagos 3.0 organising structure, supporting committees with planning, documentation, communications and delivery oversight.',
    ],
  },
]

const secretariatMembers = [
  { name: 'Ms. Megan Wright', role: 'Member, Secretariat', photo: '/governance/Ms.Megan Wright (CWEIC).png' },
  { name: 'Ms. Biola Alabi', role: 'Member, Secretariat', photo: '/governance/Biola Alabi_2.png' },
]

/* ─── MEMBER CARD ────────────────────────────────────────────────────────── */
function MemberCard({ name, role, photo }) {
  return (
    <article className="flex flex-col il-card">
      <div className="overflow-hidden rounded-xl bg-slate-100 il-card-media">
        <img src={photo} alt={name} className="block w-full object-cover object-top" style={{ aspectRatio: '3/4' }} loading="lazy" />
      </div>
      <div className="mt-6 flex flex-1 flex-col">
        <h3 className="text-base font-black text-slate-800 sm:text-lg">{name}</h3>
        <p className="mt-1 text-sm font-semibold text-green200">{role}</p>
        <div className="mt-6 flex items-center gap-3">
          <button aria-label="LinkedIn" className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-700 text-white hover:opacity-80"><LinkedInIcon /></button>
          <button aria-label="Email" className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-300 text-slate-500 hover:border-green200 hover:text-green200"><MailIcon /></button>
        </div>
      </div>
    </article>
  )
}

/* ─── BIO CARD ───────────────────────────────────────────────────────────── */
function BioCard({ name, role, photo, bio }) {
  return (
    <article className="flex flex-col il-card">
      <div className="overflow-hidden rounded-xl bg-slate-100 il-card-media">
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
function SectionHeading({ title }) {
  return (
    <div className="mb-10">
      <h2 className="text-lg font-black text-slate-800 sm:text-xl">{title}</h2>
      <div className="mt-2 h-[3px] w-10 rounded-full bg-green200" />
    </div>
  )
}

/* ─── MAIN EXPORT ────────────────────────────────────────────────────────── */
const GovernancePartnerships = () => {
  return (
    <section className="bg-white px-6 py-12 lg:py-16">
      <div className="mx-auto max-w-[1240px] space-y-20">

        {/* Partnerships & Sponsorships Committee */}
        <div>
          <SectionHeading title="Partnerships & Sponsorships Committee" />

          {/* Top row: 3 member cards */}
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16 mb-20">
            {partnershipsTop.map((m) => <MemberCard key={m.name} {...m} />)}
          </div>

          {/* Middle row: 2 bio cards */}
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:gap-16 mb-20">
            {partnershipsBios.map((m) => <BioCard key={m.name} {...m} />)}
          </div>

          {/* Bottom row: 1 wide lead bio card */}
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:gap-16">
            <BioCard {...partnershipsWideBio} />
          </div>
        </div>

        {/* Secretariat */}
        <div>
          <SectionHeading title="Secretariat" />

          {/* Top row: 2 bio cards */}
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:gap-16 mb-20">
            {secretariatBios.map((m) => <BioCard key={m.name} {...m} />)}
          </div>

          {/* Bottom row: 2 member cards */}
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:gap-16">
            {secretariatMembers.map((m) => <MemberCard key={m.name} {...m} />)}
          </div>
        </div>

      </div>
    </section>
  )
}

export default GovernancePartnerships
