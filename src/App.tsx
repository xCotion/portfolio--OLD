import React, { useState, useEffect } from 'react';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { Hero } from './components/Hero/Hero';
import { Skills } from './components/Skills/Skills';
import { Brands } from './components/Brands/Brands';
import { Achievements } from './components/Achievements/Achievements';
import { Contact } from './components/Contact/Contact';
import { Loading } from './components/Loading/Loading';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Initialize scroll animations
  useScrollAnimation();

  useEffect(() => {
    // Mark component as mounted on client
    setMounted(true);

    // Add a minimum loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Handle server-side rendering
  useEffect(() => {
    if (mounted && typeof window !== 'undefined') {
      // Force a re-render of sections after mounting
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        section.style.opacity = '1';
      });
    }
  }, [mounted]);

  if (loading) {
    return <Loading onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="app-wrapper">
      <Header />
      <main className="app-container">
        <section className="section-hero">
          <Hero />
        </section>
        <section className="section-skills">
          <Skills />
        </section>
        <section className="section-brands">
          <Brands />
        </section>
        <section className="section-achievements">
          <Achievements />
        </section>
        <section className="section-contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;