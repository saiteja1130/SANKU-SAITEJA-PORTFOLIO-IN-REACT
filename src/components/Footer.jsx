import React from 'react';
import { PERSONAL_INFO } from '../../constants';
import { Github, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 sm:py-10 md:py-12 border-t border-white/5 px-4 xs:px-6 sm:px-8 md:px-12 bg-slate-950">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8 text-center sm:text-left">
        {/* Left Section - Name and Tagline */}
        <div className="order-2 sm:order-1">
          <h2 className="text-xl xs:text-2xl font-bold tracking-tight sm:tracking-tighter text-gradient mb-1 sm:mb-2">
            {PERSONAL_INFO.name.toUpperCase()}
          </h2>
          <p className="text-slate-500 text-xs xs:text-sm max-w-xs mx-auto sm:mx-0">
            Building digital experiences that matter.
          </p>
        </div>

        {/* Right Section - Social Links and Copyright */}
        <div className="order-1 sm:order-2 flex flex-col items-center sm:items-end gap-3 sm:gap-4 w-full sm:w-auto">
          <div className="flex space-x-4 xs:space-x-5 sm:space-x-6 text-slate-400">
            <a 
              href={PERSONAL_INFO.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors p-1"
              aria-label="GitHub Profile"
            >
              <Github size={20} className="xs:size-22 sm:size-24" />
            </a>
            <a 
              href={PERSONAL_INFO.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors p-1"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} className="xs:size-22 sm:size-24" />
            </a>
          </div>
          <p className="text-slate-600 text-xs xs:text-sm flex items-center justify-center sm:justify-end flex-wrap gap-1">
            Made with 
            <Heart size={12} className="xs:size-14 mx-1 text-red-500 fill-red-500" /> 
            by {PERSONAL_INFO.name} &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;