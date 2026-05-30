import React from "react";
import GovernanceBanner from "../components/Governance/GovernanceBanner";
import GovernanceLeadership from "../components/Governance/GovernanceLeadership";
import GovernanceLOC from "../components/Governance/GovernanceLOC";
import GovernanceSubCommittees from "../components/Governance/GovernanceSubCommittees";
import GovernanceAdditionalCommittees from "../components/Governance/GovernanceAdditionalCommittees";
import GovernancePartnerships from "../components/Governance/GovernancePartnerships";
import SpeakersCTA from "../components/Speakers/SpeakersCTA";
import { Reveal, Spotlight } from "../lib/animations";
import StreamSection from "../components/HomePage/StreamSection";

const GovernancePage = () => {
  return (
    <>
      <Spotlight color="rgba(255, 255, 255, 0.16)" size={580}>
        <Reveal direction="fade" duration={900}>
          <GovernanceBanner />
        </Reveal>
      </Spotlight>
      <GovernanceLeadership />
      <GovernanceLOC />
      <GovernanceSubCommittees />
      <GovernanceAdditionalCommittees />
      <GovernancePartnerships />
      <StreamSection />
    </>
  );
};

export default GovernancePage;
