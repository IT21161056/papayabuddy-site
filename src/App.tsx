import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectScope from './components/ProjectScope';
import LiteratureSurvey from './components/LiteratureSurvey';
import ResearchGap from './components/ResearchGap';
import Solution from './components/Solution';
import Objectives from './components/Objectives';
import Methodology from './components/Methodology';
import Achievements from './components/Achievements';
import FutureWork from './components/FutureWork';
import Downloads from './components/Downloads';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Technologies from './components/Technologies';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Hero />
        <ProjectScope />
        <LiteratureSurvey />
        <ResearchGap />
        <Solution />
        <Technologies />
        <Objectives />
        <Methodology />
        <FutureWork />
        <Downloads />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;