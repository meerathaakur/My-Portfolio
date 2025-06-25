import React, { useState } from 'react';
import { DatabaseIcon, Globe, Code2, Server, Laptop, Braces, SlidersHorizontal, LayoutGrid } from 'lucide-react';
import SkillBar from './SkillBar';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  
  const categories = [
    { id: 'frontend', label: 'Frontend', icon: <Globe size={20} /> },
    { id: 'backend', label: 'Backend', icon: <Server size={20} /> },
    { id: 'database', label: 'Database', icon: <DatabaseIcon size={20} /> },
    { id: 'dsa', label: 'DSA', icon: <Code2 size={20} /> },
    { id: 'tools', label: 'Tools', icon: <SlidersHorizontal size={20} /> },
  ];
  
  const skills = {
    frontend: [
      { name: 'React', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'Redux', level: 85 },
      { name: 'Next.js', level: 75 },
      { name: 'Tailwind CSS', level: 90 },
    ],
    backend: [
      { name: 'Node.js', level: 88 },
      { name: 'Express.js', level: 90 },
      { name: 'RESTful APIs', level: 85 },
      { name: 'GraphQL', level: 70 },
      { name: 'Authentication', level: 85 },
      { name: 'Websockets', level: 75 },
    ],
    database: [
      { name: 'MongoDB', level: 90 },
      { name: 'Mongoose', level: 85 },
      { name: 'SQL', level: 75 },
      { name: 'Redis', level: 65 },
      { name: 'Database Design', level: 80 },
    ],
    dsa: [
      { name: 'Arrays & Strings', level: 90 },
      { name: 'Linked Lists', level: 85 },
      { name: 'Trees & Graphs', level: 80 },
      { name: 'Dynamic Programming', level: 75 },
      { name: 'Algorithms', level: 85 },
      { name: 'Problem Solving', level: 90 },
    ],
    tools: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'AWS', level: 70 },
      { name: 'CI/CD', level: 80 },
      { name: 'Jest/Testing', level: 85 },
      { name: 'VS Code', level: 95 },
    ],
  };

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            I've developed a diverse skill set across the full stack, with particular expertise in MERN technologies and problem-solving.
          </p>
        </div>
        
        {/* Skill categories tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-300 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills[activeCategory].map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>
        </div>
        
        {/* Skill visualization */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Technologies I Work With</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center">
            {[
              { name: 'MongoDB', icon: <DatabaseIcon className="text-green-500" /> },
              { name: 'Express', icon: <Server className="text-gray-500" /> },
              { name: 'React', icon: <Laptop className="text-blue-500" /> },
              { name: 'Node.js', icon: <Braces className="text-green-600" /> },
              { name: 'JavaScript', icon: <Code2 className="text-yellow-500" /> },
              { name: 'TypeScript', icon: <Code2 className="text-blue-600" /> },
              { name: 'Redux', icon: <LayoutGrid className="text-purple-500" /> },
              { name: 'Git', icon: <Braces className="text-orange-600" /> },
              { name: 'Tailwind', icon: <Laptop className="text-sky-500" /> },
              { name: 'REST APIs', icon: <Globe className="text-indigo-500" /> },
            ].map((tech) => (
              <div 
                key={tech.name}
                className="flex flex-col items-center p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full"
              >
                <div className="p-3 rounded-full bg-slate-100 dark:bg-slate-700 mb-3">
                  {tech.icon}
                </div>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;