import React from 'react';
import Hero from '../components/Hero/Hero';
import Skills from '../components/Skills/Skills';
import Brands from '../components/Brands/Brands';

const Home = () => {
  return (
    <div className="page-content">
      <section id="hero">
        <Hero />
      </section>

      <section id="skills" style={{ position: 'relative', zIndex: 2 }}>
        <Skills />
      </section>

      <section id="brands" style={{ position: 'relative', zIndex: 2 }}>
        <Brands />
      </section>
    </div>
  );
};

export default Home;
