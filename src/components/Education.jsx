import React from "react";
import { GraduationCap } from "lucide-react";
import { EDUCATION } from "../../constants";

const Education = () => {
  return (
    <section id="education" className="section-wrap section-space" data-reveal>
      <div className="section-header">
        <span>Education</span>
        <h2>Academic background</h2>
      </div>

      <div className="education-grid">
        {EDUCATION.map((item) => (
          <article className="education-card" key={`${item.degree}-${item.period}`}>
            <div className="education-icon">
              <GraduationCap size={18} />
            </div>
            <div>
              <h3>{item.degree}</h3>
              <p>{item.institution}</p>
            </div>
            <div className="education-meta">
              <span>{item.period}</span>
              <strong>{item.grade}</strong>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Education;
