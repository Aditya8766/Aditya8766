// import "./header.scss";
// import PermIdentityIcon from '@mui/icons-material/PermIdentity';
// import { useState } from "react";
// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };
//   return (
//     <div className="header">
//       <div className="logo">
//         <span className="logo-icon">
//             <PermIdentityIcon className="svg"/>
//         </span>
//         <h1>Portfolio</h1>
//       </div>
//       <nav className={`navbar ${isOpen ? "open" : ""}`}>
//         <span>
//           <a href="#home">Home</a>
//         </span>
//         <span>
//           <a href="#services">Bio</a>
//         </span>
//         <span>
//           <a href="#project">Projects</a>
//         </span>
//         <span>
//           <a href="#portfolio">Contact Me</a>
//         </span>
//       </nav>
//       <div className="hamburger"></div>
//       <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>
//     </div>
//   );
// };
// export default Header;
import "./header.scss";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { useState } from "react";

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
          <PermIdentityIcon className="svg"/>
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
          <a onClick={() => handleNavClick("contacts")} href="#contacts">contacts</a>
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
