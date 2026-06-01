import { LuDollarSign } from "react-icons/lu";
import { LuBuilding2 } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";
import { FiBriefcase } from "react-icons/fi";

const stats = [
  {
    value: "$400M+",
    label: "In investment commitments mobilised across summits",
    icon: LuDollarSign,
  },
  {
    value: "253",
    label: "Investment proposals reviewed & qualified",
    icon: LuBuilding2,
  },
  {
    value: "1st",
    label: "Investment Summit anchored in Lagos State",
    icon: FiUsers,
  },
  {
    value: "₦10B",
    label: "Direct contribution to the Lagos economy",
    icon: FiBriefcase,
  },
];

const DealRoomStats = () => {
  return (
    <section className="bg-slate-50 px-4 md:px-10 lg:px-20 py-16 lg:py-20 deal-impact-bg">
      <div className="mx-auto max-w-310">
        <h2 className="text-center text-2xl font-bold text-black300 font-jost sm:text-3xl">
          The Impact. The Firsts. The Wins.
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
                  className={`${
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

export default DealRoomStats;
