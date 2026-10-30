
const experience = [
  {
    title: "Web Developer",
    company: "ZayasTech Solutions",
    location: "India",
    start: { label: "Mar 2024", iso: "2024-03" },
    end: { label: "Jan 2026", iso: "2026-01" },
    highlights: [
      "Developed, redesigned and maintained WordPress websites for international clients based on business requirements.",
      "Customized WordPress themes, plugins and developed custom PHP functionality to extend website capabilities.",
      "Managed website maintenance, troubleshooting, backups, plugin updates and technical issue resolution.",
      "Configured and maintained website hosting environments, domains, DNS and SSL where required.",
      "Built responsive interfaces using Elementor, HTML, CSS and JavaScript.",
      "Improved website performance, loading speed, user experience and search engine optimization.",
      "Supported website monitoring and performance analysis using Google Analytics and Google Search Console."
    ],
    technologies: [
      "WordPress",
      "PHP",
      "Elementor",
      "JavaScript",
      "HTML",
      "CSS",
      "SEO",
      "Google Analytics"
    ],
  },
  {
    title: "Software Developer",
    company: "Aroha Group",
    location: "India",
    start: { label: "Jan 2022", iso: "2022-01" },
    end: { label: "Jan 2024", iso: "2024-01" },
    highlights: [
      "Developed and maintained business web applications using PHP and Laravel.",
      "Designed, managed and optimized MySQL databases, database structures and queries.",
      "Developed and integrated REST APIs for communication between application components and external services.",
      "Implemented authentication, user management and application-level access controls.",
      "Troubleshot application errors, resolved production issues and improved system performance and reliability.",
      "Developed responsive user interfaces using HTML, CSS, Bootstrap and JavaScript.",
      "Participated in application testing, deployment, maintenance and ongoing technical support."
    ],
    technologies: [
      "PHP",
      "Laravel",
      "MySQL",
      "JavaScript",
      "Bootstrap",
      "REST APIs",
      "HTML",
      "CSS"
    ],
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