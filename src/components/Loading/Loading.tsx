import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './Loading.css';

interface LoadingProps {
  onComplete: () => void;
}

export const Loading: React.FC<LoadingProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let progressInterval: NodeJS.Timeout;
    
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.5,
          onComplete
        });
      }
    });

    // Animate the welcome text
    tl.from(textRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out"
    });

    // Simulate loading progress
    progressInterval = setInterval(() => {
      setProgress(prev => {
        const next = prev + Math.random() * 15;
        return next > 100 ? 100 : next;
      });
    }, 200);

    // Clean up
    return () => {
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  // Trigger completion when progress reaches 100
  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => {
        gsap.to(textRef.current, {
          opacity: 0,
          y: -30,
          duration: 0.8,
          ease: "power3.in"
        });
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [progress]);

  return (
    <div ref={containerRef} className="loading-screen">
      <div ref={textRef} className="loading-content">
        <h1>Welcome</h1>
        <div className="loading-progress">
          <div className="loading-bar">
            <div 
              className="loading-bar-fill" 
              style={{ transform: `scaleX(${progress / 100})` }}
            />
          </div>
          <div className="loading-percentage">{Math.round(progress)}%</div>
        </div>
      </div>
    </div>
  );
};
