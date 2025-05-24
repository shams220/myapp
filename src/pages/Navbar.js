import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import "../Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        {/* <div className="bar">
          <Link className="Home" to="/">Home</Link>
          <Link className='About' to='/About'>About me </Link>
          <Link  className ='Contact' to="/contact">Contact</Link>
          {/* <Link to="/getintouch">Get In Touch</Link> */}
        {/* <Link to="/recentwork">Recent work</Link> */}

        {/* <Link className="Projects" to="/Projects">
          Projects
        </Link> */}
        {/* </div> */}
       <div className="navbarHalf">
 <a href="#Home" className="Home">
          Home
        </a>
        <a href="#About" className="About">
          About me
        </a>
        <a href="#Skills" className="Skills">
          Skills
        </a>
        <a href="#Projects" className="Projects">
          Projects
        </a>
        <a href="#Contact" className="Contact">
          Contact
        </a>
       </div>
        <div className="socials">
          <a
            href="https://github.com/shams220"
            className="navLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/shams-alam22/"
            className="navLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://x.com/shamsal00256049"
            className="navLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
