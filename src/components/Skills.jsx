import React from "react";
import { SKILLS } from "../../constants";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 xs:px-6 sm:px-8 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 sm:mb-12 md:mb-16 text-center">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4">
            Technical Prowess
          </h2>
          <p className="text-slate-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Tools and technologies I use to bring ideas to life.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {SKILLS.map((skillGroup, idx) => (
            <div
              key={idx}
              className="p-4 xs:p-5 sm:p-4 md:p-8 rounded-2xl sm:rounded-3xl glass border border-white/5 hover:border-blue-500/30 transition-all duration-300 group hover:shadow-lg hover:shadow-blue-500/5"
            >
              <div className="flex flex-col xs:flex-row xs:items-center xs:space-x-3 sm:space-x-4 mb-4 sm:mb-6 md:mb-8">
                <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl md:rounded-2xl bg-blue-600/10 text-blue-400 group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300 mb-3 xs:mb-0 shrink-0 self-start xs:self-center">
                  <skillGroup.icon
                    size={20}
                    className="sm:size-18"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl md:text-xl font-bold text-slate-100 mb-1">
                    {skillGroup.category}
                  </h3>
                  <p className="text-xs text-slate-500 hidden xs:block">
                    {skillGroup.items.length} skills
                  </p>
                </div>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 pb-6">
                {skillGroup.items.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="inline-flex items-center px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-slate-800/50 text-slate-300 text-xs sm:text-sm font-medium border border-slate-700/50 hover:bg-slate-700 hover:text-white transition-all duration-200 cursor-default"
                    title={skill}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Mobile Skill Count */}
              <div className="xs:hidden mt-3 pt-3 absolute bottom-0 left-0 right-0 py-3 ">
                <p className="text-xs text-slate-500 text-center">
                  {skillGroup.items.length} skills
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
