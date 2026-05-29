import { FiArrowUpRight } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Democratic Republic of the Congo",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Ivory Coast",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

function SubscribeSection() {
  return (
    <section className="bg-white skyline-bg px-4 md:px-10 lg:px-20 py-10 pt-60 md:py-20 md:pt-80 flex justify-center">
      <div className="flex flex-col gap-6 items-center">
        <h3 className="text-xl md:text-2xl font-bold font-jost text-black text-center">
          Subscribe for exclusive updates, investor insights partnership &
          opportunities
        </h3>
        <form action="" className="flex flex-col max-w-2xl gap-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5.5">
            <input
              type="text"
              name=""
              id=""
              className="bg-slate100/6 rounded-md border-2 border-green600/9 h-11 px-2 font-jost text-base text-slate100/50 shadow-form-input"
              placeholder="First Name*"
            />
            <input
              type="text"
              name=""
              id=""
              className="bg-slate100/6 rounded-md border-2 border-green600/9 h-11 px-2 font-jost text-base text-slate100/50 shadow-form-input "
              placeholder="Last Name*"
            />
            <select
              name=""
              id=""
              className="bg-slate100/6 rounded-md border-2 border-green600/9 h-11 px-2 font-jost text-base text-slate100/50 shadow-form-input"
            >
              <option value="">Gender *</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <select
              name=""
              id=""
              className="bg-slate100/6 rounded-md border-2 border-green600/9 h-11 px-2 font-jost text-base text-slate100/50 shadow-form-input"
            >
              <option value="">Country *</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            <input
              type="email"
              name=""
              id=""
              className="bg-slate100/6 rounded-md border-2 border-green600/9 h-11 px-2 font-jost text-base text-slate100/50 shadow-form-input"
              placeholder="Email Address*"
            />
            <select
              name=""
              id=""
              className="bg-slate100/6 rounded-md border-2 border-green600/9 h-11 px-2 font-jost text-base text-slate100/50 shadow-form-input"
            >
              <option value="">Industry</option>
            </select>
            <input
              type="text"
              name=""
              id=""
              className="bg-slate100/6 rounded-md border-2 border-green600/9 h-11 px-2 font-jost text-base text-slate100/50 shadow-form-input"
              placeholder="Job Title"
            />
            <input
              type="text"
              name=""
              id=""
              className="bg-slate100/6 rounded-md border-2 border-green600/9 h-11 px-2 font-jost text-base text-slate100/50 shadow-form-input "
              placeholder="Company Name"
            />
          </div>
          <button className="flex items-center gap-5 px-20 py-1.5 md:py-2.5 rounded-md bg-green100  border border-black/30 self-center">
            <span className="text-sm font-bold font-jost text-white">
              Subscribe
            </span>
            <div className="w-9 h-9 rounded-md bg-white/20 backdrop-blur-xl backdrop-brightness-100 flex items-center justify-center">
              <FiArrowUpRight className="w-5 h-5 text-white" />
            </div>
          </button>
        </form>
      </div>
    </section>
  );
}

export default SubscribeSection;
