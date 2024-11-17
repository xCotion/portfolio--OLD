import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useWindowSize } from './useWindowSize';

interface CardPosition {
  x: number;
  y: number;
  z: number;
  rotateX: number;
  rotateY: number;
  rotateZ: number;
}

export const useCardAnimations = (totalCards: number) => {
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const animationsRef = useRef<gsap.core.Timeline[]>([]);
  const mainTweenRef = useRef<gsap.core.Timeline | null>(null);

  const getInitialPosition = (index: number): CardPosition => {
    // Position cards behind the hero text in the upper left-center quadrant
    const baseX = -windowWidth * 0.25; // Moved more towards center
    const baseY = -windowHeight * 0.3;
    
    // Use golden ratio for natural-looking distribution
    const phi = (1 + Math.sqrt(5)) / 2;
    const angleStep = (Math.PI * 2 * phi) * index;
    const radius = 180; // Slightly larger radius
    
    // Calculate spiral position with offset
    const x = baseX + Math.cos(angleStep) * radius;
    const y = baseY + Math.sin(angleStep) * radius;
    const z = -300 - (index * 30); // Closer to viewer, less depth variation
    
    // Calculate rotation based on position
    const rotateX = Math.sin(angleStep) * 10;
    const rotateY = Math.cos(angleStep) * 10;
    const rotateZ = Math.sin(angleStep + Math.PI/4) * 5;
    
    return { x, y, z, rotateX, rotateY, rotateZ };
  };

  const initializeCards = () => {
    if (!cardsRef.current.length) return;

    // Kill existing animations
    animationsRef.current.forEach(tl => tl?.kill());
    mainTweenRef.current?.kill();

    const masterTimeline = gsap.timeline({
      defaults: { duration: 0.8, ease: "power2.out" }
    });

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const pos = getInitialPosition(i);
      
      // Set initial position off-screen
      gsap.set(card, {
        x: pos.x - 100,
        y: pos.y - 100,
        z: pos.z,
        rotationX: pos.rotateX,
        rotationY: pos.rotateY,
        rotationZ: pos.rotateZ,
        opacity: 0,
        force3D: true,
        backfaceVisibility: "hidden"
      });

      // Create entrance animation
      masterTimeline.to(card, {
        x: pos.x,
        y: pos.y,
        opacity: 0.8,
        delay: i * 0.1
      }, "<0.1");

      // Create floating animation
      const floatTimeline = gsap.timeline({
        repeat: -1,
        yoyo: true,
        defaults: { duration: 10 + i * 2, ease: "none" }
      });

      floatTimeline
        .to(card, {
          x: pos.x + gsap.utils.random(-20, 20),
          y: pos.y + gsap.utils.random(-20, 20),
          z: pos.z + gsap.utils.random(-30, 30),
          rotationX: pos.rotateX + gsap.utils.random(-5, 5),
          rotationY: pos.rotateY + gsap.utils.random(-5, 5),
          rotationZ: pos.rotateZ + gsap.utils.random(-5, 5)
        })
        .progress(Math.random());

      animationsRef.current[i] = floatTimeline;
    });

    mainTweenRef.current = masterTimeline;
  };

  useEffect(() => {
    initializeCards();
    
    return () => {
      animationsRef.current.forEach(tl => tl?.kill());
      mainTweenRef.current?.kill();
    };
  }, [windowWidth, windowHeight]);

  return {
    cardsRef,
    initializeCards
  };
};
