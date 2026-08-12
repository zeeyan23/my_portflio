function Experience() {
  const experience = [
    {
      title: "Web Developer",
      company: "ZayasTech Solution",
      duration: "2024 - 2026",
      description:
        "Developed and redesigned WordPress websites for multiple clients. Customized WordPress themes and plugins according to business requirements. Built custom PHP functionality and responsive web pages using Elementor. Performed website maintenance, feature enhancements, backups, and troubleshooting. Improved website speed, performance, and user experience through optimization. Worked directly with international clients to gather requirements and deliver web development projects.",
    },
    {
      title: "Software Developer",
      company: "Aroha Group",
      duration: "2022 - 2024",
      description:
        "Developed and maintained dynamic web applications using PHP and Laravel. Built responsive user interfaces using HTML, CSS, Bootstrap, and JavaScript. Designed and integrated REST APIs and optimized MySQL database structures and queries. Fixed production bugs and improved application performance. Collaborated with designers and project managers to deliver client requirements. Participated in application testing, deployment, and maintenance.",
    },
  ];

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
    >
      <div className="container">
        <div className="section-title">
          <h2 id="experience-heading">Professional Experience</h2>
          <p>My professional journey in web and software development</p>
        </div>

        <div className="timeline">
          {experience.map((item, index) => (
            <article className="timeline-item" key={index}>
              <div className="timeline-dot" aria-hidden="true"></div>

              <div className="card timeline-card">
                <h3>{item.title}</h3>

                <h4>{item.company}</h4>

                <time>{item.duration}</time>

                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;