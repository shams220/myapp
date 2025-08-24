import React from 'react'
import './about.css';
import AnimatedContent from '../src/components/Animations/AnimatedContent/AnimatedContent';
import FadeContent from '../src/components/Animations/FadeContent/FadeContent';

const About = () => {
  return (
    <>
    <div id="About">
    <FadeContent>
      <AnimatedContent>
             <div className='main'>
      <div className='aboutMe'><h1>About Me</h1></div>
      <div ><h1>Shams Alam</h1></div>
      <div><h2>Software Developer</h2></div>
      <div><p>Hi, I'm Shams Alam — a passionate Frontend Developer with hands-on experience in building dynamic and responsive web applications using the MERN stack. I love turning creative ideas into functional user interfaces, and I'm always eager to learn and explore new technologies. With a strong foundation in JavaScript, React, and modern web development practices, I aim to craft seamless digital experiences. I recently completed my B.Tech in Electronics and Communication Engineering from GL Bajaj Institute of Technology and Management, and I'm driven by curiosity and committed to continuous improvement.
        </p></div>
    </div>
      </AnimatedContent>
    </FadeContent>
    </div>
    </>
  )
}

export default About
