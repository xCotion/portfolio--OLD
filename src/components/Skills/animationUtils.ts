// Animation utility functions for server-side computation

interface Position {
  x: number;
  y: number;
  z: number;
  rotateX: number;
  rotateY: number;
}

export const generateInitialPositions = (totalCards: number): Position[] => {
  return Array.from({ length: totalCards }, (_, index) => {
    const radius = 500; // Default radius for server-side
    const angle = (index / totalCards) * Math.PI * 2;
    
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
      z: -1500 - (index * 100),
      rotateX: Math.sin(angle) * 30,
      rotateY: Math.cos(angle) * 30,
    };
  });
};

export const generateTransitionConfig = (index: number) => {
  // Generate deterministic but varied transition timings
  const baseDelay = (index * 0.1) % 0.5;
  const baseDuration = 10 + ((index * 1.5) % 2);
  
  return {
    duration: baseDuration,
    delay: baseDelay,
    ease: "easeInOut" as const,
  };
};

export const interpolatePosition = (
  start: Position,
  end: Position,
  progress: number
): Position => {
  return {
    x: start.x + (end.x - start.x) * progress,
    y: start.y + (end.y - start.y) * progress,
    z: start.z + (end.z - start.z) * progress,
    rotateX: start.rotateX + (end.rotateX - start.rotateX) * progress,
    rotateY: start.rotateY + (end.rotateY - start.rotateY) * progress,
  };
};
