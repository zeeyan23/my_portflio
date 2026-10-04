const services = [
  {
    title: "Web applications",
    text: "Laravel, PHP, React and Django applications with MySQL, REST APIs and admin dashboards.",
  },
  {
    title: "Business websites",
    text: "Custom WordPress themes, plugins and Elementor builds, plus ongoing maintenance and optimization.",
  },
  {
    title: "Integrations and tools",
    text: "API integrations, scheduling systems and logistics platforms built around real business needs.",
    // FILL: only keep "scheduling" and "logistics" if you built them
  },
];

const details = [
  {
    label: "Education",
    value: "B.Tech in Computer Science, Srinivas University, Karnataka, India",
  },
  { label: "Languages", value: "English, Hindi, Urdu, Kannada" },
  { label: "Based in", value: "Dubai, UAE" },
  { label: "Looking for", value: "Full-time Software Developer roles in the UAE" },
];

function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-heading">
      <div className="container">
        <div className="section-title">
          <h2 id="about-heading">About Me</h2>
          <p>Software Developer who builds practical, reliable web products</p>
        </div>

        <div className="about-layout">
          <div className="about-story">
            <p>
              I'm <strong className="text-white">Mohammad Zeeyan</strong>, a Software Developer with
              3+ years of experience building web applications, APIs and
              business websites with{" "}
              <strong className="text-white">Laravel, PHP, React, WordPress and MySQL</strong>.
            </p>

            <p>
              I've worked on logistics websites, a job portal, scheduling
              systems and admin dashboards, turning business requirements into
              fast, maintainable and easy-to-use products. I'm comfortable on
              both the frontend and the backend, and I pick up new tools
              quickly when a project needs them.
            </p>

            <p>
              I'm based in Dubai and looking for a full-time role where I can
              keep building and growing with a strong engineering team.
            </p>

            <div className="about-actions">
              <a href="/Mohammad-Zeeyan-CV.pdf" className="about-btn" download>
                Download CV
              </a>
              <a href="#contact" className="about-link">
                Get in touch →
              </a>
            </div>
          </div>

          <aside className="about-panel" aria-label="Personal details">
            <dl>
              {details.map((item) => (
                <div className="about-detail" key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>

        <h3 className="about-subtitle">What I build</h3>
        <div className="about-services">
          {services.map((service) => (
            <article className="about-service" key={service.title}>
              <h4>{service.title}</h4>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;