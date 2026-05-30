import React from "react";

const SpeakersBanner = () => {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage: "url(/youth_skills.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Green tint overlay */}
      <div className="absolute inset-0 bg-green100/85" />

      <div className="relative mx-auto max-w-310 px-4 md:px-10 lg:px-20 py-16 lg:py-24">
        <div className="border-l-4 border-l-white p-5">
          <span className="text-sm font-inter font-semibold uppercase tracking-[0.35em] text-white">
            Confirmed Speakers
          </span>
        </div>

        <h1 className="mt-6 max-w-3xl text-3xl font-medium leading-tight text-white sm:text-4xl lg:text-[44px] lg:leading-[1.15]">
          Meet the leaders shaping Africa’s most dynamic investment landscape
        </h1>

        <div className="mt-6 h-1 md:h-2 w-16 bg-slate200" />
      </div>
    </section>
  );
};

export default SpeakersBanner;
