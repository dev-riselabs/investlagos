import { useState, useCallback } from "react";
import FutureSection from "../components/HomePage/FutureSection";
import InvestmentSection from "../components/HomePage/InvestmentSection";
import { submitContact, ApiError } from "../lib/api";

import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiLock,
  FiRefreshCw,
  FiCheckCircle,
} from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

/** Generate a random arithmetic security challenge. */
function generateChallenge() {
  const a = Math.floor(Math.random() * 8) + 2; // 2–9
  const b = Math.floor(Math.random() * (a - 1)) + 1; // 1–(a-1)
  const useAdd = Math.random() < 0.5;
  if (useAdd) {
    return { question: `${a} + ${b} = ?`, answer: a + b };
  }
  return { question: `${a} - ${b} = ?`, answer: a - b };
}

function ContactSection() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [securityAnswer, setSecurityAnswer] = useState("");
  const [challenge, setChallenge] = useState(generateChallenge);
  const [fieldErrors, setFieldErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const update = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const refreshChallenge = useCallback(() => {
    setChallenge(generateChallenge());
    setSecurityAnswer("");
    setFieldErrors((prev) => ({ ...prev, security: undefined }));
  }, []);

  const validate = () => {
    const errors = {};
    if (!form.fullName.trim()) errors.fullName = "Full name is required.";
    if (!form.email.trim()) errors.email = "Email address is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errors.email = "Please enter a valid email address.";
    if (!form.subject.trim()) errors.subject = "Subject is required.";
    if (!form.message.trim()) errors.message = "Message is required.";
    if (securityAnswer.trim() === "")
      errors.security = "Please answer the security challenge.";
    else if (parseInt(securityAnswer, 10) !== challenge.answer)
      errors.security = "Incorrect answer. Please try again.";
    return errors;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    const errors = validate();
    if (Object.keys(errors).length) {
      setFieldErrors(errors);
      // Refresh challenge when security answer is wrong
      if (errors.security) refreshChallenge();
      return;
    }
    setFieldErrors({});

    setSubmitting(true);
    try {
      await submitContact(form);
      setSuccess(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      if (err instanceof ApiError) {
        setErrorMessage(err.message || "Submission failed. Please try again.");
        setFieldErrors(err.errors || {});
      } else {
        setErrorMessage(
          navigator.onLine
            ? "Unable to reach the server. Please try again in a moment."
            : "You appear to be offline. Please check your internet connection."
        );
      }
      refreshChallenge();
    } finally {
      setSubmitting(false);
    }
  };

  const inputCls = (key) =>
    `w-full h-12 rounded-xl border text-slate750 text-sm px-4 outline-none focus:ring-1 focus:ring-green-600 ${
      fieldErrors[key]
        ? "border-red-400 bg-red-50"
        : "border-slate110"
    }`;

  if (success) {
    return (
      <section className="max-w-310 mx-auto px-4 md:px-10 lg:px-20 py-16 md:py-20">
        <div className="bg-white rounded-3xl border border-gray-200 shadow-md p-10 flex flex-col items-center gap-6 text-center max-w-xl mx-auto">
          <div className="h-16 w-16 rounded-full bg-green-50 flex items-center justify-center text-green-600">
            <FiCheckCircle size={36} />
          </div>
          <h2 className="text-2xl font-bold text-green450 font-jost">
            Message Received!
          </h2>
          <p className="text-slate850 font-jost text-sm max-w-sm">
            Thank you for reaching out. Our team will review your message and
            respond to{" "}
            <span className="font-semibold text-slate950">{form.email}</span>{" "}
            as soon as possible.
          </p>
          <button
            onClick={() => {
              setSuccess(false);
              setForm({ fullName: "", email: "", subject: "", message: "" });
              setSecurityAnswer("");
              setChallenge(generateChallenge());
            }}
            className="mt-2 px-8 py-3 rounded-xl bg-green650 text-white font-bold font-jost tracking-widest uppercase hover:bg-green900 transition text-sm"
          >
            Send Another Message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-310 mx-auto px-4 md:px-10 lg:px-20 py-16 md:py-20">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-md p-8">
          <h2 className="text-2xl font-bold text-green450 font-jost mb-2">
            Contact Us / Feedback
          </h2>

          <p className="text-slate850 font-jost text-sm mb-8 max-w-md">
            Have questions about registration or Invest Lagos 3.0
            participation? Share your thoughts below.
          </p>

          <form onSubmit={onSubmit} className="space-y-6 font-jost" noValidate>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate950 font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.fullName}
                  onChange={update("fullName")}
                  className={inputCls("fullName")}
                />
                {fieldErrors.fullName && (
                  <p className="mt-1 text-xs text-red-500">{fieldErrors.fullName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm text-slate950 font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={update("email")}
                  className={inputCls("email")}
                />
                {fieldErrors.email && (
                  <p className="mt-1 text-xs text-red-500">{fieldErrors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm text-slate950 font-semibold mb-2">
                Subject
              </label>
              <input
                type="text"
                placeholder="General Feedback"
                value={form.subject}
                onChange={update("subject")}
                className={`${inputCls("subject")} bg-slate120`}
              />
              {fieldErrors.subject && (
                <p className="mt-1 text-xs text-red-500">{fieldErrors.subject}</p>
              )}
            </div>

            <div>
              <label className="block text-sm text-slate950 font-semibold mb-2">
                Your Message
              </label>
              <textarea
                rows={6}
                placeholder="Please provide details for our team to evaluate..."
                value={form.message}
                onChange={update("message")}
                className={`w-full rounded-xl border text-slate750 text-sm p-4 resize-none outline-none focus:ring-1 focus:ring-green-600 ${
                  fieldErrors.message ? "border-red-400 bg-red-50" : "border-slate110"
                }`}
              />
              {fieldErrors.message && (
                <p className="mt-1 text-xs text-red-500">{fieldErrors.message}</p>
              )}
            </div>

            {/* Security Challenge */}
            <div
              className={`flex flex-wrap items-center gap-3 rounded-2xl border p-4 bg-slate550 ${
                fieldErrors.security ? "border-red-400" : "border-gray-200"
              }`}
            >
              <div className="h-10 w-10 rounded-lg bg-green450 flex items-center justify-center text-white">
                <FiLock size={20} />
              </div>

              <div className="font-semibold text-sm text-slate950">
                SECURITY CHALLENGE:
                <span className="ml-2 text-green100">{challenge.question}</span>
              </div>

              <input
                type="number"
                placeholder="Answer"
                value={securityAnswer}
                onChange={(e) => {
                  setSecurityAnswer(e.target.value);
                  setFieldErrors((prev) => ({ ...prev, security: undefined }));
                }}
                className={`h-11 w-25 rounded-lg border text-slate750 text-sm px-3 outline-none focus:ring-1 focus:ring-green-600 ${
                  fieldErrors.security ? "border-red-400" : "border-slate110"
                }`}
              />

              <button
                type="button"
                onClick={refreshChallenge}
                title="Refresh challenge"
                className="text-gray-400 hover:text-green100 transition"
              >
                <FiRefreshCw size={18} />
              </button>

              {fieldErrors.security && (
                <p className="w-full text-xs text-red-500 -mt-1">{fieldErrors.security}</p>
              )}
            </div>

            {errorMessage && (
              <div className="rounded-md border border-red-300 bg-red-50 px-4 py-3 text-sm font-jost text-red-600">
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full h-14 rounded-xl bg-green650 text-white font-bold font-jost tracking-widest uppercase hover:bg-green900 transition disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {submitting && (
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              )}
              {submitting ? "Sending…" : "Submit Feedback"}
            </button>
          </form>
        </div>

        {/* Right Side */}
        <div className="space-y-8">
          {/* Address Card */}
          <div className="relative bg-white rounded-3xl border z-1 border-gray-200 shadow-md p-8 overflow-hidden border-l-8 border-l-green650">
            

            <div className="absolute right-8 -z-1 top-8 text-gray-100">
              <FiMapPin size={80} />
            </div>

            <h3 className="text-xl font-bold text-green450 mb-6">
              • Official Contact Address
            </h3>

            <div className="space-y-1 text-sm text-slate900 leading-relaxed">
              <p>
                Ministry of Commerce, Cooperatives, Trade and Investment
                [MCCTI]
              </p>
              <p>Lagos State Government,</p>
              <p>Alausa, Nigeria.</p>
            </div>
          </div>

          {/* Contact Channels */}
          <div className="bg-white rounded-[40px] border border-slate150 p-8 shadow-card font-jost">
            <h3 className="text-xl font-bold text-green450 mb-8">
              Key Contact Channels
            </h3>

            <div className="space-y-6">
              {/* Sponsorship */}
              <div className="border border-gray-200 rounded-2xl p-6">
                <p className="text-xs font-bold tracking-[0.2em] text-green650 uppercase mb-4">
                  Sponsorship & Membership
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-green-50 flex items-center justify-center text-green100">
                      <FiPhone />
                    </div>

                    <span className="text-slate900">
                      +234.707.662.3338
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-pink-50 flex items-center justify-center text-pink-500">
                      <FaInstagram />
                    </div>

                    <span className="text-slate900">@investlagos_</span>
                  </div>
                </div>
              </div>

              {/* General Enquiries */}
              <div className="border border-gray-200 rounded-2xl p-6">
                <p className="text-xs font-bold tracking-[0.2em] text-green650 uppercase mb-4">
                  General Enquiries
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-green-50 flex items-center justify-center text-green100">
                      <FiPhone />
                    </div>

                    <span className="text-slate900">
                      +234.707.662.3338
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-green-50 flex items-center justify-center text-green100">
                      <FiMail />
                    </div>

                    <span className="text-slate900">
                      investinlagos@lagosmcti.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactPage() {
  return (
    <section>
      <div className="contact-bg px-4 md:px-10 lg:px-20 py-15 md:py-20 flex flex-col gap-5">
        <div className="border-l-4 border-l-white p-5 text-white font-inter font-bold tracking-widest text-base">
          GET IN TOUCH
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-inter font-medium text-3xl md:text-4xl text-white">
            Contact Us
          </h1>
          <p className="font-jost text-sm text-white md:text-base max-w-[70ch]">
            We welcome all inquiries related to Invest in Lagos — including
            registration, partnerships, sponsorship, logistics, media
            accreditation and general participation for Invest Lagos 3.0
          </p>
        </div>
      </div>
      <div className="px-4 md:px-10 lg:px-20 py-15 md:py-20 bg-green100">
        <div className="contact-touch-bg p-6 md:px-10 md:py-11 flex flex-col gap-7 md:flex-row md:items-center">
          <div className="flex flex-col gap-5 md:flex-1 w-full">
            <h2 className="text-green100 font-medium font-jost text-2xl md:text-3xl">
              Get in Touch
            </h2>
            <div className="flex flex-col gap-3">
              <p className="text-black100 font-jost text-base">
                Thank you for your interest in Invest Lagos 3.0. Whether you are
                an investor, delegate, sponsor, exhibitor, media representative,
                development partner or stakeholder, our team is available to
                assist you.
              </p>
              <p className="text-black100 font-jost text-base">
                For enquiries relating to registration, partnerships,
                sponsorships, media accreditation, travel support, delegate
                services or general summit information, please contact the
                Invest Lagos Secretariat. We look forward to connecting with you
                and supporting your participation in Africa's premier investment
                platform.
              </p>
            </div>
          </div>
          <img src="/contact-img.png" alt="" className="md:flex-1 w-full" />
        </div>
      </div>
      <ContactSection/>
      <div className="flex flex-col gap-5 items-center py-15 md:py-20 px-4 md:px-10 lg:px-20">
        <h4 className="text-2xl font-bold font-jost text-green450 md:text-3xl">
          We’re Here to Help
        </h4>
        <p className="font-jost text-slate900 text-base max-w-[70ch] text-center">
          For meetings, inquiries, or partnership discussions, kindly reach out
          through the provided channels. Our dedicated team will respond
          promptly.
        </p>
        <div className="w-16 h-1 bg-orange200"></div>
      </div>
      <InvestmentSection />
      <FutureSection />
    </section>
  );
}

export default ContactPage;
