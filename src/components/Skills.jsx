// core: true = skills you use confidently day to day (highlighted)
const skillGroups = [
  {
    title: "Backend",
    skills: [
      { name: "PHP", core: true },
      { name: "Laravel", core: true },
      { name: "REST APIs", core: true },
      { name: "Django", core: true },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", core: true },
      { name: "JavaScript", core: true },
      { name: "HTML5", core: true },
      { name: "CSS3", core: true },
      { name: "Bootstrap", core: true },
      { name: "Tailwind CSS" },
    ],
  },
  {
    title: "WordPress",
    skills: [
      { name: "WordPress", core: true },
      { name: "Custom themes & plugins", core: true },
      { name: "Elementor", core: true },
    ],
  },
  {
    title: "Database & Tools",
    skills: [
      { name: "MySQL", core: true },
      { name: "Git", core: true },
    ],
  },
  {
    title: "Familiar with",
    skills: [
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
          <p>Technologies and tools I use to build web applications and websites</p>
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