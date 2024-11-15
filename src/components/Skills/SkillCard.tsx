import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  title: string;
  description: string;
  details: string;
  icon: React.FC;
  index: number;
}

export const SkillCard = ({ title, description, details, icon: Icon, index }: SkillCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <motion.div
      className="skill-card-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.3,
        delay: index * 0.2,
      }}
    >
      <motion.div 
        ref={cardRef}
        className="skill-card"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        onClick={() => setIsFlipped(!isFlipped)}
        onMouseMove={handleMouseMove}
      >
        <motion.div 
          className="skill-card-front"
          animate={{ opacity: isFlipped ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          style={{ WebkitBackfaceVisibility: 'hidden' }}
        >
          <div className="skill-icon-wrapper">
            <Icon />
          </div>
          <div className="skill-content">
            <h3 className="skill-title">{title}</h3>
            <p className="skill-description">{description}</p>
          </div>
          <p className="flip-hint">Learn More →</p>
        </motion.div>

        <motion.div 
          className="skill-card-back"
          animate={{ opacity: isFlipped ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ WebkitBackfaceVisibility: 'hidden' }}
        >
          <div className="skill-icon-wrapper">
            <Icon />
          </div>
          <div className="skill-content">
            <h3 className="skill-title">{title}</h3>
            <p className="skill-details">{details}</p>
          </div>
          <p className="flip-hint">← Back</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};