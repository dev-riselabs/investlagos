import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const TOTAL_STEPS = 3;

const initialData = {
  // Step 1 - Personal
  title: "",
  firstName: "",
  lastName: "",
  gender: "",
  email: "",
  phone: "",
  nationality: "",
  country: "",
  // Step 1 - Professional
  organization: "",
  industry: "",
  orgType: "",
  // Step 2
  attendingAs: "Investor",
  sector: "Infrastructure",
  dealRoom: "Yes",
  dealRoomRole: "Investor",
  attendanceMode: "Attend In-Person",
  // Step 3
  dietary: "",
  accessibility: "",
  otherRequests: "",
  consent: { updates: false, media: false },
  heardAbout: "Government Invitation",
  objective: "Explore Investment Opportunities",
};

function Stepper({ current }) {
  return (
    <div className="mx-auto max-w-2xl px-6 pt-10">
      <div className="flex items-center gap-4">
        {Array.from({ length: TOTAL_STEPS }, (_, i) => i + 1).map((n) => (
          <div
            key={n}
            className={`h-[3px] flex-1 rounded-full ${
              n === current ? "bg-red" : "bg-black/10"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState(initialData);

  const update = (patch) => setData((d) => ({ ...d, ...patch }));

  const next = () => {
    if (step < TOTAL_STEPS) setStep((s) => s + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const back = () => {
    if (step > 1) setStep((s) => s - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (step < TOTAL_STEPS) {
      next();
      return;
    }
    // Final submit - placeholder
    console.log("Registration submitted", data);
    alert("Registration submitted. Thank you!");
  };

  return (
    <section className="bg-white">
      <Stepper current={step} />

      <form
        onSubmit={onSubmit}
        className="mx-auto max-w-2xl px-6 pt-10 pb-16"
      >
        {step === 1 && <Step1 data={data} update={update} />}
        {step === 2 && <Step2 data={data} update={update} />}
        {step === 3 && <Step3 data={data} update={update} />}

        {/* Navigation buttons */}
        <div className="mt-10 flex items-center gap-3">
          {step > 1 && (
            <button
              type="button"
              onClick={back}
              className="inline-flex items-center gap-1 rounded-sm border border-black/15 bg-white px-4 py-1.5 text-xs font-jost font-medium text-black/70 hover:bg-black/5"
            >
              <span aria-hidden>‹</span>
              <span>Back</span>
            </button>
          )}

          <button
            type="submit"
            className="inline-flex items-center gap-1 rounded-sm bg-red px-5 py-1.5 text-xs font-jost font-semibold text-white hover:opacity-90"
          >
            <span>{step === TOTAL_STEPS ? "Submit" : "Next"}</span>
            <span aria-hidden>›</span>
          </button>
        </div>
      </form>
    </section>
  );
};

export default RegistrationForm;
