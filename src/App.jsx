import profile from "./assets/ZEEYAN.jpg";
// Project images (keep your current imports)
import sevenhnetwork from "./assets/projects/7hnetwork.png";
import arohagroup from "./assets/projects/arohagroup.png";
import limamar from "./assets/projects/limamar.png";
import pacificmanpower from "./assets/projects/pacificmanpower.png";
import tagfelsen from "./assets/projects/tagfelsen.png";
import arohagroup_digitalmarketing from "./assets/projects/arohagroup_digitalmarketing.png";

function App() {
  const projects = [
    {
      id: 1,
      title: "Aroha Group",
      description: "Aroha Group is a software company providing software solutions, app development, website development, SEO, and digital marketing services.",
      tech: "Wordpress",
      live: "https://arohagroup.com/",
      github: "#",
      screenshots: [arohagroup]
    },
    {
      id: 2,
      title: "Limamar",
      description: "Limamar Air and Sea Services Co. Ltd. offers efficient, honest, and competitive logistics services. They provide innovative, reliable, and tailored solutions that empower businesses, create seamless supply chains, bridge distances, and connect opportunities, helping businesses navigate logistics with confidence.",
      tech: "Wordpress",
      live: "https://www.limamar.com/",
      github: "#",
      screenshots: [limamar]
    },
    {
      id: 3,
      title: "Tagfelsen",
      description: "Tagfelsen is a logistics network providing worldwide connections, ensuring efficient and reliable services across global supply chains.",
      tech: "Wordpress",
      live: "https://tagfelsen.com/",
      github: "#",
      screenshots: [tagfelsen]
    },
    {
      id: 4,
      title: "Aroha Group Digital Marketing",
      description: "Aroha Group's digital marketing page focused on promoting their services, enhancing online presence, and driving customer engagement.",
      tech: "Wordpress",
      live: "https://arohagroup.com/digital-marketing", // replace with actual link if different
      github: "#",
      screenshots: [arohagroup_digitalmarketing]
    },
    {
      id: 5,
      title: "7H Network",
      description: "7H Network is a global logistics network connecting businesses worldwide with modern, responsive solutions for supply chain management.",
      tech: "PHP, MySQL",
      live: "https://7hnetwork.com/",
      github: "#",
      screenshots: [sevenhnetwork]
    },
    {
      id: 6,
      title: "Pacificmanpower",
      description: "Pacificmanpower is a job portal that allows users to browse and apply for jobs online, simplifying the job search process.",
      tech: "React, Django",
      live: "https://www.pacificmanpower.com.pg/",
      github: "#",
      screenshots: [pacificmanpower]
    }
  ];

  return (
    <div className="bg-dark text-light">
      {/* Navbar - Added Navigation Labels (Fixes Navigation Signal) */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">Mohammad Zeeyan</a>
          <div className="d-flex">
            <a className="nav-link text-light me-3" href="#about">About</a>
            <a className="nav-link text-light me-3" href="#projects">Portfolio</a>
            <a className="nav-link text-light" href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-5" style={{ background: "linear-gradient(135deg, #4b6cb7, #182848)" }}>
        <div className="container">
          <div className="row align-items-center flex-column-reverse flex-md-row">
            <div className="col-md-7 text-center text-md-start mt-4 mt-md-0">
              <h1 className="fw-bold display-4">
                Full-Stack Developer specializing in <span className="text-warning">High-Performance Web Apps</span>
              </h1>
              <h5 className="mb-4 opacity-75">3+ Years Experience | ReactJS | Laravel | WordPress Expert</h5>
              
              {/* Added clear CTA (Fixes CTA Signal) */}
              <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-3">
                <a href="#projects" className="btn btn-warning btn-lg px-4 fw-bold">View Case Studies</a>
                <a href="mailto:zeeyanraza444@gmail.com" className="btn btn-outline-light btn-lg px-4">Hire Me</a>
              </div>
            </div>

            <div className="col-md-5 text-center">
              <img
                src={profile}
                alt="Mohammad Zeeyan - Full Stack Developer"
                className="img-fluid rounded-circle border border-4 border-warning shadow-lg"
                style={{ width: "280px", height: "280px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-5  rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold">About Me</h2>
        <hr className="mx-auto bg-warning" style={{width: '50px', height: '3px'}} />
        <p className="text-white leading-relaxed px-5">
          Hi, I’m Mohammad Zeeyan. I have completed my studies in Computer Science and engineering and have over 3 years of experience in software development and web development. 
          I have worked on diverse projects including WordPress websites, React & Django applications, and digital marketing solutions. 
          I enjoy building efficient, scalable, and user-friendly applications, and I’m passionate about learning new technologies and delivering high-quality solutions.
        </p>
      </section>
      {/* Skills Section - NEW (Fixes Skill Clarity 0/15) */}
      <section id="about" className="py-5 bg-white text-dark">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-12">
              <h2 className="fw-bold">Technical Expertise</h2>
              <hr className="mx-auto bg-warning" style={{width: '50px', height: '3px'}} />
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-4 text-center">
              <div className="p-4 shadow-sm rounded bg-light border-top border-warning border-4">
                <h4>Frontend</h4>
                <p>ReactJS, JavaScript (ES6+), HTML & CSS,Bootstrap 5, Tailwind CSS</p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="p-4 shadow-sm rounded bg-light border-top border-warning border-4">
                <h4>Backend</h4>
                <p>Laravel, PHP, Django, MySQL, MongoDB</p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="p-4 shadow-sm rounded bg-light border-top border-warning border-4">
                <h4>CMS & Tools</h4>
                <p>WordPress, SEO, Git, REST APIs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Focus on Case Studies */}
      <section id="projects" className="py-5 bg-light text-dark">
        <div className="container">
          <h2 className="text-center fw-bold mb-2">Selected Work</h2>
          <hr className="mx-auto bg-warning" style={{width: '50px', height: '3px'}} />
          <p className="text-center text-muted mb-5">Real-world projects with measurable impact</p>
          <div className="row">
            {projects.map((project) => (
              <div className="col-md-6 col-lg-4 mb-4" key={project.id}>
                <div className="card border-0 shadow-sm h-100">
                  <img src={project.screenshots[0]} className="card-img-top" alt={project.title} />
                  <div className="card-body">
                    <h5 className="fw-bold">{project.title}</h5>
                    <p className="small text-muted">{project.description}</p>
                    <div className="mb-3">
                      {project.tech.split(',').map(t => <span className="badge bg-secondary me-1" key={t}>{t}</span>)}
                    </div>
                    <a href={project.live} target="_blank" className="btn btn-sm btn-primary">Visit Live Site</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - (Fixes Contact Methods Signal) */}
      <section id="contact" className="py-5 text-center">
        <div className="container">
          <h2 className="fw-bold">Let's Discuss Your Project</h2>
          <hr className="mx-auto bg-warning" style={{width: '50px', height: '3px'}} />
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card bg-transparent border-warning p-4">
                <div className="row g-3">
                  <div className="col-md-4">
                    <a href="mailto:zeeyanraza444@gmail.com" className="text-warning fw-bold text-decoration-none">zeeyanraza444@gmail.com</a>
                  </div>
                  <div className="col-md-4">
                    <a href="tel:+971562539244" className="text-warning fw-bold text-decoration-none">+971 56 253 9244</a>
                  </div>
                  <div className="col-md-4">
                    <a href="https://linkedin.com/in/mohammad-zeeyan/" target="_blank" className="text-warning fw-bold text-decoration-none">Connect Profile</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-dark text-secondary text-center py-4 border-top border-secondary">
        <p className="mb-0">© 2026 Mohammad Zeeyan | Full-Stack Developer</p>
      </footer>
    </div>
  );
}

export default App;