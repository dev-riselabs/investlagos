import React from 'react'
import SpeakersBanner from '../components/Speakers/SpeakersBanner'
import SpeakersHero from '../components/Speakers/SpeakersHero'
import SpeakersGrid from '../components/Speakers/SpeakersGrid'
import SpeakersCTA from '../components/Speakers/SpeakersCTA'

const SpeakersPage = () => {
  return (
    <>
      <SpeakersBanner />
      <SpeakersHero />
      <SpeakersGrid />
      <SpeakersCTA />
    </>
  )
}

export default SpeakersPage
