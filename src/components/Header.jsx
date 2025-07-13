import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiSun, FiMoon, FiMenu, FiX } = FiIcons;

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Our Story', href: '#story' },
    { label: 'Wedding Info', href: '#wedding' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'RSVP', href: '#rsvp' },
    { label: 'Registry', href: '#registry' },
    { label: 'Guestbook', href: '#guestbook' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        darkMode ? 'bg-twilight/90 backdrop-blur-md' : 'bg-ivory/90 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <span className="text-2xl">🌿</span>
            <h1 className={`text-2xl font-script ${darkMode ? 'text-dew' : 'text-moss'}`}>
              Garden of Us
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.label}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className={`font-serif transition-colors duration-300 ${
                  darkMode ? 'text-dew hover:text-sage' : 'text-moss hover:text-eucalyptus'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors duration-300 ${
                darkMode ? 'bg-sage/20 text-golden' : 'bg-moss/20 text-moss'
              }`}
            >
              <SafeIcon icon={darkMode ? FiSun : FiMoon} className="w-5 h-5" />
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-full transition-colors duration-300 ${
                darkMode ? 'bg-sage/20 text-dew' : 'bg-moss/20 text-moss'
              }`}
            >
              <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`md:hidden mt-4 py-4 rounded-lg ${
              darkMode ? 'bg-twilight/95' : 'bg-ivory/95'
            }`}
          >
            {navItems.map((item) => (
              <motion.button
                key={item.label}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left px-4 py-3 font-serif transition-colors duration-300 ${
                  darkMode ? 'text-dew hover:text-sage' : 'text-moss hover:text-eucalyptus'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;