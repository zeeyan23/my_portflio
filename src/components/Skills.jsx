function Skills(){

const skills=[

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
"Firebase"

];


return (

<section id="skills">

<div className="container">


<div className="section-title">

<h2>
Skills
</h2>

<p>
Technologies I work with
</p>

</div>


<div className="skills-grid">


{
skills.map((skill,index)=>(

<div 
className="skill-card card"
key={index}
>

{skill}

</div>

))

}


</div>


</div>

</section>

)

}


export default Skills;