import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Hero.css';

const HeroBackground = () => (
  <div className="hero-background">
    <div className="gradient-sphere gradient-sphere-1" />
    <div className="gradient-sphere gradient-sphere-2" />
    <div className="gradient-sphere gradient-sphere-3" />
    <div className="noise-overlay" />
  </div>
);

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

  return (
    <>
      <HeroBackground />
      <section className="hero">
        {/* Content Container */}
        <div className="hero-container">
          {/* Main Content */}
          <div className="hero-content">
            <div className="hero-text-container">
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
            </div>

            {/* CTA Buttons */}
            <div className="hero-cta">
              <Link to="/contact" className="cta-button primary">
                <span>Get in Touch</span>
              </Link>
              <Link to="/projects" className="cta-button secondary">
                <span>View Projects</span>
              </Link>
            </div>

            {/* Social Links */}
            <div className="social-links">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{ '--hover-color': link.color } as React.CSSProperties}
                >
                  <i className={`fab fa-${link.icon}`} />
                  <span className="social-label">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="hero-decoration">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;