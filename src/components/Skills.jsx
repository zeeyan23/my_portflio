
const skillGroups = [
  {
    title: "IT & Website Administration",
    skills: [
      { name: "WordPress Administration", core: true },
      { name: "Website Maintenance", core: true },
      { name: "Hosting & Deployment", core: true },
      { name: "Domain & DNS Management", core: true },
      { name: "SSL Configuration", core: true },
      { name: "Website Backups" },
      { name: "Technical Troubleshooting", core: true },
    ],
  },
  {
    title: "Backend & Database Management",
    skills: [
      { name: "PHP", core: true },
      { name: "Laravel", core: true },
      { name: "MySQL", core: true },
      { name: "REST APIs", core: true },
      { name: "Database Management", core: true },
      { name: "Authentication & Access Control", core: true },
      { name: "Django" },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "JavaScript", core: true },
      { name: "React.js", core: true },
      { name: "HTML5", core: true },
      { name: "CSS3", core: true },
      { name: "Bootstrap", core: true },
      { name: "Tailwind CSS" },
    ],
  },
  {
    title: "SEO & Digital Platforms",
    skills: [
      { name: "Google Analytics", core: true },
      { name: "Google Search Console", core: true },
      { name: "Technical SEO", core: true },
      { name: "Website Performance Optimization", core: true },
      { name: "Sitemap Management" },
    ],
  },
  {
    title: "Development Tools & Familiar Technologies",
    skills: [
      { name: "Git", core: true },
      { name: "TypeScript" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "Firebase" },
      { name: "React Native" },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading">
      <div className="container">
        <div className="section-title">
          <h2 id="skills-heading">Technical Skills</h2>
          <p>
            Technical expertise across web development, website
            administration, databases, hosting, and digital platforms.
          </p>
        </div>

        <div className="skills-legend" aria-hidden="true">
          <span className="legend-dot" /> Core stack
        </div>

        <div className="skills-groups">
          {skillGroups.map((group) => (
            <article className="skills-group" key={group.title}>
              <h3 className="skills-group-title">{group.title}</h3>

              <ul className="skills-chips">
                {group.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className={skill.core ? "chip chip--core" : "chip"}
                  >
                    {skill.name}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
