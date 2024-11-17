import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FloatingCard from './FloatingCard';
import './Skills.css';

interface Skill {
  title: string;
  description: string;
  details: string[];
  icon: string;
}

interface FloatingCardFieldProps {
  skills: Skill[];
  onTransitionComplete?: () => void;
}

const FloatingCardField: React.FC<FloatingCardFieldProps> = ({ skills, onTransitionComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [isFloating, setIsFloating] = useState(true);
  const [hasStartedTransition, setHasStartedTransition] = useState(false);

  // Use viewport scroll instead of container scroll
  const { scrollY } = useScroll({
    offset: ["start end", "end start"]
  });
  
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
    rootMargin: "-10% 0px -10% 0px"
  });

  // Calculate scroll progress based on viewport position with smoother transition
  const calculateProgress = (scrollPosition: number) => {
    if (!containerRef.current) return 0;
    const rect = containerRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const offsetTop = window.pageYOffset + rect.top;
    const startScroll = offsetTop - windowHeight * 1.2; // Start earlier
    const endScroll = offsetTop - windowHeight * 0.2; // End later
    
    return Math.max(0, Math.min(1, (scrollPosition - startScroll) / (endScroll - startScroll)));
  };

  const scrollProgress = useTransform(scrollY, (value) => calculateProgress(value));

  // Start floating animation when in view
  useEffect(() => {
    if (inView) {
      if (isFloating) {
        controls.start("floating");
      } else if (!hasStartedTransition) {
        setHasStartedTransition(true);
        controls.start("static");
      }
    }
  }, [inView, isFloating, controls, hasStartedTransition]);

  // Handle scroll progress with smoother transitions
  useEffect(() => {
    const unsubscribe = scrollProgress.on("change", (latest) => {
      if (latest > 0.15) {
        if (isFloating) {
          setIsFloating(false);
          controls.start("static", {
            transition: { staggerChildren: 0.05 }
          });
        }
      } else {
        if (!isFloating && !hasStartedTransition) {
          setIsFloating(true);
          controls.start("floating", {
            transition: { staggerChildren: 0.03 }
          });
        }
      }

      if (latest >= 0.8 && inView && onTransitionComplete) {
        onTransitionComplete();
      }
    });

    return () => unsubscribe();
  }, [scrollProgress, inView, onTransitionComplete, isFloating, hasStartedTransition, controls]);

  return (
    <div 
      className="floating-card-field"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: isFloating ? 'none' : 'auto'
      }}
    >
      <motion.div 
        ref={(el) => {
          // @ts-ignore - combining refs
          containerRef.current = el;
          inViewRef(el);
        }}
        className="floating-cards-container"
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          perspective: '2000px',
          transformStyle: 'preserve-3d',
          transition: 'perspective 1s ease'
        }}
      >
        {skills.map((skill, index) => (
          <FloatingCard
            key={skill.title}
            skill={skill}
            index={index}
            scrollProgress={scrollProgress}
            totalCards={skills.length}
            isFloating={isFloating}
            animate={controls}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default FloatingCardField;
