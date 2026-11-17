import { useMemo, useState } from "react";
import ProjectForm from "./components/ProjectForm.jsx";
import SearchBar from "./components/SearchBar.jsx";
import ProjectList from "./components/ProjectList.jsx";

const starterProjects = [
  {
    id: "project-1",
    title: "Project 1",
    description: "A sample creative project displayed in the portfolio.",
  },
  {
    id: "project-2",
    title: "Project 2",
    description: "Another sample project to demonstrate the project cards.",
  },
  {
    id: "project-3",
    title: "Project 3",
    description: "A third sample project. Add your own projects using the form.",
  },
];

function App() {
  const [projects, setProjects] = useState(starterProjects);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) {
      return projects;
    }

    return projects.filter((project) => {
      const searchableText = `${project.title} ${project.description}`.toLowerCase();
      return searchableText.includes(query);
    });
  }, [projects, searchTerm]);

  function handleAddProject(projectDetails) {
    const newProject = {
      ...projectDetails,
      id: `project-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    };

    setProjects((currentProjects) => [newProject, ...currentProjects]);
  }

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="header-inner">
          <p className="eyebrow">CREATIVE AGENCY</p>
          <h1>Portfolio Projects</h1>
          <p className="header-description">
            Add, explore, and find projects in one simple place.
          </p>
        </div>
      </header>

      <main className="main-content">
        <section className="panel add-panel" aria-labelledby="add-project-heading">
          <div className="section-heading">
            <div>
              <p className="section-kicker">YOUR WORKSPACE</p>
              <h2 id="add-project-heading">Add Project</h2>
            </div>
          </div>

          <ProjectForm onAddProject={handleAddProject} />
        </section>

        <section className="projects-section" aria-labelledby="projects-heading">
          <div className="projects-toolbar">
            <div className="section-heading">
              <div>
                <p className="section-kicker">PROJECT LIBRARY</p>
                <h2 id="projects-heading">Projects</h2>
              </div>
              <span className="project-count" aria-live="polite">
                {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}
              </span>
            </div>

            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          </div>

          <ProjectList
            projects={filteredProjects}
            hasSearchQuery={searchTerm.trim().length > 0}
          />
        </section>
      </main>

      <footer className="site-footer">
        <p>Portfolio Projects · Built with React</p>
      </footer>
    </div>
  );
}

export default App;
