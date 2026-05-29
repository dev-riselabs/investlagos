import {
  SectionHeading,
  SubQuestion,
  TextField,
  RadioGroup,
  Checkbox,
} from "./FormFields";

const CONSENT_OPTIONS = [
  {
    key: "updates",
    label:
      "I agree to receive summit updates and future investment-related communications.",
  },
  {
    key: "media",
    label:
      "I consent to the use of photographs and video recordings taken during the summit for official communications and promotional purposes.",
  },
];

const HEARD_ABOUT = [
  "Government Invitation",
  "Email",
  "Social Media",
  "Energy",
  "Friend/Colleague",
  "Website",
  "Media",
  "Other",
];

const OBJECTIVES = [
  "Explore Investment Opportunities",
  "Meet Government Officials",
  "Business Exposure",
  "Strategic Partnerships",
  "Project Financing",
  "Market Research",
  "Policy Engagement",
  "Networking",
  "Media Coverage",
];

const Step3 = ({ data, update }) => {
  const handle = (e) => update({ [e.target.name]: e.target.value });

  const toggleConsent = (key) => {
    update({
      consent: { ...data.consent, [key]: !data.consent?.[key] },
    });
  };

  return (
    <div className="space-y-12">
      {/* Special Requirements */}
      <section>
        <SectionHeading>Special Requirements</SectionHeading>
        <div className="space-y-5">
          <TextField
            label="Dietary Requirements"
            placeholder="John"
            name="dietary"
            value={data.dietary}
            onChange={handle}
          />
          <TextField
            label="Accessibility Requirements"
            placeholder="Doe"
            name="accessibility"
            value={data.accessibility}
            onChange={handle}
          />
          <TextField
            label="Other Special Requests"
            placeholder="Doe"
            name="otherRequests"
            value={data.otherRequests}
            onChange={handle}
          />
        </div>
      </section>

      {/* Consent */}
      <section>
        <SectionHeading uppercase>Consent</SectionHeading>
        <SubQuestion>How did you hear about Invest Lagos?</SubQuestion>
        <div className="space-y-3">
          {CONSENT_OPTIONS.map((c) => (
            <Checkbox
              key={c.key}
              name={c.key}
              checked={!!data.consent?.[c.key]}
              onChange={() => toggleConsent(c.key)}
              label={c.label}
            />
          ))}
        </div>
      </section>

      {/* Media & Communications */}
      <section>
        <SectionHeading>Media &amp; Communications</SectionHeading>

        <SubQuestion>How did you hear about Invest Lagos?</SubQuestion>
        <div className="mb-8">
          <RadioGroup
            name="heardAbout"
            value={data.heardAbout}
            onChange={(v) => update({ heardAbout: v })}
            options={HEARD_ABOUT}
          />
        </div>

        <SubQuestion>
          What is your primary objective for attending Invest Lagos 3.0?
        </SubQuestion>
        <RadioGroup
          name="objective"
          value={data.objective}
          onChange={(v) => update({ objective: v })}
          options={OBJECTIVES}
        />
      </section>
    </div>
  );
};

export default Step3;
