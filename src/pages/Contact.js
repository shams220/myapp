import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import './Contact.css'
import FadeContent from '../src/components/Animations/FadeContent/FadeContent';
import AnimatedContent from '../src/components/Animations/AnimatedContent/AnimatedContent';
const Contact = () => {
  return (
    <FadeContent>
      <AnimatedContent>
        <div id="Contact">
      <div className='contactContainer'>

    <div className="contactInfo">
            <div className="name"><h1>Shams's </h1>
            <h1 className='portfolio'>Portfolio</h1></div>
      <h2>alamshams8374@gmail.com</h2>
      <h2>+91 8273443412</h2>
       <div className="social">
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
      <h2 className='madeWithLove'>made with 💟 By Shams</h2>
      <h3>Copyright c 2024 All Rights Reserved</h3>
    </div>
    
    
    </div>
    </div>
      </AnimatedContent>
    </FadeContent>
  )
}

export default Contact;
