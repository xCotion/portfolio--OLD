import React, { useRef, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero/Hero';
import Skills from '../components/Skills/Skills';
import Brands from '../components/Brands/Brands';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FloatingCardField from '../components/Skills/FloatingCardField';

gsap.registerPlugin(ScrollTrigger);

// Define skills data
const skillsData = [
  {
    title: "iOS Development",
    subtitle: "Swift • SwiftUI • UIKit",
    icon: "📱",
    color: "from-blue-500/30 to-cyan-500/30"
  },
  {
    title: "Creative Media",
    subtitle: "Motion • Design • 3D",
    icon: "🎨",
    color: "from-purple-500/30 to-pink-500/30"
  },
  {
    title: "AI Integration",
    subtitle: "ML • Neural Networks • Vision",
    icon: "🤖",
    color: "from-emerald-500/30 to-green-500/30"
  },
  {
    title: "Cloud Architecture",
    subtitle: "AWS • Azure • GCP",
    icon: "☁️",
    color: "from-orange-500/30 to-amber-500/30"
  },
  {
    title: "UI/UX Design",
    subtitle: "Figma • Prototyping • Design Systems",
    icon: "✨",
    color: "from-rose-500/30 to-red-500/30"
  },
  {
    title: "Backend Systems",
    subtitle: "Node.js • Python • Databases",
    icon: "⚡",
    color: "from-violet-500/30 to-indigo-500/30"
  }
];

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current || !heroRef.current || !skillsRef.current) return;

    const ctx = gsap.context(() => {
      // Create scroll trigger for coordinating hero and skills sections
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        onUpdate: (self) => {
          // Dispatch custom event for card state management
          const event = new CustomEvent('heroScroll', { 
            detail: { progress: self.progress } 
          });
          window.dispatchEvent(event);
        }
      });

      // Animate brands section
      gsap.to(".brands-section", {
        scrollTrigger: {
          trigger: ".brands-section",
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{ 
        perspective: '2000px',
        transformStyle: 'preserve-3d',
        backgroundColor: 'var(--bg-primary)',
        minHeight: '300vh'
      }}
    >
      {/* Background gradient */}
      <div 
        className="fixed inset-0 bg-gradient-to-b from-bg-primary via-bg-primary to-bg-secondary"
        style={{ 
          transform: 'translateZ(-2000px)',
          zIndex: 0 
        }}
      />

      {/* Floating cards container - positioned behind hero */}
      <div 
        className="fixed inset-0"
        style={{ 
          transformStyle: 'preserve-3d',
          transform: 'translateZ(-500px)',
          zIndex: 1,
          top: 0,
          pointerEvents: 'none'
        }}
      >
        <FloatingCardField cards={skillsData} />
      </div>

      {/* Hero section */}
      <motion.section 
        ref={heroRef}
        className="relative min-h-screen w-full flex items-center justify-center"
        style={{ 
          transformStyle: 'preserve-3d',
          transform: 'translateZ(0)',
          zIndex: 2
        }}
      >
        <Hero />
      </motion.section>

      {/* Skills section */}
      <section 
        ref={skillsRef}
        className="relative w-full"
        style={{ 
          transformStyle: 'preserve-3d',
          transform: 'translateZ(0)',
          zIndex: 2,
          minHeight: '100vh',
          paddingTop: '10vh'
        }}
      >
        <Skills />
      </section>

      {/* Brands section */}
      <section 
        className="brands-section relative w-full py-20"
        style={{ 
          transformStyle: 'preserve-3d',
          transform: 'translateZ(0)',
          opacity: 0,
          zIndex: 2
        }}
      >
        <Brands />
      </section>
    </div>
  );
};

export default Home;
