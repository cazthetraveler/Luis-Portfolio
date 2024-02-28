import {Link} from "react-router-dom";

function Project({projects, category}) {
    const filterProjects = projects.filter((project) => project.category === category)
    return (
        <section className="project-display">
            {filterProjects.map((project) => {
                return(
                    <figure className="project-card" key={project.id}>
                        <img src={project.image.source} alt={project.image.alt} />
                        <div className="overlay">
                            <figcaption>{project.title}</figcaption>
                            <div className="project-links">
                            {project.links.repo && <Link target="_blank" to={project.links.repo}><i className="fa-brands fa-github"></i></Link>}
                                {project.links.deployed && <Link target="_blank" to={project.links.deployed}><i className="fa-solid fa-arrow-up-right-from-square"></i></Link>}
                            </div>
                        </div>
                    </figure>
                )
            })}
        </section>
    )
}
  
export default Project;