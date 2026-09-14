import type { Project } from "@/data/projects";
import { Icon } from "./icons";
import { ProjectPreview } from "./project-preview";

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="project-links" aria-label={`${project.name} links`}>
      {project.links.map((link) =>
        link.href ? (
          <a href={link.href} key={link.label} target="_blank" rel="noreferrer">
            {link.label} <Icon name="arrow-up-right" />
          </a>
        ) : (
          <span key={link.label} title="Link to be added">
            {link.label} <em>pending</em>
          </span>
        ),
      )}
    </div>
  );
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isFeatured = project.featured;

  return (
    <article className={`project-card ${isFeatured ? "project-featured" : ""}`}>
      <ProjectPreview project={project} large={isFeatured} />
      <div className="project-body">
        <div className="project-meta">
          <span>0{index + 1}</span>
          <span>{project.category}</span>
          {project.access ? <span className="access-tag">{project.access}</span> : null}
        </div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <details className="project-detail">
          <summary>
            View project brief <Icon name="chevron" />
          </summary>
          <div className="project-detail-content">
            <div>
              <span>Contribution</span>
              <p>{project.contribution}</p>
            </div>
            <div>
              <span>Stack</span>
              <ul>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div>
              <span>Key features</span>
              <ul>{project.features.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </div>
        </details>
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}
