import React from "react";
import { SKILLS } from "../../constants";

const Skills = () => {
  return (
    <section id="skills" className="section-wrap section-space" data-reveal>
      <div className="section-header">
        <span>Skills</span>
        <h2>Tools I use to ship production-ready software</h2>
      </div>

      <div className="skills-grid">
        {SKILLS.map((group) => {
          const Icon = group.icon;

          return (
            <article className="skill-card" key={group.category}>
              <div className="skill-head">
                <span className="skill-icon">
                  <Icon size={20} />
                </span>
                <h3>{group.category}</h3>
              </div>

              <ul>
                {group.items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
