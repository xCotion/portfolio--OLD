import React from 'react';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { Hero } from './components/Hero/Hero';
import { Skills } from './components/Skills/Skills';
import { Brands } from './components/Brands/Brands';
import { Achievements } from './components/Achievements/Achievements';
import { Contact } from './components/Contact/Contact';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Hero />
        <Skills />
        <Brands />
        <Achievements />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;