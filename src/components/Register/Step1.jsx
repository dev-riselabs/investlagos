import { SectionHeading, TextField, SelectField } from "./FormFields";

const TITLE_OPTIONS = ["Mr", "Mrs", "Ms", "Miss", "Dr", "Prof", "Engr", "Chief"];
const GENDER_OPTIONS = ["Male", "Female", "Prefer not to say"];

const COUNTRY_LIST = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
  "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain",
  "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
  "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria",
  "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada",
  "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros",
  "Congo (Brazzaville)", "Congo (Kinshasa)", "Costa Rica", "Croatia", "Cuba",
  "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
  "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia",
  "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia",
  "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau",
  "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran",
  "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan",
  "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho",
  "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar",
  "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania",
  "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro",
  "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands",
  "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia",
  "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea",
  "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania",
  "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia",
  "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe",
  "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore",
  "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea",
  "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland",
  "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo",
  "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
  "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States",
  "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam",
  "Yemen", "Zambia", "Zimbabwe",
];

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
            placeholder="Select Title"
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

          <SelectField
            label="Nationality"
            required
            placeholder="Select Nationality"
            name="nationality"
            value={data.nationality}
            onChange={handle}
          >
            {COUNTRY_LIST.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </SelectField>

          <SelectField
            label="Country of Residence"
            required
            placeholder="Select Country"
            name="country"
            value={data.country}
            onChange={handle}
          >
            {COUNTRY_LIST.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </SelectField>
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
            placeholder="Select"
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
            placeholder="Select"
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
