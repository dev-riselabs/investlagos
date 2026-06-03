import FutureSection from "../components/HomePage/FutureSection";
import InvestmentSection from "../components/HomePage/InvestmentSection";

import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiLock,
  FiRefreshCw,
} from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

function ContactSection() {
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

          <form className="space-y-6 font-jost">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate950 font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full h-12 rounded-xl border border-slate110 text-slate750 text-sm px-4 outline-none focus:ring-1 focus:ring-green-600"
                />
              </div>

              <div>
                <label className="block text-sm text-slate950 font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full h-12 rounded-xl border border-slate110 text-slate750 text-sm px-4 outline-none focus:ring-1 focus:ring-green-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-slate950 font-semibold mb-2">
                Subject
              </label>
              <input
                  type="text"
                  placeholder="General Feedback"
                  className="w-full h-12 rounded-xl border border-slate110 bg-slate120 text-black text-sm px-4 outline-none focus:ring-1 focus:ring-green-600"
                />

              
            </div>

            <div>
              <label className="block text-sm text-slate950 font-semibold mb-2">
                Your Message
              </label>

              <textarea
                rows={6}
                placeholder="Please provide details for our team to evaluate..."
                className="w-full rounded-xl border border-slate110 text-slate750 text-sm p-4 resize-none outline-none focus:ring-1 focus:ring-green-600"
              />
            </div>

            {/* Security Challenge */}
            <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-gray-200 p-4 bg-slate550">
              <div className="h-10 w-10 rounded-lg bg-green450 flex items-center justify-center text-white">
                <FiLock size={20} />
              </div>

              <div className="font-semibold text-sm text-slate950">
                SECURITY CHALLENGE:
                <span className="ml-2 text-green100">5 - 2 = ?</span>
              </div>

              <input
                type="text"
                placeholder="Answer"
                className="h-11 w-25 rounded-lg border border-slate110 text-slate750 text-sm px-3"
              />

              <button
                type="button"
                className="text-gray-400 hover:text-green100"
              >
                <FiRefreshCw size={18} />
              </button>
            </div>

            <button
              type="submit"
              className="w-full h-14 rounded-xl bg-green650 text-white font-bold font-jost tracking-widest uppercase hover:bg-green900 transition"
            >
              Submit Feedback
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
              <p>Alausa,</p>
              <p>Nigeria.</p>
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
                      +234 INVEST 000 000
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-pink-50 flex items-center justify-center text-pink-500">
                      <FaInstagram />
                    </div>

                    <span className="text-slate900">@investlagos__</span>
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
                      +234.707.66.3338
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
      <div className="contact-bg px-4 md:px-10 lg:px-20 py-15 md:py-20 ">
        <div className="flex flex-col gap-5 max-w-310 mx-auto">
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
      </div>
      <div className="px-4 md:px-10 lg:px-20 py-15 md:py-20 bg-green100">
        <div className="max-w-310 mx-auto">
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
