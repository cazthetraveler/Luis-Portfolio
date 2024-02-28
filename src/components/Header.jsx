import { Link } from "react-router-dom";

function Header({toggleNav}) {
  return (
    <header>
      <button id="nav-button" onClick={toggleNav}><i className="fa-solid fa-bars"></i></button>
      <h1>Luis Olmos</h1>
      <div id="social-links">
        <Link target="_blank" to="https://www.linkedin.com/in/luis-olmos-266506204/"><i className="fa-brands fa-linkedin"></i></Link>
        <Link target="_blank" to="https://www.github.com/cazthetraveler"><i className="fa-brands fa-github"></i></Link>
      </div>
    </header>
  )
}

export default Header;