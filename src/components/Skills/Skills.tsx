import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!contentRef.current || !titleRef.current) return;

    const ctx = gsap.context(() => {
      // Animate title
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top center+=100",
          end: "bottom center",
          toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      });

      // Animate content
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top center+=50",
          end: "bottom center",
          toggleActions: "play none none reverse"
        },
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power2.out"
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title Section */}
      <div 
        ref={titleRef}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Skills & Expertise
        </h2>
        <p className="text-lg text-white/70 max-w-2xl mx-auto">
          A curated collection of technologies and tools I've mastered throughout my journey
        </p>
      </div>

      {/* Content Section */}
      <div 
        ref={contentRef}
        className="text-center max-w-3xl mx-auto"
      >
        <p className="text-white/80 leading-relaxed">
          Each skill card represents a core competency, backed by years of hands-on experience 
          and continuous learning. From mobile development to cloud architecture, these 
          technologies form the foundation of my professional toolkit.
        </p>
      </div>
    </div>
  );
};

export default Skills;