function StatementSection() {
  return (
    <section className="px-4 md:px-10 lg:px-20 py-15 md:py-30 bg-white border-b-8 border-b-green100">
      <div className="max-w-310 mx-auto">
      <div className="flex flex-col gap-6 px-4 md:px-10 py-8 md:py-10 rounded-4xl bg-green100 md:flex-row md:items-center">
        <div className="flex flex-col gap-9 md:flex-1 w-full">
          <h3 className="text-white font-jost font-medium text-2xl md:text-3xl">
            Accessibility Statement
          </h3>
          <div className="flex flex-col gap-3">
            {[
              " Invest Lagos is committed to providing an inclusive and accessible experience for all participants, visitors and stakeholders. We strive to ensure that our website, communications and event experiences are accessible to individuals of all abilities. Our team continuously works to improve accessibility standards and enhance user experience across our digital platforms.",

              "If you encounter any accessibility barriers while using this website or require assistance accessing information or participating in the summit, please contact the Invest Lagos Secretariat. We welcome feedback and are committed to providing appropriate support wherever possible.",
            ].map((p, i) => (
              <p key={i} className="text-white font-jost text-sm md:text-base">
                {p}
              </p>
            ))}
          </div>
        </div>
        <img
          src="/accessibility-img.png"
          alt=""
          className="md:flex-1 w-full"
        />
      </div>
      </div>
    </section>
  );
}

export default StatementSection;
