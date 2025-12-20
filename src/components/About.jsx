import React from 'react';
import { PERSONAL_INFO } from '../../constants';

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-10 md:space-y-12">
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-slate-100">
              About Me
            </h2>
            <div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-400 leading-relaxed font-light px-2 sm:px-4">
            {PERSONAL_INFO.summary}
          </p>

          <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 py-6 sm:py-8">
            <div className="space-y-1 sm:space-y-2 p-3 sm:p-4">
              <h3 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-slate-100">
                8+
              </h3>
              <p className="text-xs xs:text-sm sm:text-base text-slate-500 uppercase tracking-wider sm:tracking-widest font-medium sm:font-semibold">
                Months Experience
              </p>
            </div>
            <div className="space-y-1 sm:space-y-2 p-3 sm:p-4">
              <h3 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-slate-100">
                5+
              </h3>
              <p className="text-xs xs:text-sm sm:text-base text-slate-500 uppercase tracking-wider sm:tracking-widest font-medium sm:font-semibold">
                Projects Built
              </p>
            </div>
            <div className="space-y-1 sm:space-y-2 p-3 sm:p-4">
              <h3 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-slate-100">
                2
              </h3>
              <p className="text-xs xs:text-sm sm:text-base text-slate-500 uppercase tracking-wider sm:tracking-widest font-medium sm:font-semibold">
                Internships
              </p>
            </div>
            <div className="space-y-1 sm:space-y-2 p-3 sm:p-4">
              <h3 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-slate-100">
                MERN
              </h3>
              <p className="text-xs xs:text-sm sm:text-base text-slate-500 uppercase tracking-wider sm:tracking-widest font-medium sm:font-semibold">
                Expertise
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;