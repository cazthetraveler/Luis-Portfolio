import projects from "../projects";
import Project from "../components/Project";

function WebDev() {
    return (
      <main id="web-dev-page">
        <h1>Web Development</h1>
        <Project projects={projects} category="web-dev" />
      </main>
    )
  }
  
  export default WebDev;