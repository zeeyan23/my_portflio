function Skills() {
  const skills = [
    "React.js",
    "React Native",
    "JavaScript",
    "TypeScript",
    "PHP",
    "Laravel",
    "WordPress",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Django",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Tailwind CSS",
    "Git",
    "Firebase",
  ];

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
    >
      <div className="container">
        <div className="section-title">
          <h2 id="skills-heading">Technical Skills</h2>

          <p>
            Technologies and tools I use to build modern web and
            mobile applications.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div
              className="skill-card card"
              key={skill}
              role="listitem"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;