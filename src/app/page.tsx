import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Icon } from "@/components/icons";
import { ProjectCard } from "@/components/project-card";
import { ProjectPreview } from "@/components/project-preview";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";

const capabilities = [
  { number: "01", title: "Mobile", items: ["React Native", "Flutter", "iOS & Android"] },
  { number: "02", title: "Web", items: ["React", "Next.js", "TypeScript"] },
  { number: "03", title: "Product", items: ["Design systems", "API integration", "Performance"] },
];

export default function Home() {
  const [firstProject, ...otherProjects] = projects;

  return (
    <main id="top">
      <Header />

      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow"><span className="presence-dot" /> Available for the right product challenges</p>
          <h1>
            Software that feels <em>considered</em> at every touchpoint.
          </h1>
          <p className="hero-intro">
            {siteConfig.role} focused on building purposeful mobile and web products with
            React Native, React, Next.js, and Flutter.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore selected work <Icon name="arrow-down" />
            </a>
            <a className="text-link" href="#contact">Start a conversation <Icon name="arrow-up-right" /></a>
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
              Based in the United Arab Emirates, I work across the mobile and web
              stack—bringing product ideas into clear, maintainable experiences.
            </p>
            <p>
              The strongest work is deliberate: familiar where it should be, distinct
              where it matters, and resilient long after launch.
            </p>
            <a className="inline-link" href="#contact">
              Work together <Icon name="arrow-up-right" />
            </a>
          </div>
        </div>
      </section>

      <section className="capabilities-section shell" id="stack">
        <div className="capabilities-heading">
          <p className="eyebrow">Core toolkit</p>
          <p>Tools chosen for thoughtful, cross-platform product delivery.</p>
        </div>
        <div className="capability-list">
          {capabilities.map((capability) => (
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
            title="A career story, ready for the detail."
            copy="Confirmed roles, companies, and dates can be added here once provided."
          />
          <div className="experience-placeholder">
            <div className="experience-role">
              <span className="presence-dot" />
              <div>
                <p>Senior Software Engineer</p>
                <span>Experience details to be added</span>
              </div>
            </div>
            <div className="experience-divider" />
            <p className="small-copy">
              This section intentionally avoids unverified company names, dates, and
              achievements. It is designed to accept your confirmed career timeline.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="shell contact-card">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Let&apos;s make the next interaction feel obvious.</h2>
          </div>
          <div className="contact-actions">
            <a className="button button-light" href={`mailto:${siteConfig.email}`}>
              <Icon name="mail" /> {siteConfig.email}
            </a>
            <a className="resume-link" href={siteConfig.resumeUrl} download>
              <Icon name="download" /> Download résumé <small>placeholder</small>
            </a>
            <p><Icon name="pin" /> {siteConfig.location}</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
