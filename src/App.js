import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar.js";
import About from './pages/about.js';
import Contact from "./pages/Contact.js";
import Skills from './pages/Skills.js'
import Projects from "./pages/Projects.js";
import ScrollToTopButton from "./ScrollToTopButton";
import AuroraBack from './src/components/Backgrounds/Aurora/AuroraBackound.js'
function App() {
  return (
    <div className="App">
      <Router>
<AuroraBack/>

        <Navbar />
      
        <Routes>
          <Route path="/" element={<>
      <Home />
      <About />
      <Skills/>
      <Projects/>
      <Contact/>
    </>} />
    {/* <Route path="/About" element={<About/>}  />
    <Route path='/Projects' element={<Projects/>} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path='/' element={<About/>}/> */}
        </Routes> 
    

        {/* <Projects/> */}
         <ScrollToTopButton />
      </Router>
    </div>
  );
}

export default App;
