import React from 'react';
import { PROJECTS } from '../../constants';
import { ExternalLink, Users, Smartphone, Globe, Briefcase, MessageSquare } from 'lucide-react';

const ProjectCard = ({ project, typeIcon: TypeIcon }) => (
  <div className="group relative flex flex-col h-full rounded-xl sm:rounded-2xl md:rounded-3xl glass border border-white/5 overflow-hidden transition-all duration-500 hover:border-blue-500/40 hover:shadow-lg sm:hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-0.5 md:hover:-translate-y-1">
    {/* Image Container */}
    <div className="aspect-video overflow-hidden relative shrink-0">
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover group-hover:scale-105 md:group-hover:scale-110 transition-transform duration-700 opacity-70 group-hover:opacity-90"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
      
      {/* Category Icon Badge */}
      <div className="absolute top-2 left-2 sm:top-3 sm:left-3 p-1 sm:p-1.5 rounded-md sm:rounded-lg glass border border-white/10 text-blue-400">
        <TypeIcon size={12} className="sm:size-14" />
      </div>
    </div>
    
    {/* Content Container */}
    <div className="p-3 sm:p-4 md:p-5 flex flex-col flex-1 space-y-2 sm:space-y-3">
      <div className="space-y-1">
        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-1">
          {project.title}
        </h3>
        {project.team && (
          <div className="flex items-center text-[8px] xs:text-[9px] text-blue-300/80 font-bold uppercase tracking-wider sm:tracking-widest">
            <Users size={8} className="xs:size-10 mr-1" /> {project.team}
          </div>
        )}
      </div>
      
      <p className="text-slate-400 text-xs leading-relaxed line-clamp-2 sm:line-clamp-3 flex-1">
        {project.description}
      </p>
      
      <div className="space-y-3 sm:space-y-4 pt-1 sm:pt-2">
        <div className="flex flex-wrap gap-1 sm:gap-1.5">
          {project.tech.map((t) => (
            <span 
              key={t} 
              className="px-1.5 sm:px-2 py-0.5 rounded-md bg-slate-900/50 text-slate-500 text-[8px] xs:text-[9px] font-mono border border-white/5 whitespace-nowrap"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="pt-2 sm:pt-3 flex items-center justify-between border-t border-white/5">
          <a 
            href={project.link} 
            target="_blank"
            rel="noopener noreferrer"
            className="text-[9px] sm:text-[10px] font-bold text-blue-400 hover:text-blue-300 flex items-center transition-colors uppercase tracking-wider"
          >
            Details <ExternalLink size={8} className="xs:size-10 ml-1" />
          </a>
          {project.description.toLowerCase().includes('whatsapp') && (
            <span className="flex items-center text-emerald-500 text-[8px] xs:text-[9px] font-bold uppercase tracking-wider bg-emerald-500/5 px-1.5 sm:px-2 py-0.5 rounded-md">
              <MessageSquare size={8} className="xs:size-10 mr-1" /> Leads
            </span>
          )}
        </div>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const gridClasses = "grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6";

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 xs:px-6 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4">
            Portfolio Gallery
          </h2>
          <p className="text-slate-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            A meticulous record of professional development and freelance initiatives.
          </p>
        </div>

        {/* Freelance Web Section */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="flex items-center space-x-3 sm:space-x-4 mb-6 sm:mb-8">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-emerald-600/20 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-500/10 shrink-0">
              <Globe size={16} className="sm:size-20" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg sm:text-xl font-bold text-slate-100 uppercase tracking-wider sm:tracking-widest truncate">
                Web Engagements
              </h3>
              <p className="text-xs text-slate-500 mt-0.5 truncate">
                MERN & Responsive business sites
              </p>
            </div>
            <div className="hidden xs:block flex-1 h-px bg-gradient-to-r from-slate-800 to-transparent ml-2"></div>
          </div>
          <div className={gridClasses}>
            {PROJECTS.freelanceWeb.map((p, i) => (
              <ProjectCard key={i} project={p} typeIcon={Globe} />
            ))}
          </div>
        </div>

        {/* Professional Section */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="flex items-center space-x-3 sm:space-x-4 mb-6 sm:mb-8">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400 shadow-lg shadow-blue-500/10 shrink-0">
              <Briefcase size={16} className="sm:size-20" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg sm:text-xl font-bold text-slate-100 uppercase tracking-wider sm:tracking-widest truncate">
                Enterprise Work
              </h3>
              <p className="text-xs text-slate-500 mt-0.5 truncate">
                Full-time roles at Infasta Soft Solutions
              </p>
            </div>
            <div className="hidden xs:block flex-1 h-px bg-gradient-to-r from-slate-800 to-transparent ml-2"></div>
          </div>
          <div className={gridClasses}>
            {PROJECTS.professional.map((p, i) => (
              <ProjectCard key={i} project={p} typeIcon={Briefcase} />
            ))}
          </div>
        </div>

        {/* Freelance Mobile Section */}
        <div>
          <div className="flex items-center space-x-3 sm:space-x-4 mb-6 sm:mb-8">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-purple-600/20 flex items-center justify-center text-purple-400 shadow-lg shadow-purple-500/10 shrink-0">
              <Smartphone size={16} className="sm:size-20" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg sm:text-xl font-bold text-slate-100 uppercase tracking-wider sm:tracking-widest truncate">
                Mobile Freelance
              </h3>
              <p className="text-xs text-slate-500 mt-0.5 truncate">
                Custom Android & iOS solutions
              </p>
            </div>
            <div className="hidden xs:block flex-1 h-px bg-gradient-to-r from-slate-800 to-transparent ml-2"></div>
          </div>
          <div className={gridClasses}>
            {PROJECTS.freelanceMobile.map((p, i) => (
              <ProjectCard key={p.title} project={p} typeIcon={Smartphone} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;