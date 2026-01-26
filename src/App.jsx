import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import PuzzleGate from './components/PuzzleGate';

function App() {
  return (
    <PuzzleGate>
      <div className="bg-black min-h-screen text-white font-sans selection:bg-white/30">
        <Navbar />
        <Hero />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </PuzzleGate>
  );
}

export default App;
