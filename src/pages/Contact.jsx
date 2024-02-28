import { Link } from "react-router-dom";

function Contact() {
    return (
      <main id="contact-page">
        <h1>Contact</h1>
        <section className="contacts">
          <h2>Feel free to call or text my number!</h2>
          <div>
            <i className="fa-solid fa-phone"></i>
            <p>(830) 734-5019</p>
          </div>
        </section>
        <section className="contacts">
          <h2>Feel free to email me too!</h2>
          <div>
            <i className="fa-solid fa-envelope"></i>
            <p>olmos.luisd@outlook.com</p>
          </div>
        </section>
        <section className="contacts">
          <h2>Or check out my social media!</h2>
          <div className="socials">
            <Link target="_blank" to="https://www.instagram.com/olmos.luisd"><i className="fa-brands fa-instagram"></i></Link>
            <Link target="_blank" to="https://www.unsplash.com/@lost_order"><i className="fa-brands fa-unsplash"></i></Link>
            <Link target="_blank" to="https://www.linkedin.com/in/luis-olmos-266506204/"><i className="fa-brands fa-linkedin"></i></Link>
            <Link target="_blank" to="https://www.github.com/cazthetraveler"><i className="fa-brands fa-github"></i></Link>
          </div>
        </section>
      </main>
    )
  }
  
  export default Contact;