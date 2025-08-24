import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import "./Navbar.css";
import { Link } from "react-router-dom";
import FadeContent from "../src/components/Animations/FadeContent/FadeContent";

const Navbar = () => {
  return (
    <FadeContent>
      {/* <nav className="navbar ">
        <div className="container">
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
      </nav> */}

       <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
            
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div>

              </div>
              <div className="collapse navbar-collapse " id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link Home" href="#Home">
                      Home <span class="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link About" href="#About">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link Skills" href="#Skills">
                      Skills
                    </a>
                  </li>
                   <li className="nav-item">
                    <a className="nav-link Projects"   href="#Projects">
                      Projects
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled Contact" href="#Contact">
                      contact
                    </a>
                  </li>
                  <li>
                       
                  </li>
                </ul>
              </div>
              <div className="socials">
                                  <a
                                    href="https://github.com/shams220"
                                    className="navLink"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <FaGithub  size={30} className="socialLinks"/>
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
            
            </nav>
    </FadeContent>
  );
};

export default Navbar;
