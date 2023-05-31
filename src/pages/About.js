import './About.css'
function About({ about }) {
  console.log(about)
    return (
      <div className="about">
        <h2>{about.name}</h2>
        <img src={about.headshot} alt={about.name} />
        <h3>{about.email}</h3>
        <p>{about.bio}</p>
      </div>
    );
  }
  
  export default About;