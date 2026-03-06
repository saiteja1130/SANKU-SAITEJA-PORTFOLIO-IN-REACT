import React from "react";
import { ExternalLink, Users } from "lucide-react";

const ProjectCard = ({ project, groupLabel }) => {
  return (
    <article className="project-card">
      <div className="project-media">
        {project.image ? (
          <img src={project.image} alt={project.title} loading="lazy" />
        ) : (
          <div className="w-full h-[11.5rem] bg-[#0c1220] flex items-center justify-center text-[#9daac7] text-sm">
            No Image Available
          </div>
        )}
        {groupLabel ? (
          <span className="project-badge">{groupLabel}</span>
        ) : null}
      </div>

      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        {project.team ? (
          <p className="project-team">
            <Users size={14} /> {project.team}
          </p>
        ) : null}

        {project.features?.length ? (
          <ul className="project-features">
            {project.features.slice(0, 3).map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        ) : null}

        <div className="tech-list">
          {project.tech.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <a href={project.link} target="_blank" rel="noopener noreferrer">
          View Details <ExternalLink size={14} />
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
