const CV_FILE = "/Mohammad_Zeeyan_Full_Stack_Developer_CV.pdf"; // put the Full Stack CV in /public
const GITHUB_URL = "https://github.com/YOUR-USERNAME"; // FILL
const LINKEDIN_URL = "https://www.linkedin.com/in/mohammad-zeeyan/";

const facts = [
  { label: "Location", value: "Dubai, UAE" },
  { label: "Experience", value: "3+ years" },
  { label: "Core stack", value: "Laravel · PHP · JavaScript · React · MySQL" },
  { label: "Also", value: "WordPress · Django · REST APIs" },
  { label: "Availability", value: "Immediately, full-time" },
];

function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-heading">
      <div className="container hero-wrapper">
        <div className="hero-content">
          <p className="hero-tag">Hello, I'm</p>

          <h1 id="hero-heading">
            Mohammad Zeeyan
            <br />
            <span className="gradient-text">
              Software Developer in Dubai, UAE
            </span>
          </h1>

          <p className="hero-stack">
            Full Stack · Laravel · PHP · WordPress · React
          </p>

          <p className="hero-description">
            3+ years of experience building web applications, APIs,
            dashboards and business websites. Open to full-time Software
            Developer roles in the UAE.
          </p>

          <div className="hero-buttons">
            <a
              href={CV_FILE}
              className="hero-btn hero-btn--primary"
              download
            >
              Download CV
            </a>
            <a href="#projects" className="hero-btn hero-btn--outline">
              View Projects
            </a>
            <a href="#contact" className="hero-btn hero-btn--outline">
              Contact Me
            </a>
          </div>

          <div className="hero-links">
            {/* <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a> */}
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
          </div>
        </div>

        <aside className="hero-facts" aria-label="Quick facts">
          <h2 className="hero-facts-title">Quick facts</h2>
          <dl>
            {facts.map((fact) => (
              <div className="hero-fact" key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}

export default Hero;