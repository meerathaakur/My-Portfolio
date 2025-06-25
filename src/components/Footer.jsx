import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                <span className="text-blue-400">Dev</span>Portfolio
              </h3>
              <p className="text-slate-300 mb-4">
                Full Stack MERN Developer specializing in creating responsive, user-friendly applications with clean, efficient code.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-slate-300 hover:text-blue-400 transition-colors">Home</a>
                </li>
                <li>
                  <a href="#about" className="text-slate-300 hover:text-blue-400 transition-colors">About</a>
                </li>
                <li>
                  <a href="#skills" className="text-slate-300 hover:text-blue-400 transition-colors">Skills</a>
                </li>
                <li>
                  <a href="#projects" className="text-slate-300 hover:text-blue-400 transition-colors">Projects</a>
                </li>
                <li>
                  <a href="#experience" className="text-slate-300 hover:text-blue-400 transition-colors">Experience</a>
                </li>
                <li>
                  <a href="#contact" className="text-slate-300 hover:text-blue-400 transition-colors">Contact</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Get In Touch</h3>
              <p className="text-slate-300 mb-2">
                San Francisco, CA, United States
              </p>
              <p className="text-slate-300 mb-2">
                contact@example.com
              </p>
              <p className="text-slate-300 mb-4">
                +1 (234) 567-890
              </p>
              <a 
                href="#contact" 
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-300 inline-block"
              >
                Hire Me
              </a>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 text-center text-slate-400">
            <p className="flex items-center justify-center">
              © {currentYear} DevPortfolio. Made with <Heart size={16} className="mx-1 text-red-500" /> by John Doe
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;