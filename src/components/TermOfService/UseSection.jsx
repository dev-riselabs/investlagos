function UseSection() {
  return (
    <section className="px-4 md:px-10 lg:px-20 py-15 md:py-30 bg-white border-b-8 border-b-green100">
      <div className="max-w-310 mx-auto">
      <div className="flex flex-col gap-6 px-4 md:px-10 py-8 md:py-10 rounded-4xl bg-green100 md:flex-row md:items-center">
        <div className="flex flex-col gap-9 md:flex-1">
          <h3 className="text-white font-jost font-medium text-2xl md:text-3xl">
            Terms of Use
          </h3>
          <div className="flex flex-col gap-3">
            {[
              "By accessing and using the Invest Lagos website, you agree to comply with these Terms and Conditions. The information provided on this website is intended for general information and promotional purposes relating to Invest Lagos and its associated activities. While every effort is made to ensure the accuracy of information published, Invest Lagos reserves the right to modify, update or remove content without prior notice.",

              "Registration for summit activities, events, exhibitions and related engagements may be subject to additional requirements, eligibility criteria and approval processes.",

              "Invest Lagos reserves the right to use photographs, video recordings and other media captured during summit activities for communication, promotional, educational, and archival purposes. Users of this website are expected to use all content lawfully and responsibly. Unauthorized reproduction, distribution, or misuse of website materials may be restricted by applicable laws and regulations.",

              "Continued use of this website constitutes acceptance of these Terms and Conditions",
            ].map((p, i) => (
              <p key={i} className="text-white font-jost text-sm md:text-base">{p}</p>
            ))}
          </div>
        </div>
        <img src="/term-service-img.png" alt="" className="md:flex-1" />
      </div>
      </div>
    </section>
  );
}

export default UseSection;
