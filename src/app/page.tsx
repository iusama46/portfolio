import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Icon } from "@/components/icons";
import { ProjectCard } from "@/components/project-card";
import { ProjectPreview } from "@/components/project-preview";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/projects";
import { siteConfig, technologyGroups } from "@/data/site";

export default function Home() {
  const [firstProject, ...otherProjects] = projects;

  return (
    <main id="top">
      <Header />

      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow"><span className="presence-dot" /> Senior Software Engineer · UAE</p>
          <h1>
            Engineering<br />mobile &amp; web<br />products that<br /><em>scale.</em>
          </h1>
          <p className="hero-intro">
            Senior Software Engineer specializing in React Native, React, Next.js, and
            Flutter, building production products across PropTech, FinTech, Logistics, and SaaS.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore selected work <Icon name="arrow-down" />
            </a>
            {siteConfig.resumeUrl ? (
              <a className="text-link" href={siteConfig.resumeUrl} download>
                Download résumé <Icon name="download" />
              </a>
            ) : (
              <span className="text-link text-link-disabled" aria-disabled="true">
                Download résumé <Icon name="download" />
              </span>
            )}
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-visual-topline">
            <span>UAE · Product engineering</span>
            <Icon name="spark" />
          </div>
          <ProjectPreview project={firstProject} large />
          <p className="hero-visual-note">Mobile &amp; web, without the noise.</p>
        </div>
        <div className="hero-footnote">
          <span>Scroll to see work</span>
          <span className="scroll-line" />
          <span>01—07</span>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="shell about-grid">
          <SectionHeading eyebrow="Profile" title="An engineer who thinks in systems, not screens." />
          <div className="about-copy">
            <p>
              I build mobile and web products with a focus on architecture, performance,
              maintainability, and user experience. My work spans React Native, React,
              Next.js, and Flutter across PropTech, FinTech, logistics, SaaS, and other
              product environments.
            </p>
            <p>
              I enjoy working beyond individual screens — understanding the product, its
              users, backend interactions, release requirements, and the systems that keep
              applications reliable as they grow.
            </p>
            <a className="inline-link" href={siteConfig.github} target="_blank" rel="noreferrer">
              View GitHub <Icon name="arrow-up-right" />
            </a>
          </div>
        </div>
      </section>

      <section className="capabilities-section shell" id="stack">
        <div className="capabilities-heading">
          <p className="eyebrow">Core toolkit</p>
          <p>A focused toolkit for mobile and web product development.</p>
        </div>
        <div className="capability-list">
          {technologyGroups.map((capability) => (
            <article className="capability" key={capability.number}>
              <span>{capability.number}</span>
              <h3>{capability.title}</h3>
              <ul>{capability.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="shell">
          <div className="projects-intro">
            <SectionHeading
              eyebrow="Selected work"
              title="Projects are the proof."
              copy="A selection of product work across real estate, operations, logistics, food, and service experiences."
            />
            <span className="project-count">07 projects</span>
          </div>
          <div className="projects-grid">
            <ProjectCard project={firstProject} index={0} />
            {otherProjects.map((project, index) => (
              <ProjectCard project={project} index={index + 1} key={project.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="shell experience-grid">
          <SectionHeading
            eyebrow="Experience"
            title="Production experience across products and platforms."
            copy="Building and maintaining mobile and web applications across multiple product domains."
          />
          <div className="experience-summary">
            <div className="experience-role">
              <span className="presence-dot" />
              <div>
                <p>Senior Software Engineer</p>
                <span>Mobile and web product development</span>
              </div>
            </div>
            <div className="experience-divider" />
            <p className="small-copy">
              PropTech · FinTech · Logistics · SaaS
            </p>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="shell contact-card">
          <div>
            <p className="eyebrow">Contact · {siteConfig.name}</p>
            <h2>Let&apos;s make the next interaction feel obvious.</h2>
          </div>
          <div className="contact-actions">
            <a className="button button-light" href={siteConfig.github} target="_blank" rel="noreferrer">
              GitHub <Icon name="arrow-up-right" />
            </a>
            {siteConfig.resumeUrl ? (
              <a className="resume-link" href={siteConfig.resumeUrl} download>
                <Icon name="download" /> Download résumé
              </a>
            ) : (
              <span className="resume-link" aria-disabled="true"><Icon name="download" /> Download résumé</span>
            )}
            <p><Icon name="pin" /> {siteConfig.location}</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
