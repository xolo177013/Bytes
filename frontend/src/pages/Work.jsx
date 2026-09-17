import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import ProjectPreview from "../components/ProjectPreview";
import { projects } from "../data/projects";

export default function Work() {
  return (
    <>
      <section className="section shell page-head">
        <div className="section-kicker">WORK / CASE STUDIES</div>

        <div className="intro-grid">
          <Reveal>
            <h1 className="display">
              Systems built
                <br />
              for real use.
            </h1>
          </Reveal>

          <Reveal>
            <p className="body-xl">
              A closer look at the products we build — the problem, the
              architecture, the engineering decisions, and the result.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="work-section">
        <div className="shell">
          <div className="section-kicker">01 / SELECTED PROJECTS</div>

          <div className="project-stack">
            {projects.map((project, index) => (
              <Reveal key={project.slug}>
                <article className={`project ${index % 2 ? "reverse" : ""}`}>
                  
                  <div className="project-type">
                      {project.number} / {project.category}
                  </div>

                  <div className="project-visual">
                    <ProjectPreview project={project} />
                  </div>

                  <div className="project-copy">

                    <h2>{project.title}</h2>

                    <p>{project.summary}</p>

                    {project.problem && (
                      <div className="work-detail">
                        <span>PROBLEM</span>
                        <p>{project.problem}</p>
                      </div>
                    )}

                    <div className="project-tags">
                      {project.stack?.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>

                    <div className="project-links">
                      {project.githubUrl && (
                        <a
                          className="project-link"
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub ↗
                        </a>
                      )}

                      {project.liveUrl && (
                        <a
                          className="project-link project-link-live"
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live site ↗
                        </a>
                      )}

                      <Link
                        className="project-link"
                        to={`/projects/${project.slug}`}
                      >
                        Full case study ↗
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section architecture">
        <div className="shell">
          <div className="section-kicker">02 / HOW WE BUILD</div>

          <div className="arch-grid">
            <Reveal>
              <h2 className="display">
                Engineering
                <br />
                behind the UI.
              </h2>
            </Reveal>

            <div className="system">
              {[
                ["01", "Product", "Flows, interfaces, permissions and the user experience."],
                ["02", "Backend", "APIs, business logic, authentication, databases and integrations."],
                ["03", "Intelligence", "Matching, AI workflows, automation, search and data-driven features."],
                ["04", "Delivery", "Docker, cloud deployment, performance and maintainable handoff."],
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

      <section className="contact-section">
        <div className="shell contact-grid">
          <div>
            <div className="contact-kicker section-kicker">
              HAVE A PRODUCT IN MIND?
            </div>
            <h2 className="display">Let&apos;s build something useful.</h2>
          </div>

          <Link className="button" to="/contact">
            Start a project ↗
          </Link>
        </div>
      </section>
    </>
  );
}
