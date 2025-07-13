import React, { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Download } from 'lucide-react';
// import { useTheme } from '../context/ThemeContext';
const lines = [
  'Building digital experiences with code and creativity',
  'Crafting performant applications with MERN stack',
  'Passionate about clean and maintainable code',
];

const Hero = () => {
  // const { theme } = useTheme();
  const [text, setText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);



  useEffect(() => {
    const currentLine = lines[lineIndex % lines.length];

    let timeout;

    if (!isDeleting && charIndex <= currentLine.length) {
      timeout = setTimeout(() => {
        setText(currentLine.substring(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, 60);
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setText(currentLine.substring(0, charIndex));
        setCharIndex((prev) => prev - 1);
      }, 30);
    } else {
      if (!isDeleting) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1500);
      } else {
        setIsDeleting(false);
        setLineIndex((prev) => (prev + 1) % lines.length);
        setCharIndex(0);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, lineIndex, lines]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 text-slate-900 dark:text-white transition-colors duration-300"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-slate-100 dark:from-slate-900 dark:to-blue-950 z-0">
        <div
          className="absolute inset-0 opacity-5 dark:opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 z-10">
        <h4 className="text-2xl md:text-3xl text-center text-white-300 font-light italic tracking-wide mb-6">
          Meera Sharma...
        </h4>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30">
            <p className="text-blue-600 dark:text-blue-400 font-medium">Full Stack Web Developer</p>
          </div>

          <h1

            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            {text}
            <span className="animate-pulse">|</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            MERN stack developer specialized in creating responsive, user-friendly applications.
            Problem solver with strong DSA knowledge and a passion for clean, efficient code.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 font-medium transition-colors duration-300 shadow-md hover:shadow-lg w-full sm:w-auto"
            >
              Contact Me
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6 mb-10">
            <a
              href="https://github.com/meerathaakur"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-md hover:shadow-lg transition-all duration-300 group"
              aria-label="GitHub"
            >
              <Github
                size={24}
                className="text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
              />
            </a>
            <a
              href="https://linkedin.com/in/meera-sharma-226b2725a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-md hover:shadow-lg transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <Linkedin
                size={24}
                className="text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
              />
            </a>

          </div>
          <div className="flex gap-2 justify-center items-center">
            {/* <!-- View Resume Button --> */}
            <a
              href="https://drive.google.com/uc?export=download&id=1XivVhHXCgQOxAwl6bo4DPORxji-IoAh_"
              target='_blank'
              download
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 dark:bg-slate-800 hover:bg-blue-700 dark:hover:bg-slate-700 text-white font-medium transition-colors duration-300 shadow-md hover:shadow-lg w-full sm:w-auto"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          className="flex flex-col items-center text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section >
  );
};

export default Hero;
