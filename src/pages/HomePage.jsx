import React from 'react'
import HeroSection from '../components/HomePage/HeroSection'
import StreamSection from '../components/HomePage/StreamSection'
import TestimonialsSection from '../components/HomePage/TestimonialsSection'
import SpeakersSection from '../components/HomePage/SpeakersSection'
import SessionsSection from '../components/HomePage/SessionsSection'
import PressSection from '../components/HomePage/PressSection'
import MediaSection from '../components/HomePage/MediaSection'
import LibraryStats from '../components/HomePage/LibraryStats'
import AdvantageSection from '../components/HomePage/AdvantageSection'
import DealBookSection from '../components/HomePage/DealBookSection'
import PebecSection from '../components/HomePage/PebecSection'


const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AdvantageSection/>
      <DealBookSection/>
      <PebecSection/>
      <StreamSection />
      <TestimonialsSection />
      <SpeakersSection />
      <SessionsSection />
      <PressSection />
      <MediaSection />
      <LibraryStats />
    </>
  )
}

export default HomePage