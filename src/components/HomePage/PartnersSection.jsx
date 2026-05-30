function Partners() {
  return (
    <section className="invest-bg bg-green100! py-20  px-4 md:px-10 lg:px-20 flex flex-col gap-12">
      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white font-jost">
          Our Partners & Sponsors
        </h2>
        <p className="text-white font-medium font-jost text-base text-center md:text-lg">
          Working together to transform Lagos's economy
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        <img src="/p1.png" className="w-full" />
        <img src="/p2.png" className="w-full" />
        <img src="/p3.png" className="w-full" />
        <img src="/p2.png" className="w-full" />
      </div>
    </section>
  );
}

export default Partners;
