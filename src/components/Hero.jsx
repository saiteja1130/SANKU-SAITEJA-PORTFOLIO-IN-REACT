import React from "react";
import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { PERSONAL_INFO } from "../../constants";

const Hero = () => {
  return (
    <section id="home" className="hero-panel relative">
      <div className="hero-grid section-wrap z-10">
        <div className="hero-copy" data-reveal>
          {/* <span className="eyebrow inline-flex items-center">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse mr-2" />
            Open To Full-Time & Freelance Roles
          </span> */}
          <h1 className="font-sora tracking-tight">
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">
              {PERSONAL_INFO.name}
            </span>
          </h1>
          <p className="text-lg">
            A{" "}
            <span className="text-blue-200 font-medium">
              {PERSONAL_INFO.role}
            </span>{" "}
            focused on product-driven development with clean architecture and
            smooth user experiences.
          </p>

          <div className="hero-cta-row">
            <a
              href="#projects"
              className="btn btn-primary shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
            >
              See Projects <ArrowRight size={16} className="ml-1" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost hover:bg-white/10"
            >
              GitHub <Github size={16} />
            </a>
          </div>

          <div className="hero-meta mt-8 border-t border-white/5 pt-6">
            <span className="hover:text-blue-200 transition-colors">
              <MapPin size={16} className="text-blue-400" />{" "}
              {PERSONAL_INFO.location}
            </span>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-200 transition-colors"
            >
              <Linkedin size={16} className="text-blue-400" /> LinkedIn
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-blue-200 transition-colors"
            >
              <Mail size={16} className="text-blue-400" /> Email
            </a>
          </div>
        </div>
      </div>

      {/* Decorative desktop background blobs */}
      <div className="absolute hidden lg:block right-[5%] top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute hidden lg:block left-[10%] bottom-[-10%] w-[300px] h-[300px] bg-teal-500/10 blur-[100px] rounded-full pointer-events-none z-0"></div>
    </section>
  );
};

export default Hero;
