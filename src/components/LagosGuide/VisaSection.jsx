import { CgFileDocument } from "react-icons/cg";
function VisaSection() {
  return (
    <>
      <section className="bg-green400 px-4 md:px-10 lg:px-20 py-12 lg:py-16">
        <div className="mx-auto max-w-310 font-jost">
          {/* Header Section */}
          <div className="mb-6">
            <h2 className="flex items-center gap-3 text-2xl font-bold text-white sm:text-3xl">
              <CgFileDocument className="text-white w-7" />
              Visa & Flight Bookings
            </h2>
          </div>

          {/* White Card Section */}
          <div className="rounded-lg bg-white p-6 shadow-sm sm:p-8 space-y-8 font-jost">
            <p className="text-sm leading-relaxed text-black100">
              {" "}
              <span className="font-semibold">Context:</span> Since 2025,
              Nigeria has had a short stay “e-visa” system for both business and
              tourism. You can apply for this using google sign-on on the e-visa
              portal and it should be processed within 1 - 2 weeks.
            </p>
            <p className="text-sm leading-relaxed text-black100">
              {" "}
              <span className="font-semibold">Important Notice:</span> Visa
              policies, fees, processing timelines, and entry requirements are
              subject to change by the Nigerian authorities without prior
              notice. Delegates are strongly advised to consult the official
              Nigeria Immigration Service and their nearest Nigerian embassy or
              consulate for the most up-to-date information before travel. We
              look forward to welcoming you to Lagos, Nigeria—the economic
              heartbeat of Africa—and to an exciting and impactful Invest Lagos
              3.0 experience.
            </p>
          </div>
        </div>
      </section>
      <div className="px-4 md:px-10 lg:px-20 py-15 md:py-20">
        <div className="flex flex-col gap-12 max-w-310 mx-auto">
          <div className="flex flex-col gap-6">
            <h3 className="font-manrope text-green100 font-semibold text-2xl md:text-3xl">
              Visa & Travel Information for International Delegates
            </h3>
            <div className="flex flex-col gap-3">
              <p className="text-green400 text-sm">
                We are delighted to welcome investors, business leaders,
                policymakers, entrepreneurs, and delegates from around the world
                to Invest Lagos 3.0, Africa's premier investment and economic
                development summit.
              </p>
              <p className="text-green400 text-sm">
                To ensure a smooth travel experience, international visitors are
                encouraged to review Nigeria's visa requirements and begin their
                application process well in advance of their planned travel
                dates.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="font-manrope text-green100 font-semibold text-2xl md:text-3xl">
              Do You Need a Visa to Visit Nigeria?
            </h3>
            <img
              src="/lagos-guide-visa-img.png"
              alt=""
              className="max-h-100 h-full"
            />
            <div className="flex flex-col gap-3">
              <p className="text-green400 text-sm">
                Unless you are a citizen or national of an ECOWAS (Economic
                Community of West African States) member country, you will
                generally require a valid visa to enter Nigeria through any
                international airport or land border.
              </p>
              <p className="text-green400 text-sm">
                Visas are issued by the Nigeria Immigration Service (NIS)
                through Nigerian embassies and consulates worldwide. Nigeria
                also offers a Visa-on-Arrival program for eligible travelers
                under specific conditions.
              </p>
              <p className="text-green400 text-sm">
                We recommend that all delegates verify their eligibility and
                visa requirements before making final travel arrangements.
              </p>
            </div>
            <img
              src="/airport.jpg"
              alt=""
              className="max-h-110 h-full rounded-2xl sm:rounded-4xl"
            />
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="font-manrope text-green100 font-semibold text-2xl md:text-3xl">
              Recommended Option: Nigeria e-Visa
            </h3>
            <p className="text-green400 text-sm">
              For most international visitors attending Invest Lagos 3.0 for a
              short stay (typically less than 30 days), the Nigeria e-Visa is
              often the most convenient option.
            </p>
            <p className="text-green400 text-sm font-semibold">
              Documents Required
            </p>
            <p className="text-green400 text-sm">
              Applicants are typically required to provide:
            </p>
            <ul className="flex flex-col gap-2 list-disc pl-3">
              {[
                "A scanned copy of their passport biodata page",
                "A recent passport-sized photograph",
                "Proof of round-trip flight booking",
                "Accommodation details or hotel reservation",
                "Any additional supporting documents requested during the application process",
              ].map((item) => (
                <li key={item} className="text-green400 text-sm">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-green400 text-sm font-semibold">
              Processing Time
            </p>
            <div className="flex flex-col gap-3">
              <p className="text-green400 text-sm">
                The e-Visa is generally processed within a few business days,
                though applicants are advised to allow up to 1–2 weeks to
                accommodate potential delays.
              </p>
              <p className="text-green400 text-sm">
                To avoid last-minute complications, delegates are encouraged to
                submit their applications as early as possible.
              </p>
            </div>
            <img
              src="/airport2.png"
              alt=""
              className="max-h-110 h-full rounded-2xl sm:rounded-4xl"
            />
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="font-manrope text-green100 font-semibold text-2xl md:text-3xl">
              Visa-on-Arrival
            </h3>
            <div className="flex flex-col gap-3">
              <p className="text-green400 text-sm">
                Nigeria operates a Visa-on-Arrival (VoA) program for eligible
                travelers. Requirements and eligibility criteria may vary
                depending on nationality and purpose of travel.
              </p>
              <p className="text-green400 text-sm">
                Delegates interested in this option should consult official
                immigration guidance to determine eligibility and required
                documentation before departure.
              </p>
            </div>
          </div>

          <div className="border-27 border-blue shadow-hotel rounded-2xl p-6 pb-25 md:p-9 md:pb-30 flex flex-col gap-7 font-jost">
            <h3 className=" border-b border-b-black00 text-2xl md:text-3xl font-bold text-black p-2..5 pb-6">
              Travelwithus can help ease this process
            </h3>
            <p className="text-black500 text-sm md:text-base leading-7">
              We have teamed up with Travelwithus to simplify your travel
              experience, offering assistance with flight bookings,
              visa-on-arrival applications, airport transfers and accommodation
              arrangements. Through this collaboration, both international and
              local attendees of Invest Lagos will benefit from smooth,
              hassle-free travel logistics at exclusive discounted rates.
            </p>

            <div className="flex flex-col gap-3">
              <h4 className="text-xl md:text-2xl font-bold text-black">
                For Flight Booking:
              </h4>
              <ul className="list-disc pl-5">
                <li className="text-sm text-black500">
                  Visit www.travelwithus.com and use the discount code
                  “INVESTLAGOS” to get 10% off your flight booking.
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-xl md:text-2xl font-bold text-black">
                For Visa on Arrival Inquiries:
              </h4>
              <ul className="list-disc pl-5">
                <li className="text-sm text-black500">
                  Contact Travelwithus via email at{" "}
                  <span className="text-green100 font-bold">
                    visa@travelwithus
                  </span>{" "}
                  putting{" "}
                  <span className="text-green100 font-bold">
                    investinlagos@lagosmccti.com
                  </span>{" "}
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-xl md:text-2xl font-bold text-black">
                For Flight Booking:
              </h4>
              <ul className="list-disc pl-5">
                <li>
                  Contact Travelwithus via email at{" "}
                  <span className="text-green100 font-bold">
                    Support@travelwithus
                  </span>
                  , or{" "}
                  <span className="text-green100 font-bold">
                    investinlagos@lagosmccti.com
                  </span>
                  , or mobile: +234 810 000 0000
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VisaSection;
