import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const SkillBar = ({ name, level }) => {
  const [width, setWidth] = useState(0);
  const barRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setWidth(level);
          }, 100);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (barRef.current) {
      observer.observe(barRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, [level]);

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{name}</span>
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{level}%</span>
      </div>
      <div 
        ref={barRef}
        className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden"
      >
        <div 
          className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

SkillBar.propTypes = {
  name: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
};

export default SkillBar;