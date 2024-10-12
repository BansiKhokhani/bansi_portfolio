import React, { useState } from 'react';
import './Header.css';
import bkLogo from './bkLoGO.png'
const Header = ({ onAboutClick, onSkillsClick ,onProjectsClick,onContactClick}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log('clicked');
    setMenuOpen(!menuOpen);
  };
  

  return (
    <header className="header">
      <div className="logo">
        <img src={bkLogo} alt="Logo" />
      </div>
      <nav className="menu">
        <ul className={menuOpen ? "show" : ""}>
          <li><a href="#about" onClick={onAboutClick}>About</a></li>
          <li><a href="#skills" onClick={onSkillsClick}>Skills</a></li>
          <li><a href="#projects" onClick={onProjectsClick}>Projects</a></li>
          <li><a href="#contact" onClick={onContactClick}>Contact</a></li>
        </ul>
      </nav>
      {!menuOpen ? 
      (<div className="menu-toggle">
        <button onClick={toggleMenu}>☰</button>
      </div>
      )
      :
      (
      <div className='menu-close'>
        <button onClick={toggleMenu}>x</button>
      </div>
      )
      }
      
      
    </header>
  );
};

export default Header;
