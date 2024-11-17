import React, { createContext, useContext, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Observer } from 'gsap/Observer';

gsap.registerPlugin(ScrollTrigger, Observer);

interface AnimationContextType {
  registerScrollTrigger: (params: ScrollTriggerParams) => gsap.core.ScrollTrigger;
  mainTimeline: React.MutableRefObject<gsap.core.Timeline | null>;
}

interface ScrollTriggerParams {
  trigger: Element;
  start?: string;
  end?: string;
  onUpdate?: (self: ScrollTrigger) => void;
  onEnter?: (self: ScrollTrigger) => void;
  onLeave?: (self: ScrollTrigger) => void;
  onEnterBack?: (self: ScrollTrigger) => void;
  onLeaveBack?: (self: ScrollTrigger) => void;
  scrub?: boolean | number;
  pin?: boolean;
  anticipatePin?: number;
  markers?: boolean;
}

const AnimationContext = createContext<AnimationContextType | null>(null);

export const useAnimation = () => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error('useAnimation must be used within AnimationProvider');
  }
  return context;
};

interface Props {
  children: React.ReactNode;
}

export const AnimationProvider: React.FC<Props> = ({ children }) => {
  const mainTimeline = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    // Initialize main timeline
    mainTimeline.current = gsap.timeline();

    // Set up default ScrollTrigger config
    ScrollTrigger.config({
      limitCallbacks: true,
      ignoreMobileResize: true
    });

    // Clean up function
    return () => {
      mainTimeline.current?.kill();
      ScrollTrigger.getAll().forEach(st => st.kill());
      ScrollTrigger.clearMatchMedia();
    };
  }, []);

  const registerScrollTrigger = (params: ScrollTriggerParams) => {
    return ScrollTrigger.create({
      ...params,
      toggleActions: "play none none reverse",
      fastScrollEnd: true,
      preventOverlaps: true
    });
  };

  return (
    <AnimationContext.Provider value={{ registerScrollTrigger, mainTimeline }}>
      {children}
    </AnimationContext.Provider>
  );
};
