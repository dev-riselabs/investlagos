import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { submitRegistration, ApiError } from "../../lib/api";

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
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  const update = (patch) => setData((d) => ({ ...d, ...patch }));

  const next = () => {
    if (step < TOTAL_STEPS) setStep((s) => s + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const back = () => {
    if (step > 1) setStep((s) => s - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (step < TOTAL_STEPS) {
      next();
      return;
    }

    setSubmitting(true);
    setErrorMessage("");
    setFieldErrors({});

    try {
      await submitRegistration(data);
      setSuccess(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      if (err instanceof ApiError) {
        setErrorMessage(err.message || "Registration failed.");
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

  if (success) {
    return (
      <section className="bg-white">
        <div className="mx-auto max-w-2xl px-6 py-24 text-center">
          <h2 className="text-2xl md:text-3xl font-jost font-semibold text-black mb-3">
            Thank you for registering!
          </h2>
          <p className="text-sm font-jost text-black/70">
            Your registration for Invest Lagos 3.0 has been received. A
            confirmation will be sent to{" "}
            <span className="font-medium text-black">{data.email}</span>.
          </p>
        </div>
      </section>
    );
  }

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

        {errorMessage && (
          <div className="mt-8 rounded-md border border-red/30 bg-red/5 px-4 py-3 text-sm font-jost text-red">
            <p className="font-medium">{errorMessage}</p>
            {Object.keys(fieldErrors).length > 0 && (
              <ul className="mt-2 list-disc pl-5 space-y-1 text-[12px] text-red/90">
                {Object.values(fieldErrors)
                  .flat()
                  .map((msg, i) => (
                    <li key={i}>{msg}</li>
                  ))}
              </ul>
            )}
          </div>
        )}

        {/* Navigation buttons */}
        <div className="mt-10 flex items-center gap-3">
          {step > 1 && (
            <button
              type="button"
              onClick={back}
              disabled={submitting}
              className="inline-flex items-center gap-1 rounded-sm border border-black/15 bg-white px-4 py-1.5 text-xs font-jost font-medium text-black/70 hover:bg-black/5 disabled:opacity-50"
            >
              <span aria-hidden>‹</span>
              <span>Back</span>
            </button>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center gap-1 rounded-sm bg-red px-5 py-1.5 text-xs font-jost font-semibold text-white hover:opacity-90 disabled:opacity-60"
          >
            <span>
              {submitting
                ? "Submitting…"
                : step === TOTAL_STEPS
                ? "Submit"
                : "Next"}
            </span>
            <span aria-hidden>›</span>
          </button>
        </div>
      </form>
    </section>
  );
};

export default RegistrationForm;
