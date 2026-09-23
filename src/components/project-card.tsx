import type { Project } from "@/data/projects";
import { Icon } from "./icons";
import { ProjectPreview } from "./project-preview";

export function ProjectLinks({ project }: { project: Project }) {
  if (!project.links.length) return null;
  return <div className="project-links" aria-label={`${project.name} links`}>{project.links.map((link) => <a href={link.href} key={link.label} target="_blank" rel="noreferrer">{link.label} <Icon name="arrow-up-right" /></a>)}</div>;
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return <article className={`project-showcase accent-${project.accent}`} aria-labelledby={`project-${project.slug}`}>
    <div className="project-meta"><span>0{index + 1}</span><span>{project.category}</span></div>
    <div className="showcase-layout">
      <div className="showcase-visual"><ProjectPreview project={project} /></div>
      <div className="project-body">
        <h3 id={`project-${project.slug}`}>{project.name}{project.slug === "makyee" && <span className="project-subtitle">Real Estate Platform</span>}</h3>
        <p>{project.description}</p>
        {project.contribution?.length ? <div className="showcase-contribution"><h4>My contribution</h4><p>{project.contribution.slice(0, 2).join(" ")}</p></div> : null}
        {project.stack.length > 0 && <p className="showcase-stack">{project.stack.join(" · ")}</p>}
        <ul className="showcase-features">{project.features.slice(0, 4).map((item) => <li key={item}>{item}</li>)}</ul>
        <ProjectLinks project={project} />
      </div>
    </div>
  </article>;
}

export function MoreWork({ projects }: { projects: Project[] }) {
  return <section className="more-work shell" aria-labelledby="more-work-heading">
    <div className="section-heading"><p className="eyebrow">Further explorations</p><h2 id="more-work-heading">More work</h2></div>
    <div className="more-work-list">{projects.map((project) => <article className="more-work-item" key={project.slug}>
      <div><p className="eyebrow">{project.category}</p><h3>{project.name}</h3></div>
      <div><p>{project.description}</p>{project.stack.length > 0 && <p className="more-work-stack">{project.stack.join(" · ")}</p>}{project.status && <p className="small-copy">{project.status}</p>}<ProjectLinks project={project} /></div>
    </article>)}</div>
  </section>;
}
