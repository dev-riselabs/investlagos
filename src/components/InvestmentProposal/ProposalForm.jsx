import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProposalStep1 from "./ProposalStep1";
import ProposalStep2 from "./ProposalStep2";
import { submitInvestmentProposal, ApiError } from "../../lib/api";

const TOTAL_STEPS = 2;

// Fields owned by each step — used to focus client-side validation on the
// step the user is currently completing before letting them advance.
// Only fields marked `required` in the form appear here.
const STEP_FIELDS = {
  1: [
    "projectTitle",
    "projectLocation",
    "sector",
    "projectPartners",
    "projectOwner",
    "borrowerFullname",
    "projectOwnerTitle",
    "projectOwnerEmail",
    "projectOwnerPhone",
    "organization",
    "organisationSummary",
    "operatingMarket",
    "projectType",
  ],
  // Step 2 fields are all optional except the disclaimer (checked separately).
  2: [],
};

// camelCase → snake_case for the per-field error keys returned by Laravel.
const CAMEL_TO_SNAKE = (s) => s.replace(/[A-Z]/g, (m) => "_" + m.toLowerCase());

const initialData = {
  // Step 1 — Project / promoter information
  projectTitle: "",
  projectLocation: "",
  sector: "",
  projectPartners: "",
  projectOwner: "",
  borrowerFullname: "",
  projectOwnerTitle: "",
  projectOwnerEmail: "",
  projectOwnerPhone: "",
  organization: "",
  organisationSummary: "",
  operatingMarket: "",
  projectType: "", // Current turnover bucket
  // Step 2 — Project / deal details
  projectDescription: "",
  investmentEstimateUsd: "",
  amountInvestedUsd: "",
  financeNeeds: "",
  projectExpectedOutcome: "",
  projectStatus: "",
  partnershipOpenness: "", // Type of Investment Required
  documentationAvailable: "",
  projectTimeFrame: "",
  financeDealType: "",
  nonFinanceDealType: "",
  additionalInformation: "",
  disclaimerAccepted: false,
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

const ProposalForm = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState(initialData);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const navigate = useNavigate();

  const update = (patch) => setData((d) => ({ ...d, ...patch }));

  const goTo = (n) => {
    setStep(n);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const back = () => step > 1 && goTo(step - 1);

  // Lightweight per-step required-field check so users can't skip ahead.
  const validateStep = (n) => {
    const errors = {};
    STEP_FIELDS[n].forEach((f) => {
      const v = data[f];
      if (v === "" || v === null || v === undefined) {
        errors[CAMEL_TO_SNAKE(f)] = "This field is required.";
      }
    });
    if (n === 2 && !data.disclaimerAccepted) {
      errors.disclaimer_accepted =
        "You must acknowledge the disclaimer before submitting.";
    }
    return errors;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    const stepErrors = validateStep(step);
    if (Object.keys(stepErrors).length) {
      setFieldErrors(stepErrors);
      setErrorMessage("Please complete the highlighted fields before continuing.");
      return;
    }
    setFieldErrors({});

    if (step < TOTAL_STEPS) {
      goTo(step + 1);
      return;
    }

    // Final submission — plain JSON since there are no file uploads.
    setSubmitting(true);
    try {
      const payload = {};
      Object.entries(data).forEach(([k, v]) => {
        if (v === null || v === undefined) return;
        payload[k] = typeof v === "boolean" ? (v ? 1 : 0) : v;
      });

      const res = await submitInvestmentProposal(payload);
      setSuccess({
        email: data.projectOwnerEmail,
        reference: res?.data?.id
          ? `ILP-${String(res.data.id).padStart(6, "0")}`
          : null,
        mailSent: res?.mail_sent !== false,
      });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      if (err instanceof ApiError) {
        setErrorMessage(err.message || "Submission failed.");
        setFieldErrors(
          Object.fromEntries(
            Object.entries(err.errors || {}).map(([k, v]) => [
              k,
              Array.isArray(v) ? v[0] : String(v),
            ]),
          ),
        );
      } else {
        setErrorMessage(
          "Poor network. Please check your internet connection and try again.",
        );
      }
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    if (!success) return;
    const timer = setTimeout(() => navigate("/deal-room"), 6000);
    return () => clearTimeout(timer);
  }, [success, navigate]);

  if (success) {
    return (
      <section className="bg-white">
        <div className="mx-auto max-w-2xl px-6 py-24 text-center">
          <h2 className="text-2xl md:text-3xl font-jost font-semibold text-black mb-3">
            Thank you — your proposal has been received.
          </h2>
          <p className="text-sm font-jost text-black/70">
            We have logged your Investment Project Proposal and our Deal Room
            team will be in touch with{" "}
            <span className="font-medium text-black">{success.email}</span>
            {success.mailSent
              ? ". A confirmation email is on its way."
              : ". (Confirmation email could not be sent — we will reach out manually.)"}
          </p>
          {success.reference && (
            <p className="mt-3 text-xs font-jost text-black/60">
              Reference: <span className="font-medium text-black">{success.reference}</span>
            </p>
          )}
          <p className="mt-4 text-xs font-jost text-black/50">
            You will be redirected to the Deal Room in a few seconds…
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white">
      <Stepper current={step} />

      <form onSubmit={onSubmit} className="mx-auto max-w-2xl px-6 pt-10 pb-16">
        {step === 1 && <ProposalStep1 data={data} update={update} errors={fieldErrors} />}
        {step === 2 && <ProposalStep2 data={data} update={update} errors={fieldErrors} />}

        {errorMessage && (
          <div className="mt-8 rounded-md border border-red/30 bg-red/5 px-4 py-3 text-sm font-jost text-red">
            <p className="font-medium">{errorMessage}</p>
          </div>
        )}

        <div className="mt-10 flex items-center gap-3 justify-end">
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

export default ProposalForm;
