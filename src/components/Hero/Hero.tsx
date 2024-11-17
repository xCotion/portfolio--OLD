import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const socialLinks = [
    { 
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: 'github',
      color: '#333'
    },
    { 
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: 'linkedin',
      color: '#0077b5'
    },
    { 
      name: 'Twitter',
      url: 'https://twitter.com/yourusername',
      icon: 'twitter',
      color: '#1da1f2'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <section className="hero">
      {/* Background Elements */}
      <div className="hero-background">
        <div className="gradient-sphere gradient-sphere-1" />
        <div className="gradient-sphere gradient-sphere-2" />
        <div className="gradient-sphere gradient-sphere-3" />
        <div className="noise-overlay" />
      </div>

      {/* Content Container */}
      <motion.div 
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Content */}
        <div className="hero-content">
          <motion.div className="hero-text-container" variants={itemVariants}>
            <h1 className="hero-title">
              <span className="gradient-text">Crafting Digital</span>
              <br />
              Excellence
            </h1>
            <p className="hero-subtitle">
              Transforming ideas into elegant solutions through code and creativity
            </p>
            <div className="hero-specialties">
              <span>iOS Development</span>
              <span className="dot">•</span>
              <span>Creative Media</span>
              <span className="dot">•</span>
              <span>AI Integration</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div className="hero-cta" variants={itemVariants}>
            <Link to="/contact" className="cta-button primary">
              <span>Get in Touch</span>
              <motion.span 
                className="button-glow"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </Link>
            <Link to="/projects" className="cta-button secondary">
              <span>View Projects</span>
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="social-links"
            variants={itemVariants}
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                style={{ '--hover-color': link.color } as React.CSSProperties}
              >
                <i className={`fab fa-${link.icon}`} />
                <span className="social-label">{link.name}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <motion.div 
          className="hero-decoration"
          variants={itemVariants}
        >
          <div className="code-window">
            <div className="window-header">
              <div className="window-buttons">
                <span className="window-button close" />
                <span className="window-button minimize" />
                <span className="window-button maximize" />
              </div>
              <div className="window-title">portfolio.swift</div>
            </div>
            <div className="window-content">
              <pre>
                <code>
                  <span className="code-keyword">class</span> Developer {'{'}
                  <br />
                  {'  '}let name = <span className="code-string">"Your Name"</span>
                  <br />
                  {'  '}let role = <span className="code-string">"Full Stack Developer"</span>
                  <br />
                  {'  '}let passions = [<span className="code-string">"iOS"</span>, <span className="code-string">"AI"</span>, <span className="code-string">"Design"</span>]
                  <br />
                  {'}'}
                </code>
              </pre>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;