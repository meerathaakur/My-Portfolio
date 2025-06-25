import React from 'react';
import { Code, Database, Server, Laptop, BrainCircuit } from 'lucide-react';

const skills = [
  { icon: <Code size={20} aria-hidden="true" focusable="false" />, title: 'Frontend', description: 'Creating responsive, accessible, and beautiful user interfaces.' },
  { icon: <Server size={20} aria-hidden="true" focusable="false" />, title: 'Backend', description: 'Building robust APIs and server-side applications.' },
  { icon: <Database size={20} aria-hidden="true" focusable="false" />, title: 'Database', description: 'Designing efficient database schemas and queries.' },
  { icon: <BrainCircuit size={20} aria-hidden="true" focusable="false" />, title: 'DSA', description: 'Solving complex problems with efficient algorithms in optimise way.' },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              I'm a passionate full-stack developer specializing in the MERN stack, with a strong foundation in Data Structures and Algorithms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                I'm a full-stack developer with a passion for creating efficient, scalable, and maintainable web applications. My journey in tech began with a fascination for solving complex problems, which led me to develop a strong foundation in DSA and software engineering principles.
              </p>
              <p className="text-slate-700 dark:text-slate-300 mb-6">
                With expertise in the MERN stack (MongoDB, Express.js, React, Node.js), I've built various applications ranging from small business websites to complex web applications with authentication, payment processing, and real-time features.
              </p>

              <h3 className="text-2xl font-bold mb-4">Skills</h3>

              <div className="grid grid-cols-2 gap-4">
                {skills.map(({ icon, title, description }) => (
                  <div key={title} className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg shadow-sm">
                    <div className="flex items-center mb-2">
                      <span className="text-blue-600 dark:text-blue-400 mr-2">{icon}</span>
                      <h4 className="font-medium">{title}</h4>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{description}</p>
                  </div>
                ))}
              </div>

            </div>

            <div className="order-1 md:order-2 relative">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg"
                  alt="Developer working on code"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                  <div className="p-6">
                    <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white px-4 py-2 rounded-md shadow-lg inline-block">
                      <p className="font-medium">Currently I'm Learner</p>   {/* Add Experience */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 dark:bg-blue-900/30 rounded-lg -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-100 dark:bg-blue-950/50 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;