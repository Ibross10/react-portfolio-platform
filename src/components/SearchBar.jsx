function SearchBar({ searchTerm, onSearchChange }) {
  function handleSubmit(event) {
    event.preventDefault();
    onSearchChange(searchTerm);
  }

  return (
    <form className="search-form" role="search" onSubmit={handleSubmit}>
      <label className="visually-hidden" htmlFor="project-search">
        Search projects
      </label>
      <input
        id="project-search"
        type="search"
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Search projects..."
      />
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
