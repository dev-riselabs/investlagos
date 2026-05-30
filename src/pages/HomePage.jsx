import React from "react";
import HeroSection from "../components/HomePage/HeroSection";
import StreamSection from "../components/HomePage/StreamSection";
import TestimonialsSection from "../components/HomePage/TestimonialsSection";
import SpeakersSection from "../components/HomePage/SpeakersSection";
import SessionsSection from "../components/HomePage/SessionsSection";
import PressSection from "../components/HomePage/PressSection";
import MediaSection from "../components/HomePage/MediaSection";
import LibraryStats from "../components/HomePage/LibraryStats";
import AdvantageSection from "../components/HomePage/AdvantageSection";
import DealBookSection from "../components/HomePage/DealBookSection";
import PebecSection from "../components/HomePage/PebecSection";
import FutureSection from "../components/HomePage/FutureSection";
import SubscribeSection from "../components/HomePage/SubscribeSection";
import InformationSection from "../components/HomePage/InformationSection";
import InvestmentSection from "../components/HomePage/InvestmentSection";
import ReasonSection from "../components/HomePage/ReasonSection";
import GlobalLeaderSection from "../components/HomePage/GlobalLeaderSection";
import SummitAgenda from "../components/HomePage/SummitAgenda";
import SummitSessions from "../components/HomePage/SessionsSection";
import { Reveal, Spotlight, FoldStack } from "../lib/animations";

const HomePage = () => {
  return (
    <>
      <Spotlight color="rgba(253, 236, 63, 0.18)" size={620}>
        <Reveal direction="fade" duration={900}>
          <HeroSection />
        </Reveal>
      </Spotlight>

      {/* Stacked / folded scroll cluster — sections pile on top of each other
          as the user scrolls down and unstack when scrolling back up. */}
      <FoldStack>
        <AdvantageSection />
        <DealBookSection />
        <PebecSection />
        <GlobalLeaderSection />
      </FoldStack>

      <Reveal direction="up"><SpeakersSection /></Reveal>
      <Reveal direction="scale" duration={800}>
        <img src="/home-img.png" className="w-full" />
      </Reveal>
      <Reveal direction="up"><SummitSessions /></Reveal>
      <Reveal direction="up"><SummitAgenda /></Reveal>
      <Reveal direction="up"><PressSection /></Reveal>

      {/* Second fold cluster around the mid-page content blocks */}
      <FoldStack>
        <InvestmentSection />
        <MediaSection />
        <ReasonSection />
      </FoldStack>

      <Reveal direction="up"><InvestmentSection /></Reveal>
      <Reveal direction="up"><InformationSection /></Reveal>
      <Reveal direction="up"><SubscribeSection /></Reveal>
      <Reveal direction="up"><StreamSection /></Reveal>
      <Spotlight color="rgba(99, 202, 168, 0.22)" size={560}>
        <Reveal direction="up"><FutureSection /></Reveal>
      </Spotlight>
    </>
  );
};

export default HomePage;
