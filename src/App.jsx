import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PuzzleGate from './components/PuzzleGate';

// Lazy load heavy sections
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <PuzzleGate>
      <div className="bg-black min-h-screen text-white font-sans selection:bg-white/30">
        <Navbar />
        <Hero />

        <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
          <Experience />
          <Projects />
          <Contact />
        </Suspense>
      </div>
    </PuzzleGate>
  );
}

export default App;
