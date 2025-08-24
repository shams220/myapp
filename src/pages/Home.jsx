import React from "react";
import "./Home.css";
import profile from "../assets/profile.png";
import zummitInfolab from "../assets/Zinfo.png";
import appSketch from "../assets/AppSketch.png";
import ScrollToTopButton from "../ScrollToTopButton";
import AnimatedContent from "../src/components/Animations/AnimatedContent/AnimatedContent";
import FadeContent from "../src/components/Animations/FadeContent/FadeContent";
import SplitText from '../src/components/TextAnimations/SplitText/SplitText.jsx'
import TextType from '../src/components/TextAnimations/TextType/TextType.jsx'
// import Aurora from '../src/components/Backgrounds/Aurora/Aurora.jsx'
const home = () => {
  return (
   <>
   {/* <Aurora
   quantity={50}   
  staticity={50}
  ease={50}
 
   /> */}
     {/* <BackgroundWrapper /> */}
   <div id="Home">
     <div className="home">
      <FadeContent>
         <AnimatedContent>
      <div className="home-container">
        
        <div className="details">
          
          <div className="nameHome">
            {/* <SplitText> */}
             <h1 className="name1">Shams</h1>
             {/* </SplitText> */}
             {/* <SplitText> */}
             <h1 className="name2">Alam</h1>
          {/* </SplitText> */}
          </div>
          
          <div className="para">
            <TextType text="I'm a MERN Stack Developer" />
            {/* <p>
              I'am a Mern Stack Developer
            </p> */}
            {/* </TextType> */}
          </div>

          <div className="buttons">
            <div>
             <a href="#About">
  <button className="button1">About me </button>
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
     
      {/* <ScrollToTopButton> */}
     
        <div className="work">
        <h1 className="wrkedWith">worked with</h1>
      </div>
      
      {/* </ScrollToTopButton> */}
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
       </AnimatedContent>
      </FadeContent>
    </div>
   </div>
   </>
    
  );
};

export default home;
