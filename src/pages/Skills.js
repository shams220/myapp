import React from 'react'
import './Skills.css'
import html from '../assets/skills/html.png'
import css from '../assets/skills/CSS_logo_PNG1.png'
import js from '../assets/skills/js.png'
import mongodb from '../assets/skills/MongoDB.png'
import ejs from '../assets/skills/ExpressWhite.png'
import nodejs from '../assets/skills/Node.js.png'
import react from '../assets/skills/React.png'
import redux from '../assets/skills/Redux.png'
import MySql from '../assets/skills/MySQL.png'
import SQL from '../assets/skills/Azure SQL Database.png'
import github from '../assets/skills/GitHub.png'
import java from '../assets/skills/Java.png'
import AnimatedContent from '../src/components/Animations/AnimatedContent/AnimatedContent'
import FadeContent from '../src/components/Animations/FadeContent/FadeContent'


const Skills = () => {
  return (
  <>
  <div id="Skills">
     <div className="Skillsmain">
    <div><h1>Skills</h1></div>
      <FadeContent>
        <AnimatedContent>
          <div className='skillContainer'>
          <div className="one"><img src={html} alt="" /></div>
        <div className="one"><img src={css} alt="" /></div>
        <div className="one"><img src={js} alt="" /></div>
        <div className="one"><img src={mongodb} alt="" /></div>
        <div className="one"><img src={ejs} alt="" /></div>
        <div className="one"><img src={nodejs} alt="" /></div>
        <div className="one"><img src={react} alt="" /></div>
        <div className="one"><img src={redux} alt="" /></div>
        <div className="one"><img src={MySql} alt="" /></div>
        <div className="one"><img src={SQL} alt="" /></div>
        <div className="one"><img src={github} alt="" /></div>
        <div className="one"><img src={java} alt="" /></div>
        {/* <div className="ten"><img src={SQL} alt="" /></div> */}

      </div>
        </AnimatedContent>
      </FadeContent>
   </div>
  </div>
  </>
  )
}

export default Skills
