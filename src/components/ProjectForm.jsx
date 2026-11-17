import { useState } from "react";

function ProjectForm({ onAddProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const cleanTitle = title.trim();
    const cleanDescription = description.trim();

    if (!cleanTitle || !cleanDescription) {
      return;
    }

    onAddProject({
      title: cleanTitle,
      description: cleanDescription,
    });

    setTitle("");
    setDescription("");
  }

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="project-title">Title</label>
        <input
          id="project-title"
          name="title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Enter project title"
          maxLength={80}
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="project-description">Description</label>
        <textarea
          id="project-description"
          name="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Write a short project description"
          rows={3}
          maxLength={300}
          required
        />
      </div>

      <button className="primary-button" type="submit">
        Add Project
      </button>
    </form>
  );
}

export default ProjectForm;
