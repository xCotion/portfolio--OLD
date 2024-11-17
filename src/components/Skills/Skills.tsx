import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FloatingCardField from './FloatingCardField';
import './Skills.css';

const skillsData = [
  {
    title: 'iOS Development',
    description: 'Native Apps & Custom Frameworks',
    details: ['Swift', 'SwiftUI', 'UIKit', 'Core Data'],
    icon: '📱'
  },
  {
    title: 'AI & ML',
    description: 'Machine Learning & AI Solutions',
    details: ['TensorFlow', 'PyTorch', 'Core ML'],
    icon: '🤖'
  },
  {
    title: 'System Architecture',
    description: 'Scalable System Design',
    details: ['Cloud Architecture', 'Microservices'],
    icon: '🏗️'
  },
  {
    title: 'Web Development',
    description: 'Modern Web Applications',
    details: ['React', 'Next.js', 'TypeScript'],
    icon: '💻'
  },
  {
    title: 'Backend Development',
    description: 'Robust Server Solutions',
    details: ['Node.js', 'Python', 'Go'],
    icon: '⚙️'
  },
  {
    title: 'DevOps',
    description: 'CI/CD & Infrastructure',
    details: ['Docker', 'Kubernetes', 'AWS'],
    icon: '🚀'
  }
];

const Skills = () => {
  const [showGrid, setShowGrid] = useState(false);

  return (
    <motion.section 
      id="skills"
      className="skills-section"
      style={{
        position: 'relative',
        height: '100vh',
        overflow: 'hidden'
      }}
    >
      <div className="skills-content" style={{ position: 'relative', height: '100%' }}>
        <FloatingCardField 
          skills={skillsData}
          onTransitionComplete={() => {
            console.log('Transition complete called');
            setShowGrid(true);
          }}
        />

        <AnimatePresence mode="sync">
          {showGrid && (
            <motion.div 
              key="grid"
              className="skills-grid-section"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1
              }}
            >
              <motion.div
                className="skills-header"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2>Skills & Expertise</h2>
                <p>Specialized in creating innovative solutions across multiple domains</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Skills;