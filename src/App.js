import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import SkillsProgress from './components/SkillsProgress/SkillsProgress';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Experience from './components/Experience/Experience';
import './App.css';

function App() {
  useEffect(() => {
    document.title = "Ujjain S";
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <ScrollToTop />
    </div>
  );
}

export default App; 