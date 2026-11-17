function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card-top">
        <span className="project-label">PORTFOLIO PROJECT</span>
        <span className="project-dot" aria-hidden="true" />
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </article>
  );
}

export default ProjectCard;
