import React from 'react';
import { ChevronRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../../constants';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 sm:pt-20 px-4 xs:px-6 sm:px-8 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-6 sm:space-y-8 order-2 md:order-1">
          {/* Availability Badge */}
          <div className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full glass border border-blue-500/30 text-blue-400 text-xs font-bold tracking-wider sm:tracking-widest uppercase text-center">
            Available for New Opportunities
          </div>
          
          {/* Name and Title */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            Hi, I'm <br />
            <span className="text-gradient">{PERSONAL_INFO.name}</span>
          </h1>
          
          {/* Description */}
          <p className="text-base xs:text-lg sm:text-xl text-slate-400 max-w-lg leading-relaxed">
            A passionate <span className="text-slate-100 font-semibold">{PERSONAL_INFO.role}</span>. 
            Transforming ideas into high-performance web and mobile experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
            <a 
              href="#projects" 
              className="group flex items-center px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all shadow-lg sm:shadow-xl shadow-blue-500/20 text-sm sm:text-base"
            >
              View My Work
              <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href={PERSONAL_INFO.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-6 sm:px-8 py-3 sm:py-4 rounded-full glass border border-slate-700 text-white font-bold hover:bg-slate-800 transition-all text-sm sm:text-base"
            >
              <Github className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
              GitHub
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4 sm:space-x-6 text-slate-500 pt-2">
            <a 
              href={PERSONAL_INFO.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors p-1"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a 
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-blue-400 transition-colors p-1"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className="order-1 md:order-2 flex justify-center items-center relative">
          <div className="relative w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-3xl rotate-6 blur-xl sm:blur-2xl opacity-20"></div>
            
            {/* Profile Container */}
            <div className="absolute inset-0 glass rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden">
              <img 
                src={`https://picsum.photos/seed/${PERSONAL_INFO.name}/800/800`} 
                alt={PERSONAL_INFO.name} 
                className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700 opacity-80"
                loading="eager"
              />
              
              {/* Code Snippet Overlay */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-3 sm:p-4 glass rounded-xl border border-white/5">
                <p className="text-xs font-mono text-blue-400">const developer = {`{`}</p>
                <p className="text-xs font-mono text-slate-300 ml-4">skills: ['React', 'MERN', 'Native'],</p>
                <p className="text-xs font-mono text-slate-300 ml-4">location: 'Hyderabad'</p>
                <p className="text-xs font-mono text-blue-400">{`}`};</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;