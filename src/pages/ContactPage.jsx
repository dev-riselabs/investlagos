import FutureSection from "../components/HomePage/FutureSection";
import InvestmentSection from "../components/HomePage/InvestmentSection";


function ContactPage() {
  return <section>
    <div className="contact-bg px-4 md:px-10 lg:px-20 py-15 md:py-20 flex flex-col gap-5">
        <div className="border-l-4 border-l-white p-5 text-white font-inter font-bold tracking-widest text-base">GET IN TOUCH</div>
        <div className="flex flex-col gap-4">
            <h1 className="font-inter font-medium text-3xl md:text-4xl text-white">Contact Us</h1>
            <p className="font-jost text-sm text-white md:text-base max-w-[70ch]">We welcome all inquiries related to Invest in Lagos — including registration, partnerships, sponsorship, logistics, media accreditation and general participation for Invest Lagos 3.0</p>
        </div>
    </div>
    <div className="px-4 md:px-10 lg:px-20 py-15 md:py-20 bg-green100">
        <div className="contact-touch-bg p-5 md:p-8 flex flex-col gap-7 md:flex-row md:items-center">
            <div className="flex flex-col gap-5 md:flex-1 w-full">
                <h2 className="text-green100 font-medium font-jost text-2xl md:text-3xl">Get in Touch</h2>
                <div className="flex flex-col gap-3">
                    <p className="text-black100 font-jost text-base">Thank you for your interest in Invest Lagos 3.0. Whether you are an investor, delegate, sponsor, exhibitor, media representative, development partner or stakeholder, our team is available to assist you.</p>
                    <p className="text-black100 font-jost text-base">For enquiries relating to registration, partnerships, sponsorships, media accreditation, travel support, delegate services or general summit information, please contact the Invest Lagos Secretariat. We look forward to connecting with you and supporting your participation in Africa's premier investment platform.</p>
                </div>
            </div>
            <img src="/contact-img.png" alt="" className="md:flex-1"/>

        </div>
    </div>
    <InvestmentSection/>
    <FutureSection/>
  </section>;
}

export default ContactPage;
