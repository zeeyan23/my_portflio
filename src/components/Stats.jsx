function Stats(){

const stats=[
 {
  number:"3+",
  label:"Years Experience"
 },
 {
  number:"20+",
  label:"Projects Completed"
 },
 {
  number:"10+",
  label:"Technologies"
 },
 {
  number:"100%",
  label:"Client Satisfaction"
 }
];


return (

<section className="stats">

<div className="container stats-grid">


{
stats.map((item,index)=>(

<div 
className="card stat-card"
key={index}
>

<h3>
{item.number}
</h3>

<p>
{item.label}
</p>

</div>

))
}


</div>

</section>

)

}


export default Stats;