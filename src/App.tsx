import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import Home from './pages/Home';
import './App.css';

// Lazy load other pages
const Services = React.lazy(() => import('./pages/Services'));
const Projects = React.lazy(() => import('./pages/Projects'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
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
    </BrowserRouter>
  );
}

export default App;