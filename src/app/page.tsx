import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Icon } from "@/components/icons";
import { ProjectCard, MoreWork } from "@/components/project-card";
import { ProjectPreview } from "@/components/project-preview";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { technologyGroups, coreTechnologies } from "@/data/skills";
import { Experience } from "@/components/experience";

export default function Home() {
  const firstProject = projects[0];
  const featuredProjects = projects.filter((project) => project.featured);
  // Temporary contact details for the redesigned Contact section.
  const contactEmail = siteConfig.email ?? "iusama46@gmail.com";
  const contactLinkedin = siteConfig.linkedin ?? "https://www.linkedin.com/in/iusama46/";

  return (
    <>
      <a className="skip-link" href="#content">Skip to content</a>
      <div id="top" />
      <Header />
      <main id="content">

        <section className="hero shell">
          <div className="hero-copy">
            <p className="eyebrow"><span className="presence-dot" /> Senior Software Engineer · UAE</p>
            <h1>
              Engineering<br />mobile &amp; web<br />products that<br /><em>scale.</em>
            </h1>
            <p className="hero-intro">
              Senior Software Engineer specializing in React Native, React, Next.js, and
              Flutter, building production products across PropTech, FinTech, LogiTech, FoodTech, and SaaS.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore selected work <Icon name="arrow-down" />
              </a>
              {siteConfig.resumeUrl ? (
                <a className="text-link" href={siteConfig.resumeUrl} download>
                  Download résumé <Icon name="download" />
                </a>
              ) : null}
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

        <section className="projects-section" id="projects">
          <div className="shell">
            <div className="projects-intro">
              <SectionHeading
                eyebrow="Selected work"
                title="Projects are the proof."
                copy="A selection of product work across real estate, operations, logistics, food, and service experiences."
              />
              <span className="project-count">04 featured projects</span>
            </div>
            <div className="project-showcases">
              {featuredProjects.map((project, index) => (
                <ProjectCard project={project} index={index} key={project.slug} />
              ))}
            </div>
          </div>
        </section>

        <MoreWork projects={projects.filter((project) => !project.featured)} />

        <section className="about-section" id="about">
          <div className="shell about-grid">
            <SectionHeading eyebrow="Profile" title="An engineer who thinks in systems, not screens." />
            <div className="about-copy">
              <p>
                I build mobile and web products with a focus on architecture, performance,
                maintainability, and user experience.
              </p>
              <p>
                My work goes beyond individual screens — from application architecture and API
                integration to native functionality, performance, release workflows, and production reliability.
              </p>
              <a className="inline-link" href={siteConfig.github} target="_blank" rel="noreferrer">
                View GitHub <Icon name="arrow-up-right" />
              </a>
            </div>
          </div>
        </section>

        <Experience />

        <section className="capabilities-section shell" id="stack">
          <div className="capabilities-heading">
            <p className="eyebrow">Engineering toolkit</p>
            <h2>Tools behind the work.</h2>
            <p>A focused toolkit for mobile and web product development.</p>
          </div>
          <div className="capability-list">
            {technologyGroups.map((capability, index) => (
              <article className="capability" key={capability.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{capability.title}</h3>
                <ul>{capability.items.map((item) => <li key={item}>{coreTechnologies.has(item) ? <strong>{item}</strong> : item}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-heading">
          <div className="shell contact-card">
            <div>
              <p className="eyebrow">Contact · {siteConfig.name}</p>
              <h2 id="contact-heading">Let&apos;s build products<br />that scale.</h2>
              <p className="contact-copy">I&apos;m open to software engineering opportunities and product collaborations where strong product thinking and reliable engineering matter.</p>
            </div>
            <div className="contact-actions">
              <div className="contact-dots" aria-hidden="true">
                {Array.from({ length: 16 }, (_, index) => <span key={index} />)}
              </div>
              {contactEmail && (
                <a className="button button-primary contact-email" href={`mailto:${contactEmail}`}>
                  Email me <Icon name="arrow-up-right" />
                </a>
              )}
              <div className="contact-secondary">
                {contactLinkedin && (
                  <a className="inline-link" href={contactLinkedin} target="_blank" rel="noreferrer">
                    LinkedIn <Icon name="arrow-up-right" />
                  </a>
                )}
                <a className="inline-link" href={siteConfig.github} target="_blank" rel="noreferrer">
                  GitHub <Icon name="arrow-up-right" />
                </a>
                {siteConfig.resumeUrl && (
                  <a className="inline-link" href={siteConfig.resumeUrl} download>
                    Résumé <Icon name="arrow-down" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
