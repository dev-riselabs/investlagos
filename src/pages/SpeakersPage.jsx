import React from 'react'
import SpeakersBanner from '../components/Speakers/SpeakersBanner'
import SpeakersHero from '../components/Speakers/SpeakersHero'
import SpeakersGrid from '../components/Speakers/SpeakersGrid'
import SpeakersCTA from '../components/Speakers/SpeakersCTA'
import { Reveal, Spotlight, MouseTilt } from '../lib/animations'
import FutureSection from '../components/HomePage/FutureSection'

const SpeakersPage = () => {
  return (
    <>
      <Spotlight color="rgba(255, 255, 255, 0.18)" size={560}>
        <Reveal direction="fade" duration={900}>
          <SpeakersBanner />
        </Reveal>
      </Spotlight>
      <MouseTilt intensity={5}>
        <SpeakersHero />
      </MouseTilt>
      <SpeakersGrid />
      <FutureSection />
    </>
  )
}

export default SpeakersPage
