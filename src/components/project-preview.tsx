import Image from "next/image";
import type { Project } from "@/data/projects";

export function ProjectPreview({ project, large = false }: { project: Project; large?: boolean }) {
  if (project.screenshots?.length) {
    return <div className={`screenshot-gallery gallery-${project.presentation ?? "mobile"}`} role="region" aria-label={`${project.name} screenshots`} tabIndex={0}>
      {project.screenshots.map((shot) => <figure key={shot.src}>
        <Image src={shot.src} alt={shot.alt} width={shot.width} height={shot.height} sizes={project.presentation === "desktop" ? "(max-width: 800px) 90vw, 65vw" : "(max-width: 800px) 65vw, 25vw"} />
      </figure>)}
    </div>;
  }
  return (
    <div className={`project-preview ${large ? "preview-large" : ""}`}>
      <Image alt="" className="preview-image" fill preload={large} sizes="(max-width: 800px) 100vw, 65vw" src={project.image} style={{ objectPosition: project.imagePosition }} />
      <span className="preview-caption">Concept imagery · {project.presentation === "desktop" ? "Web platform" : "Mobile products"}</span>
    </div>
  );
}
