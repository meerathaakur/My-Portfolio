import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Github, Linkedin, Twitter } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import PropTypes from 'prop-types';

const socialLinks = {
  github: 'https://github.com/meerathaakur',
  linkedin: 'https://www.linkedin.com/in/meera-sharma-226b2725a/',
  twitter: 'https://x.com/meerasrmaa'
};

const navItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

const Navbar = ({ scrollY }) => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target;
      if (isMenuOpen && !target.closest('#mobile-menu') && !target.closest('#menu-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-bold">
          <span className="text-blue-600 dark:text-blue-400">Dev</span>Portfolio
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center space-x-4">
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Github size={20} />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Twitter size={20} />
            </a>
            <button 
              onClick={toggleTheme} 
              className="p-1 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <button 
            onClick={toggleTheme} 
            className="p-1 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            id="menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="p-2 rounded-md bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div 
            id="mobile-menu" 
            className="absolute top-full left-0 right-0 bg-white dark:bg-slate-900 shadow-lg py-4 md:hidden"
          >
            <nav className="container mx-auto px-4">
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      className="block py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      onClick={handleNavLinkClick}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-4 mt-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Github size={20} />
                </a>
                <a href={socialLinks.linkedin}target="_blank" rel="noopener noreferrer" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

Navbar.propTypes = {
  scrollY: PropTypes.number.isRequired,
};

export default Navbar;