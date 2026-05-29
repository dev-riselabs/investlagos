import React from 'react'
import GovernanceBanner from '../components/Governance/GovernanceBanner'
import GovernanceLeadership from '../components/Governance/GovernanceLeadership'
import GovernanceLOC from '../components/Governance/GovernanceLOC'
import GovernanceSubCommittees from '../components/Governance/GovernanceSubCommittees'
import GovernanceAdditionalCommittees from '../components/Governance/GovernanceAdditionalCommittees'
import GovernancePartnerships from '../components/Governance/GovernancePartnerships'
import SpeakersCTA from '../components/Speakers/SpeakersCTA'

const GovernancePage = () => {
  return (
    <>
      <GovernanceBanner />
      <GovernanceLeadership />
      <GovernanceLOC />
      <GovernanceSubCommittees />
      <GovernanceAdditionalCommittees />
      <GovernancePartnerships />
      <SpeakersCTA />
    </>
  )
}

export default GovernancePage
