function HeroSection() {
  return (
    <section className=" px-4 md:px-10 lg:px-20 py-15 md:py-20 data-insight-bg">
      <div className="max-w-310 flex flex-col gap-6 mx-auto">
      {/* <div className="border-l-2 border-white p-4 font-inter font-bold text-base uppercase tracking-widest text-white">
        LAST UPDATED: MAY 2025
      </div> */}
      <h1 className="text-3xl font-inter font-medium sm:text-4xl md:text-5xl text-white">
        Data & Insights
      </h1>
      <p className="font-jost text-white text-base md:text-lg">Invest Lagos provides verified data on investment opportunities, economic performance and summit outcomes.</p>
    </div>
    </section>
  );
}

export default HeroSection;
