import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

function FormSection() {
  const [activeStep, setActiveStep] = useState(1);
  const [companyProfile, setCompanyProfile] = useState("");
  const companyProfileRef = useRef(null);
  const [pitchDeck, setPitchDeck] = useState("");
  const pitchDeckRef = useRef(null);
  const [productBrochure, setProductBrochure] = useState("");
  const productBrochureRef = useRef(null);

  function handleActiveStepChange(step) {
    setActiveStep(step);
  }

  function handleFileChange(e, name) {
    if (name === "company-profile") {
      if (e.target.files && e.target.files.length > 0) {
        setCompanyProfile(e.target.files[0]);
      }
    }
    if (name === "pitch-deck") {
      if (e.target.files && e.target.files.length > 0) {
        setPitchDeck(e.target.files[0]);
      }
    }
    if (name === "product-brochure") {
      if (e.target.files && e.target.files.length > 0) {
        setProductBrochure(e.target.files[0]);
      }
    }
  }

  const handleClick = (name) => {
    if (name === "company-profile") {
      companyProfileRef.current?.click();
    }
    if (name === "pitch-deck") {
      pitchDeckRef.current?.click();
    }
    if (name === "product-brochure") {
      productBrochureRef.current?.click();
    }
  };

  function handleFileDelete(name) {
    if (name === "company-profile") {
      setCompanyProfile("");
    }
    if (name === "pitch-deck") {
      setPitchDeck("");
    }
    if (name === "product-brochure") {
      setProductBrochure("");
    }
  }

  return (
    <section className="px-4 md:px-10 lg:px-20 py-10 md:py-20 bg-white">
      <div className="max-w-310 mx-auto">
        <form action="">
          {activeStep === 1 && (
            <div className="rounded-2xl bg-white border-slate650 p-4 md:px-6 md:py-15 flex flex-col gap-5 shadow-sector">
              <h2 className="font-jost text-black700 text-xl uppercase font-bold">
                APPLICANT DETAILS
              </h2>
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor=""
                      className="text-slate950 font-jost text-sm"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="border border-zinc rounded-md text-sm font-jost bg-zinc100 text-blue200 py-2.5 px-3 outline-none"
                      placeholder="John"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor=""
                      className="text-slate950 font-jost text-sm"
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="border border-zinc rounded-md text-sm font-jost bg-zinc100 text-blue200 py-2.5 px-3 outline-none"
                      placeholder="Doe"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor=""
                      className="text-slate950 font-jost text-sm"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      name=""
                      id=""
                      className="border border-zinc rounded-md text-sm font-jost bg-zinc100 text-blue200 py-2.5 px-3 outline-none"
                      placeholder="user@gmail.com"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor=""
                      className="text-slate950 font-jost text-sm"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="border border-zinc rounded-md text-sm font-jost bg-zinc100 text-blue200 py-2.5 px-3 outline-none"
                      placeholder="080 000 0000"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor=""
                      className="text-slate950 font-jost text-sm"
                    >
                      Country / State of Residence *
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="border border-zinc rounded-md text-sm font-jost bg-zinc100 text-blue200 py-2.5 px-3 outline-none"
                      placeholder="Nigeria"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor=""
                      className="text-slate950 font-jost text-sm"
                    >
                      Organization / Company Name *
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="border border-zinc rounded-md text-sm font-jost bg-zinc100 text-blue200 py-2.5 px-3 outline-none"
                      placeholder="Rise Networks"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor=""
                      className="text-slate950 font-jost text-sm"
                    >
                      Job Title / Role *
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="border border-zinc rounded-md text-sm font-jost bg-zinc100 text-blue200 py-2.5 px-3 outline-none"
                      placeholder="Ceo"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor=""
                      className="text-slate950 font-jost text-sm"
                    >
                      Website / Social Media (optional)
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="border border-zinc rounded-md text-sm font-jost bg-zinc100 text-blue200 py-2.5 px-3 outline-none"
                      placeholder=""
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <label htmlFor="" className="text-slate950 font-jost text-sm">
                    Participation Category (Select one or more)
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-zinc rounded-md text-sm font-jost bg-zinc100 text-blue200 py-3 px-4 flex items-center gap-2">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="accent-green100"
                      />
                      <span className="text-black800">Delegate / Attendee</span>
                    </div>
                    <div className="border border-zinc rounded-md text-sm font-jost bg-zinc100 text-blue200 py-3 px-4 flex items-center gap-2">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="accent-green100"
                      />
                      <span className="text-black800">Investor</span>
                    </div>
                    <div className="border border-zinc rounded-md text-sm font-jost bg-zinc100 text-blue200 py-3 px-4 flex items-center gap-2">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="accent-green100"
                      />
                      <span className="text-black800">Startup Founder</span>
                    </div>
                    <div className="border border-zinc rounded-md text-sm font-jost bg-zinc100 text-blue200 py-3 px-4 flex items-center gap-2">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="accent-green100"
                      />
                      <span className="text-black800">
                        Government Representative
                      </span>
                    </div>
                    <div className="border border-zinc rounded-md text-sm font-jost bg-zinc100 text-blue200 py-3 px-4 flex items-center gap-2">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="accent-green100"
                      />
                      <span className="text-black800">Media / Press</span>
                    </div>
                    <div className="border border-zinc rounded-md text-sm font-jost bg-zinc100 text-blue200 py-3 px-4 flex items-center gap-2">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="accent-green100"
                      />
                      <span className="text-black800">
                        Student / Researcher
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleActiveStepChange(2)}
                  className="mt-8 self-end py-3 px-4 rounded-md bg-green100 text-white flex items-center gap-2"
                >
                  Continue
                  <ArrowRight className="w-4 h-4 " />
                </button>
              </div>
            </div>
          )}

          {activeStep === 2 && (
            <div className="rounded-2xl bg-white border-slate650 p-4 md:px-6 md:py-15 flex flex-col gap-5 shadow-sector">
              <h2 className="font-jost text-black700 text-xl uppercase font-bold">
                INTEREST TYPE
              </h2>

              <div className="flex flex-col gap-4">
                <label htmlFor="" className="text-slate950 font-jost text-sm">
                  If you are a SPONSOR *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-zinc rounded-md text-sm font-jost bg-zinc100 text-blue200 py-3 px-4 flex items-center gap-2">
                    <input
                      type="radio"
                      name="sponsor"
                      id=""
                      className="accent-green100"
                    />
                    <span className="text-black800">Platinum Sponsor</span>
                  </div>
                  <div className="border border-zinc rounded-md text-sm font-jost bg-zinc100 text-blue200 py-3 px-4 flex items-center gap-2">
                    <input
                      type="radio"
                      name="sponsor"
                      id=""
                      className="accent-green100"
                    />
                    <span className="text-black800">Gold Sponsor</span>
                  </div>
                  <div className="border border-zinc rounded-md text-sm font-jost bg-zinc100 text-blue200 py-3 px-4 flex items-center gap-2">
                    <input
                      type="radio"
                      name="sponsor"
                      id=""
                      className="accent-green100"
                    />
                    <span className="text-black800">Silver Sponsor</span>
                  </div>
                  <div className="border border-zinc rounded-md text-sm font-jost bg-zinc100 text-blue200 py-3 px-4 flex items-center gap-2">
                    <input
                      type="radio"
                      name="sponsor"
                      id=""
                      className="accent-green100"
                    />
                    <span className="text-black800">
                      Custom Sponsorship Package
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <label htmlFor="" className="text-slate950 font-jost text-sm">
                  Sponsorship Interests (select all that apply): *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-zinc rounded-md text-sm font-jost bg-zinc100 text-blue200 py-3 px-4 flex items-center gap-2">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="accent-green100"
                    />
                    <span className="text-black800">Branding & Visibility</span>
                  </div>
                  <div className="border border-zinc rounded-md text-sm font-jost bg-zinc100 text-blue200 py-3 px-4 flex items-center gap-2">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="accent-green100"
                    />
                    <span className="text-black800">
                      Speaking Opportunities
                    </span>
                  </div>
                  <div className="border border-zinc rounded-md text-sm font-jost bg-zinc100 text-blue200 py-3 px-4 flex items-center gap-2">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="accent-green100"
                    />
                    <span className="text-black800">Exhibition Booth</span>
                  </div>
                  <div className="border border-zinc rounded-md text-sm font-jost bg-zinc100 text-blue200 py-3 px-4 flex items-center gap-2">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="accent-green100"
                    />
                    <span className="text-black800">Networking Access</span>
                  </div>
                  <div className="border border-zinc rounded-md text-sm font-jost bg-zinc100 text-blue200 py-3 px-4 flex items-center gap-2">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="accent-green100"
                    />
                    <span className="text-black800">Media Coverage</span>
                  </div>
                  <div className="border border-zinc rounded-md text-sm font-jost bg-zinc100 text-blue200 py-3 px-4 flex items-center gap-2">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="accent-green100"
                    />
                    <span className="text-black800">Deal Room Access</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <label htmlFor="" className="text-slate950 font-jost text-sm">
                  If you are a PARTNER: *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-zinc rounded-md text-sm font-jost bg-zinc100 text-blue200 py-3 px-4 flex items-center gap-2">
                    <input
                      type="radio"
                      name="partner"
                      id=""
                      className="accent-green100"
                    />
                    <span className="text-black800">Government Partner</span>
                  </div>
                  <div className="border border-zinc rounded-md text-sm font-jost bg-zinc100 text-blue200 py-3 px-4 flex items-center gap-2">
                    <input
                      type="radio"
                      name="partner"
                      id=""
                      className="accent-green100"
                    />
                    <span className="text-black800">Corporate Partner</span>
                  </div>
                  <div className="border border-zinc rounded-md text-sm font-jost bg-zinc100 text-blue200 py-3 px-4 flex items-center gap-2">
                    <input
                      type="radio"
                      name="partner"
                      id=""
                      className="accent-green100"
                    />
                    <span className="text-black800">
                      Development / NGO Partner
                    </span>
                  </div>
                  <div className="border border-zinc rounded-md text-sm font-jost bg-zinc100 text-blue200 py-3 px-4 flex items-center gap-2">
                    <input
                      type="radio"
                      name="partner"
                      id=""
                      className="accent-green100"
                    />
                    <span className="text-black800">Media Partner</span>
                  </div>
                  <div className="border border-zinc rounded-md text-sm font-jost bg-zinc100 text-blue200 py-3 px-4 flex items-center gap-2">
                    <input
                      type="radio"
                      name="partner"
                      id=""
                      className="accent-green100"
                    />
                    <span className="text-black800">
                      Tech / Innovation Partner
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <label htmlFor="" className="text-slate950 font-jost text-sm">
                  Partnership Interest: *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-zinc rounded-md text-sm font-jost bg-zinc100 text-blue200 py-3 px-4 flex items-center gap-2">
                    <input
                      type="radio"
                      name="partner-interest"
                      id=""
                      className="accent-green100"
                    />
                    <span className="text-black800">
                      Strategic Collaboration
                    </span>
                  </div>
                  <div className="border border-zinc rounded-md text-sm font-jost bg-zinc100 text-blue200 py-3 px-4 flex items-center gap-2">
                    <input
                      type="radio"
                      name="partner-interest"
                      id=""
                      className="accent-green100"
                    />
                    <span className="text-black800">Event Co-hosting</span>
                  </div>
                  <div className="border border-zinc rounded-md text-sm font-jost bg-zinc100 text-blue200 py-3 px-4 flex items-center gap-2">
                    <input
                      type="radio"
                      name="partner-interest"
                      id=""
                      className="accent-green100"
                    />
                    <span className="text-black800">Ecosystem Support</span>
                  </div>
                  <div className="border border-zinc rounded-md text-sm font-jost bg-zinc100 text-blue200 py-3 px-4 flex items-center gap-2">
                    <input
                      type="radio"
                      name="partner-interest"
                      id=""
                      className="accent-green100"
                    />
                    <span className="text-black800">Program Sponsorship</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <label htmlFor="" className="text-slate950 font-jost text-sm">
                  If you are an EXHIBITOR: *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-zinc rounded-md text-sm font-jost bg-zinc100 text-blue200 py-3 px-4 flex items-center gap-2">
                    <input
                      type="radio"
                      name="exhibitor"
                      id=""
                      className="accent-green100"
                    />
                    <span className="text-black800">Startup Booth</span>
                  </div>
                  <div className="border border-zinc rounded-md text-sm font-jost bg-zinc100 text-blue200 py-3 px-4 flex items-center gap-2">
                    <input
                      type="radio"
                      name="exhibitor"
                      id=""
                      className="accent-green100"
                    />
                    <span className="text-black800">Corporate Booth</span>
                  </div>
                  <div className="border border-zinc rounded-md text-sm font-jost bg-zinc100 text-blue200 py-3 px-4 flex items-center gap-2">
                    <input
                      type="radio"
                      name="exhibitor"
                      id=""
                      className="accent-green100"
                    />
                    <span className="text-black800">Innovation Showcase</span>
                  </div>
                  <div className="border border-zinc rounded-md text-sm font-jost bg-zinc100 text-blue200 py-3 px-4 flex items-center gap-2">
                    <input
                      type="radio"
                      name="exhibitor"
                      id=""
                      className="accent-green100"
                    />
                    <span className="text-black800">Product Demo</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <label htmlFor="" className="text-slate950 font-jost text-sm">
                  Exhibition Needs: *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-zinc rounded-md text-sm font-jost bg-zinc100 text-blue200 py-3 px-4 flex items-center gap-2">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="accent-green100"
                    />
                    <span className="text-black800">Standard Booth</span>
                  </div>
                  <div className="border border-zinc rounded-md text-sm font-jost bg-zinc100 text-blue200 py-3 px-4 flex items-center gap-2">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="accent-green100"
                    />
                    <span className="text-black800">Premium Booth</span>
                  </div>
                  <div className="border border-zinc rounded-md text-sm font-jost bg-zinc100 text-blue200 py-3 px-4 flex items-center gap-2">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="accent-green100"
                    />
                    <span className="text-black800">Live Demo Stage</span>
                  </div>
                  <div className="border border-zinc rounded-md text-sm font-jost bg-zinc100 text-blue200 py-3 px-4 flex items-center gap-2">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="accent-green100"
                    />
                    <span className="text-black800">
                      Outdoor Activation Space
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => handleActiveStepChange(1)}
                  className="mt-8 self-end py-3 px-4 rounded-md text-black flex items-center gap-2 font-black"
                >
                  <ArrowLeft className="w-4 h-4 " />
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => handleActiveStepChange(3)}
                  className="mt-8 self-end py-3 px-4 rounded-md bg-green100 text-white flex items-center gap-2"
                >
                  Continue
                  <ArrowRight className="w-4 h-4 " />
                </button>
              </div>
            </div>
          )}

          {activeStep === 3 && (
            <div className="rounded-2xl bg-white border-slate650 p-4 md:px-6 md:py-15 flex flex-col gap-5 shadow-sector">
              <h2 className="font-jost text-black700 text-xl uppercase font-bold">
                COMPANY / PROJECT DETAILS
              </h2>

              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-slate950 font-jost text-sm">
                  Brief Description of Company / Initiative *
                </label>
                <textarea
                  name=""
                  id=""
                  className="border border-zinc rounded-md text-sm font-jost bg-zinc100 text-blue200 py-2.5 px-3 outline-none resize-none min-h-27"
                  placeholder="Brief description..."
                />
              </div>

              <div className="flex flex-col gap-4">
                <label htmlFor="" className="text-slate950 font-jost text-sm">
                  Sector *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-zinc rounded-md text-sm font-jost bg-zinc100 text-blue200 py-3 px-4 flex items-center gap-2">
                    <input
                      type="radio"
                      name="sector"
                      id=""
                      className="accent-green100"
                    />
                    <span className="text-black800">Tech</span>
                  </div>
                  <div className="border border-zinc rounded-md text-sm font-jost bg-zinc100 text-blue200 py-3 px-4 flex items-center gap-2">
                    <input
                      type="radio"
                      name="sector"
                      id=""
                      className="accent-green100"
                    />
                    <span className="text-black800">Finance</span>
                  </div>
                  <div className="border border-zinc rounded-md text-sm font-jost bg-zinc100 text-blue200 py-3 px-4 flex items-center gap-2">
                    <input
                      type="radio"
                      name="sector"
                      id=""
                      className="accent-green100"
                    />
                    <span className="text-black800">Energy</span>
                  </div>
                  <div className="border border-zinc rounded-md text-sm font-jost bg-zinc100 text-blue200 py-3 px-4 flex items-center gap-2">
                    <input
                      type="radio"
                      name="sector"
                      id=""
                      className="accent-green100"
                    />
                    <span className="text-black800">Agriculture</span>
                  </div>
                  <div className="border border-zinc rounded-md text-sm font-jost bg-zinc100 text-blue200 py-3 px-4 flex items-center gap-2">
                    <input
                      type="radio"
                      name="sector"
                      id=""
                      className="accent-green100"
                    />
                    <span className="text-black800">Healthcare</span>
                  </div>
                  <div className="border border-zinc rounded-md text-sm font-jost bg-zinc100 text-blue200 py-3 px-4 flex items-center gap-2">
                    <input
                      type="radio"
                      name="sector"
                      id=""
                      className="accent-green100"
                    />
                    <span className="text-black800">Creative Economy</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-slate950 font-jost text-sm">
                  Why are you interested in participating as a
                  sponsor/partner/exhibitor/delegate? *
                </label>
                <textarea
                  name=""
                  id=""
                  className="border border-zinc rounded-md text-sm font-jost bg-zinc100 text-blue200 py-2.5 px-3 outline-none resize-none min-h-27"
                  placeholder="Type..."
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-slate950 font-jost text-sm">
                  Company Profile (PDF)
                </label>
                <button
                  type="button"
                  className="border border-zinc rounded-md text-sm font-jost bg-zinc100 text-blue200 py-2.5 px-3 min-h-27 flex flex-col gap-4 items-center"
                >
                  <input
                    ref={companyProfileRef}
                    onChange={(e) => handleFileChange(e, "company-profile")}
                    type="file"
                    name=""
                    id=""
                    className="hidden"
                  />
                  <span onClick={() => handleClick("company-profile")}>
                    <FaCloudUploadAlt className="text-blue200 w-10 h-10" />
                  </span>
                  <span className="text-xs font-semibold font-jost text-black600">
                    Click to upload or drag and drop
                  </span>
                  <span className="text-[10px] font-jost text-black600">
                    PDF,PNG,DOC,DOCX[MAX. 5MB]
                  </span>
                </button>
                {companyProfile && (
                  <div className="flex items-center justify-between gap-3">
                    <span>{companyProfile.name}</span>
                    <button
                      type="button"
                      onClick={() => handleFileDelete("company-profile")}
                    >
                      <MdDeleteForever className="w-5 h-5 text-red" />
                    </button>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-slate950 font-jost text-sm">
                  Pitch Deck
                </label>
                <button
                  type="button"
                  className="border border-zinc rounded-md text-sm font-jost bg-zinc100 text-blue200 py-2.5 px-3 min-h-27 flex flex-col gap-4 items-center"
                >
                  <input
                    ref={pitchDeckRef}
                    onChange={(e) => handleFileChange(e, "pitch-deck")}
                    type="file"
                    name=""
                    id=""
                    className="hidden"
                  />
                  <span onClick={() => handleClick("pitch-deck")}>
                    <FaCloudUploadAlt className="text-blue200 w-10 h-10" />
                  </span>
                  <span className="text-xs font-semibold font-jost text-black600">
                    Click to upload or drag and drop
                  </span>
                  <span className="text-[10px] font-jost text-black600">
                    PDF,PNG,DOC,DOCX[MAX. 5MB]
                  </span>
                </button>
                {pitchDeck && (
                  <div className="flex items-center justify-between gap-3">
                    <span>{pitchDeck.name}</span>
                    <button
                      type="button"
                      onClick={() => handleFileDelete("pitch-deck")}
                    >
                      <MdDeleteForever className="w-5 h-5 text-red" />
                    </button>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-slate950 font-jost text-sm">
                  Product Brochure
                </label>
                <button
                  type="button"
                  className="border border-zinc rounded-md text-sm font-jost bg-zinc100 text-blue200 py-2.5 px-3 min-h-27 flex flex-col gap-4 items-center"
                >
                  <input
                    ref={productBrochureRef}
                    onChange={(e) => handleFileChange(e, "product-brochure")}
                    type="file"
                    name=""
                    id=""
                    className="hidden"
                  />
                  <span onClick={() => handleClick("product-brochure")}>
                    <FaCloudUploadAlt className="text-blue200 w-10 h-10" />
                  </span>
                  <span className="text-xs font-semibold font-jost text-black600">
                    Click to upload or drag and drop
                  </span>
                  <span className="text-[10px] font-jost text-black600">
                    PDF,PNG,DOC,DOCX[MAX. 5MB]
                  </span>
                </button>
                {productBrochure && (
                  <div className="flex items-center justify-between gap-3">
                    <span>{productBrochure.name}</span>
                    <button
                      type="button"
                      onClick={() => handleFileDelete("product-brochure")}
                    >
                      <MdDeleteForever className="w-5 h-5 text-red" />
                    </button>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-4">
                <h4 className="text-black700 font-jost text-lg font-bold">
                  SUBMISSION INSTRUCTIONS
                </h4>
                <div className="flex flex-col gap-2 font-jost">
                  <p className="text-black700 text-sm">
                    Please send your completed Expression of Interest to:
                  </p>
                  <p className="text-green100 text-sm">
                    <span className="font-semibold">Email:</span>{" "}
                    investinlagos@lagosmccti.com
                  </p>
                  <h5 className="text-black700 font-jost text-base font-bold">
                    OR
                  </h5>
                  <div className="flex flex-col gap-2">
                    <h5 className="text-black700 font-jost text-base font-bold">
                      Help Line:
                    </h5>
                    <div className="flex flex-col gap-1">
                      {[
                        "+2347076623338",
                        "+2348108218640",
                        "+2349066697266",
                        "+2349064232315",
                        "+2348169374236",
                        "+2348144331262",
                        "+2348161142385",
                        "+2348164495419",
                        "+2348147638085",
                      ].map((phone) => (
                        <span
                          key={phone}
                          className="text-black700 font-jost text-sm"
                        >
                          {phone}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => handleActiveStepChange(2)}
                  className="mt-8 self-end py-3 px-4 rounded-md text-black flex items-center gap-2 font-black"
                >
                  <ArrowLeft className="w-4 h-4 " />
                  Back
                </button>
                <button className="mt-8 self-end py-3 px-4 rounded-md bg-green100 text-white flex items-center gap-2">
                  Submit Expression of Interest
                  <ArrowRight className="w-4 h-4 " />
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default FormSection;
