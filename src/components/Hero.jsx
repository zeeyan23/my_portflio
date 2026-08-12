function Hero() {
  return (
    <section
      id="home"
      className="hero"
      aria-labelledby="hero-heading"
    >
      <div className="container hero-wrapper">
        <div className="hero-content">
          <p className="hero-tag">👋 Hello, I'm</p>

          <h1 id="hero-heading">
            Mohammad Zeeyan
            <br />
            <span className="gradient-text">
              Full Stack Developer
            </span>
          </h1>

          <p className="hero-description">
            I’m a Full Stack Developer with 3+ years of experience
            building scalable web applications and modern digital
            experiences using React, JavaScript, Laravel, PHP,
            WordPress, Node.js, and MySQL.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="outline-btn">
              View Projects
            </a>

            <a href="#contact" className="outline-btn">
              Contact Me
            </a>
          </div>

          <div className="hero-info">
            <span>📍 Dubai, UAE</span>

            <span>💼 3+ Years Experience</span>

            <span>⚡ Available Immediately</span>
          </div>
        </div>

        <div className="hero-image" aria-hidden="true">
          <div className="profile-card">
            <div className="circle">
              <span>&lt;/&gt;</span>
            </div>

            <h2>Full Stack Developer</h2>

            <p>React • Laravel • Node.js • WordPress</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;