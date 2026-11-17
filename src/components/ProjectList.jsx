import ProjectCard from "./ProjectCard.jsx";

function ProjectList({ projects, hasSearchQuery }) {
  if (projects.length === 0) {
    return (
      <div className="empty-state" role="status">
        <h3>{hasSearchQuery ? "No projects found" : "No projects yet"}</h3>
        <p>
          {hasSearchQuery
            ? "Try another search term."
            : "Use the form above to add your first project."}
        </p>
      </div>
    );
  }

  return (
    <div className="project-grid">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectList;
