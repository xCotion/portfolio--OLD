import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SkillCard } from './SkillCard';
import { PhoneIcon, AIIcon, ArchitectureIcon } from '../Icons';
import { useSwipeable } from 'react-swipeable';
import './Skills.css';

const skillsData = [
  // Page 1
  [
    {
      title: 'iOS Development',
      description: 'Native applications and custom frameworks',
      details: 'Specialized in native iOS development, custom Xcode frameworks, and App Store deployment.',
      icon: PhoneIcon,
    },
    {
      title: 'AI Integration',
      description: 'Machine learning and smart automation',
      details: 'Expert implementation of AI-powered features and smart automation solutions.',
      icon: AIIcon,
    },
    {
      title: 'Architecture Design',
      description: 'Scalable systems and optimized databases',
      details: 'Focus on schema design, database architecture, and system scalability planning.',
      icon: ArchitectureIcon,
    },
  ],
  // Page 2
  [
    {
      title: 'Photography & Video',
      description: 'Professional product visuals',
      details: 'Specialized in product photography, social media content, and video production.',
      icon: PhoneIcon,
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure',
      details: 'Implementation of robust cloud-based solutions and services.',
      icon: AIIcon,
    },
    {
      title: 'Architecture Design',
      description: 'Scalable systems and optimized databases',
      details: 'Creating efficient database architectures and optimization strategies.',
      icon: ArchitectureIcon,
    },
  ],
];

export const Skills = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const nextPage = useCallback(() => {
    setCurrentPage((prev) => (prev + 1) % skillsData.length);
    setProgress(0);
  }, []);

  const prevPage = useCallback(() => {
    setCurrentPage((prev) => (prev - 1 + skillsData.length) % skillsData.length);
    setProgress(0);
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: nextPage,
    onSwipedRight: prevPage,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  useEffect(() => {
    let progressInterval: NodeJS.Timeout;
    let autoPlayInterval: NodeJS.Timeout;

    if (isAutoPlaying) {
      progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) return 0;
          return prev + 0.5;
        });
      }, 50);

      autoPlayInterval = setInterval(nextPage, 10000);
    }

    return () => {
      clearInterval(progressInterval);
      clearInterval(autoPlayInterval);
    };
  }, [isAutoPlaying, nextPage]);

  return (
    <section className="skills-section" {...handlers}>
      <div className="skills-container">
        <h2 className="heading-primary">Core Specialties</h2>
        
        <div className="carousel-container">
          <button 
            className="nav-button prev" 
            onClick={prevPage}
            aria-label="Previous page"
          >
            ←
          </button>

          <AnimatePresence mode="wait">
            <motion.div 
              key={currentPage}
              className="skills-grid"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              {skillsData[currentPage].map((skill, index) => (
                <SkillCard key={`${currentPage}-${index}`} {...skill} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          <button 
            className="nav-button next" 
            onClick={nextPage}
            aria-label="Next page"
          >
            →
          </button>
        </div>

        <div className="carousel-controls">
          <div className="progress-bar">
            <div 
              className="progress" 
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};