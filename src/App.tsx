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
import OurPartners from './components/OurPartners';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import ImpactInNumbers from './components/ImpactInNumbers';
import Resources from './components/Resources';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Team />
      <Milestones />
      <History />
      <Achievements />
      <Impact />
      <ImpactInNumbers />
      <Gallery />
      <Resources />
      <Spoon />
      <SpoonTeam />
      <SpoonImpact />
      <Donate />
      <OurPartners />
      <ContactUs />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
