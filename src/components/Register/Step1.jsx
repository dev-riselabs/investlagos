import { SectionHeading, TextField, SelectField } from "./FormFields";

const TITLE_OPTIONS = ["Mr", "Mrs", "Ms", "Miss", "Dr", "Prof", "Engr", "Chief"];
const GENDER_OPTIONS = ["Male", "Female", "Prefer not to say"];

const INDUSTRY_OPTIONS = [
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

const ORG_TYPE_OPTIONS = [
  "Private Sector",
  "Public Sector",
  "Non-Profit / NGO",
  "Government Agency",
  "Development Partner",
  "Startup",
  "Academic / Research",
  "Other",
];

const Step1 = ({ data, update }) => {
  const handle = (e) => update({ [e.target.name]: e.target.value });

  return (
    <div className="space-y-12">
      {/* Personal Information */}
      <section>
        <SectionHeading>Personal Information</SectionHeading>
        <div className="space-y-5">
          <SelectField
            label="Title"
            required
            placeholder="Mr"
            name="title"
            value={data.title}
            onChange={handle}
          >
            {TITLE_OPTIONS.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </SelectField>

          <TextField
            label="First Name"
            required
            placeholder="John"
            name="firstName"
            value={data.firstName}
            onChange={handle}
          />

          <TextField
            label="Last Name"
            required
            placeholder="Doe"
            name="lastName"
            value={data.lastName}
            onChange={handle}
          />

          <SelectField
            label="Gender"
            optional
            placeholder="Male"
            name="gender"
            value={data.gender}
            onChange={handle}
          >
            {GENDER_OPTIONS.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </SelectField>

          <TextField
            label="E-mail Address"
            required
            type="email"
            placeholder="your_email@example.com"
            name="email"
            value={data.email}
            onChange={handle}
          />

          <TextField
            label="Phone Number"
            required
            type="tel"
            placeholder="(   )   -    -"
            name="phone"
            value={data.phone}
            onChange={handle}
          />

          <TextField
            label="Nationality"
            required
            placeholder="---"
            name="nationality"
            value={data.nationality}
            onChange={handle}
          />

          <TextField
            label="Country of Residence"
            required
            placeholder="---"
            name="country"
            value={data.country}
            onChange={handle}
          />
        </div>
      </section>

      {/* Professional Information */}
      <section>
        <SectionHeading>Professional Information</SectionHeading>
        <div className="space-y-5">
          <TextField
            label="Organization/Company Name"
            required
            placeholder=""
            name="organization"
            value={data.organization}
            onChange={handle}
          />

          <SelectField
            label="Industry/Sector"
            required
            placeholder="---"
            name="industry"
            value={data.industry}
            onChange={handle}
          >
            {INDUSTRY_OPTIONS.map((i) => (
              <option key={i} value={i}>{i}</option>
            ))}
          </SelectField>

          <SelectField
            label="Organization Type"
            required
            placeholder="---"
            name="orgType"
            value={data.orgType}
            onChange={handle}
          >
            {ORG_TYPE_OPTIONS.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </SelectField>
        </div>
      </section>
    </div>
  );
};

export default Step1;
