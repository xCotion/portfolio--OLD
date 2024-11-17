import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence, LazyMotion, domAnimation, m } from 'framer-motion';
import { Loading } from './components/Loading/Loading';
import Header from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import './App.css';

// Error Boundary Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <h2>Something went wrong.</h2>
          <button onClick={() => window.location.reload()}>
            Refresh Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

// Lazy load components with retry mechanism
function loadComponent(factory: () => Promise<any>, retries = 3): Promise<any> {
  return new Promise((resolve, reject) => {
    factory()
      .then(resolve)
      .catch((error) => {
        if (retries === 0) {
          reject(error);
          return;
        }
        setTimeout(() => {
          loadComponent(factory, retries - 1).then(resolve, reject);
        }, 1000);
      });
  });
}

// Lazy load route components with retry
const Hero = React.lazy(() => loadComponent(() => import('./components/Hero/Hero')));
const Skills = React.lazy(() => loadComponent(() => import('./components/Skills/Skills')));
const Brands = React.lazy(() => loadComponent(() => import('./components/Brands/Brands')));
const Services = React.lazy(() => loadComponent(() => import('./pages/Services')));
const Projects = React.lazy(() => loadComponent(() => import('./pages/Projects')));
const About = React.lazy(() => loadComponent(() => import('./pages/About')));
const Contact = React.lazy(() => loadComponent(() => import('./pages/Contact')));
const Achievements = React.lazy(() => loadComponent(() => import('./components/Achievements/Achievements')));

// Loading component with timeout and minimum display time
function LoadingWithTimeout() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const minLoadingTime = 1000; // Minimum time to show loading screen
    const timer = setTimeout(() => setShowLoading(false), minLoadingTime);
    return () => clearTimeout(timer);
  }, []);

  if (!showLoading) return null;
  return <Loading minimumDisplayTime={800} />;
}

// Optimized page transition variants
const pageVariants = {
  initial: { 
    opacity: 0,
    y: 20 
  },
  enter: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut'
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  }
};

function Home() {
  return (
    <PageWrapper>
      <div className="home-container">
        <section id="hero">
          <ErrorBoundary>
            <Suspense fallback={<LoadingWithTimeout />}>
              <Hero />
            </Suspense>
          </ErrorBoundary>
        </section>

        <section id="skills">
          <ErrorBoundary>
            <Suspense fallback={<LoadingWithTimeout />}>
              <Skills />
            </Suspense>
          </ErrorBoundary>
        </section>

        <section id="brands">
          <ErrorBoundary>
            <Suspense fallback={<LoadingWithTimeout />}>
              <Brands />
            </Suspense>
          </ErrorBoundary>
        </section>

        <section id="achievements">
          <ErrorBoundary>
            <Suspense fallback={<LoadingWithTimeout />}>
              <Achievements />
            </Suspense>
          </ErrorBoundary>
        </section>
      </div>
    </PageWrapper>
  );
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <LoadingWithTimeout />;

  return (
    <m.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}
      className="page-wrapper"
    >
      {children}
    </m.div>
  );
}

function AppContent() {
  const location = useLocation();
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    if (isInitialLoad) {
      const timer = setTimeout(() => setIsInitialLoad(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [isInitialLoad]);

  if (isInitialLoad) {
    return <Loading minimumDisplayTime={1500} />;
  }

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route 
            path="/" 
            element={
              <ErrorBoundary>
                <Suspense fallback={<LoadingWithTimeout />}>
                  <Home />
                </Suspense>
              </ErrorBoundary>
            } 
          />
          <Route path="/home" element={<Navigate to="/" replace />} />
          
          <Route 
            path="/services" 
            element={
              <PageWrapper>
                <ErrorBoundary>
                  <Suspense fallback={<LoadingWithTimeout />}>
                    <Services />
                  </Suspense>
                </ErrorBoundary>
              </PageWrapper>
            } 
          />
          
          <Route 
            path="/projects" 
            element={
              <PageWrapper>
                <ErrorBoundary>
                  <Suspense fallback={<LoadingWithTimeout />}>
                    <Projects />
                  </Suspense>
                </ErrorBoundary>
              </PageWrapper>
            } 
          />
          
          <Route 
            path="/about" 
            element={
              <PageWrapper>
                <ErrorBoundary>
                  <Suspense fallback={<LoadingWithTimeout />}>
                    <About />
                  </Suspense>
                </ErrorBoundary>
              </PageWrapper>
            } 
          />
          
          <Route 
            path="/contact" 
            element={
              <PageWrapper>
                <ErrorBoundary>
                  <Suspense fallback={<LoadingWithTimeout />}>
                    <Contact />
                  </Suspense>
                </ErrorBoundary>
              </PageWrapper>
            } 
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <BrowserRouter>
        <div className="app">
          <AppContent />
        </div>
      </BrowserRouter>
    </LazyMotion>
  );
}

export default App;