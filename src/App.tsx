import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Milestones from './components/Milestones';
import Team from './components/Team';
import Gallery from './components/Gallery';
import History from './components/History';
import Achievements from './components/Achievements';
import Impact from './components/Impact';
import Spoon from './components/Spoon';
import SpoonTeam from './components/SpoonTeam';
import SpoonImpact from './components/SpoonImpact';
import Donate from './components/Donate';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <Header />
      <Hero />
      <About />
      <Milestones />
      <Team />
      <Gallery />
      <History />
      <Achievements />
      <Impact />
      <Spoon />
      <SpoonTeam />
      <SpoonImpact />
      <Donate />
      <Footer />
    </div>
  );
}

export default App;
