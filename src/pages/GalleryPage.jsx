import React from "react";
import GalleryHeroSection from "../components/Gallery/GalleryHeroSection";
import GalleryPicture from "../components/Gallery/GalleryPicture";
import SpeakersCTA from "../components/Speakers/SpeakersCTA";
import InformationSection from "../components/HomePage/InformationSection";
const GalleryPage = () => {
  return (
    <>
      <GalleryHeroSection />
      <GalleryPicture />
      <InformationSection />
    </>
  );
};

export default GalleryPage;
