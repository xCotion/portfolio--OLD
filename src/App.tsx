import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './components/ui/theme-provider';
import { AnimationProvider } from './context/AnimationContext';
import Header from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import Home from './pages/Home';
import './App.css';

// Lazy load other pages
const About = React.lazy(() => import('./pages/About'));
const Projects = React.lazy(() => import('./pages/Projects'));
const Services = React.lazy(() => import('./pages/Services'));
const Contact = React.lazy(() => import('./pages/Contact'));

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <Router>
        <AnimationProvider>
          <div className="app-container">
            <Header />
            <div className="content-wrapper">
              <div className="content-scroller">
                <main className="app-main">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Navigate to="/" replace />} />
                    <Route
                      path="/services"
                      element={
                        <React.Suspense fallback={<div>Loading...</div>}>
                          <Services />
                        </React.Suspense>
                      }
                    />
                    <Route
                      path="/projects"
                      element={
                        <React.Suspense fallback={<div>Loading...</div>}>
                          <Projects />
                        </React.Suspense>
                      }
                    />
                    <Route
                      path="/about"
                      element={
                        <React.Suspense fallback={<div>Loading...</div>}>
                          <About />
                        </React.Suspense>
                      }
                    />
                    <Route
                      path="/contact"
                      element={
                        <React.Suspense fallback={<div>Loading...</div>}>
                          <Contact />
                        </React.Suspense>
                      }
                    />
                  </Routes>
                </main>
                <Footer />
              </div>
            </div>
          </div>
        </AnimationProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;