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
            <span className="font-semibold">Context:</span> Since 2025, Nigeria has had a short stay
            “e-visa” system for both business and tourism. You can apply for
            this using google sign-on on the e-visa portal and it should be
            processed within 1 - 2 weeks.
          </p>
          <p className="text-sm leading-relaxed text-black100">
            {" "}
            <span className="font-semibold">Important Notice:</span> Visa policies, fees, processing
            timelines, and entry requirements are subject to change by the
            Nigerian authorities without prior notice. Delegates are strongly
            advised to consult the official Nigeria Immigration Service and
            their nearest Nigerian embassy or consulate for the most up-to-date
            information before travel. We look forward to welcoming you to
            Lagos, Nigeria—the economic heartbeat of Africa—and to an exciting
            and impactful Invest Lagos 3.0 experience.
          </p>
        </div>
      </div>
    </section>
    <div className="px-4 md:px-10 lg:px-20 py-15 md:py-20">
        <div className="flex flex-col gap-12 max-w-310 mx-auto"></div>
    </div>
    </>
  );
}

export default VisaSection;
