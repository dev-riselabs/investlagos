const arr = Array.from({ length: 15 }, (_, i) => i);

function HotelsSection() {
  return (
    <section className="px-4 md:px-10 lg:px-20 py-15 md:py-20">
      <div className="mx-auto max-w-310 flex flex-col">
        <p className="text-sm font-jost text-black500 mb-8">
          To ensure that our guest get the best of the Invest Lagos 3.0 and
          enjoy the city of Lagos, we are recommending the following hotels,
          which are close to and at most a 10-minute drive to the venue of the
          summit. We are also offering special discounts for Invest Lagos 3.0
          guests at some of the hotels
        </p>
        {/* island hostels */}
        <div className="flex flex-col gap-12 mb-20">
          <div className="flex flex-col gap-3">
            <h4 className="text-green100 font-manrope text-2xl font-semibold">
              Lagos Island
            </h4>
            <p className="text-green100 font-manrope text-xs font-medium">
              Below are the list of hotels in Lagos Island
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {arr.map((i) => (
              <div key={i} className="flex flex-col gap-6">
                <div className="flex flex-col gap-8">
                  <div className="border-27 border-green100 rounded-xl shadow-hotel">
                    <img src="/hotel.jpg" alt="" />
                  </div>
                  <div className="flex flex-col gap-3 font-jost">
                    <h5 className="text-lg font-semibold text-black100">
                      Eko Hotel
                    </h5>
                    <p className="text-sm text-black">
                      Plot 1415, Adetokunbo Ademola Street, Victoria Island,
                      Lagos
                    </p>
                  </div>
                </div>
                <button className="border border-green100 rounded-md text-green100 font-jost font-semibold! py-2 text-xs hover:bg-green100 hover:text-white transition">
                  Get Direction
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* mainland hostels */}
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-3">
            <h4 className="text-green100 font-manrope text-2xl font-semibold">
              Lagos Mainland
            </h4>
            <p className="text-green100 font-manrope text-xs font-medium">
              Below are the list of hotels in Lagos mainland
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {arr.map((i) => (
              <div key={i} className="flex flex-col gap-6">
                <div className="flex flex-col gap-8">
                  <div className="border-27 border-green100 rounded-xl shadow-hotel">
                    <img src="/hotel.jpg" alt="" />
                  </div>
                  <div className="flex flex-col gap-3 font-jost">
                    <h5 className="text-lg font-semibold text-black100">
                      Eko Hotel
                    </h5>
                    <p className="text-sm text-black">
                      Plot 1415, Adetokunbo Ademola Street, Victoria Island,
                      Lagos
                    </p>
                  </div>
                </div>
                <button className="border border-green100 rounded-md text-green100 font-jost font-semibold! py-2 text-xs hover:bg-green100 hover:text-white transition">
                  Get Direction
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HotelsSection;
