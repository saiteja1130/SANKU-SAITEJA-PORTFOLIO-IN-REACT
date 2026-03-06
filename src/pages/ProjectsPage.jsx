import React from "react";
import { PROJECTS } from "../../constants";
import ProjectCard from "../components/ProjectCard";

const groups = [
  { key: "freelanceWeb", title: "Freelance Web Projects", label: "Web" },
  {
    key: "professional",
    title: "Professional Projects",
    label: "Professional",
  },
  {
    key: "freelanceMobile",
    title: "Freelance Mobile Projects",
    label: "Mobile",
  },
];

const ProjectsPage = () => {
  return (
    <section className="section-wrap section-space projects-page">
      <div className="section-header" data-reveal>
        <span>All Projects</span>
        <h2>Complete project listing</h2>
      </div>

      <p className="projects-page-subtitle" data-reveal>
        This page contains all professional and freelance projects from my
        portfolio.
      </p>

      {groups.map((group) => (
        <div key={group.key} className="project-group-block" data-reveal>
          <h3>{group.title}</h3>
          <div className="project-grid">
            {PROJECTS[group.key].map((project) => (
              <ProjectCard
                key={`${group.key}-${project.title}`}
                project={project}
                groupLabel={group.label}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProjectsPage;
