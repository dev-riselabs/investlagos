import React from 'react'
import FutureLeadersHero from '../components/FutureLeadersPage/FutureLeadersHero'
import Metrics from '../components/FutureLeadersPage/Metrics'
import KeyPriorities from '../components/FutureLeadersPage/KeyPriorities'
import YouthGala from '../components/FutureLeadersPage/YouthGala'
import LagosFutureLeaderMovement from '../components/FutureLeadersPage/LagosFutureLeaderMovement'
import ReadyToInnovate from '../components/FutureLeadersPage/ReadyToInnovate'
import FutureLeaderCropEngagement from '../components/FutureLeadersPage/FutureLeaderCropEngagement'
import SpeakersCTA from '../components/Speakers/SpeakersCTA'
const FutureLeadersPage = () => {
  return (
    <>
    <FutureLeadersHero />
    <Metrics />
    <KeyPriorities />
    <YouthGala />
    <LagosFutureLeaderMovement />
    <FutureLeaderCropEngagement />
    <ReadyToInnovate />
<SpeakersCTA />
    </>
  )
}

export default FutureLeadersPage