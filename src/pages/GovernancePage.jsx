import React from 'react'
import GovernanceBanner from '../components/Governance/GovernanceBanner'
import GovernanceLeadership from '../components/Governance/GovernanceLeadership'
import GovernanceLOC from '../components/Governance/GovernanceLOC'
import GovernanceSubCommittees from '../components/Governance/GovernanceSubCommittees'
import GovernanceGrid from '../components/Governance/GovernanceGrid'
import SpeakersCTA from '../components/Speakers/SpeakersCTA'

const GovernancePage = () => {
  return (
    <>
      <GovernanceBanner />
      <GovernanceLeadership />
      <GovernanceLOC />
      <GovernanceSubCommittees />
      <GovernanceGrid />
      <SpeakersCTA />
    </>
  )
}

export default GovernancePage
