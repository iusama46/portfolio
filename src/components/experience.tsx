import { experience, experienceAreas, experienceSummary } from "@/data/experience";
import { SectionHeading } from "./section-heading";

export function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="shell">
        <div className="experience-grid">
          <SectionHeading eyebrow="Experience" title="Built for production. Backed by experience." />
          <div className="experience-summary">
            <p className="experience-lead">{experienceSummary}</p>
            <dl className="experience-areas">
              {experienceAreas.map((area) => <div key={area.title}><dt>{area.title}</dt><dd>{area.description}</dd></div>)}
            </dl>
          </div>
        </div>
        {experience.length > 0 && <ol className="experience-timeline">
          {experience.map((entry) => <li key={entry.id}>
            <div className="experience-meta">{entry.dates && <p>{entry.dates}</p>}{entry.location && <p>{entry.location}</p>}</div>
            <div><h3>{entry.role}</h3><p className="experience-company">{entry.company}</p>
              {entry.description && <p>{entry.description}</p>}
              {entry.responsibilities.length > 0 && <ul>{entry.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul>}
              {entry.technologies.length > 0 && <p>{entry.technologies.join(" · ")}</p>}
            </div>
          </li>)}
        </ol>}
      </div>
    </section>
  );
}
