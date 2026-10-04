import projects from "../data/projects";

const getDomain = (url) => {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "View project";
  }
};

function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading">
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
              key={project.title}
              className={`project-card${index === 0 ? " project-card--featured" : ""}`}
            >
              <header className="project-top">
                <span className="project-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="project-meta">
                  <span className="project-badge">{project.category}</span>
                  <span className="project-type">
                    {project.type} · {project.year}
                  </span>
                </div>
              </header>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-role">{project.role}</p>
              <p className="project-description">{project.description}</p>

              <ul className="project-highlights">
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <footer className="project-footer">
                <ul
                  className="project-tech"
                  aria-label={`Technologies used for ${project.title}`}
                >
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>

                {project.link && (
                  <a
                    href={project.link}
                    className="project-cta"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.title} (opens in a new tab)`}
                  >
                    {getDomain(project.link)}
                    <span aria-hidden="true">↗</span>
                  </a>
                )}
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;