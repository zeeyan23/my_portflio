function Hero(){
  return (
  <section id="home" className="hero">
    <div className="container hero-wrapper">
      <div className="hero-content">
        <p className="hero-tag">👋 Hello, I'm</p>
        <h1>Mohammad Zeeyan
          <br/>
          <span className="gradient-text">Full Stack Developer</span>
        </h1>
        <p className="hero-description">
          I build scalable web applications and modern digital
          experiences using React, Laravel, PHP, WordPress and
          other latest technologies.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="outline-btn"> View Projects </a>
          <a href="#contact" className="outline-btn"> Contact Me </a>
        </div>
        <div className="hero-info">
          <span>
          📍 Dubai, UAE
          </span>
          <span>
          💼 3+ Years Experience
          </span>
          <span>
          ⚡ Available Immediately
          </span>
        </div>
      </div>
      <div className="hero-image">
        <div className="profile-card">
          <div className="circle">
            <span>
              &lt;/&gt;
            </span>
          </div>
          <h3>Full Stack Developer</h3>
          <p>React • Laravel • Node • WordPress</p>
        </div>
      </div>
    </div>
  </section>
  );
}


export default Hero;