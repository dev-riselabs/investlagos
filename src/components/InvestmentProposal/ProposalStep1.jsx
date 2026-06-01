import {
  SectionHeading,
  TextField,
  NumberField,
  TextArea,
  SelectField,
} from "./ProposalFields";
import {
  SECTORS,
  OPERATING_MARKET,
  CURRENT_TURNOVER,

} from "./proposalOptions";

const ProposalStep1 = ({ data, update, errors = {} }) => {
  const handle = (e) => update({ [e.target.name]: e.target.value });

  return (
    <div className="space-y-12">
      <section>
        <SectionHeading>Project Information</SectionHeading>
        <div className="space-y-5">
          <TextField
            label="Project Title"
            required
            placeholder="e.g. Lagos Coastal Rail Modernization"
            name="projectTitle"
            value={data.projectTitle}
            onChange={handle}
            error={errors.project_title}
          />


          <TextField
            label="Location / Area of Intervention"
            required
            placeholder="State, City, Address"
            name="projectLocation"
            value={data.projectLocation}
            onChange={handle}
            error={errors.project_location}
          />


          <SelectField
            label="Project Sector"
            required
            placeholder="Select sector"
            name="sector"
            value={data.sector}
            onChange={handle}
            error={errors.sector}
          >
            {SECTORS.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </SelectField>

          <TextField
            label="Project partner (s)"
            required
            placeholder="partners names separated with comma (,)"
            name="projectPartners"
            value={data.projectPartners}
            onChange={handle}
            error={errors.project_partners}
          />

          <TextField
            label="Project owner / promoter (s) Full Name"
            required
            placeholder=""
            name="projectOwner"
            value={data.projectOwner}
            onChange={handle}
            error={errors.project_owner}
          />

          <TextField
            label="Borrower (s) Full Name"
            required
            placeholder=""
            name="borrowerFullname"
            value={data.borrowerFullname}
            onChange={handle}
            error={errors.borrower_fullname}
          />
          <TextField
            label="Project owner Title"
            required
            placeholder=""
            name="projectOwnerTitle"
            value={data.projectOwnerTitle}
            onChange={handle}
            error={errors.project_owner_title}
          />

          <TextField
            label="Project owner Email Address"
            required
            type="email"
            placeholder="example@gmail.com"
            name="projectOwnerEmail"
            value={data.projectOwnerEmail}
            onChange={handle}
            error={errors.project_owner_email}
          />
          <TextField
            label="Project owner Phone Number "
            required
            type="tel"
            placeholder="+234"
            name="projectOwnerPhone"
            value={data.projectOwnerPhone}
            onChange={handle}
            error={errors.project_owner_phone}
          />

          <TextField
            label="Name of the organization"
            required
            placeholder=""
            name="organization"
            value={data.organization}
            onChange={handle}
            error={errors.organization}
          />

          <TextArea
            label="A brief about the organization (Nature of Business, Legal Structure, Operating Countries) *"
            required
            placeholder="Type here ..."
            rows={5}
            name="organisationSummary"
            value={data.organisationSummary}
            onChange={handle}
            error={errors.organisation_summary}
          />

          <SelectField
            label="Operating Market"
            required
            placeholder="Select type"
            name="operatingMarket"
            value={data.operatingMarket}
            onChange={handle}
            error={errors.operating_market}
          >
            {OPERATING_MARKET.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </SelectField>

          <SelectField
            label="Current Turnover (Estimated in million USD)"
            required
            placeholder="Select project type"
            name="projectType"
            value={data.projectType}
            onChange={handle}
            error={errors.project_type}
          >
            {CURRENT_TURNOVER.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </SelectField>

        </div>
      </section>
    </div>
  );
};

export default ProposalStep1;
