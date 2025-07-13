import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import WeddingInfo from './components/WeddingInfo';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
import Registry from './components/Registry';
import Guestbook from './components/Guestbook';
import Footer from './components/Footer';
import FloatingElements from './components/FloatingElements';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'dark bg-twilight' : 'bg-ivory'}`}>
        <FloatingElements />
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <Routes>
          <Route path="/" element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Hero />
              <OurStory />
              <WeddingInfo />
              <Gallery />
              <RSVP />
              <Registry />
              <Guestbook />
            </motion.div>
          } />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;