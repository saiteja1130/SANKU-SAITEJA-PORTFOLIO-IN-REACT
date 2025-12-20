import React from 'react';
import { ChevronRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import {  HomeBanner,  PERSONAL_INFO } from '../../constants';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={HomeBanner} 
          alt={PERSONAL_INFO.name} 
          className="w-full h-full object-cover scale-105"
          loading="eager"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/30"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative min-h-screen flex items-center pt-16 sm:pt-20 px-4 xs:px-6 sm:px-8 md:px-12 z-10">
        <div className="max-w-7xl mx-auto w-full">
          {/* Text Content */}
          <div className="max-w-3xl">
            {/* Availability Badge */}
            <div className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full glass border border-blue-500/30 text-blue-400 text-xs font-bold tracking-wider sm:tracking-widest uppercase mb-4 sm:mb-6 backdrop-blur-sm">
              Available for New Opportunities
            </div>
            
            {/* Name and Title */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight text-white mb-3 sm:mb-6">
              Hi, I'm <br />
              <span className="text-gradient bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {PERSONAL_INFO.name}
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-slate-300 max-w-2xl leading-relaxed mb-6 sm:mb-8">
              A passionate <span className="text-white font-semibold">{PERSONAL_INFO.role}</span>. 
              Transforming ideas into high-performance web and mobile experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
              <a 
                href="#projects" 
                className="group flex items-center px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all shadow-lg sm:shadow-xl shadow-blue-500/30 text-sm sm:text-base backdrop-blur-sm"
              >
                View My Work
                <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href={PERSONAL_INFO.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center px-6 sm:px-8 py-3 sm:py-4 rounded-full glass border border-white/20 text-white font-bold hover:bg-white/10 transition-all text-sm sm:text-base backdrop-blur-sm"
              >
                <Github className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                GitHub
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 sm:space-x-6 text-slate-300">
              <a 
                href={PERSONAL_INFO.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors p-1 backdrop-blur-sm rounded-full hover:bg-white/5 p-2"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a 
                href={`mailto:${PERSONAL_INFO.email}`}
                className="hover:text-blue-400 transition-colors p-1 backdrop-blur-sm rounded-full hover:bg-white/5 p-2"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;