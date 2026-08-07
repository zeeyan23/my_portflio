function Experience(){

const experience=[
    {
        title:"Web Developer",
        company:"ZayasTech solution",
        duration:"2024 - 2026",

        description:"Developed and redesigned WordPress websites for multiple clients. Customized WordPress themes and plugins according to business requirements. Built custom PHP functionality and responsive pages using Elementor. Performed website maintenance, feature enhancements, backups, and troubleshooting. Improved website speed and user experience through performance optimization. Worked directly with international clients to gather requirements and deliver projects."
    },
    {
        title:"Software Developer",
        company:"Aroha Group",
        duration:"2022 - 2024",

        description:
        "Developed and maintained dynamic web applications using PHP and Laravel. Built responsive user interfaces using HTML, CSS, Bootstrap, and JavaScript. Designed and integrated REST APIs. Created and optimized MySQL database structures and queries. Fixed production bugs and improved application performance. Collaborated with designers and project managers to deliver client requirements. Participated in testing, deployment, and maintenance activities."
    }
];


return (
    <section id="experience">
        <div className="container">
            <div className="section-title">
                <h2>Experience</h2>
                <p>My professional journey</p>
            </div>
            <div className="timeline">
                {
                    experience.map((item,index)=>(
                        <div className="timeline-item" key={index}>
                            <div className="timeline-dot"></div>
                            <div className="card timeline-card">
                                <h3>{item.title}</h3>
                                <h4>{item.company}</h4>
                                <span>{item.duration}</span>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
    )
}


export default Experience;