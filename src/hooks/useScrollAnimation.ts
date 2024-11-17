import { useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Custom easing
const customEase = "cubic-bezier(0.4, 0, 0.2, 1)";

// Use a safe version of useLayoutEffect that falls back to useEffect on server
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export const useScrollAnimation = () => {
  useIsomorphicLayoutEffect(() => {
    // Ensure DOM is ready
    if (typeof window === 'undefined') return;

    // Set initial visibility
    gsap.set('section', { opacity: 1 });
    
    // Handle hero section glass card fade
    const heroSection = document.querySelector('.section-hero');
    if (heroSection) {
      const glassCard = heroSection.querySelector('.glass-card');
      const background = heroSection.querySelector('.hero-background');
      
      if (glassCard && background) {
        gsap.to(glassCard, {
          opacity: 0,
          scale: 1.1,
          scrollTrigger: {
            trigger: heroSection,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          }
        });

        gsap.to(background, {
          y: '-30%',
          scrollTrigger: {
            trigger: heroSection,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          }
        });
      }
    }

    // Animate other sections
    const sections = document.querySelectorAll('section:not(.section-hero)');
    sections.forEach((section) => {
      const children = Array.from(section.children);
      
      // Ensure content is visible first
      gsap.set(children, { opacity: 1 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top bottom-=10%',
          end: 'center center',
          toggleActions: 'play none none none',
        }
      });

      children.forEach((child, i) => {
        const delay = i * 0.1;
        tl.from(child, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: customEase,
          delay: delay
        }, 0);
      });
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
};
