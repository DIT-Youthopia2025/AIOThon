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
      className="absolute inset-0 -z-10 bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/background.png')" }}
    />
    <div className="flex justify-center">
      <GooeyNav 
        items={navItems} 
        initialActiveIndex={0} 
      />
    </div>
    </>
  );
}

export default App;