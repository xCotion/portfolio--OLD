import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Header = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = ['services', 'projects', 'about', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-header"
    >
      <nav className="header-nav">
        <motion.div 
          className="logo"
          whileHover={{ 
            scale: 1.05,
            textShadow: '0 0 15px var(--accent-glow)'
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ cursor: 'pointer' }}
        >
          ashton.services
        </motion.div>
        <div className="nav-links">
          {['Services', 'Projects', 'About', 'Contact'].map((item, index) => (
            <motion.a
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={activeSection === item.toLowerCase() ? 'active' : ''}
              whileHover={{ 
                scale: 1.05,
                color: 'var(--accent-light)',
                textShadow: '0 0 8px var(--accent-glow)'
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              style={{ cursor: 'pointer' }}
            >
              {item}
            </motion.a>
          ))}
        </div>
      </nav>
    </motion.header>
  );
};