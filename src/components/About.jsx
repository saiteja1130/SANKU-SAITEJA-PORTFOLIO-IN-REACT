import React from "react";
import { PERSONAL_INFO } from "../../constants";

const metrics = [
  { value: "8+", label: "Months Industry Experience" },
  { value: "10+", label: "Projects Delivered" },
  { value: "2", label: "Production Mobile Apps" },
  { value: "MERN", label: "Primary Stack" },
];

const About = () => {
  return (
    <section id="about" className="section-wrap section-space" data-reveal>
      <div className="section-header">
        <span>About</span>
        <h2>Developer with practical product focus</h2>
      </div>

      <div className="about-layout">
        <p className="about-summary">{PERSONAL_INFO.summary}</p>
        <div className="metrics-grid">
          {metrics.map((metric) => (
            <article className="metric-card" key={metric.label}>
              <h3>{metric.value}</h3>
              <p>{metric.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
