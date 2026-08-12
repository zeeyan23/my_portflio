function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-heading">
      <div className="container">
        <div className="section-title">
          <h2 id="about-heading">About Me</h2>
          <p>Full Stack Developer specializing in modern web development</p>
        </div>

        <div className="about-card card">
          <p>
            I am <strong>Mohammad Zeeyan</strong>, a Full Stack Developer with
            3+ years of experience building modern websites, web applications,
            and mobile applications.
          </p>

          <p>
            I specialize in <strong>React, JavaScript, Laravel, PHP, WordPress,
            Node.js</strong>, and database-driven applications. I enjoy
            transforming ideas into clean, scalable, responsive, and
            user-friendly digital solutions.
          </p>

          <p>
            My experience includes developing logistics platforms, custom
            WordPress websites, meeting scheduler systems, mobile applications,
            and business automation solutions for different business needs.
          </p>

          <div className="about-details">
            <div>
              <strong>Name</strong>
              <span>Mohammad Zeeyan</span>
            </div>

            <div>
              <strong>Role</strong>
              <span>Full Stack Developer</span>
            </div>

            <div>
              <strong>Location</strong>
              <span>Dubai, UAE</span>
            </div>

            <div>
              <strong>Status</strong>
              <span>Available Immediately</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;