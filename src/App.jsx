import profile from "./assets/ZEEYAN.jpg";

// Project images
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
      screenshots: [arohagroup]
    },
    {
      id: 2,
      title: "Limamar",
      description: "Limamar Air and Sea Services Co. Ltd. offers efficient, honest, and competitive logistics services. They provide innovative, reliable, and tailored solutions that empower businesses, create seamless supply chains, bridge distances, and connect opportunities, helping businesses navigate logistics with confidence.",
      tech: "Wordpress",
      live: "https://www.limamar.com/",
      screenshots: [limamar]
    },
    {
      id: 3,
      title: "Tagfelsen",
      description: "Tagfelsen is a logistics network providing worldwide connections, ensuring efficient and reliable services across global supply chains.",
      tech: "Wordpress",
      live: "https://tagfelsen.com/",
      screenshots: [tagfelsen]
    },
    {
      id: 4,
      title: "Arohagroup Digital Marketing Page",
      description: "Aroha Group's digital marketing page focused on promoting their services, enhancing online presence, and driving customer engagement.",
      tech: "Wordpress",
      live: "https://arohagroup.com/aroha-group-digital-marketing-that-grows-your-business/",
      screenshots: [arohagroup_digitalmarketing]
    },
    {
      id: 5,
      title: "7H Network",
      description: "7H Network is a global logistics network connecting businesses worldwide with modern, responsive solutions for supply chain management.",
      tech: "PHP, MySQL",
      live: "https://7hnetwork.com/",
      screenshots: [sevenhnetwork]
    },
    {
      id: 6,
      title: "Pacificmanpower",
      description: "Pacificmanpower is a job portal that allows users to browse and apply for jobs online, simplifying the job search process.",
      tech: "React, Django",
      live: "https://www.pacificmanpower.com.pg/",
      screenshots: [pacificmanpower]
    }
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container">
          <span className="navbar-brand fw-bold">Mohammad Zeeyan</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-5 text-light" style={{ background: "linear-gradient(135deg, #4b6cb7, #182848)" }}>
        <div className="container">
          <div className="row align-items-center flex-column-reverse flex-md-row">
            {/* Text */}
            <div className="col-md-6 text-center text-md-start mt-4 mt-md-0">
              <h1 className="fw-bold display-5">
                Hi, I'm <span className="text-warning">Mohammad Zeeyan</span>
              </h1>
              <h5 className="mb-3">FullStack Developer | Wordpress | ReactJS | Laravel</h5>
              <p>3+ years of experience building scalable web applications for startups and freelance clients.</p>
              <a href="#projects" className="btn btn-warning me-2 mb-2">View Projects</a>
              <a href="#contact" className="btn btn-outline-light mb-2">Contact</a>
            </div>

            {/* Profile Image */}
            <div className="col-md-6 text-center">
              <img
                src={profile}
                alt="Profile"
                className="img-fluid rounded-circle border border-3 border-light shadow"
                style={{ width: "220px", height: "220px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4 text-white">About Me</h2>
          <p className="mx-auto text-white" style={{ maxWidth: "700px" }}>
            I specialize in WordPress, React, JavaScript, Laravel and modern web technologies. I focus on building clean, efficient and user-friendly applications with scalable architecture.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Projects</h2>
          <div className="row">
            {projects.map((project) => (
              <div className="col-sm-6 col-lg-4 mb-4" key={project.id}>
                <div className="card border-0 shadow h-100">
                  <img
                    src={project.screenshots[0]}
                    className="card-img-top"
                    alt={project.title}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <p className="mb-3"><strong>Tech:</strong> {project.tech}</p>
                    <div className="mt-auto d-flex justify-content-between flex-wrap">
                      <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm mb-1">Live</a>
                      <button className="btn btn-outline-secondary btn-sm mb-1" data-bs-toggle="modal" data-bs-target={`#modal${project.id}`}>
                        Screenshots
                      </button>
                    </div>
                  </div>

                  {/* Modal Carousel */}
                  <div className="modal fade" id={`modal${project.id}`} tabIndex="-1">
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5>{project.title} Screenshots</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                          <div id={`carousel${project.id}`} className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                              {project.screenshots.map((img, idx) => (
                                <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={idx}>
                                  <img src={img} className="d-block w-100" alt={`Screenshot ${idx+1}`} />
                                </div>
                              ))}
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target={`#carousel${project.id}`} data-bs-slide="prev">
                              <span className="carousel-control-prev-icon"></span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target={`#carousel${project.id}`} data-bs-slide="next">
                              <span className="carousel-control-next-icon"></span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4 text-white">Contact</h2>
          <p className="text-white">
            Email:{" "}
            <a
              href="mailto:zeeyanraza444@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-300"
            >
              zeeyanraza444@gmail.com
            </a>
          </p>
          <p className="text-white">
            Phone:{" "}
            <a
              href="tel:+971562539244"
              className="underline hover:text-gray-300"
            >
              +971 56 253 9244
            </a>
          </p>
          <p className="text-white">
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/mohammad-zeeyan/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-300"
            >
              Mohammad Zeeyan
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        © 2026 Mohammad Zeeyan
      </footer>
    </>
  );
}

export default App;