import Image from "next/image";
import type { Project } from "@/data/projects";

function MiniInterface({ visual }: Pick<Project, "visual">) {
  return (
    <div className={`mini-interface mini-${visual}`} aria-hidden="true">
      <div className="mini-notch" />
      <div className="mini-topline"><i /><i /><i /></div>
      <div className="mini-content">
        <div className="mini-label" />
        {visual === "map" || visual === "delivery" || visual === "fleet" ? (
          <>
            <div className="mini-map"><span /><b /><em /></div>
            <div className="mini-card"><i /><i /><i /></div>
          </>
        ) : visual === "food" ? (
          <>
            <div className="mini-image" />
            <div className="mini-card"><i /><i /><i /></div>
          </>
        ) : (
          <>
            <div className="mini-stat-row"><span /><span /><span /></div>
            <div className="mini-chart"><i /><i /><i /><i /><i /></div>
            <div className="mini-card"><i /><i /><i /></div>
          </>
        )}
      </div>
      <div className="mini-tabbar"><i /><i /><i /><i /></div>
    </div>
  );
}

export function ProjectPreview({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  return (
    <div className={`project-preview accent-${project.accent} ${large ? "preview-large" : ""}`}>
      {large ? (
        <>
          <Image
            alt="Conceptual product device mockups used as a placeholder"
            className="preview-image"
            fill
            priority
            sizes="(max-width: 800px) 100vw, 55vw"
            src={project.image}
            style={{ objectPosition: project.imagePosition }}
          />
          <div className="preview-wash" />
          <span className="preview-caption">Project visual placeholder</span>
        </>
      ) : null}
      <div className="preview-orbit preview-orbit-one" />
      <div className="preview-orbit preview-orbit-two" />
      <div className="device-set">
        <div className="device-shadow" />
        <div className="device-frame"><MiniInterface visual={project.visual} /></div>
        <div className="device-frame device-secondary"><MiniInterface visual={project.visual} /></div>
      </div>
    </div>
  );
}
