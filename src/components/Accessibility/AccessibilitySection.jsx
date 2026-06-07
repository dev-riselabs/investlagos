const policies = [
  {
    title: "3.1. Our Commitment",
    desc: [
      "Invest Lagos is committed to providing an accessible and inclusive digital experience for all users, including persons with disabilities.",
      "We recognize the importance of ensuring that our website, mobile application, event platforms, digital dashboards and related services can be accessed and used by as many people as possible, regardless of ability, technology, or circumstance.",
      "Accessibility is an ongoing priority and we continually seek opportunities to improve the usability and inclusiveness of our digital services.",
    ],
  },
  {
    title: "3.2. Conformance Status",
    desc: [
      "Invest Lagos aims to align its digital platforms with recognized accessibility best practices, including the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA where reasonably practicable.",
      "While we strive to improve accessibility across all digital services, some content or third-party integrations may not yet fully meet all accessibility requirements.",
    ],
  },
  {
    title: "3.3. Accessibility Features",
    desc: ["To support accessibility and usability, the Platform may include:"],
    list: [
      "Clear and consistent page structures",
      "Logical heading hierarchies",
      "Keyboard-accessible navigation",
      "Alternative text for meaningful images",
      "Responsive layouts for different screen sizes",
      "Accessible forms and input fields",
      "Readable text and colour contrast considerations",
      "Support for browser zoom and text resizing",
    ],
    paragraph:
      "Accessibility features may evolve as the Platform continues to develop.",
  },
  {
    title: "3.4. Assistive Technologies",
    desc: [],
    list: [
      "Screen readers",
      "Screen magnification tools",
      "Voice recognition software",
      "Keyboard-only navigation tools",
      "Mobile accessibility features available on modern devices",
    ],
    paragraph:
      "We encourage users to utilize the accessibility settings and assistive technologies available on their devices and browsers.",
  },
  {
    title: "3.5. Known Limitations",
    desc: [
      "Despite our efforts, some areas of the Platform may present accessibility challenges.",
      "Examples may include:",
    ],
    list: [
      "Third-party content or embedded services",
      "Downloadable documents supplied by external organizations",
      "Legacy content published before accessibility improvements were implemented",
      "	AI-generated summaries, transcripts, or visualizations that may require further review",
    ],
    paragraph:
      "We continue to identify and address accessibility barriers where feasible.",
  },
  {
    title: "3.6. Browser and Assistive Technology Support",
    desc: [
      "The Platform is designed to function across current versions of major web browsers and mobile operating systems.",
      "For the best experience, users are encouraged to use updated versions of supported browsers and accessibility tools.",
      "Performance and accessibility may vary depending on device settings, browser versions, third-party software and internet connectivity.",
    ],
  },
  {
    title: "3.7. Ongoing Efforts",
    desc: [
      "Accessibility is an ongoing process rather than a one-time activity.",
      "Invest Lagos seeks to continuously improve accessibility through:",
    ],
    list: [
      "Regular reviews of digital content",
      "Platform enhancements and design improvements",
      "Consideration of user feedback",
      "Accessibility awareness during development and deployment of new features",
    ],
    paragraph:
      "We are committed to making reasonable improvements as technology, standards, and user needs evolve.We continue to identify and address accessibility barriers where feasible.",
  },
  {
    title: "3.8. Assessment and Testing",
    desc: [
      "Accessibility assessments may be conducted periodically using a combination of:",
    ],
    list: [
      "Automated accessibility testing tools",
      "Internal reviews and quality assurance processes",
      "Manual testing of key user journeys",
      "Feedback received from users and stakeholders",
    ],
    paragraph:
      "Assessment findings may be used to prioritize future accessibility improvements.",
  },
  {
    title: "3.9. Formal Approval",
    desc: [
      "This Accessibility Statement has been approved for publication by Invest Lagos and reflects our current commitment to accessibility and inclusive digital participation.",
"The Statement may be reviewed and updated periodically to reflect changes in technology, accessibility standards, legal requirements, or platform functionality."
],
  },
  {
    title: "3.10. Feedback and Contact",
    desc: [
      "We welcome your feedback on the accessibility of the INVEST IN LAGOS website. If you encounter accessibility barriers or have suggestions for improvement, please contact us:",
    ],
    name: " ",
    address:
      "Ministry of Commerce, Cooperatives, Trade and Investment [MCCTI] Lagos State Government, Alausa, Nigeria.",
    email: "investinlagos@logosmccti.com",
    bio: "We aim to respond to accessibility feedback within 5 business days.",
  },
];

function AccessibilitySection() {
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

export default AccessibilitySection;
