const policies = [
  {
    title: "2.1. Introduction",
    desc: [
      'Invest Lagos is committed to protecting your privacy and handling personal information responsibly. This Privacy Policy explains how we collect, use, store, share and protect personal data obtained through the Invest Lagos website, mobile application, registration portals, event platforms, networking tools, digital dashboards and related services (collectively, the "Platform").',
      "This Policy is intended to provide transparency regarding our data processing practices and to support compliance with applicable data protection laws, including the Nigeria Data Protection Act (NDPA) and related regulations.",
    ],
  },
  {
    title: "2.2. Scope of permitted use",
    desc: [
      "This Privacy Policy applies to all users of the Platform, including delegates, speakers, sponsors, exhibitors, investors, partners, government representatives, service providers and website visitors.",
      "By accessing or using the Platform, registering for an event, subscribing to communications, or otherwise providing information to Invest Lagos, you acknowledge the collection and processing of your personal data in accordance with this Policy.",
    ],
  },
  {
    title: "2.3. What personal data we collect",
    desc: ["Depending on your interaction with the Platform, we may collect:"],
    data: [
      {
        title: "Identity and Contact Information",
        list: [
          "Full name",
          "Email address",
          "Telephone number",
          "Organization or company name",
          "Job title or professional designation",
        ],
      },
      {
        title: "Registration and Participation Information",
        list: [
          "Event registration details",
          "Session attendance records",
          "Networking preferences",
          "Speaker, sponsor, or exhibitor information",
          "Survey responses and feedback",
        ],
      },
      {
        title: "Technical Information",
        list: [
          "IP address",
          "Browser type and device information",
          "Operating system",
          "Usage analytics and interaction data",
        ],
      },
      {
        title: "Communications Information",
        list: [
          "Correspondence with Invest Lagos",
          "Newsletter and communication preferences",
        ],
      },
    ],
    paragraph:
      "We do not intentionally collect sensitive personal data unless required for a specific lawful purpose and with appropriate safeguards.",
  },
  {
    title: "2.4. How we use personal data and lawful bases",
    desc: [
      "Invest Lagos may process personal data for the following purposes:",
    ],
    list: [
      "Managing event registration and participation",
      "Facilitating networking and stakeholder engagement",
      "Providing event-related communications and updates",
      "Improving platform functionality and user experience",
      "Generating event analytics and operational insights",
      "Maintaining platform security and preventing misuse",
      "Meeting legal, regulatory and administrative obligations",
    ],
    paragraph:
      "Where required by law, processing will be based on one or more lawful grounds, including consent, contractual necessity, legal obligations, legitimate interests, or public-interest functions associated with investment promotion and economic development activities.",
  },
  {
    title: "2.5. Cross-border processing and safeguards",
    desc: [
      "Invest Lagos may utilize technology providers, cloud services or digital platforms that process data outside Nigeria.",

      "Where personal data is transferred across borders, Invest Lagos will take reasonable measures to ensure that appropriate safeguards are implemented and that personal information receives a level of protection consistent with applicable data protection requirements.",
    ],
  },
  {
    title: "2.6. Security of your data",
    desc: [
      "Invest Lagos maintains reasonable technical, administrative and organizational safeguards designed to protect personal information against unauthorized access, disclosure, alteration, loss, or misuse.",
      "While we strive to maintain appropriate security measures, no method of electronic transmission or storage can be guaranteed to be completely secure. Users should also take appropriate steps to protect their personal information and account credentials.",
    ],
  },
  {
    title: "2.7. Data retention",
    desc: [
      "Personal information will be retained only for as long as reasonably necessary to fulfill the purposes outlined in this Policy, support event operations, comply with legal obligations, resolve disputes, or enforce applicable agreements.",
      "When personal information is no longer required, it will be securely deleted, anonymized, or otherwise disposed of in accordance with applicable laws and operational requirements.",
    ],
  },
  {
    title: "2.8. Your rights",
    desc: ["Subject to applicable law, individuals may have the right to:"],
    list: [
      "Request access to personal information held by Invest Lagos",
      "Request correction of inaccurate or incomplete information",
      "Request deletion of personal information where appropriate",
      "Withdraw consent where processing is based on consent",
      "Object to certain forms of processing",
      "Request clarification regarding how personal information is processed",
    ],
    paragraph:
      "Requests relating to personal data may be submitted using the contact details provided in this Policy.",
  },
  {
    title: "2.9. Automated decision-making and profiling",
    desc: [
      "Invest Lagos may use automated technologies, analytics tools and artificial intelligence systems to support event management, reporting, transcription, content summarization, sentiment analysis and operational insights.",
      "Such technologies are intended to assist decision-making processes and improve user experiences. Invest Lagos does not rely solely on automated processing to make decisions that produce legal or similarly significant effects on individuals without appropriate human oversight.",
    ],
  },
  {
    title: "2.10. Children and vulnerable persons",
    desc: [
      "The Platform is primarily intended for professionals, investors, businesses, government stakeholders and adult participants.",
      "Invest Lagos does not knowingly collect personal information from children without appropriate authorization or legal basis. Where information relating to minors or vulnerable persons is collected for a specific event or programme, additional safeguards may be applied as appropriate.",
    ],
  },
  {
    title: "2.11. Third parties and service providers",
    desc: [
      "Invest Lagos may engage trusted third-party service providers to support platform operations, event management, analytics, communications, cloud hosting, security and related services.",
      "Such providers may access personal information only to the extent necessary to perform authorized services and are expected to implement appropriate safeguards to protect that information.",
      "Invest Lagos does not sell personal information to third parties.",
    ],
  },
  {
    title: "2.12. International visitors and legal cooperation",
    desc: [
      "The Platform may be accessed by users located outside Nigeria.",
      "By using the Platform, international visitors acknowledge that personal information may be processed in Nigeria or other jurisdictions where Invest Lagos or its service providers operate.",
      "Invest Lagos may also disclose information where required by law, court order, regulatory request, or lawful government authority.",
    ],
  },
  {
    title: "2.13. Changes to this policy",
    desc: [
      "Invest Lagos may update this Privacy Policy from time to time to reflect operational, legal, regulatory, or technological developments.",
      "Updated versions will be published on the Platform and will take effect on the date indicated within the revised Policy. Continued use of the Platform following publication of updates constitutes acknowledgment of the revised Policy.",
    ],
  },
  {
    title: "2.14. Practical notes for registrants",
    desc: [
      "To support event operations and improve participant experiences, registrants should note that:",
    ],
    list: [
      "Event sessions may be recorded, photographed, livestreamed, or transcribed.",
      "AI-powered tools may be used to generate summaries, insights, reports and analytics.",
      "Delegate information may be used to facilitate approved networking and engagement opportunities.",
      "Event communications may include programme updates, logistical information, announcements and post-event resources.",
      "Participants should ensure that registration information remains accurate and up to date.",
    ],
  },
  {
    title: "2.15. How to contact us",
    desc: [
      "To exercise your rights, request information about our processing, or raise a concern, contact:",
    ],
    name: " ",
    address:
      "Ministry of Commerce, Cooperatives, Trade and Investment [MCCTI] Lagos State Government, Alausa, Nigeria.",
    email: "investinlagos@logosmccti.com",
    bio: "Where you are dissatisfied with our handling of a complaint you may lodge a formal complaint with the Nigeria Data Protection Commission (NDPC) or another competent supervisory authority in your jurisdiction.",
  },
];

function PolicySection() {
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
              {
                policy.data && <div className="flex flex-col gap-3">
                  {
                    policy.data.map(item => <div key={item.title} className="flex flex-col gap-2">
                      <p className="text-slate900 text-sm font-jost font-bold">{item.title}</p>
                      <ul className="flex flex-col gap-1 list-disc pl-4">{
                        item.list.map(listItem => <li key={listItem} className="text-slate900 text-sm font-jost">{listItem}</li>)
                        }</ul>
                    </div>)
                  }
                </div>
              }
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
                    <span className="font-bold">INVEST IN LAGOS</span>
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

export default PolicySection;
