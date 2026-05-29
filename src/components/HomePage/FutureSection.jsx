import { FaPlay } from "react-icons/fa"
import { Link } from "react-router-dom"

const buttons = [
  {title : 'Register Now', isDot: false, path: '/register'},
  {title : 'View Agenda', isDot: false, path: '/agenda'},
  {title : 'View LIVE Dashboard', isDot: true, href: 'https://eventsintel.com/investlagos'},
]

function FutureSection() {
  return (
    <section className="future-bg flex flex-col gap-6 px-4 md:px-10 lg:px-20 py-10 md:py-21">
        <div className="border-l-4 border-l-green100 p-5">
            <h3 className="text-green100 text-sm md:text-base font-bold font-jost uppercase tracking-[5px]">WELCOME TO THE FUTURE</h3>
        </div>
        <div className="flex flex-col gap-7 md:flex-row md:justify-between md:items-center">
            <div className="flex flex-col gap-6 md:max-w-md">
                <h4 className="text-2xl md:text-4xl font-medium font-jost text-black100 md:max-w-[15ch]">Secure your place at <span className="text-green100">Invest Lagos 3.0</span></h4>
                <p className="text-base md:text-xl font-jost text-black100">Engage with world-class investors, government leaders and innovators defining the future of business and investment.</p>
            </div>
            <div className="flex flex-wrap gap-4 md:flex-1">
                        {
                          buttons.map(({title, isDot, path, href}, i ) => {
                            const cls = `p-1.5 md:p-2.5 pl-4 md:pl-8 flex items-center gap-2 md:gap-4 rounded-sm ${
                              i === 1 ? 'bg-yellow':
                              i === 0 ? 'bg-black100' :
                              'bg-green100'
                            }`
                            const inner = (
                              <>
                                <div className="flex items-center gap-1.5">
                                  {isDot && <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white"/>}
                                  <span className={`text-xs font-jost font-bold ${i === 1 ? 'text-black' : 'text-white'}`}>{title}</span>
                                </div>
                                <div className="bg-white/20 backdrop-blur-md backdrop-brightness-90 rounded-sm flex w-8 h-8 md:w-9 md:h-9 items-center justify-center">
                                  <FaPlay className={`w-4 h-4 md:w-5 md:h-5 ${i === 1 ? 'text-black' : 'text-white'}`}/>
                                </div>
                              </>
                            )
                            return path
                              ? <Link key={title} to={path} className={cls}>{inner}</Link>
                              : href
                                ? <a key={title} href={href} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>
                                : <button key={title} className={cls}>{inner}</button>
                          })
                        }
                      </div>

        </div>


    </section>
  )
}

export default FutureSection