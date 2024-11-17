import React from 'react';
import { motion, MotionValue, AnimationControls } from 'framer-motion';
import './Skills.css';

interface Skill {
  title: string;
  description: string;
  details: string[];
  icon: string;
}

interface FloatingCardProps {
  skill: Skill;
  index: number;
  scrollProgress: MotionValue<number>;
  totalCards: number;
  isFloating: boolean;
  animate: AnimationControls;
}

const FloatingCard: React.FC<FloatingCardProps> = ({
  skill,
  index,
  scrollProgress,
  totalCards,
  isFloating,
  animate
}) => {
  // Calculate grid position
  const cols = Math.ceil(Math.sqrt(totalCards));
  const gridX = (index % cols) - (cols - 1) / 2;
  const gridY = Math.floor(index / cols) - (Math.floor(totalCards / cols) - 1) / 2;

  // Initial random position with wider spread
  const initialX = (Math.random() - 0.5) * 1500; // Increased spread
  const initialY = (Math.random() - 0.7) * 1200; // Increased vertical spread
  const initialZ = -2500 - Math.random() * 1500; // Deeper Z range

  // Random speeds for more varied movement
  const speedMultiplier = 0.5 + Math.random() * 0.8;
  const rotationSpeed = 5 + Math.random() * 10;

  // Animation variants
  const variants = {
    floating: {
      x: [initialX, initialX + 100 * (Math.random() - 0.5)],
      y: [initialY, initialY + 100 * (Math.random() - 0.5)],
      z: [initialZ, initialZ + 200 * (Math.random() - 0.5)],
      rotateX: [Math.random() * 30 - 15, Math.random() * 30 - 15],
      rotateY: [Math.random() * 30 - 15, Math.random() * 30 - 15],
      rotateZ: [Math.random() * 20 - 10, Math.random() * 20 - 10],
      transition: {
        duration: (15 + Math.random() * 10) / speedMultiplier,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut",
        times: [0, 1],
        loop: Infinity,
        delay: Math.random() * 2
      }
    },
    static: {
      x: gridX * 250,
      y: gridY * 300,
      z: 0,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      transition: {
        duration: 1.2,
        ease: [0.6, 0.01, -0.05, 0.9],
        delay: index * 0.1
      }
    }
  };

  return (
    <motion.div
      className="floating-card"
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        width: '200px',
        transformStyle: 'preserve-3d',
        transformOrigin: 'center center',
        willChange: 'transform',
        filter: `blur(${isFloating ? 1 : 0}px)`,
        transition: 'filter 0.5s ease'
      }}
      initial="floating"
      animate={animate}
      variants={variants}
      whileHover={!isFloating ? { 
        scale: 1.05,
        z: 50,
        transition: { duration: 0.3 }
      } : {}}
    >
      <motion.div
        className="card-content"
        style={{
          opacity: scrollProgress.get() > 0.1 ? 1 : 0.6,
          scale: scrollProgress.get() > 0.1 ? 1 : 0.8,
        }}
      >
        <div className="skill-icon">{skill.icon}</div>
        <h3>{skill.title}</h3>
        <p>{skill.description}</p>
      </motion.div>
    </motion.div>
  );
};

export default FloatingCard;
