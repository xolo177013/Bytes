import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import ProjectPreview from "../components/ProjectPreview";
import { projects } from "../data/projects";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-orbit" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <div className="hero-frame">
          <div className="hero-inner">
            <div className="hero-top">
              <div className="kicker">
                SOFTWARE ENGINEERING AGENCY · DHANBAD, INDIA
              </div>

              <div className="hero-stamp">
                PRODUCT / SYSTEMS / AI
                <br />
                SELECTED BUILDS · 2026
              </div>
            </div>

            <Reveal>
              <h1>
                Software for teams
                <br />
                building <em>what&apos;s next.</em>
              </h1>
            </Reveal>

            <div className="hero-bottom">
              <Reveal>
                <p className="hero-lede">
                  Bytes is a software engineering agency that helps businesses
                  turn ideas, operational problems, and AI opportunities into
                  reliable digital products.
                </p>
              </Reveal>

              <Reveal>
                <div className="hero-actions">
                  <Link to="/work" className="button">
                    See the work ↗
                  </Link>

                  <a href="mailto:sougat141@gmail.com" className="button alt">
                    Talk to Bytes ↗
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="hero-index">
              <span>BASED IN DHANBAD, INDIA</span>
              <span>FULL-STACK · AI/ML · PRODUCT ENGINEERING</span>
            </div>
          </div>
        </div>
      </section>

      {/* ORANGE BELT */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          <span>PRODUCT ENGINEERING</span><b>×</b>
          <span>FULL-STACK SYSTEMS</span><b>×</b>
          <span>AI WORKFLOWS</span><b>×</b>
          <span>SAAS PLATFORMS</span><b>×</b>
          <span>PRODUCT ENGINEERING</span><b>×</b>
          <span>FULL-STACK SYSTEMS</span><b>×</b>
          <span>AI WORKFLOWS</span><b>×</b>
          <span>SAAS PLATFORMS</span><b>×</b>
        </div>
      </div>

      {/* INTRO */}
      <section className="section">
        <div className="shell">
          <div className="section-kicker">01 / WHY BYTES</div>

          <div className="intro-grid">
            <Reveal>
              <h2 className="display">
                Complex under the hood.
                <br />
                Clear on the surface.
              </h2>
            </Reveal>

            <div>
              <Reveal>
                <p className="body-xl">
                  We work with startups, growing businesses, and teams that
                  need software built properly — from the first product
                  version to complex internal systems.
                </p>
              </Reveal>

              <Reveal>
                <p className="body-copy">
                  Our team handles the product and engineering details
                  together: architecture, APIs, databases, authentication,
                  integrations, automation, AI workflows, performance, and
                  deployment.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED WORK — V8 STYLE */}
      <section className="work-section">
        <div className="shell">
          <div className="section-kicker">02 / SELECTED WORK</div>

          <div className="work-intro">
            <Reveal>
              <h2 className="display">
                Selected work
                <br />
                from Bytes.
              </h2>
            </Reveal>

            <Reveal>
              <p>
                Recent builds across full-stack engineering, AI applications,
                automation, and custom business software.
              </p>
            </Reveal>
          </div>

          <div className="project-stack">
            {projects.map((project, index) => (
              <Reveal key={project.slug}>
                <article className={`project ${index % 2 ? "reverse" : ""}`}>
                  <div className="project-visual">
                    <ProjectPreview project={project} />
                  </div>

                  <div className="project-copy">
                    <div className="project-type">
                      {project.number} / {project.category}
                    </div>

                    <h3>{project.title}</h3>

                    <p>{project.summary}</p>

                    <div className="project-tags">
                      {project.stack?.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>

                    <div className="project-links">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          GitHub ↗
                        </a>
                      )}

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link project-link-live"
                        >
                          Live site ↗
                        </a>
                      )}

                      <Link
                        to={`/projects/${project.slug}`}
                        className="project-link"
                      >
                        Case study ↗
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="section architecture">
        <div className="shell">
          <div className="section-kicker">03 / ENGINEERING</div>

          <div className="arch-grid">
            <div className="arch-copy">
              <Reveal>
                <h2 className="display">
                  Built to work
                  <br />
                  beyond the demo.
                </h2>
              </Reveal>

              <Reveal>
                <p>
                  We care about the systems behind the interface: clean
                  architecture, reliable APIs, useful automation, and
                  deployment that can survive real users.
                </p>
              </Reveal>
            </div>

            <div className="system">
              {[
                ["01", "Product", "Flows, interfaces, permissions, and the user experience."],
                ["02", "Backend", "APIs, business logic, authentication, databases, and integrations."],
                ["03", "Intelligence", "Matching, AI workflows, automation, search, and data-driven features."],
                ["04", "Delivery", "Docker, cloud deployment, monitoring, performance, and maintainable handoff."],
              ].map(([num, title, text]) => (
                <div className="sys-row" key={num}>
                  <span className="num">{num}</span>
                  <div>
                    <h4>{title}</h4>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="contact-section">
        <div className="shell contact-grid">
          <div>
            <div className="contact-kicker section-kicker">
              HAVE A PRODUCT IN MIND?
            </div>
            <h2 className="display">
              Let&apos;s build something useful.
            </h2>
          </div>

          <div className="contact-actions">
            <Link to="/contact" className="button">
              Start a project ↗
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
