const experience = [
  {
    title: "Web Developer",
    company: "ZayasTech Solutions",
    location: "India",
    start: { label: "Mar 2024", iso: "2024-03" },
    end: { label: "Jan 2026", iso: "2026-01" },
    highlights: [
      "Developed and redesigned WordPress websites for multiple international clients, gathering requirements directly with them.",
      "Customized WordPress themes and plugins and built custom PHP functionality to match business requirements.",
      "Built responsive pages with Elementor and improved site speed, performance and user experience through optimization.",
      "Handled maintenance, feature enhancements, backups and troubleshooting for live client websites.",
      // Add a measurable result here if you have one, for example:
      // "Improved page load time on X sites from A s to B s"
    ],
    technologies: ["WordPress", "PHP", "Elementor", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Software Developer",
    company: "Aroha Group",
    location: "India",
    start: { label: "Jan 2022", iso: "2022-01" },
    end: { label: "Jan 2024", iso: "2024-01" },
    highlights: [
      "Developed and maintained dynamic web applications using PHP and Laravel.",
      "Built responsive interfaces with HTML, CSS, Bootstrap and JavaScript.",
      "Designed and integrated REST APIs and optimized MySQL database structures and queries.",
      "Fixed production bugs and improved application performance and reliability.",
      "Worked with designers and project managers, and took part in testing, deployment and maintenance.",
      // Add a measurable result here if you have one
    ],
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap", "REST APIs"],
  },
];

function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading">
      <div className="container">
        <div className="section-title">
          <h2 id="experience-heading">Professional Experience</h2>
          <p>3+ years building web applications and websites for real clients</p>
        </div>

        <ol className="exp-timeline">
          {experience.map((item) => (
            <li className="exp-item" key={`${item.company}-${item.start.iso}`}>
              <span className="exp-dot" aria-hidden="true" />

              <article className="exp-card">
                <header className="exp-header">
                  <div>
                    <h3 className="exp-title">{item.title}</h3>
                    <p className="exp-company">
                      {item.company} · {item.location}
                    </p>
                  </div>

                  <p className="exp-date">
                    <time dateTime={item.start.iso}>{item.start.label}</time>
                    {" – "}
                    <time dateTime={item.end.iso}>{item.end.label}</time>
                  </p>
                </header>

                <ul className="exp-highlights">
                  {item.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <ul
                  className="exp-tech"
                  aria-label={`Technologies used at ${item.company}`}
                >
                  {item.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Experience;