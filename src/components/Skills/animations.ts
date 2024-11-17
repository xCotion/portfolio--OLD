import gsap from 'gsap';
import { Variants } from 'framer-motion';

// Helper functions
export const getInitialPosition = (index: number) => {
  const angle = (index) * Math.PI * 0.8 - Math.PI * 0.4;
  const radius = 500 + Math.sin(index * 2.5) * 100;
  return {
    x: Math.cos(angle) * radius - 600,
    y: Math.sin(angle) * radius * 0.6,
    z: Math.sin(angle * 2) * 200 - 1000,
    rotationX: Math.sin(angle) * 15,
    rotationY: Math.cos(angle) * 20,
    rotationZ: Math.sin(angle * 2) * 10,
  };
};

export const createFloatingAnimation = (element: HTMLElement, index: number) => {
  return gsap.to(element, {
    duration: 4,
    x: `+=${Math.sin(index) * 50}`,
    y: `+=${Math.cos(index) * 50}`,
    z: `+=${Math.sin(index * 0.5) * 100}`,
    rotationX: `+=${Math.sin(index) * 10}`,
    rotationY: `+=${Math.cos(index) * 10}`,
    ease: "none",
    yoyo: true,
    repeat: -1,
  });
};

export const createScrollTrigger = (
  trigger: HTMLElement,
  onProgress: (progress: number) => void
) => {
  return ScrollTrigger.create({
    trigger,
    start: "top center",
    end: "bottom center",
    onUpdate: (self) => onProgress(self.progress),
  });
};

export const createMouseParallax = (
  element: HTMLElement,
  mouseX: number,
  mouseY: number,
  intensity: number = 1
) => {
  const bounds = element.getBoundingClientRect();
  const centerX = bounds.left + bounds.width / 2;
  const centerY = bounds.top + bounds.height / 2;
  
  const deltaX = (mouseX - centerX) / window.innerWidth;
  const deltaY = (mouseY - centerY) / window.innerHeight;
  
  gsap.to(element, {
    duration: 0.5,
    rotationY: deltaX * 15 * intensity,
    rotationX: -deltaY * 15 * intensity,
    ease: "power2.out",
  });
};

export const transitionToGrid = (
  element: HTMLElement,
  gridPosition: { x: number; y: number },
  index: number
) => {
  gsap.to(element, {
    duration: 1.2,
    x: gridPosition.x,
    y: gridPosition.y,
    z: 0,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    scale: 1,
    opacity: 1,
    ease: "power3.inOut",
    delay: index * 0.05,
  });
};

export const hoverCard = (element: HTMLElement, isEntering: boolean) => {
  gsap.to(element, {
    duration: 0.3,
    scale: isEntering ? 1.05 : 1,
    z: isEntering ? 50 : 0,
    ease: "power2.out",
  });
};

export const cardVariants: Variants = {
  initial: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
  tap: {
    scale: 0.95,
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.2,
    },
  },
};

export interface AnimationConfig {
  duration: number;
  delay: number;
  ease: string;
}

export const getRandomAnimation = (baseConfig: AnimationConfig): AnimationConfig => {
  return {
    duration: baseConfig.duration * (0.8 + Math.random() * 0.4),
    delay: baseConfig.delay * Math.random(),
    ease: baseConfig.ease,
  };
};

export interface CardPosition {
  x: number;
  y: number;
  z: number;
  rotateX: number;
  rotateY: number;
  rotateZ: number;
}

export const getRandomPosition = (bounds: {
  x: [number, number];
  y: [number, number];
  z: [number, number];
}): CardPosition => {
  return {
    x: bounds.x[0] + Math.random() * (bounds.x[1] - bounds.x[0]),
    y: bounds.y[0] + Math.random() * (bounds.y[1] - bounds.y[0]),
    z: bounds.z[0] + Math.random() * (bounds.z[1] - bounds.z[0]),
    rotateX: Math.random() * 360,
    rotateY: Math.random() * 360,
    rotateZ: Math.random() * 360,
  };
};
