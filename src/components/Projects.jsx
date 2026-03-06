import React, { useMemo } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PROJECTS } from "../../constants";
import ProjectCard from "./ProjectCard";

const featuredCount = 4;

const Projects = () => {
  const featuredProjects = useMemo(() => {
    const all = [
      ...PROJECTS.freelanceWeb.map((project) => ({ ...project, groupLabel: "Web" })),
    ];

    return all.slice(0, featuredCount);
  }, []);

  return (
    <section id="projects" className="section-wrap section-space" data-reveal>
      <div className="project-preview-head">
        <div className="section-header preview-header-reset">
          <span>Projects</span>
          <h2>Featured work from my portfolio</h2>
        </div>
        <Link to="/projects" className="btn btn-ghost view-all-btn">
          View All Projects <ArrowRight size={16} />
        </Link>
      </div>

      <div className="project-grid">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} groupLabel={project.groupLabel} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
