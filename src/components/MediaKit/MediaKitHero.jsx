import React from "react";

const MediaKitHero = () => {
  return (
    <section
      className="relative overflow-hidden bg-white skyline-bg px-4 md:px-10 lg:px-20 py-14 lg:py-20"
      style={{
        backgroundImage: "url(/media-kit-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative mx-auto max-w-310 font-inter">
        <h1 className="text-2xl font-medium leading-tight text-white sm:text-3xl lg:text-[32px]">
          Media Kits
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-white sm:text-base">
          Access the official Invest Lagos Media Kit for detailed resources created to support editorial coverage, 
          reporting and broadcast content. The Media Kit provides journalists, 
          media partners, content creators and stakeholders with access to key information and downloadable assets related to the summit.
          {/* Access a Media Kit including news, capacity, logos, branding assets
          and where speaker information and more downloadable press to support
          editorial and reportage coverage of Invest Lagos 3.0. */}
        </p>
      </div>
    </section>
  );
};

export default MediaKitHero;
