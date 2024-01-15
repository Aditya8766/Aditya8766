import "./header.scss";
import { useState } from "react";
import logo from"../../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="header">
      <div className="logo">
        <span className="logo-icon">
          <img className="svg" src={logo}alt="logo"/>
        </span>
        <h1>Portfolio</h1>
      </div>
      <nav className={`navbar ${isOpen ? "open" : ""}`}>
        <span>
          <a onClick={() => handleNavClick("home")} href="#home">Home</a>
        </span>
        <span>
          <a onClick={() => handleNavClick("about")} href="#about">About</a>
        </span>
        <span>
          <a onClick={() => handleNavClick("resume")} href="#resume">Resume</a>
        </span>
        <span>
          <a onClick={() => handleNavClick("projects")} href="#projects">Projects</a>
        </span>
        <span>
          <a onClick={() => handleNavClick("contacts")} href="#contacts">Contacts</a>
        </span>
      </nav>
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Header;
