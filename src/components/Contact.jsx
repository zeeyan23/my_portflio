function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <div className="section-title">
          <h2 id="contact-heading">Contact Me</h2>
          <p>Let's work together on your next project</p>
        </div>

        <div className="contact-card card">
          <h3>Have a project in mind?</h3>

          <p>
            I'm open to full-time software development opportunities,
            freelance web development projects, and collaborations.
          </p>

          <div className="contact-links">
            <a
              href="mailto:zeeyanraza444@gmail.com"
              aria-label="Email Mohammad Zeeyan"
            >
              📧 zeeyanraza444@gmail.com
            </a>

            <a
              href="tel:+971562539244"
              aria-label="Call Mohammad Zeeyan"
            >
              +971 56 253 9244
            </a>

            <a
              href="https://www.linkedin.com/in/mohammad-zeeyan/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Mohammad Zeeyan on LinkedIn"
            >
              LinkedIn Profile
            </a>
          </div>

          <a
            href="mailto:zeeyanra444@gmail.com"
            className="btn"
            aria-label="Send an email to Mohammad Zeeyan"
          >
            Send Message
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;