import React from 'react';
import { Heart, Github, Linkedin, Twitter } from 'lucide-react';

const socialLinks = {
  github: 'https://github.com/meerathaakur',
  linkedin: 'https://www.linkedin.com/in/meera-sharma-226b2725a/',
  twitter: 'https://x.com/meerasrmaa'
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                <span className="text-blue-400">My</span>Portfolio
              </h3>
              <p className="text-slate-300 mb-4">
                Full Stack Web Developer (MERN) specializing in creating responsive, user-friendly applications with clean, efficient code.
              </p>
              <div className="flex space-x-4">
                <a href={socialLinks.linkedin} target='_blank' className="text-slate-300 hover:text-blue-400 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href={socialLinks.github} target='_blank' className="text-slate-300 hover:text-blue-400 transition-colors">
                  <Github size={20} />
                </a>
                <a href={socialLinks.twitter} target='_blank' className="text-slate-300 hover:text-blue-400 transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 grid grid-cols-1 md:grid-cols-2">
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
                Dheeraj Nagar, Faridabad, Sector-31, Haryana, India
              </p>
              <p className="text-slate-300 mb-2">
                meerasrmaa@gmail.com
              </p>
              {/* <p className="text-slate-300 mb-4">
                +91 7033642156
              </p> */}
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
              © {currentYear} MyPortfolio. Made with <Heart size={16} className="mx-1 text-red-500" /> by Meera Sharma
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;