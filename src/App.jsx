import GooeyNav from './components/GooeyNav';
import Countdown from './components/Countdown';
import PrizeCard from './components/PrizeSection';
import Timelinie from "./components/Timelinee";
import Consent from './components/Consent';

function App() {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#09093f] to-[#000042] flex flex-col justify-start items-center overflow-x-hidden">
      {/* Navbar */}

      <GooeyNav items={navItems} initialActiveIndex={0} />

      {/* Countdown Section */}
      <section id="about" className="w-full">
        <Countdown />
      </section>

      {/* Prize Section */}
      <section id="prizes" className="w-full">
        <PrizeCard />
      </section>
      <section id="timeline" className="w-full">
        <Timelinie />
      </section>
      <section id="register" className="w-full flex justify-center mb-20 ">
        <div>
        <h2 className='text-2xl  italic text-emerald-400 text-shadow-2xs text-shadow-white'>---REGISTRATIONS OPENING SOON---</h2>
        {/* <Consent /> */}
        </div>
      </section>
      
    </div>
  );
}

export default App;
