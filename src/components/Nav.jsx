import { Link, useLocation } from "react-router-dom";

function Nav({ isNavVisible, closeNav }) {
  const currentPage = useLocation().pathname;

  return (
    <nav className={isNavVisible ? "active" : ""}>
      <ul>
        <li>
          <Link
            className={currentPage === "/" ? "active-link" : ""}
            to="/"
            onClick={() => closeNav()}
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            className={currentPage === "/graphic-design" ? "active-link" : ""}
            to="/graphic-design"
            onClick={() => closeNav()}
          >
            GRAPHIC DESIGN
          </Link>
        </li>
        <li>
          <Link
            className={currentPage === "/photography" ? "active-link" : ""}
            to="https://luisolmosphotography.netlify.app/"
            onClick={() => closeNav()}
            target="_blank"
          >
            PHOTOGRAPHY
          </Link>
        </li>
        <li>
          <Link
            className={currentPage === "/web-dev" ? "active-link" : ""}
            to="/web-dev"
            onClick={() => closeNav()}
          >
            WEB DEVELOPMENT
          </Link>
        </li>
        <li>
          <Link
            className={currentPage === "/contact" ? "active-link" : ""}
            to="/contact"
            onClick={() => closeNav()}
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
