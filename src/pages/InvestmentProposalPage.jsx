import React from "react";
import ProposalHero from "../components/InvestmentProposal/ProposalHero";
import ProposalForm from "../components/InvestmentProposal/ProposalForm";
import InvestmentSection from "../components/HomePage/InvestmentSection";
import FutureSection from "../components/HomePage/FutureSection";
import { Reveal, Spotlight } from "../lib/animations";

const InvestmentProposalPage = () => {
  return (
    <>
      <Spotlight color="rgba(253, 236, 63, 0.18)" size={620}>
        <Reveal direction="fade" duration={900}>
          <ProposalHero />
        </Reveal>
      </Spotlight>
      <Reveal direction="up">
        <ProposalForm />
      </Reveal>
      <Spotlight color="rgba(99, 202, 168, 0.20)" size={560}>
        <Reveal direction="up">
          <InvestmentSection />
        </Reveal>
      </Spotlight>
      <Reveal direction="up">
        <FutureSection />
      </Reveal>
    </>
  );
};

export default InvestmentProposalPage;
