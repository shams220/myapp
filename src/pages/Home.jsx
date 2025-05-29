import React from "react";
import "../Home.css";
import profile from "../assets/profile.png";
import zummitInfolab from "../assets/Zinfo.png";
import appSketch from "../assets/AppSketch.png";

const home = () => {
  return (
   <>
   <div id="Home">
     <div className="home">
      <div className="home-container">
        <div className="details">
          <div className="nameHome">
             <h1 className="name1">Shams</h1><h1 className="name2">Alam</h1>
          </div>
          <div className="para">
            <p>
              I'am a Mern Stack Developer
            </p>
          </div>
          <div className="buttons">
            <div>
             <a href="#About">
  <button className="button1">About me ></button>
</a>
            </div>
            <div>
              <a href="/ResumeD1.pdf" download><button className="CV">Download CV</button></a>
              
            </div>
          </div>
        </div>
        <div className="image">
          <div className="image-container">
            <img src={profile} alt="" />
          </div>
        </div>
      </div>
      <div className="work">
        <h1>worked with</h1>
      </div>
      <div className="companies">
        <div className="company1">
          <button>
            <img className="zumImage" src={zummitInfolab} alt="" />
          </button>
        </div>
        <div className="company2">
          <button>
            <img className="appsketchImage" src={appSketch} alt="" />
          </button>
        </div>
      </div>
    </div>
   </div>
   </>
    
  );
};

export default home;
