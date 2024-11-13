import React from 'react';
import { Hero } from './components/Hero/Hero';
import { Skills } from './components/Skills/Skills';
import { Brands } from './components/Brands/Brands';
import { Achievements } from './components/Achievements/Achievements';
import { Contact } from './components/Contact/Contact';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Hero />
      <Skills />
      <Brands />
      <Achievements />
      <Contact />
    </div>
  );
}

export default App;