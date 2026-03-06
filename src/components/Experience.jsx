import React from "react";
import { CalendarDays, MapPin } from "lucide-react";
import { EXPERIENCE } from "../../constants";

const Experience = () => {
  return (
    <section id="experience" className="section-wrap section-space" data-reveal>
      <div className="section-header">
        <span>Experience</span>
        <h2>Professional timeline</h2>
      </div>

      <div className="timeline-modern">
        {EXPERIENCE.map((item) => (
          <article className="timeline-item-modern" key={`${item.company}-${item.title}`}>
            <div className="timeline-side">
              <span className="timeline-period">{item.period}</span>
            </div>

            <div className="timeline-line" aria-hidden="true">
              <span className="timeline-dot" />
            </div>

            <div className="timeline-card timeline-card-modern">
              <header className="timeline-header">
                <h3>{item.title}</h3>
                <p>{item.company}</p>
              </header>

              <div className="timeline-meta">
                <span>
                  <MapPin size={14} /> {item.location}
                </span>
                <span>
                  <CalendarDays size={14} /> {item.period}
                </span>
              </div>

              <ul>
                {item.description.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
