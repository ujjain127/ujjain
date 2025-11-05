import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import ResearchProjects from './components/ResearchProjects'
import Contact from './components/Contact'
import ResearchProjectDetail from './pages/ResearchProjectDetail'
import './styles/App.css'

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <div className="gradient-transition"></div>
      <ResearchProjects />
       <Contact />
      <div className="gradient-transition-bottom"></div>
     
    </>
  )
}

function App() {
  return (
    <Router basename="/">
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/research-project/:id" element={<ResearchProjectDetail />} />
        </Routes>

      {/* SVG Filters */}
        <svg className="svg-filters" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <filter id="wavy-filter">
            <feTurbulence
              baseFrequency="0.01 0.02"
              numOctaves="1"
              result="waves"
              seed="0"
            >
              <animate
                attributeName="baseFrequency"
                values="0.01 0.02; 0.01 0.01; 0.01 0.02"
                dur="1.5s"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="waves"
              scale="10"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </svg>
      </div>
    </Router>
  )
}

export default App
