import "./Project.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import appleWeb from "../assets/projects/appleWeb.png";
import gemini from "../assets/projects/GeminiClone.png";
import netflix from "../assets/projects/NetflixClone.png";

import React from "react";

const Projects = () => {
  const data = [
     {
      id: "1",
      src: gemini,
      heading: "Gemini Clone",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "JSX",
        "ReactJS",
        "NodeJS",
        "ExpressJS",
        "React Routing",
        "ContextAPI",
        "RestAPI",
      ],
      para: "A Gemini (Google AI) UI clone created using React.js and CSS. It mirrors the clean and intelligent interface of Google Gemini with sections for chat, search, and AI tools, focusing on simplicity and interactivity.",
      button1: "",
      button2: "Live",
      github: "https://github.com/shams220/gemini",
      live: "https://stalwart-sorbet-5cef06.netlify.app/",
    },
    
    {
      id: "2",
      src: netflix,
      heading: "Netflix Clone",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "JSX",
        "NodeJS",
        "ReactJS",
        "ExpressJS",
        "React Routing",
        "ContextAPI",
        "RestAPI",
      ],
      para: "A fully responsive Netflix UI clone developed using React.js. It features a homepage with movie thumbnails, hover effects, and a banner section. The layout mimics Netflix’s streaming interface for an immersive user experience.",
      button1: "",
      button2: "Live",
      github: "https://github.com/shams220/Netflix",
      live: "https://vocal-monstera-070a58.netlify.app/",
    },
   {
      id: "3",
      src: appleWeb,
      heading: "Apple Clone",
      skills: ["HTML", "CSS", "JavaScript", "TailWindCSS", "ReactJS"],
      para: "A responsive Apple landing page clone built with HTML, Tailwind CSS, and JavaScript. It replicates the sleek design and smooth scrolling of Apple’s official website, showcasing product sections with a modern, minimalist layout.",
      button1: "",
      button2: "Live",
      github: "https://github.com/shams220/appleLandingPage",
      live: "https://yourliveurl.com/apple",
    },
    
  ];

  return (
    <>
      <div id="Projects">
        <div className="headline">
        <h1>Projects</h1>
      </div>
      <div className="projectContainer">
        {data.map((item) => {
          const isEven = parseInt(item.id) % 2 === 0;

          return (
            <div
              key={item.id}
              className={`projectItem ${isEven ? "even" : "odd"}`}
            >
              {isEven ? (
                <>
                  <div className="projectText">
                    <h2>{item.heading}</h2>
                    <div className="skills">
                      {item.skills.map((item, k) => (
                        <button>{item}</button>
                      ))}
                    </div>
                    <p>{item.para}</p>
                    <div className="buttons">
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn1">
  <span className="icon"><FontAwesomeIcon icon={faGithub} /></span> {item.button1}
</button>

                      </a>
                      <a
                        href={item.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn2">{item.button2}</button>
                      </a>
                    </div>
                  </div>
                  <img className="image" src={item.src} alt={item.heading} />
                </>
              ) : (
                <>
                  <img className="image" src={item.src} alt={item.heading} />
                  <div className="projectText">
                    <h2>{item.heading}</h2>
                    <div className="skills">
                      {item.skills.map((item, k) => (
                        <button>{item}</button>
                      ))}
                    </div>
                    <p>{item.para}</p>
                    <div className="buttons">
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                      <button className="btn1">
  <span className="icon"><FontAwesomeIcon icon={faGithub} /></span> {item.button1}
</button>

                      </a>
                      <a
                        href={item.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn2">{item.button2}</button>
                      </a>
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
      </div>
    </>
  );
};

export default Projects;
