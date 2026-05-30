import {
  CalendarDays,
  Monitor,
  TrendingUp,
  MapPin,
  Award,
  Star,
} from "lucide-react";

const agendaData = [
  {
    day: "DAY 1",
    date: "8th June 2026",
    title: "Key Subjects",
    activities: [
      "Keynote Address by Asiwaju Bola Ahmed Tinubu, GCFR President of the Federal Republic of Nigeria",
      "Lagos: Africa's Global Gateway",
      "The Future of Technology & Innovation",
      "Governors' Investment Showcase",
      "Unlocking Investment",
    ],
    evening: "Gala Dinner & Networking Reception",
  },
  {
    day: "DAY 2",
    date: "9th June 2026",
    title: "Key Subjects",
    activities: [
      "Building the Cities of the Future",
      "Global Partnership for Growth",
      "Talent, Creativity and Culture",
      "Energy and Sustainability",
    ],
    evening: "Fashion Show & After Party",
  },
];

export default function SummitAgenda() {
  return (
    <section className="bg-green100 py-20">
      <div className="px-4 md:px-10 lg:px-20 flex flex-col">
        {/* Header */}
        <div className="mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-white font-jost">
            The Summit Agenda
          </h2>

          <div className="mt-4 h-1 w-16 bg-white" />

          <p className="mt-6 text-base md:text-lg font-jost font-medium text-white">
            Not just conversations, decisions that move markets.
          </p>

          <button className="mt-8 flex items-center justify-start  gap-4 text-sm md:text-lg font-jost font-semibold uppercase tracking-wider text-yellow">
            View Full Detailed Programme
            <span className="h-px w-6 sm:w-12 bg-white" />
          </button>
        </div>

        {/* Top Cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          {agendaData.map((agenda) => (
            <div
              key={agenda.day}
              className="rounded-4xl bg-black/19 p-8 md:p-13 text-white flex flex-col gap-8"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-white/20 px-3 py-1 text-[10px] font-medium tracking-widest">
                  {agenda.day}
                </span>

                <div className="space-y-2">
                  <span className="text-xs text-white/70">
                    AGENDA LINE ITEM
                  </span>
                  <p className="mt-2 text-sm text-white/80">{agenda.title}</p>
                </div>
              </div>

              <div className="">
                <h3 className="text-4xl font-bold text-yellow">{agenda.date}</h3>
              </div>

              <div className="space-y-4">
                {agenda.activities.map((item, index) => (
                  <div key={item} className="flex items-center gap-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 shrink-0">
                      {index % 3 === 0 ? (
                        <CalendarDays size={16} />
                      ) : index % 3 === 1 ? (
                        <TrendingUp size={16} />
                      ) : (
                        <Monitor size={16} />
                      )}
                    </div>

                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between border-t border-white/10 pt-6 mt-auto">
                <div>
                  <p className="mb-1 text-[10px] uppercase tracking-[0.3em] text-white/50">
                    Evening Activity
                  </p>

                  <div className="flex items-center gap-3">
                    <Star size={16} />
                    <span className="font-medium">{agenda.evening}</span>
                  </div>
                </div>

                <Award className="text-white/80" />
              </div>
            </div>
          ))}
        </div>

        {/* Day 3 Card */}
        <div className="mt-8 rounded-[32px] bg-emerald-700 p-8 text-white">
          <div className="mb-8 flex items-start justify-between">
            <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-medium tracking-widest">
              DAY 3
            </span>

            <span className="text-xs text-white/70">AGENDA LINE ITEM</span>
          </div>

          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <h3 className="text-4xl font-bold text-yellow">10th June 2026</h3>

            <p className="text-sm text-white/80">
              Delegates' Industrial & Infrastructure Site Tour
            </p>
          </div>

          <div className="space-y-4">
            {[
              "Tolaram / Lagos Free Zone",
              "Lekki Free Trade Zone",
              "Dangote Fertilizer Plant",
              "Dangote Petroleum Refinery",
              "Russell Smith 3D Printing & Manufacturing Factory",
            ].map((location, index) => (
              <div key={location} className="flex items-center gap-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                  {index < 2 ? <MapPin size={16} /> : <TrendingUp size={16} />}
                </div>

                <span className="text-sm">{location}</span>
              </div>
            ))}
          </div>

          <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-6">
            <div>
              <p className="mb-1 text-[10px] uppercase tracking-[0.3em] text-white/50">
                Evening Activity
              </p>

              <div className="flex items-center gap-3">
                <Star size={16} />
                <span className="font-medium">Movie Night</span>
              </div>
            </div>

            <Award className="text-white/80" />
          </div>
        </div>
      </div>
    </section>
  );
}
