
const services = [
  {
    title: "IT & Website Administration",
    text: "Website administration, WordPress maintenance, hosting management, domain and DNS configuration, SSL, backups and technical troubleshooting.",
  },
  {
    title: "Web Applications & Databases",
    text: "Business web applications, backend development, MySQL database management, REST API integrations and administrative dashboards using PHP and Laravel.",
  },
  {
    title: "Business Platforms & Integrations",
    text: "Business management platforms, membership systems, scheduling solutions, third-party API integrations and logistics applications.",
  },
  {
    title: "SEO & Digital Platforms",
    text: "Website optimization, technical SEO, Google Analytics, Google Search Console and website performance monitoring.",
  },
];

const details = [
  {
    label: "Education",
    value: "B.Tech in Computer Science, Srinivas University, Karnataka, India",
  },
  { label: "Languages", value: "English, Hindi, Urdu, Kannada" },
  { label: "Based in", value: "Dubai, UAE" },
  {
    label: "Looking for",
    value: "IT Administrator, ERP Support & Web Developer roles",
  },
];

function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-heading">
      <div className="container">
        <div className="section-title">
          <h2 id="about-heading">About Me</h2>
          <p>
            IT & Web Developer focused on business applications,
            website administration and digital platforms.
          </p>
        </div>

        <div className="about-layout">
          <div className="about-story">
            <p>
              I'm <strong className="text-white">Mohammad Zeeyan</strong>,
              an IT & Web Developer with 3+ years of experience in
              developing and maintaining web applications, managing
              databases, administering websites and troubleshooting
              technical issues. My technical background includes{" "}
              <strong className="text-white">
                PHP, Laravel, WordPress, MySQL, React and REST APIs
              </strong>.
            </p>

            <p>
              I've worked on business websites, logistics platforms,
              membership management systems and web applications.
              My experience includes backend development, database
              management, API integrations, website maintenance,
              hosting and deployment, and application troubleshooting.
            </p>

            <p>
              I also have experience with website optimization,
              SEO and Google digital platforms. I'm interested in
              opportunities where I can contribute to IT operations,
              business applications, website management and
              technology infrastructure while continuing to expand
              my expertise in enterprise systems and ERP platforms.
            </p>

            <div className="about-actions">
              <a
                href="/Mohammad_Zeeyan_IT_ERP_Administrator_CV.pdf"
                className="about-btn"
                download
              >
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

        <h3 className="about-subtitle">What I Can Do</h3>

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
