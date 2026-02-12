import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Waitlist from './components/sections/Waitlist';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}

export default App;
