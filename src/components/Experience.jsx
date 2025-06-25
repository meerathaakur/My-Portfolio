import React, { useState } from 'react';
import { Calendar, Building2, GraduationCap, Award } from 'lucide-react';
import PropTypes from 'prop-types';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('work');

  const workExperience = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      organization: 'Tech Innovations Inc.',
      period: 'Jan 2023 - Present',
      description: [
        'Lead developer for a team of 5 engineers building a SaaS platform using the MERN stack',
        'Implemented authentication system with JWT and role-based access control',
        'Optimized database queries resulting in 40% improved performance',
        'Integrated payment processing with Stripe and implemented subscription management',
      ],
      icon: <Building2 size={20} className="text-blue-600 dark:text-blue-400" />,
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      organization: 'WebSolutions Co.',
      period: 'Mar 2021 - Dec 2022',
      description: [
        'Developed and maintained multiple client projects using React, Node.js, and MongoDB',
        'Created RESTful APIs with Express.js for mobile and web applications',
        'Implemented real-time features using Socket.io for a collaborative tool',
        'Worked closely with UI/UX designers to implement responsive designs',
      ],
      icon: <Building2 size={20} className="text-blue-600 dark:text-blue-400" />,
    },
    {
      id: 3,
      title: 'Frontend Developer',
      organization: 'Digital Agency',
      period: 'Jun 2020 - Feb 2021',
      description: [
        'Built responsive websites and web applications using React and Next.js',
        'Implemented UI components with styled-components and Material-UI',
        'Collaborated with backend developers to integrate API endpoints',
        'Optimized website performance and SEO',
      ],
      icon: <Building2 size={20} className="text-blue-600 dark:text-blue-400" />,
    },
  ];

  const education = [
    {
      id: 1,
      title: 'Master of Computer Science',
      organization: 'Tech University',
      period: '2018 - 2020',
      description: [
        'Specialized in Software Engineering and Algorithms',
        'Thesis: "Optimizing Graph Algorithms for Social Network Analysis"',
        'GPA: 3.9/4.0',
        'Teaching Assistant for Data Structures and Algorithms course',
      ],
      icon: <GraduationCap size={20} className="text-blue-600 dark:text-blue-400" />,
    },
    {
      id: 2,
      title: 'Bachelor of Computer Science',
      organization: 'State University',
      period: '2014 - 2018',
      description: [
        'Major in Computer Science with minor in Mathematics',
        'Capstone Project: "Real-time Collaborative Code Editor"',
        'Dean\'s List for 6 consecutive semesters',
        'Active member of the Coding Club and Hackathon Team',
      ],
      icon: <GraduationCap size={20} className="text-blue-600 dark:text-blue-400" />,
    },
  ];

  const achievements = [
    {
      id: 1,
      title: 'Hackathon Winner',
      organization: 'TechFest 2023',
      period: 'Nov 2023',
      description: [
        'First place winner for developing an AI-powered accessibility tool',
        'Implemented machine learning models for real-time analysis',
        'Built the entire solution in 48 hours with a team of 3',
      ],
      icon: <Award size={20} className="text-blue-600 dark:text-blue-400" />,
    },
    {
      id: 2,
      title: 'Top Contributor',
      organization: 'Open Source Project',
      period: '2022',
      description: [
        'Recognized as a top contributor to a popular open source React library',
        'Implemented key features and fixed critical bugs',
        'Improved test coverage from 70% to 95%',
      ],
      icon: <Award size={20} className="text-blue-600 dark:text-blue-400" />,
    },
    {
      id: 3,
      title: 'Competitive Programming',
      organization: 'CodeChef & LeetCode',
      period: '2019 - Present',
      description: [
        'Solved 500+ problems on LeetCode and CodeChef',
        'Reached 5-star rating on CodeChef',
        'Ranked in top 5% in multiple coding competitions',
      ],
      icon: <Award size={20} className="text-blue-600 dark:text-blue-400" />,
    },
  ];

  const timelineData = {
    work: workExperience,
    education: education,
    achievements: achievements,
  };

  const tabs = [
    { id: 'work', label: 'Work Experience', icon: <Building2 size={20} /> },
    { id: 'education', label: 'Education', icon: <GraduationCap size={20} /> },
    { id: 'achievements', label: 'Achievements', icon: <Award size={20} /> },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            My professional journey, educational background, and notable achievements.
          </p>
        </div>

        {/* Timeline tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              id={`${tab.id}-tab`}
              aria-selected={activeTab === tab.id}
              aria-controls={`${tab.id}-panel`}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-300 ${activeTab === tab.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-200 dark:bg-blue-900/50"></div>

          {/* Timeline items */}
          {timelineData[activeTab].map((item, index) => (
            <div
              key={item.id}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
            >
              {/* Content */}
              <div className="md:w-1/2 bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-1 text-slate-900 dark:text-white">{item.title}</h3>
                <div className="flex items-center mb-3 text-slate-700 dark:text-slate-300">
                  <span className="mr-2">{item.icon}</span>
                  <span>{item.organization}</span>
                </div>
                <div className="flex items-center mb-4 text-sm text-slate-600 dark:text-slate-400">
                  <Calendar size={16} className="mr-2" />
                  <span>{item.period}</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300">
                  {item.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 border-4 border-white dark:border-slate-900 flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;