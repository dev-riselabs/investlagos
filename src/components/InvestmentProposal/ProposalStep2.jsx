import {
  SectionHeading,
  SubQuestion,
  TextArea,
  NumberField,
  SelectField,
  RadioRow,
  Checkbox,
} from "./ProposalFields";
import {
  FINANCING,
  PROJECT_STATUS,
  FINANCING_DEAL_TYPES,
  NON_FINANCING_DEAL_TYPES,
  AVAILABLE_DOCUMENT,
  INVESTMENT_TYPE,
  PROJECT_TIMEFRAME,
} from "./proposalOptions";

const DISCLAIMER_ITEMS = [
  "Production or trade in any product deemed illegal under the member states laws or regulations or international conventions and agreements.",
  "Production of or trade in weapons and ammunitions",
  "Trade in wildlife or wildlife products regulated under CITES (Convention on International Trade in Endangered Species of Wild Fauna and Flora).",
  "Production or use of or trade in hazardous materials such as radioactive materials.",
  "Production or use of or trade, unbounded asbestos fibres, products containing PCB’s (Polychlorinated biphenyls) and chemicals subject to international phaseouts or bans.",
  "Production of or trade in pharmaceuticals, pesticides, herbicides subject to international phase-outs or bans.",
  "Production of or trade in ozone depleting substances subject to international phase out.",
  "Drift net fishing in the marine environment using nets in excess of 2.5km length.",
  "Production or activities involving forced labour or child labour.",
  "Psychotropic drugs or narcotics.",
  "Pornographic and obscene materials.",
  "Production or trade in alcoholic beverages (excluding beer and wine).",
  "Gambling, casino 1and equivalent enterprises",
];

const ProposalStep2 = ({ data, update, errors = {} }) => {
  const handle = (e) => update({ [e.target.name]: e.target.value });

  return (
    <div className="space-y-12">
      <section>
        <SectionHeading>Project Details</SectionHeading>
        <div className="space-y-5">
          <TextArea
            label="Detailed Project Description"

            rows={6}
            placeholder="Describe the project's scope, market opportunity, beneficiaries, projected revenue model and execution plan."
            name="projectDescription"
            value={data.projectDescription}
            onChange={handle}
            error={errors.project_description}
          />

          <NumberField
            label="Project Value (Estimated in million USD)"
            placeholder="e.g. 7500000"
            name="investmentEstimateUsd"
            value={data.investmentEstimateUsd}
            onChange={handle}
            error={errors.investment_estimate_usd}
          />
          <NumberField
            label="Amount already invested (if applicable)"

            placeholder="e.g. 7500000"
            name="amountInvestedUsd"
            value={data.amountInvestedUsd}
            onChange={handle}
            error={errors.amount_invested_usd}
          />


          <SelectField
            label="Financing needs (Ticket Size)"

            placeholder="Select"
            name="financeNeeds"
            value={data.financeNeeds}
            onChange={handle}
            error={errors.finance_needs}
          >
            {FINANCING.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </SelectField>

          <TextArea
            label="Project Expected Outcome (Estimated in million USD)"

            placeholder="Type here ..."
            rows={5}
            name="projectExpectedOutcome"
            value={data.projectExpectedOutcome}
            onChange={handle}
            error={errors.project_expected_outcome}
          />


        </div>
      </section>

      <section>
        <SectionHeading>Project Status</SectionHeading>

        <div className="mb-6">
          <RadioRow
            name="projectStatus"
            value={data.projectStatus}
            onChange={(v) => update({ projectStatus: v })}
            options={PROJECT_STATUS}
          />
          {errors.project_status && (
            <p className="mt-1 text-[12px] font-jost text-red">{errors.project_status}</p>
          )}
        </div>

        <SubQuestion>Type of Investment Required</SubQuestion>
        <div className="mb-6">
          <RadioRow
            name="partnershipOpenness"
            value={data.partnershipOpenness}
            onChange={(v) => update({ partnershipOpenness: v })}
            options={INVESTMENT_TYPE}
          />
          {errors.partnership_openness && (
            <p className="mt-1 text-[12px] font-jost text-red">{errors.partnership_openness}</p>
          )}
        </div>

        <SubQuestion>Documentation Available</SubQuestion>
        <div className="mb-6">
          <RadioRow
            name="documentationAvailable"
            value={data.documentationAvailable}
            onChange={(v) => update({ documentationAvailable: v })}
            options={AVAILABLE_DOCUMENT}
          />
          {errors.documentation_available && (
            <p className="mt-1 text-[12px] font-jost text-red">{errors.documentation_available}</p>
          )}
        </div>

        <SelectField
          label="Project Timeframe"

          placeholder="--"
          name="projectTimeFrame"
          value={data.projectTimeFrame}
          onChange={handle}
          error={errors.project_time_frame}
        >
          {PROJECT_TIMEFRAME.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </SelectField>

        <SelectField
          label="Type of deal (Financing)"

          placeholder="--"
          name="financeDealType"
          value={data.financeDealType}
          onChange={handle}
          error={errors.finance_deal_type}
        >
          {FINANCING_DEAL_TYPES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </SelectField>

        <SelectField
          label="Type of deal (Non-Financing)"

          placeholder="--"
          name="nonFinanceDealType"
          value={data.nonFinanceDealType}
          onChange={handle}
          error={errors.non_finance_deal_type}
        >
          {NON_FINANCING_DEAL_TYPES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </SelectField>

        <div className="mt-5">
          <TextArea
            label="Other vital information"
            optional
            rows={5}
            placeholder="Anything else the evaluation team should know about this opportunity."
            name="additionalInformation"
            value={data.additionalInformation}
            onChange={handle}
            error={errors.additional_information}
          />
        </div>
      </section>

      <section>
        <div className="rounded-md border border-black/10 bg-black/[0.025] px-5 py-5 text-[12.5px] font-jost leading-6 text-black/70">
          <p className="font-medium text-black/80 mb-2">
            The Bank will finance transactions in all traded goods and services, including goods
            and services in export supply chains except any business or activity involving the following:
          </p>
          <ol className="list-decimal pl-5 space-y-1.5">
            {DISCLAIMER_ITEMS.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ol>
          <p className="mt-4 text-[12px] text-black/55">
            For enquiries contact us via{" "}
            <a href="mailto:investinlagos@lagosmccti.org" className="text-green100 hover:underline">
              investinlagos@lagosmccti.org
            </a>{" "}
            or call <a href="tel:+2347076623338" className="text-green100 hover:underline">+234.707.662.3338</a>.
          </p>
        </div>

        <div className="mt-5">
          <Checkbox
            name="disclaimerAccepted"
            checked={!!data.disclaimerAccepted}
            onChange={(e) => update({ disclaimerAccepted: e.target.checked })}
            label="I have read and accept all of the conditions above."
            error={errors.disclaimer_accepted}
          />
        </div>
      </section>
    </div>
  );
};

export default ProposalStep2;
