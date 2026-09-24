import React, { useEffect, useState } from "react";
import "./project.css";

const projects = [
  {
    title: "Gym Assistant",
    image: "/projects/gym%20assistant.png",
    description:
      "A fitness-focused web application designed to help users manage workouts, exercises, and fitness routines through a simple interface.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "#",
    demo: "#",
  },

  {
    title: "Personal Portfolio",
    image: "/projects/portfloio.png",
    description:
      "A responsive personal portfolio website showcasing my skills, projects, certificates, education, and experience.",
    technologies: ["React", "JavaScript", "Bootstrap", "CSS"],
    github: "#",
    demo: "#",
  },

  {
    title: "Rock Paper Scissors",
    image: "/projects/rock%20paper.png",
    description:
      "An interactive browser-based Rock Paper Scissors game built with JavaScript, including score tracking and computer interaction.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "#",
    demo: "#",
  },

  {
    title: "Amazon Clone",
    image: "/projects/amazon.png",
    description:
      "A front-end e-commerce website inspired by modern shopping platforms, created to practice product layouts and responsive design.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "#",
    demo: "#",
  },

  {
    title: "Calculator App",
    image: "/projects/calculator.png",
    description:
      "A multifunctional calculator application featuring basic calculations, EMI calculation, discount calculation, and unit conversion.",
    technologies: ["JavaScript", "HTML", "CSS"],
    github: "#",
    demo: "#",
  },

  {
    title: "AI Projects",
    image: "/projects/ai%20solution.png",
    description:
      "A collection of projects and experiments exploring artificial intelligence, generative AI, automation, and AI-powered applications.",
    technologies: ["Python", "AI", "Generative AI"],
    github: "#",
    demo: "#",
  },
];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    "All",
    ...new Set(projects.flatMap((project) => project.technologies)),
  ];

  const filteredProjects = projects.filter(
    (project) =>
      activeFilter === "All" || project.technologies.includes(activeFilter)
  );

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = selectedProject ? "hidden" : "";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <section className="projects-section" id="projects">
      <div className="container">

        <div className="projects-heading text-center">
          <span className="projects-tag">MY WORK</span>

          <h1>
            Featured <span>Projects</span>
          </h1>

          <p>
            Explore some of the projects I have created while learning
            web development, programming, React, JavaScript, and AI.
          </p>
        </div>

        <div className="project-filters" role="group" aria-label="Filter projects">
          {filters.map((filter) => (
            <button
              className={activeFilter === filter ? "active" : ""}
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="row g-4">

          {filteredProjects.map((project) => {
            const projectIndex = projects.indexOf(project);

            return (
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              key={project.title}
            >

              <article
                className="project-card"
                onClick={() => setSelectedProject(project)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setSelectedProject(project);
                  }
                }}
                tabIndex="0"
                role="button"
                aria-label={`View details for ${project.title}`}
              >

                {/* Project Image */}
                <div className="project-image-container">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />

                  <div className="project-image-overlay">
                    <span>View Details</span>
                  </div>

                </div>

                {/* Project Information */}
                <div className="project-content">

                  <span className="project-number">
                    PROJECT {String(projectIndex + 1).padStart(2, "0")}
                  </span>

                  <h2>{project.title}</h2>

                  <p>{project.description}</p>

                  {/* Technologies */}
                  <div className="technology-list">

                    {project.technologies.map(
                      (technology, techIndex) => (
                        <span key={techIndex}>
                          {technology}
                        </span>
                      )
                    )}

                  </div>

                  {/* Buttons */}
                  <div className="project-buttons">
                    <button
                      type="button"
                      className="details-btn"
                      onClick={(event) => {
                        event.stopPropagation();
                        setSelectedProject(project);
                      }}
                    >
                      View Details
                    </button>
                  </div>

                </div>

              </article>

            </div>
            );
          })}

        </div>

        {filteredProjects.length === 0 && (
          <p className="no-projects">No projects found for this technology.</p>
        )}

      </div>

      {selectedProject && (
        <div
          className="project-modal"
          role="presentation"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="project-modal-content"
            role="dialog"
            aria-modal="true"
            aria-labelledby="selected-project-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="project-modal-close"
              type="button"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
            >
              ×
            </button>
            <img src={selectedProject.image} alt={selectedProject.title} />
            <div className="project-modal-body">
              <span className="project-number">PROJECT DETAILS</span>
              <h2 id="selected-project-title">{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
              <div className="technology-list">
                {selectedProject.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;