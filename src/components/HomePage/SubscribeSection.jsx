import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";
import { subscribe, ApiError } from "../../lib/api";

const INDUSTRIES = [
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

const initialForm = {
  firstName: "",
  lastName: "",
  gender: "",
  country: "",
  email: "",
  industry: "",
  jobTitle: "",
  companyName: "",
};

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
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    setErrorMessage("");
    setFieldErrors({});

    try {
      await subscribe(form);
      setSuccess(true);
      setForm(initialForm);
    } catch (err) {
      if (err instanceof ApiError) {
        setErrorMessage(err.message || "Subscription failed.");
        setFieldErrors(err.errors || {});
      } else {
        setErrorMessage(
          "Could not reach the server. Please check your connection and try again."
        );
      }
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "bg-slate100/6 rounded-md border-2 border-green600/9 h-11 px-2 font-jost text-base text-slate100/50 shadow-form-input";

  return (
    <section className="bg-white skyline-bg px-4 md:px-10 lg:px-20 py-10 pt-60 md:py-20 md:pt-80 flex justify-center">
      <div className="flex flex-col gap-6 items-center w-full max-w-2xl">
        <h3 className="text-xl md:text-2xl font-bold font-jost text-black text-center">
          Subscribe for exclusive updates, investor insights, partnership &
          opportunities
        </h3>

        {success ? (
          <div className="w-full rounded-md border border-green100/40 bg-green100/5 px-5 py-6 text-center">
            <p className="font-jost font-bold text-green100">
              Thank you for subscribing!
            </p>
            <p className="mt-2 text-sm font-jost text-black/70">
              You&apos;ll receive Invest Lagos updates, investor insights and
              notifications whenever we publish new reports.
            </p>
            <button
              type="button"
              onClick={() => setSuccess(false)}
              className="mt-4 text-xs font-jost font-bold uppercase tracking-wide text-green100"
            >
              Subscribe another email
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="flex flex-col gap-6 w-full" noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5.5">
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={update("firstName")}
                className={inputClass}
                placeholder="First Name*"
                required
              />
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={update("lastName")}
                className={inputClass + " "}
                placeholder="Last Name*"
                required
              />
              <select
                name="gender"
                value={form.gender}
                onChange={update("gender")}
                className={inputClass}
              >
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
              <select
                name="country"
                value={form.country}
                onChange={update("country")}
                className={inputClass}
                required
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
                name="email"
                value={form.email}
                onChange={update("email")}
                className={inputClass}
                placeholder="Email Address*"
                required
              />
              <select
                name="industry"
                value={form.industry}
                onChange={update("industry")}
                className={inputClass}
              >
                <option value="">Industry</option>
                {INDUSTRIES.map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
              <input
                type="text"
                name="jobTitle"
                value={form.jobTitle}
                onChange={update("jobTitle")}
                className={inputClass}
                placeholder="Job Title"
              />
              <input
                type="text"
                name="companyName"
                value={form.companyName}
                onChange={update("companyName")}
                className={inputClass + " "}
                placeholder="Company Name"
              />
            </div>

            {errorMessage && (
              <div className="rounded-md border border-red-500/30 bg-red-500/5 px-4 py-3 text-sm font-jost text-red-600">
                <p className="font-medium">{errorMessage}</p>
                {Object.keys(fieldErrors).length > 0 && (
                  <ul className="mt-2 list-disc pl-5 space-y-1 text-[12px] text-red-600/90">
                    {Object.values(fieldErrors)
                      .flat()
                      .map((msg, i) => (
                        <li key={i}>{msg}</li>
                      ))}
                  </ul>
                )}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="flex items-center gap-5 px-20 py-1.5 md:py-2.5 rounded-md bg-green100  border border-black/30 self-center disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <span className="text-sm font-bold font-jost text-white">
                {submitting ? "Subscribing…" : "Subscribe"}
              </span>
              <div className="w-9 h-9 rounded-md bg-white/20 backdrop-blur-xl backdrop-brightness-100 flex items-center justify-center">
                <FiArrowUpRight className="w-5 h-5 text-white" />
              </div>
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default SubscribeSection;
