const EMAIL = "zeeyanraza444@gmail.com";
const PHONE_DISPLAY = "+971 56 253 9244";
const PHONE_LINK = "+971562539244";
const WHATSAPP_NUMBER = "971562539244";
const LINKEDIN_URL = "https://www.linkedin.com/in/mohammad-zeeyan/";
const GITHUB_URL = "https://github.com/YOUR-USERNAME"; // FILL, or remove the GitHub entry below
const CV_FILE = "/Mohammad_Zeeyan_Full_Stack_Developer_CV.pdf";

const OPEN_TO_FREELANCE = false; // set to true to mention freelance work

const mailSubject = encodeURIComponent("Software Developer opportunity");
const whatsappText = encodeURIComponent(
  "Hi Zeeyan, I came across your portfolio and would like to talk."
);

const Icon = ({ children }) => (
  <svg
    className="contact-icon"
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const methods = [
  {
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}?subject=${mailSubject}`,
    icon: (
      <Icon>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </Icon>
    ),
  },
  {
    label: "WhatsApp",
    value: PHONE_DISPLAY,
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`,
    external: true,
    icon: (
      <Icon>
        <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.7-5.4A8.4 8.4 0 1 1 21 11.5Z" />
      </Icon>
    ),
  },
  {
    label: "Phone",
    value: PHONE_DISPLAY,
    href: `tel:${PHONE_LINK}`,
    icon: (
      <Icon>
        <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
      </Icon>
    ),
  },
  {
    label: "LinkedIn",
    value: "mohammad-zeeyan",
    href: LINKEDIN_URL,
    external: true,
    icon: (
      <Icon>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 11v5M8 8v.01M12 16v-5m0 2.5a2.5 2.5 0 0 1 5 0V16" />
      </Icon>
    ),
  },
  // {
  //   label: "GitHub",
  //   value: "github.com/YOUR-USERNAME", // FILL
  //   href: GITHUB_URL,
  //   external: true,
  //   icon: (
  //     <Icon>
  //       <path d="M9 19c-4 1.2-4-2-6-2.5m12 4.5v-3.5a3 3 0 0 0-.8-2.3c2.8-.3 5.8-1.4 5.8-6.2a4.8 4.8 0 0 0-1.3-3.3 4.5 4.5 0 0 0-.1-3.3s-1-.3-3.4 1.3a11.7 11.7 0 0 0-6.2 0C6.6 3.1 5.6 3.4 5.6 3.4a4.5 4.5 0 0 0-.1 3.3A4.8 4.8 0 0 0 4.2 10c0 4.8 3 5.9 5.8 6.2A3 3 0 0 0 9.200 18.500V21" />
  //     </Icon>
  //   ),
  // },
];

function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <div className="section-title">
          <h2 id="contact-heading">Contact Me</h2>
          <p>Open to full-time Software Developer roles in the UAE</p>
        </div>

        <div className="contact-layout">
          <div className="contact-intro">
            <p className="contact-status">
              <span className="contact-status-dot" aria-hidden="true" />
              Available immediately
            </p>

            <h3 className="contact-headline">Let's talk about your team's next hire</h3>

            <p className="contact-text">
              I'm a Software Developer based in Dubai with 3+ years of
              experience in Laravel, PHP, React and WordPress. If you have an
              opening that fits, send me a message or call me
              {OPEN_TO_FREELANCE ? ", and I'm also open to freelance projects" : ""}.
            </p>

            <div className="contact-buttons">
              <a
                href={`mailto:${EMAIL}?subject=${mailSubject}`}
                className="contact-btn contact-btn--primary"
              >
                Send Email
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`}
                className="contact-btn contact-btn--outline"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message me on WhatsApp (opens in a new tab)"
              >
                WhatsApp
              </a>
              <a href={CV_FILE} className="contact-btn contact-btn--outline" download>
                Download CV
              </a>
            </div>

            <p className="contact-note">Usually responds within 24 hours</p>
          </div>

          <ul className="contact-methods">
            {methods.map((method) => (
              <li key={method.label}>
                <a
                  href={method.href}
                  className="contact-method"
                  {...(method.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  aria-label={`${method.label}: ${method.value}${
                    method.external ? " (opens in a new tab)" : ""
                  }`}
                >
                  <span className="contact-method-icon">{method.icon}</span>
                  <span className="contact-method-text">
                    <span className="contact-method-label">{method.label}</span>
                    <span className="contact-method-value">{method.value}</span>
                  </span>
                  <span className="contact-method-arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              </li>
            ))}

            <li className="contact-location">
              <span className="contact-method-icon">
                <Icon>
                  <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.800 7 11 7 11Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </Icon>
              </span>
              <span className="contact-method-text">
                <span className="contact-method-label">Location</span>
                <span className="contact-method-value">Dubai, UAE</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;