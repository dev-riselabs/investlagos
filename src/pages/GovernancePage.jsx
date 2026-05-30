import React from 'react'
import GovernanceBanner from '../components/Governance/GovernanceBanner'
import GovernanceLeadership from '../components/Governance/GovernanceLeadership'
import GovernanceLOC from '../components/Governance/GovernanceLOC'
import GovernanceSubCommittees from '../components/Governance/GovernanceSubCommittees'
import GovernanceAdditionalCommittees from '../components/Governance/GovernanceAdditionalCommittees'
import GovernancePartnerships from '../components/Governance/GovernancePartnerships'
import SpeakersCTA from '../components/Speakers/SpeakersCTA'
import { Reveal, Spotlight } from '../lib/animations'

const GovernancePage = () => {
  return (
    <>
      <Spotlight color="rgba(255, 255, 255, 0.16)" size={580}>
        <Reveal direction="fade" duration={900}>
          <GovernanceBanner />
        </Reveal>
      </Spotlight>
      <Reveal direction="up"><GovernanceLeadership /></Reveal>
      <Reveal direction="up"><GovernanceLOC /></Reveal>
      <Reveal direction="up"><GovernanceSubCommittees /></Reveal>
      <Reveal direction="up"><GovernanceAdditionalCommittees /></Reveal>
      <Reveal direction="up"><GovernancePartnerships /></Reveal>
      <Reveal direction="up"><SpeakersCTA /></Reveal>
    </>
  )
}

export default GovernancePage
