import React from "react";
import "./App.css";
import {
  contact_data,
  extra_work_data,
  main_work_data,
  projects_data,
  testimonials_data,
} from "./data";

const impactHighlights = [
  {
    title: "Security-Critical Backend Delivery",
    detail:
      "Built IAM and code-signing services in a production security engineering environment.",
  },
  {
    title: "Measured Operations Impact",
    detail:
      "Delivered backend systems that reduced MTTR by over 40% and improved customer service KPI by over 60%.",
  },
  {
    title: "Cross-Functional Ownership",
    detail:
      "Worked closely with incident managers, early customers, and internal stakeholders to shape MVP requirements and ship practical solutions.",
  },
];

const allExperience = [...main_work_data, ...extra_work_data];

const sanitizeText = (value = "") =>
  String(value)
    .replace(/\u00E2\u20AC\u2122/g, "'")
    .replace(/\u00E2\u20AC\u0153|\u00E2\u20AC\u009D/g, '"')
    .replace(/\u00E2\u20AC\u201C/g, "-")
    .replace(/\u00F0\u0178\u02DC\u0160/g, "")
    .trim();

const toParagraphs = (value = "") =>
  sanitizeText(value)
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

function App() {
  const email = contact_data.find(
    (item) => sanitizeText(item.method).toLowerCase() === "email"
  );
  const linkedIn = contact_data.find(
    (item) => sanitizeText(item.method).toLowerCase() === "linkedin"
  );

  return (
    <div className="site-shell" id="top">
      <header className="top-nav">
        <a href="#top" className="brand">
          Yi Da
        </a>
        <nav className="top-links" aria-label="Primary">
          <a href="#summary">Summary</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#testimonials">References</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="main-content">
        <section id="summary" className="section-card hero-card">
          <p className="kicker">Software Engineer | Backend and Security</p>
          <h1>Yi Da</h1>
          <p className="hero-lead">
            I build secure and reliable backend systems that improve team
            productivity and operational stability.
          </p>
          <p className="hero-copy">
            Final-year Computer Science undergraduate at the National
            University of Singapore with experience across security engineering,
            anomaly detection, and internal platform tooling.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#experience">
              View Experience
            </a>
            {email && (
              <a className="button button-quiet" href={email.value}>
                Email
              </a>
            )}
            {linkedIn && (
              <a
                className="button button-quiet"
                href={linkedIn.value}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            )}
          </div>
        </section>

        <section className="section-card">
          <h2>Why I Am a Strong Fit</h2>
          <div className="highlight-grid">
            {impactHighlights.map((item) => (
              <article className="highlight-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section-card">
          <h2>Professional Experience</h2>
          <div className="experience-list">
            {allExperience.map((workObj) => {
              const {
                title,
                company,
                companyLink,
                startDate,
                endDate,
                summary,
                descriptions,
                skills,
              } = workObj;
              const itemKey = `${company}-${title}-${startDate}`;

              return (
                <article className="experience-item" key={itemKey}>
                  <div className="item-heading">
                    <h3>
                      {sanitizeText(title)} at{" "}
                      {companyLink ? (
                        <a
                          href={companyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {sanitizeText(company)}
                        </a>
                      ) : (
                        sanitizeText(company)
                      )}
                    </h3>
                    <p className="item-date">
                      {sanitizeText(startDate)} - {sanitizeText(endDate)}
                    </p>
                  </div>

                  {summary && (
                    <p className="item-summary">{sanitizeText(summary)}</p>
                  )}

                  {skills && skills.length > 0 && (
                    <p className="item-skills">
                      <span>Tech:</span> {skills.join(" | ")}
                    </p>
                  )}

                  <ul>
                    {descriptions.map((description, index) => (
                      <li key={`${itemKey}-${index}`}>
                        {sanitizeText(description)}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>

        <section id="projects" className="section-card">
          <h2>Selected Projects</h2>
          <div className="project-list">
            {projects_data.map((project) => (
              <article className="project-item" key={project.title}>
                <h3>{sanitizeText(project.title)}</h3>
                <p className="project-stack">{sanitizeText(project.subtitle)}</p>
                <p>{sanitizeText(project.description)}</p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Source
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="testimonials" className="section-card">
          <h2>References</h2>
          <div className="testimonial-list">
            {testimonials_data.map((testimonial) => (
              <article
                className="testimonial-item"
                key={`${testimonial.author}-${testimonial.company}`}
              >
                <p className="quote">"{sanitizeText(testimonial.shortQuote)}"</p>
                <p className="quote-author">
                  {sanitizeText(testimonial.author)} |{" "}
                  {sanitizeText(testimonial.position)} at{" "}
                  {sanitizeText(testimonial.company)}
                </p>

                <details>
                  <summary>Read Full Reference</summary>
                  <div className="reference-text">
                    {toParagraphs(testimonial.fullText).map(
                      (paragraph, index) => (
                        <p key={`${testimonial.author}-${index}`}>
                        {paragraph}
                        </p>
                      )
                    )}
                  </div>
                </details>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section-card">
          <h2>Contact</h2>
          <p className="contact-intro">
            Open to software engineering opportunities and meaningful backend
            projects.
          </p>
          <ul className="contact-list">
            {contact_data.map((contact) => (
              <li key={contact.method}>
                <span>{sanitizeText(contact.method)}</span>
                <a
                  href={contact.value}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {sanitizeText(contact.displayValue || contact.value)}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
