import IncentivesHero from "../components/Incentives/IncentivesHero"
import IncentiveCard from "../components/Incentives/IncentiveCard"
import ReadyCTA from "../components/Incentives/ReadyCTA"
import StreamSummitBanner from "../components/Incentives/StreamSummitBanner"
import { Reveal, Spotlight } from "../lib/animations"

const incentives = [
  {
    title: 'Energy & Utilities',
    desc: 'Targeted incentives that lower the cost of capital, accelerate project delivery, and unlock new generation, transmission and distribution opportunities across Lagos.',
    bullets: [
      'Tax holidays for renewable energy investments',
      'Streamlined permitting for power & gas projects',
      'Foreign exchange access for critical equipment imports',
    ],
    image: '/energyimg.jpg', // Mapped to energy background asset
    layout: 'imageRight',
    band: 'light',
  },
  {
    title: 'Tourism & Creative Economy',
    desc: 'A package of fiscal and non-fiscal supports designed to grow Lagos into Africa’s leading hospitality, entertainment and creative-content destination.',
    bullets: [
      'Reduced VAT on hospitality services',
      'Production grants for film & creative content',
      'Fast-track approvals for venues & events',
    ],
    image: '/tourism.png', // Mapped to cultural dancers asset
    layout: 'imageLeft',
    band: 'light',
  },
  {
    title: 'Health & Life Sciences',
    desc: 'Incentives that support investments in hospitals, diagnostics, pharmaceuticals and health technology — strengthening Lagos as a regional healthcare hub.',
    bullets: [
      'Customs duty waivers for medical equipment',
      'Pioneer status for pharma manufacturing',
      'Joint financing through Lagos Health Fund',
    ],
    image: '/health.png', // Mapped to medical practitioner asset
    layout: 'imageRight',
    band: 'green', // Correctly wraps inside the white card panel over green section
  },
  {
    title: 'Agriculture',
    desc: 'Support for investments across the agricultural value chain — from primary production to processing, storage, logistics and export-readiness.',
    bullets: [
      'Land allocations for agro-processing clusters',
      'Single-digit interest loans for value-chain players',
      'Export support through the Lagos Trade Office',
    ],
    image: '/agric.jpg', // Mapped to agro-industrial silos asset
    layout: 'imageLeft',
    band: 'light',
  },
  {
    title: 'Housing & Urban Development',
    desc: 'Incentives that de-risk large-scale housing delivery and mixed-use urban regeneration projects across Lagos.',
    bullets: [
      'Stamp duty rebates on qualifying developments',
      'Off-take agreements via the Lagos Mortgage Board',
      'Density bonuses for affordable housing schemes',
    ],
    image: '/housing.jpg', // Mapped to residential block development asset
    layout: 'imageRight',
    band: 'light',
  },
  {
    title: 'Free Trade Zones',
    desc: 'Operate from Lagos’ free trade zones and unlock world-class incentives for export-oriented manufacturing, logistics and trade activities.',
    bullets: [
      '100% tax holiday on profits earned in the zone',
      'Duty-free import of capital goods & raw materials',
      'Unrestricted repatriation of capital & dividends',
    ],
    image: '/tradezone.jpg', // Mapped to shipping port container hub asset
    layout: 'imageLeft',
    band: 'green', // Correctly wraps inside the white card panel over green section
  },
]




export default function IncentivesPage() {
  return (
    <>
      <Spotlight color="rgba(99, 202, 168, 0.22)" size={600}>
        <Reveal direction="fade" duration={900}>
          <IncentivesHero />
        </Reveal>
      </Spotlight>
      {incentives.map((item, i) => (
        <Reveal
          key={item.title}
          direction={item.layout === 'imageRight' ? 'left' : 'right'}
          distance={32}
          duration={750}
        >
          <IncentiveCard item={item} />
        </Reveal>
      ))}
      <Reveal direction="up"><ReadyCTA /></Reveal>
      <Spotlight color="rgba(253, 236, 63, 0.18)" size={560}>
        <Reveal direction="up"><StreamSummitBanner /></Reveal>
      </Spotlight>
    </>
  )
}
