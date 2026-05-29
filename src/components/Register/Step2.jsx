import { SectionHeading, SubQuestion, RadioGroup, Radio } from "./FormFields";

const ATTENDING_AS = [
  "Investor",
  "Business Executive",
  "Government Official",
  "Diplomat",
  "Development Partner",
  "Entrepreneur",
  "Startup Founder",
  "Student",
  "Media",
  "Sponsor",
  "Exhibitor",
  "Speaker",
  "General Delegate",
];

const SECTORS = [
  "Infrastructure",
  "Technology & Innovation",
  "Financial Services",
  "Energy",
  "Manufacturing",
  "Real Estate",
  "Healthcare",
  "Education",
  "Logistics",
  "Creative Economy",
  "Agriculture",
  "Sports",
  "Tourism & Hospitality",
];

const DEAL_ROOM_ROLES = [
  "Investor",
  "Project Sponsor",
  "Business Seeking Investment",
  "Government Agency",
  "Development Partner",
];

const ATTENDANCE_MODE = ["Attend In-Person", "Attend Virtually"];

const Step2 = ({ data, update }) => {
  return (
    <div className="space-y-12">
      {/* Participation Category */}
      <section>
        <SectionHeading>Participation Category</SectionHeading>
        <SubQuestion>I am attending as:</SubQuestion>
        <RadioGroup
          name="attendingAs"
          value={data.attendingAs}
          onChange={(v) => update({ attendingAs: v })}
          options={ATTENDING_AS}
        />
      </section>

      {/* Investment Interests */}
      <section>
        <SectionHeading>Investment Interests</SectionHeading>
        <SubQuestion>Which sectors interest you most?</SubQuestion>
        <RadioGroup
          name="sector"
          value={data.sector}
          onChange={(v) => update({ sector: v })}
          options={SECTORS}
        />
      </section>

      {/* Deal Room Interest */}
      <section>
        <SectionHeading>Deal Room Interest</SectionHeading>
        <SubQuestion>Would you like to participate in the Deal Room?</SubQuestion>
        <div className="flex items-center gap-8 mb-6">
          <Radio
            name="dealRoom"
            value="Yes"
            checked={data.dealRoom === "Yes"}
            onChange={(e) => update({ dealRoom: e.target.value })}
            label="Yes"
          />
          <Radio
            name="dealRoom"
            value="No"
            checked={data.dealRoom === "No"}
            onChange={(e) => update({ dealRoom: e.target.value })}
            label="No"
          />
        </div>

        {data.dealRoom === "Yes" && (
          <>
            <SubQuestion>If yes:</SubQuestion>
            <RadioGroup
              name="dealRoomRole"
              value={data.dealRoomRole}
              onChange={(v) => update({ dealRoomRole: v })}
              options={DEAL_ROOM_ROLES}
            />
          </>
        )}
      </section>

      {/* Attendance Mode */}
      <section>
        <SectionHeading>Attendance Mood</SectionHeading>
        <SubQuestion>How will you participate?</SubQuestion>
        <div className="flex items-center gap-8">
          {ATTENDANCE_MODE.map((mode) => (
            <Radio
              key={mode}
              name="attendanceMode"
              value={mode}
              checked={data.attendanceMode === mode}
              onChange={(e) => update({ attendanceMode: e.target.value })}
              label={mode}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Step2;
