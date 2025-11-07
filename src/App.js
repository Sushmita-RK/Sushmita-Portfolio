// src/App.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 

import AppNavbar from './components/AppNavbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer'; // 1. Import the Footer

function App() {
  return (
    <div className="App">
      <AppNavbar />

      <section id="home" className="full-page-section hero-section">
        <Hero />
      </section>

      <section id="about" className="full-page-section">
        <About />
      </section>

      <section id="skills" className="full-page-section">
        <Skills />
      </section>

      <section id="experience" className="full-page-section">
        <Experience />
      </section>

      <section id="projects" className="full-page-section">
        <Projects />
      </section>

      <section id="education" className="full-page-section">
        <Education />
      </section>

      <section id="contact" className="full-page-section">
        <Contact />
      </section>
      
      <Footer /> {/* 2. Add the Footer here */}
    </div>
  );
}

export default App;