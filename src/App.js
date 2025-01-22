import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GetToKnowMe from './components/GetToKnowMe';
import Projects from './components/Projects';
import MusicRecommendations from './components/MusicRecommendations';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <GetToKnowMe />
      <Projects />
      <MusicRecommendations/>
      <Footer />
    </div>
  );
};

export default App;
