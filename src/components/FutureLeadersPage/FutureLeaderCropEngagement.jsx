const FutureLeaderCropEngagement = () => {
  return (
    <section className="bg-white px-4 md:px-10 lg:px-20 py-20 lg:py-24">
      <div className="mx-auto max-w-6xl font-jost">
        <div className="mb-14 text-center">
          <h2 className="mb-3 text-3xl font-semibold text-black300 sm:text-4xl">
            Future Leaders Engagement
          </h2>
          <p className="text-[15px] text-violet sm:text-base">
            Participation in the Invest Lagos Future Leaders Movement initiative
            continues to grow, with strong representation of young women.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <img
            src="/crop_img_1.png"
            alt="Youth Participation Growth Chart"
            className="w-full h-auto "
          />

          <img
            src="/crop_img_2.png"
            alt="Gender Representation Chart"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default FutureLeaderCropEngagement;
