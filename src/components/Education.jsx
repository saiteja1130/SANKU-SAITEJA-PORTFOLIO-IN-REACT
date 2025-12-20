import React from 'react';
import { EDUCATION } from '../../constants';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 xs:px-6 sm:px-8 md:px-12 bg-slate-900/30">
      <div className="max-w-7xl mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 md:mb-16 text-center">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Academic Background
          </h2>
          <div className="w-12 xs:w-14 sm:w-16 h-0.5 xs:h-1 bg-blue-600 mx-auto rounded-full mb-4 sm:mb-6"></div>
        </div>

        {/* Education Cards */}
        <div className="grid gap-4 sm:gap-6">
          {EDUCATION.map((edu, idx) => (
            <div 
              key={idx} 
              className="p-5 xs:p-6 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl glass border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 hover:translate-x-1 sm:hover:translate-x-2 transition-transform duration-300"
            >
              {/* Left Section - Degree Info */}
              <div className="flex items-center space-x-4 xs:space-x-5 sm:space-x-6">
                {/* Icon - Hidden on mobile, visible on md and above */}
                <div className="hidden md:flex items-center justify-center w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-xl sm:rounded-2xl bg-slate-800 text-blue-500 shadow-inner shrink-0">
                  <GraduationCap size={24} className="sm:size-28 md:size-32" />
                </div>
                
                {/* Mobile Icon */}
                <div className="md:hidden flex items-center justify-center w-10 xs:w-12 h-10 xs:h-12 rounded-lg xs:rounded-xl bg-slate-800 text-blue-500 shadow-inner shrink-0">
                  <GraduationCap size={18} className="xs:size-20" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-slate-100 leading-tight">
                    {edu.degree}
                  </h3>
                  <p className="text-sm xs:text-base text-slate-500 mt-1">
                    {edu.institution}
                  </p>
                </div>
              </div>
              
              {/* Right Section - Period and Grade */}
              <div className="flex flex-row md:flex-col items-center justify-between md:items-end md:justify-center gap-2 sm:gap-3 pt-3 md:pt-0 border-t md:border-t-0 border-white/10 md:border-none">
                <span className="text-xs xs:text-sm font-mono text-blue-400 px-2 xs:px-3 py-1 xs:py-1.5 rounded-md xs:rounded-lg bg-blue-900/20">
                  {edu.period}
                </span>
                <span className="text-xl xs:text-2xl font-bold text-slate-200">
                  {edu.grade}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;