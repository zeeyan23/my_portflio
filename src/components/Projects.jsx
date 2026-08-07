import projects from "../data/projects";


function Projects(){


return (

<section id="projects">

<div className="container">


<div className="section-title">

<h2>
Projects
</h2>

<p>
Some projects I have worked on
</p>

</div>



<div className="projects-grid">


{
projects.map((project,index)=>(


<div 
className="project-card card"
key={index}
>


<div className="project-number">

0{index+1}

</div>



<h3>
{project.title}
</h3>



<p>
{project.description}
</p>



<div className="tech-list">


{
project.technologies.map((tech,i)=>(

<span key={i}>
{tech}
</span>

))

}


</div>



<a 
href={project.link}
className="project-link"
>

View Project →

</a>



</div>


))

}


</div>


</div>

</section>

)

}


export default Projects;