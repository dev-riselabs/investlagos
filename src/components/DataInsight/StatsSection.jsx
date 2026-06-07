import { LuDollarSign } from "react-icons/lu";
import { LuBuilding2 } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";
import { FiBriefcase } from "react-icons/fi";

const stats = [
  {
    value: "$5.2 Billion",
    label: "Verified investment opportunities across infrastructure, technology, manufacturing, energy, real estate and other strategic sectors.",
    icon: LuDollarSign,
  },
  {
    value: "52",
    label: "Investment-ready projects at various stages of readiness seeking private sector participation, strategic partnerships, and capital deployment.",
    icon: LuBuilding2,
  },
  {
    value: "102",
    label: "Institutional investors engaged – a growing network of DFIs, sovereign funds, private capital providers and development partners.",
    icon: FiUsers,
  },
  {
    value: "58",
    label: "Public-private partnerships facilitated supporting infrastructure delivery, economic development, and investment promotion.",
    icon: FiBriefcase,
  },
];

const DataInsightStats = () => {
  return (
    <section className="bg-slate-50 px-4 md:px-10 lg:px-20 py-16 lg:py-20 deal-impact-bg">
      <div className="mx-auto max-w-310">
        <h2 className="text-center text-2xl font-bold text-black300 font-jost sm:text-3xl">
          The Investment Opportunity
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {stats.map(({ value, label, icon: Icon }, i) => (
            <div
              key={value}
              className="rounded-lg bg-white p-6 text-center shadow-sm border border-slate250"
            >
              <span
                className={`mx-auto flex h-10 w-10 items-center justify-center rounded-md ${
                  i === 0
                    ? "bg-green750/10"
                    : i === 1
                      ? "bg-orange/10"
                      : i === 2
                        ? "bg-orange100/10"
                        : "bg-blue100/10"
                }`}
              >
                <Icon
                  className={`w-5 h-5 ${
                    i === 0
                      ? "text-green750"
                      : i === 1
                        ? "text-orange"
                        : i === 2
                          ? "text-orange100"
                          : "text-blue100"
                  }`}
                />
              </span>
              <p className="mt-4 text-2xl font-bold text-black300 sm:text-3xl font-jost">
                {value}
              </p>
              <p className="mt-2 text-sm leading-5 text-black300/70 font-jost">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataInsightStats;
