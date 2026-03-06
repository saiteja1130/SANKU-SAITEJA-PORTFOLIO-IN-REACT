import React from "react";
import { Github, Linkedin } from "lucide-react";
import { PERSONAL_INFO } from "../../constants";

const Footer = () => {
  return (
    <footer className="section-wrap footer-shell">
      <div>
        <h2>{PERSONAL_INFO.name}</h2>
        <p>React Native and MERN developer focused on quality execution.</p>
      </div>

      <div className="footer-actions">
        <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <Github size={16} />
        </a>
        <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin size={16} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
