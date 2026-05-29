import { TbChartAreaLineFilled } from "react-icons/tb";

const reasons = [
    {title : 'Direct Access to Decision Makers', description: 'Engage directly with the Governor of Lagos State, Ministers, and heads of government agencies. No intermediaries — just structured, bilateral conversations.'},
    {title : 'Structured Deal-Making', description: 'Invitation-only Deal Rooms connect pre-qualified investors with bankable opportunities. From intent to term sheet in two days.'},
    {title : 'Sector-Specific     Insights', description: 'Deep-dive plenaries across technology, infrastructure, manufacturing, and the creative economy — each curated by sector leaders.'},
    {title : 'Global Networking', description: 'Connect with institutional investors, development finance institutions, and Commonwealth business leaders from 20+ countries.'},
    {title : 'Visa on Arrival       Support', description: 'Approved international delegates receive full visa assistance. Our team coordinates directly with immigration authorities on your behalf.'},
    {title : "Africa's Commonwealth Gateway", description: "Leverage Lagos's position within the African Continental Free Trade Area and its role as the Commonwealth's fastest-growing economic hub."},
]

function ReasonSection() {
  return (
    <section className="bg-white flex flex-col gap-10 md:gap-20 justify-center px-4 md:px-10 lg:px-20 py-10 md:py-20 lg:py-25">
        <div className="flex flex-col gap-4">
            <h4 className="font-jost font-bold text-sm text-green100 tracking-[4px]">WHY ATTEND</h4>
            <h3 className="text-black font-jost font-medium text-lg md:text-xl relative after:absolute after:content-[''] after:left-0 after:h-2 after:w-25 after:bg-slate200 after:-bottom-4">Where Policy, Investments, Data and Opportunities Converge</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                reasons.map(({title, description}, i) => <div key={title} className="flex gap-3 p-5 shadow-reason md:px-7.5 md:py-12.5 rounded-2xl bg-white">
                    <div className="w-10 h-10 bg-green700 rounded-md flex items-center justify-center shrink-0">
                        <TbChartAreaLineFilled className="text-green100 w-5 h-5"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h4 className="text-black200 font-bold font-jost text-lg ">{i + 1}. {title}</h4>
                        <p className="text-black200 font-jost text-sm">{description}</p>
                    </div>
                </div>)
            }
        </div>

    </section>
  )
}

export default ReasonSection