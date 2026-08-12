function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          © {new Date().getFullYear()} Mohammad Zeeyan. All Rights Reserved.
        </p>

        <p>
          Full Stack Developer specializing in React, PHP, Laravel,
          WordPress, and modern web development.
        </p>
      </div>
    </footer>
  );
}

export default Footer;