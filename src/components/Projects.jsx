import React, { useState } from 'react';
import { Github, Code } from 'lucide-react';
import fitnessBuddy from '/fitness-buddy-home.png'
// import trafficMgmt from '/traffic-dashboard.png'
import destinationPlatform from '/destination-platform-home.png'
// import deliveryAPI from '/delivery-api.png'
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Social Platform for Fitness freaks',
      description: 'A social platform connecting fitness enthusiasts with trainers and nutritionists.',
      image: fitnessBuddy,
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Tailwind CSS'],
      category: 'fullstack',
      liveLink: 'https://fitness-buddy-five.vercel.app',
      githubLink: 'https://github.com/meerathaakur/fitness-buddy',
    },
    // {
    //   id: 2,
    //   title: 'Traffic Management Dashboard',
    //   description: 'A real-time traffic management dashboard for monitoring and analyzing traffic patterns.',
    //   image: trafficMgmt,
    //   tags: ['React', 'firebase API', 'Tailwind CSS', 'Chart.js', 'Redux'],
    //   category: 'frontend',
    //   liveLink: 'https://traffic-mgmt.vercel.app/dashboard',
    //   githubLink: 'https://github.com/meerathaakur/traffic-mgmt',
    // },
    {
      id: 3,
      title: 'Destination Platform',
      description: 'A responsive platform for users to discover and book travel experiences.',
      image: destinationPlatform,
      tags: ['React', 'Tailwind CSS', 'MongoDB', 'Node.js', 'Express'],
      category: 'fullstack',
      liveLink: 'https://destination-platform.vercel.app',
      githubLink: 'https://github.com/meerathaakur/destination-platform',
    },
    // {
    //   id: 4,
    //   title: 'Basic Delivery API',
    //   description: 'A basic Delivery API for managing delivery requests and learning basic API structure with fs module. Using middleware for error handling logging validation.',
    //   image: deliveryAPI,
    //   tags: ['Node.js', 'Express', 'fs module', 'Middleware'],
    //   category: 'backend',
    //   githubLink: 'https://github.com/meerathaakur/delivery-api',
    // },
    // {
    //   id: 5,
    //   title: 'Algorithm Visualizer',
    //   description: 'An interactive tool for visualizing various sorting and pathfinding algorithms.',
    //   image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    //   tags: ['React', 'JavaScript', 'Data Structures', 'Algorithms'],
    //   category: 'frontend',
    //   liveLink: 'https://example.com',
    //   githubLink: 'https://github.com',
    // },
    // {
    //   id: 6,
    //   title: 'Social Media Dashboard',
    //   description: 'A comprehensive dashboard for analyzing social media metrics and engagement.',
    //   image: 'https://images.pexels.com/photos/7654118/pexels-photo-7654118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    //   tags: ['React', 'D3.js', 'Node.js', 'Express', 'MongoDB'],
    //   category: 'fullstack',
    //   liveLink: 'https://example.com',
    //   githubLink: 'https://github.com',
    // },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const filterButtons = [
    { value: 'all', label: 'All Projects' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'fullstack', label: 'Full Stack' },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Here are some of the projects I've worked on that showcase my skills and experience.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filterButtons.map((button) => (
            <button
              key={button.value}
              onClick={() => setActiveFilter(button.value)}
              className={`px-4 py-2 rounded-lg transition-colors duration-300 ${activeFilter === button.value
                ? 'bg-blue-600 text-white'
                : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                }`}
            >
              {button.label}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* GitHub link */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/meerathaakur?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-slate-900 dark:bg-slate-700 text-white hover:bg-slate-800 dark:hover:bg-slate-600 transition-colors duration-300"
          >
            <Github size={20} className="mr-2" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;