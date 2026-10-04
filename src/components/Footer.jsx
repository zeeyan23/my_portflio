const GITHUB_URL = ""; // FILL with your GitHub URL; while empty, the link is hidden
const LINKEDIN_URL = "https://www.linkedin.com/in/mohammad-zeeyan/";
const EMAIL = "zeeyanraza444@gmail.com";
const CV_FILE = "/Mohammad-Zeeyan-CV.pdf";

const navLinks = [
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const connectLinks = [
  { name: "Email", href: `mailto:${EMAIL}` },
  { name: "LinkedIn", href: LINKEDIN_URL, external: true },
  { name: "GitHub", href: GITHUB_URL, external: true },
  { name: "Download CV", href: CV_FILE, download: true },
].filter((link) => link.href);

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" className="footer-logo" aria-label="Back to top">
              Zeeyan<span>.</span>
            </a>
            <p className="footer-tagline">
              Software Developer in Dubai building web applications and
              websites with Laravel, PHP, React and WordPress.
            </p>
            <p className="footer-status">
              <span className="footer-status-dot" aria-hidden="true" />
              Open to full-time roles in the UAE
            </p>
          </div>

          <nav className="footer-col" aria-label="Footer navigation">
            <h2 className="footer-heading">Explore</h2>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-col">
            <h2 className="footer-heading">Connect</h2>
            <ul>
              {connectLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    {...(link.download ? { download: true } : {})}
                  >
                    {link.name}
                    {link.external && <span aria-hidden="true"> ↗</span>}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Mohammad Zeeyan. All rights reserved.
          </p>

          <a href="#home" className="footer-top">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;