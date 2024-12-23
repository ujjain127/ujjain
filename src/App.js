import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Experience from './components/Experience/Experience';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import './App.css';

function App() {
  useEffect(() => {
    document.title = "Ujjain S";
  }, []);

  return (
    <div className="App">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Experience />
      <Gallery />
      <Contact />
      <Footer />
      <ThemeSwitcher />
      <ScrollToTop />
    </div>
  );
}

export default App; 