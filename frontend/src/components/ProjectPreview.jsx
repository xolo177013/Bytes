export default function ProjectPreview({ project }) {
  const domain = project.liveUrl
    ? project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : project.slug;

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
            <em>{domain}</em>
          </div>
          <div className="browser-body live-preview">
            {project.liveUrl ? (
              <iframe
                src={project.liveUrl}
                title={`${project.title} live preview`}
                loading="lazy"
                sandbox="allow-same-origin allow-scripts"
                tabIndex={-1}
              />
            ) : (
              <div className="preview-fallback">
                <span>{project.category}</span>
              </div>
            )}
          </div>
        </div>
      </a>
    </div>
  );
}