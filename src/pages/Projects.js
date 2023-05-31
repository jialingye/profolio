import './Project.css'

function Projects({ projects }) {
    //console.log(projects)
    return projects.map((project) => (
      <div className="project">
        <h1>{project.name}</h1>
        <img src={project.image} alt={project.name} />
        <div className='btns'>
            <a href={project.git}>
              <button>Github</button>
            </a>
            <a href={project.live}>
              <button>live site</button>
            </a>
        </div>
      </div>
    ));
  }
  
  export default Projects;