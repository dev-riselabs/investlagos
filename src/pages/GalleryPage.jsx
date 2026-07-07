import React, { useState } from "react";
import GalleryHeroSection from "../components/Gallery/GalleryHeroSection";
import GalleryPicture from "../components/Gallery/GalleryPicture";
import SpeakersCTA from "../components/Speakers/SpeakersCTA";
import InformationSection from "../components/HomePage/InformationSection";
import GalleryPictureThree from "../components/Gallery/GalleryPictureThree";

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState(2);

  function handleTabChange(tab) {
    setActiveTab(tab);
  }
  return (
    <>
      <GalleryHeroSection />
      <div className="flex h-20 bg-black100 divide-x divide-white/30">
        <button
          onClick={() => handleTabChange(2)}
          className={`flex items-center justify-center flex-1 text-xl! sm:text-2xl! font-bold! font-jost! text-white ${activeTab === 2 ? "bg-green100" : "bg-transparent hover:bg-green150"}`}
        >
          Invest Lagos 2.0
        </button>
        <button
          onClick={() => handleTabChange(3)}
          className={`flex items-center justify-center flex-1 text-xl! sm:text-2xl! font-bold! font-jost! text-white ${activeTab === 3 ? "bg-green100" : "bg-transparent hover:bg-green350"}`}
        >
          Invest Lagos 3.0
        </button>
      </div>
      {activeTab === 2 && <GalleryPicture />}
      {activeTab === 3 && <GalleryPictureThree />}

      <InformationSection />
    </>
  );
};

export default GalleryPage;
