# React Portfolio Platform

A responsive single-page portfolio platform built with React and Vite. It lets users add project entries and search the project collection.

## Features

- Displays three starter cards: Project 1, Project 2, and Project 3.
- Adds a project from the **Add Project** form using its title and description.
- Filters the displayed projects by title or description as the search text changes.
- Shows a helpful empty state when no projects match the search.
- Uses a responsive layout for desktop, tablet, and mobile screens.
- Includes accessible form labels, required fields, visible keyboard focus, and semantic page sections.

## Getting started

You need Node.js and npm installed.

1. Clone the repository:

   ```bash
   git clone https://github.com/Ibross10/react-portfolio-platform.git
   cd react-portfolio-platform
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the local URL printed by Vite in your browser.

To create a production build, run:

```bash
npm run build
```

## Component hierarchy

```text
App
├── ProjectForm
└── SearchBar
└── ProjectList
    └── ProjectCard
```

- **App** owns the project collection and search term.
- **ProjectForm** owns the form field values and sends a new project to App through the `onAddProject` prop.
- **SearchBar** receives the current search text and the `onSearchChange` callback as props.
- **ProjectList** receives the filtered projects and renders a ProjectCard for each item.
- **ProjectCard** receives one project object through its `project` prop.

## State management and event handling

React's `useState` hook stores the projects and search term in App. ProjectForm uses its own state for the title and description inputs. Form submission is handled with `onSubmit`; typing is handled with `onChange`. The project list is filtered from the current search term, so matching cards update as the user types.

## Technologies

- React
- JavaScript (ES modules)
- Vite
- CSS
