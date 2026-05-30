import { LuDollarSign } from "react-icons/lu";
import { LuBuilding2 } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";
import { LuBriefcase } from "react-icons/lu";

const invest = [
    {icon : LuDollarSign, value: '$5.2B', description: 'Verified Investment Opportunities'},
    {icon : LuBuilding2, value: '52', description: 'Investment-Ready Projects'},
    {icon : FiUsers, value: '102', description: 'Institutional Investors'},
    {icon : LuBriefcase, value: '58', description: 'Public Private Partnerships Facilitate '},
]

function InvestmentSection() {
  return (
    <section className="bg-green100! invest-bg px-4 md:px-10 lg:px-20 py-10 md:py-20 flex flex-col gap-15 ">
        <div className="flex flex-col gap-4 items-center">
            <div className="px-4 py-1.5 border border-orange rounded-full bg-orange/30 text-orange font-semibold font-jost text-sm">INVESTMENT IMPACT</div>
            <h3 className="text-white font-medium font-jost text-3xl md:text-5xl">Investment Hub</h3>
            <p className="text-base font-manrope text-white/70 font-medium text-center max-w-[80ch]">Connecting global capital with transformative opportunities in Africa's largest subnational economy. Discover projects that drive growth, innovation, sustainability and inclusive prosperity.</p>
        </div>
        <div className="flex flex-col gap-8 md:flex-row md:items-center ">
            <div className="flex flex-col gap-8 md:flex-1">
                <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
                    {
                        invest.map(({icon: Icon, value, description }, i) => <div key={i} className={`p-4 rounded-2xl border border-white/20 flex flex-col gap-2 ${
                            i === 3 ? 'bg-orange/40' : 'bg-white'
                        }`}>
                            <Icon className={`w-5 h-5 ${
                                i === 3 ? 'text-white' : 'text-green100'
                            }`}/>
                            <h4 className={`text-3xl font-bold font-manrope pt-3 ${i === 3 ? 'text-white' : 'text-green100'}`}>{value}</h4>
                            <p className={`text-base font-medium font-manrope ${i === 3 ? 'text-white' : 'text-green100'}`}>{description}</p>
                        </div>)
                    }

                </div>
                <div className="flex flex-col gap-3">
                    <p className="text-white/80 font-manrope text-base font-medium">As the commercial heartbeat of Africa, Lagos offers unparalleled access to markets, talent, innovation and opportunity.</p>
                    <p className="text-white/80 font-manrope text-base font-medium">The Invest Lagos Deal Room provides a trusted platform where investors, governments, development finance institutions, and businesses can unlock partnerships that accelerate sustainable development.</p>
                </div>
                <a href="/dealroom" className="py-3 px-8 text-black300 font-inter font-bold text-sm bg-orange rounded-md self-start">Access Deal Room</a>
            </div>
            <div className="w-full md:flex-1">
                <img src="/investment-img.png" alt=""className="w-full" />
            </div>
            
        </div>

    </section>
  )
}

export default InvestmentSection