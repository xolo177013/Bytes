export default function ProjectPreview({ project }) {
  const isJobs = project.slug === "bytes-jobs";

  return (
    <div className="preview">
      <a
        className="preview-hit"
        href={project.liveUrl || "#"}
        target={project.liveUrl ? "_blank" : undefined}
        rel={project.liveUrl ? "noopener noreferrer" : undefined}
        aria-label={
          project.liveUrl
            ? `Open ${project.title} live`
            : `View ${project.title}`
        }
      >
        <div className="browser">
          <div className="browser-bar">
            <span />
            <span />
            <span />
            <em>
              {isJobs ? "bytes-jobs · matching dashboard" : `${project.slug}.app`}
            </em>
          </div>

          <div className="browser-body dash-preview-body">
            <aside className="side">
              <strong>{isJobs ? "Matches" : project.slug}</strong>
              <span>{isJobs ? "Candidate profile" : "Dashboard"}</span>
              <span>{isJobs ? "Applications" : "Projects"}</span>
              <span>{isJobs ? "Recruiter" : "Activity"}</span>
              <span>{isJobs ? "Company" : "Settings"}</span>
            </aside>

            <div className="dash-content">
              <small className="build-label">
                {isJobs ? "MATCHING ENGINE" : project.category}
              </small>

              <div className="dash-title">
                {isJobs
                  ? "Fit score, with the reasons behind it."
                  : "Everything that needs attention."}
              </div>

              <div className="bars" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>

              <div className="mini-row">
                <span>
                  {isJobs ? "structured + text signals" : "product dashboard"}
                </span>
                <span>live product</span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
