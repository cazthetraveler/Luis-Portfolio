import { Link } from "react-router-dom";

import projects from "../projects";
import Project from "../components/Project";

function Photography() {
  return (
    <main id="photography-page">
      <h1>Photography</h1>
      <p>
        More of my photos can be found on
        <Link id="unsplash-link" to="https://unsplash.com/@lost_order">
          Unsplash
        </Link>
      </p>
      <Project projects={projects} category="photography" />
    </main>
  );
}

export default Photography;
