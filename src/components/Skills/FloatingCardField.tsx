import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useCardAnimations } from '../../hooks/useCardAnimations';
import { useAnimation } from '../../context/AnimationContext';

interface SkillCard {
  title: string;
  subtitle: string;
  icon: string;
  color: string;
}

interface Props {
  cards: SkillCard[];
}

const FloatingCardField: React.FC<Props> = ({ cards }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { cardsRef } = useCardAnimations(cards.length);
  const { mainTimeline } = useAnimation();

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none"
      style={{ 
        perspective: '2000px',
        transformStyle: 'preserve-3d',
        willChange: 'transform',
        backfaceVisibility: 'hidden'
      }}
    >
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          ref={el => cardsRef.current[index] = el}
          className={`absolute left-0 top-0 w-64 h-40 rounded-xl bg-gradient-to-br ${card.color} backdrop-blur-sm p-6 shadow-xl`}
          style={{ 
            transformStyle: 'preserve-3d',
            willChange: 'transform',
            backfaceVisibility: 'hidden',
            transformOrigin: '50% 50% -50px'
          }}
        >
          <div className="relative z-10 flex flex-col h-full">
            <span className="text-3xl mb-2">{card.icon}</span>
            <h3 className="text-lg font-semibold text-white mb-1">{card.title}</h3>
            <p className="text-sm text-white/80">{card.subtitle}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default React.memo(FloatingCardField);
