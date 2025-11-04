import GooeyNav from './components/GooeyNav';


function App() {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
    <div
      className="relative inset-0  bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/background.png')" }}
    />
    <div className="flex justify-center">
      <GooeyNav 
        items={navItems} 
        initialActiveIndex={0} 
      />
    </div>
    <div className="min-h-screen bg-[#0b0b3b] flex flex-col items-center justify-center">
      
    </div>
    
    </>
  );
}

export default App;