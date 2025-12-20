import React from 'react';
import { EXPERIENCE } from '../../constants';
import { Calendar, MapPin, Briefcase, Award } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 xs:px-6 sm:px-8 md:px-12 bg-slate-900/30">
      <div className="max-w-7xl mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 md:mb-16 text-center">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4">
            Professional Experience
          </h2>
          <p className="text-slate-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            My journey as a full-time developer and freelancer.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative space-y-8 sm:space-y-10 md:space-y-12 before:absolute before:inset-0 before:ml-3 xs:before:ml-4 sm:before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 sm:before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
          {EXPERIENCE.map((exp, idx) => (
            <div key={idx} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}>
              
              {/* Dot Icon */}
              <div className="flex items-center justify-center w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 rounded-full border border-slate-700 glass shadow-xl sm:shadow-2xl z-10 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-all group-hover:border-blue-500/50 group-hover:scale-110 shrink-0">
                {idx === 0 ? 
                  <Award size={14} className="xs:size-16 sm:size-16 text-blue-400" /> : 
                  <Briefcase size={14} className="xs:size-16 sm:size-16 text-blue-400" />
                }
              </div>

              {/* Experience Card */}
              <div className="w-[calc(100%-3rem)] xs:w-[calc(100%-3.5rem)] sm:w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 xs:p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl glass border border-white/5 hover:border-blue-500/20 hover:shadow-lg sm:hover:shadow-2xl hover:shadow-blue-500/5 transition-all">
                
                {/* Card Header */}
                <div className="flex flex-col mb-3 sm:mb-4">
                  <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-1 xs:gap-2 mb-1">
                    <h3 className="text-lg xs:text-xl sm:text-2xl md:text-xl font-bold text-slate-100 leading-tight">
                      {exp.title}
                    </h3>
                    <span className="inline-flex sm:hidden items-center px-2 xs:px-3 py-1 xs:py-1 rounded-full bg-blue-600/10 text-blue-400 text-[9px] xs:text-[10px] font-bold whitespace-nowrap tracking-wider uppercase">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-blue-500 font-semibold text-sm sm:text-base md:text-lg">
                    {exp.company}
                  </p>
                </div>
                
                {/* Meta Info */}
                <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-1 xs:gap-4 text-slate-500 text-xs mb-4 sm:mb-6">
                  <span className="flex items-center">
                    <MapPin size={10} className="xs:size-12 sm:size-12 mr-1" /> 
                    {exp.location}
                  </span>
                  <span className="hidden sm:inline-flex items-center">
                    <Calendar size={10} className="xs:size-12 sm:size-12 mr-1" /> 
                    {exp.period}
                  </span>
                  <span className="inline-flex sm:hidden items-center">
                    <Calendar size={10} className="xs:size-12 sm:size-12 mr-1" /> 
                    {exp.period}
                  </span>
                </div>

                {/* Description Bullets */}
                <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                  {exp.description.map((bullet, i) => (
                    <li key={i} className="flex text-slate-400 text-xs xs:text-sm leading-relaxed">
                      <span className="text-blue-600 mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;