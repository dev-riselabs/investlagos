import PrioritySectorsHero from "../components/SectorsPage/PrioritySectorsHero"
import SectorCards from "../components/SectorsPage/SectorCards"
import WhatToExpect from "../components/SectorsPage/WhatToExpect"
import DealBookSection from "../components/HomePage/DealBookSection"
import { Reveal, Spotlight } from "../lib/animations"




export default function SectorsPage() {
  return (
    <>
      <Spotlight color="rgba(253, 236, 63, 0.18)" size={600}>
        <Reveal direction="fade" duration={900}>
          <PrioritySectorsHero />
        </Reveal>
      </Spotlight>
      <Reveal direction="up"><SectorCards /></Reveal>
      <Reveal direction="up"><WhatToExpect /></Reveal>
      <Spotlight color="rgba(99, 202, 168, 0.20)" size={560}>
        <Reveal direction="up"><DealBookSection /></Reveal>
      </Spotlight>
    </>
  )
}


