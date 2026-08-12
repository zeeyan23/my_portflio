import projects from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
    >
      <div className="container">
        <div className="section-title">
          <h2 id="projects-heading">Web Development Projects</h2>

          <p>
            A selection of web applications and websites I have developed
            using modern web technologies.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              className="project-card card"
              key={project.title || index}
            >
              <div
                className="project-number"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div
                className="tech-list"
                aria-label={`Technologies used for ${project.title}`}
              >
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} project`}
                >
                  View Project →
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;