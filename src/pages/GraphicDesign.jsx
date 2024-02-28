import projects from "../projects";
import Project from "../components/Project";

function GraphicDesign() {
    return (
      <main id="graphic-design-page">
        <h1>Graphic Design</h1>
        <Project projects={projects} category="graphic-design" />
      </main>
    )
  }
  
  export default GraphicDesign;