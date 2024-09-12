import React, { useRef } from 'react';
import './App.css';
import Profile from './Profile/Profile';
import Header from './Header/Header';
import About from './About/About';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import BackToTop from './BackToTop/BackToTop'; // Import the component
import Footer from './Footer/Footer';


function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef=useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
     <Header 
        onAboutClick={() => scrollToSection(aboutRef)} 
        onSkillsClick={() => scrollToSection(skillsRef)} 
        onProjectsClick={()=>scrollToSection(projectsRef)}
        onContactClick={()=>scrollToSection(contactRef)}
     />
     <Profile/>
     <div ref={aboutRef}>
        <About
          onProjectsClick={()=>scrollToSection(projectsRef)}
        />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={projectsRef}>
        <Projects/>
      </div>
      <div ref={contactRef}>
        <Contact/>
      </div>
     
        <Footer/>
      <BackToTop /> {/* Add the button here */}
    </div>
  );
}

export default App;
