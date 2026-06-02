const policies = [
  {
    title: "1.1. Introduction",
    desc: [
      "Welcome to Invest Lagos. These Terms and Conditions govern your access to and use of the Invest Lagos website, mobile application, event portals, digital dashboards, networking tools and related services (collectively, the “Platform”).",
      "By accessing or using the Platform, you acknowledge that you have read, understood, and agreed to be bound by these Terms and all applicable laws and regulations. If you do not agree with these Terms, you should discontinue use of the Platform immediately.",
    ],
  },
  {
    title: "1.2. Scope of permitted use",
    desc: [
      "The Platform is provided for informational, networking, event participation, investment promotion, business engagement and related lawful purposes.",
      " Users may access and use the Platform solely for personal, professional, educational or business purposes consistent with the objectives of Invest Lagos. Users shall not use the Platform in any manner that disrupts operations, compromises security, infringes on the rights of others, or violates applicable laws.",
    ],
  },
  {
    title: "1.3. Intellectual property",
    desc: [
      "All content, materials, designs, graphics, text, software, reports, databases, videos, audio recordings, logos, trademarks and other intellectual property made available through the Platform are owned by or licensed to Invest Lagos and are protected under applicable intellectual property laws.",
      "Except as expressly permitted, no content may be copied, reproduced, modified, distributed, published, displayed, transmitted or commercially exploited without prior written authorization from Invest Lagos.",
    ],
  },
  {
    title: "1.4. User submissions and representations",
    desc: [
      "Where users submit information, content, comments, applications, feedback, registrations, or other materials through the Platform, they represent and warrant that:",
    ],
    list: [
      "The information provided is accurate, current, and complete.",
      "They have the necessary rights and permissions to submit such content.",
      "The content does not violate any law, regulation, contractual obligation, or third-party right.",
      "The content is not false, misleading, defamatory, harmful, or unlawful.",
    ],
    paragraph:
      "Invest Lagos reserves the right to review, remove, reject or restrict access to user-submitted content where appropriate.",
  },
  {
    title: "1.5. No unlawful or harmful activity",
    desc: [
      "Users shall not engage in any activity that may harm the Platform, its users or related systems.",
      "Prohibited activities include, but are not limited to:",
    ],
    list: [
      "Unauthorized access to systems, networks or data.",
      "Distribution of malicious software, viruses or harmful code.",
      "Fraudulent, deceptive or misleading conduct.",
      "Harassment, abuse, or unlawful behavior toward other users.",
      "Activities that interfere with the functionality, security, or availability of the Platform.",
    ],
    paragraph:
      "Invest Lagos reserves the right to investigate and take appropriate action against violations of this provision.",
  },
  {
    title: "1.6. Third-party links and services",
    desc: [
      "The Platform may contain links to third-party websites, applications, products or services for user convenience.",
      "Invest Lagos does not control, endorse, or assume responsibility for the content, security, availability, accuracy or privacy practices of third-party services. Access to third-party services is at the user's own risk and subject to the applicable terms and policies of those providers.",
    ],
  },
  {
    title: "1.7. Privacy and data protection",
    desc: [
      "Invest Lagos is committed to protecting personal information and processing data responsibly in accordance with applicable data protection laws.",
      "The collection, use, storage, disclosure and protection of personal information are governed by the Invest Lagos Privacy Policy, which forms part of these Terms and Conditions.",
      "By using the Platform, users acknowledge that their information may be processed in accordance with the Privacy Policy and applicable legal requirements.",
    ],
  },
  {
    title: "1.8. Disclaimers",
    desc: [
      'The Platform and all related content, information, services and materials are provided on an "as available" and "as is" basis.',
      "While Invest Lagos endeavors to provide accurate, current and reliable information, it does not guarantee the completeness, accuracy, availability, reliability or suitability of any content or service provided through the Platform.",
      "Users are responsible for evaluating any information obtained through the Platform before relying on it for decision-making purposes.",
    ],
  },
  {
    title: "1.9. Limitation of liability",
    desc: [
      "To the fullest extent permitted by applicable law, Invest Lagos, its officers, representatives, partners, contractors and affiliates shall not be liable for any indirect, incidental, consequential, special or punitive damages arising from or related to the use of or inability to use, the Platform or its services.",
      "Nothing in these Terms shall exclude or limit liability where such limitation is prohibited by law.",
    ],
  },
  {
    title: "1.10. Indemnity",
    desc: [
      "Users agree to indemnify, defend, and hold harmless Invest Lagos and its officers, representatives, partners and affiliates from and against any claims, liabilities, damages, losses, costs or expenses arising from:",
    ],
    list: [
      "Violation of these Terms and Conditions.",
      "Misuse of the Platform.",
      "Violation of applicable laws or regulations.",
      "Infringement of the rights of any third party.",
    ],
  },
  {
    title: "1.11. Suspension or termination of access",
    desc: [
      "Invest Lagos reserves the right to suspend, restrict or terminate access to the Platform, in whole or in part, at any time and without prior notice where necessary to:",
    ],
    list: [
      "Protect the security or integrity of the Platform.",
      "Address violations of these Terms.",
      "Comply with legal or regulatory obligations.",
      "Prevent misuse or unauthorized activities.",
    ],
    paragraph:
      "Termination of access shall not affect any rights or obligations that accrued prior to such termination.",
  },
  {
    title: "1.12. Intellectual property for invest in Lagos branding",
    desc: [
      "The Invest Lagos name, logo, visual identity, event branding, slogans, promotional materials and associated trademarks are valuable assets of Invest Lagos and its authorized operators.",
"Users may not use, reproduce, modify, display, distribute, or otherwise exploit Invest Lagos branding without prior written approval, except where expressly permitted for approved media, partnership, sponsorship, or promotional purposes." ],
  },
  {
    title: "1.13. Governing law and jurisdiction",
    desc: [
   "These Terms and Conditions shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria and applicable laws, regulations and policies of Lagos State.",
"Any dispute, claim or controversy arising out of or relating to the use of the Platform, these Terms and Conditions or any services provided through Invest Lagos shall be resolved in accordance with the laws of Nigeria. The parties agree that the courts of Lagos State shall have exclusive jurisdiction to hear and determine such disputes.",
"Where appropriate, the parties may first seek to resolve disputes amicably through consultation, negotiation, or alternative dispute resolution mechanisms before commencing formal legal proceedings." ],
  },
  {
    title: "1.14. Changes to these Terms",
    desc: [
    "Invest Lagos reserves the right to amend, modify or update these Terms and Conditions from time to time.",
"Updated versions will be published on the Platform and will become effective upon publication or on the stated effective date. Continued use of the Platform after any changes have been published constitutes acceptance of the revised Terms."],
  },
  {
    title: "1.15. Contact information",
    desc: [
      "For questions about these Terms or any other governance document, please contact:",
    ],
    name: " ",
    address:
      "Ministry of Commerce, Cooperatives, Trade and Investment [MCCTI] Lagos State Government, Alausa, Nigeria.",
    email: "investinlagos@logosmccti.com",
    bio: "",
  },
];

function TermSection() {
  return (
    <section className="px-4 md:px-10 lg:px-20 py-10 md:py-20 flex justify-center">
      <div className="max-w-5xl shadow-card border border-slate650 rounded-2xl p-4 sm:p-6 flex flex-col gap-10">
        <div className=" flex flex-col gap-10">
          {policies.map((policy, i) => (
            <div
              key={i}
              className={`flex flex-col gap-3 ${
                i + 1 === policies.length
                  ? "bg-slate550 border border-slate650 p-5 rounded-2xl"
                  : ""
              }`}
            >
              <h4 className="pb-2 border-b border-b-slate650 text-green450 font-jost font-bold text-xl md:text-2xl uppercase">
                {policy.title}
              </h4>
              <div className="flex flex-col gap-1">
                {policy.desc.map((p, i) => (
                  <p key={i} className="text-slate900 font-jost text-sm">
                    {p}
                  </p>
                ))}
              </div>
              {policy.list && (
                <ul className="flex flex-col gap-1 list-disc pl-4">
                  {policy.list.map((item) => (
                    <li key={item} className="text-slate900 font-jost text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              <p className="text-slate900 font-jost text-sm">
                {policy.paragraph}
              </p>
              <div className="flex flex-col gap-0.5">
                {policy.name && (
                  <div className="flex items-center gap-1 text-black400 text-sm font-jost">
                    <span className="font-bold">
                      INVEST IN LAGOS
                    </span>
                    <span>{policy.name}</span>
                  </div>
                )}
                {policy.address && (
                  <div className="flex items-center gap-1 text-black400 text-sm font-jost">
                    <span className="font-bold">Address:</span>
                    <span>{policy.address}</span>
                  </div>
                )}
                {policy.email && (
                  <div className="flex items-center gap-1 text-black400 text-sm font-jost">
                    <span className="font-bold">Email:</span>
                    <span className="text-green650 font-bold">
                      {policy.email}
                    </span>
                  </div>
                )}
              </div>
              <p className="text-slate900 font-jost text-sm">{policy.bio}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-sm font-jost font-bold text-slate750 py-3 border-t-slate650 border-t">
          INVEST IN LAGOS © 2026
        </p>
      </div>
    </section>
  );
}

export default TermSection;
