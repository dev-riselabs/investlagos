import React from 'react'
import { Reveal, MouseTilt } from '../../lib/animations'

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

/* ─── DATA ───────────────────────────────────────────────────────────────── */
const financeMembers = [
  { name: 'Mr. Yomi Oluyomi', role: 'Member', photo: '/governance/Yomi Oluyomi.png' },
  { name: 'Mr. Ope George', role: 'Member', photo: '/governance/Ope George.png' },
  { name: 'Ms. Biola Alabi', role: 'Member', photo: '/governance/Biola Alabi.png' },
]

const mediaSmallCards = [
  { name: 'Mr. Gbenga Omotosho', role: 'Chair', photo: '/governance/Gbenga Omotosho.png' },
  { name: 'Ms. Charlotte Bailey', role: 'Member, Media and Communications Department', photo: '/governance/Charlotte Bailey (CWEIC).png' },
  { name: 'Mr. AQ Hamza', role: 'Member, Media and Communications Department', photo: '/governance/AQ Hamza (CWEIC).png' },
  { name: 'Mr. Pride Azefor', role: 'Member, Media and Communications Department', photo: '/governance/Pride Azefor (CWEIC).png' },
  { name: 'Mr. Sean Leno', role: 'Member, Media and Communications Department', photo: '/governance/Sean Leno (CWEIC).png' },
]

const mediaBioCards = [
  {
    name: 'Mr. Abdeen Bolaji Abimbola',
    role: 'Member, Media, Communications & Publicity Sub-Committee',
    photo: '/governance/Mr Abdeen Bolaji Abimbola.png',
    bio: [
      'Bolaji Abimbola brings extensive experience in media, communications and public affairs spanning over two decades. He has held senior leadership positions across major broadcasting organisations and communications agencies in Nigeria.',
      'As a seasoned communications professional, he has coordinated high-profile media campaigns for government agencies, multinational corporations and development institutions, with a particular focus on investment promotion and economic development narratives.',
      'His deep understanding of Nigeria\'s media landscape and international communications standards makes him a key asset in driving the visibility and messaging strategy of Invest Lagos 3.0.',
    ],
  },
  {
    name: 'Mr. Obinna Anyanwu',
    role: 'Member, Media, Communications & Publicity Sub-Committee',
    photo: '/governance/Obinna Anyanwu.png',
    bio: [
      'Obinna Anyanwu is a communications strategist and media executive with a distinguished career in journalism, public relations and digital media across Nigeria and internationally.',
      'He has led communications for several high-profile investment and economic summits, developing integrated media strategies that reach both domestic and international audiences. His work has been instrumental in positioning Nigeria and Lagos as top destinations for foreign direct investment.',
      'Mr. Anyanwu\'s expertise in stakeholder engagement and media relations underpins the outreach and publicity strategy for Invest Lagos 3.0, ensuring the summit achieves maximum reach and impact.',
    ],
  },
]

const mediaBottomCards = [
  { name: 'Mr. Lami Adekola', role: 'Member, Media, Communications & Publicity Sub-Committee', photo: '/governance/Mr Lami Adekola.png' },
  { name: 'Mrs. Mary Aderinola Ojulari', role: 'Member, Media, Communications & Publicity Sub-Committee', photo: '/governance/Mrs Mary Aderinola Ojulari.png' },
]

/* ─── MEMBER CARD (same size as LOC card, no bio) ────────────────────────── */
function MemberCard({ name, role, photo }) {
  return (
    <article className="flex flex-col il-card">
      <div className="overflow-hidden rounded-xl bg-slate-100 il-card-media">
        <img
          src={photo}
          alt={name}
          className="block w-full object-cover object-top"
          style={{ aspectRatio: '3/4' }}
          loading="lazy"
        />
      </div>
      <div className="mt-6 flex flex-1 flex-col">
        <h3 className="text-base font-black text-slate-800 sm:text-lg">{name}</h3>
        <p className="mt-1 text-sm font-semibold text-green200">{role}</p>
        <div className="mt-6 flex items-center gap-3">
          <button
            aria-label="LinkedIn"
            className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-700 text-white transition-opacity hover:opacity-80"
          >
            <LinkedInIcon />
          </button>
          <button
            aria-label="Email"
            className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-300 text-slate-500 transition-colors hover:border-green200 hover:text-green200"
          >
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
          <button className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-700 text-white hover:opacity-80"><LinkedInIcon /></button>
          <button className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-300 text-slate-500 hover:border-green200 hover:text-green200"><MailIcon /></button>
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
const GovernanceSubCommittees = () => {
  return (
    <section className="bg-white px-6 py-12 lg:py-16">
      <div className="mx-auto max-w-[1240px] space-y-20">

        {/* Finance Sub-Committee */}
        <div>
          <SubSectionHeading title="Finance Sub-Committee" />
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
            {financeMembers.map((m, i) => (
              <Reveal key={m.name} direction="up" delay={(i % 3) * 110} distance={26}>
                <MouseTilt intensity={4}>
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
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16 mb-20">
            {mediaSmallCards.map((m, i) => (
              <Reveal key={m.name} direction="up" delay={(i % 3) * 100} distance={26}>
                <MouseTilt intensity={4}><MemberCard {...m} /></MouseTilt>
              </Reveal>
            ))}
          </div>

          {/* Bio cards */}
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:gap-16 mb-20">
            {mediaBioCards.map((m, i) => (
              <Reveal key={m.name} direction="up" delay={i * 130} distance={28}>
                <MouseTilt intensity={4}><BioCard {...m} /></MouseTilt>
              </Reveal>
            ))}
          </div>

          {/* Bottom member cards */}
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
            {mediaBottomCards.map((m, i) => (
              <Reveal key={m.name} direction="up" delay={i * 110} distance={26}>
                <MouseTilt intensity={4}><MemberCard {...m} /></MouseTilt>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default GovernanceSubCommittees
