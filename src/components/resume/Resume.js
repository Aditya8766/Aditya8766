import SkillsChart from "./SkillsChart";
import "./resume.scss";
const Resume = () => {
  return (
    <div className="resume-container" id="resume">
      <h1>My Resume</h1>
      <div className="cards-container">
        <h3>Experience</h3>
        <div className="cards">
          <div className="left-side">
            <p className="date">2023-present</p>
            <p>FullStack developer</p>
            <p>PraiseArray</p>
            <p>Bibwewadi</p>
          </div>
          <div className="right-side">
            <p>
              JavaScript frameworks to provide a robust synopsis for high level
              overviews
            </p>
          </div>
        </div>
        <div className="cards">
          <div className="left-side">
            <p className="date">2021-2022</p>
            <p>Teaching</p>
            <p>Dnyanbhaskar Sci. classes</p>
            <p>Sadashiv Peth Pune</p>
          </div>
          <div className="right-side">
            <p>
              Had taught Information Technology subject for 12<sup>th</sup>{" "}
              bifocal students.
            </p>
          </div>
        </div>
        <h3>Education</h3>
        <div className="cards">
          <div className="left-side">
            <p className="date">2022-present</p>
            <p>Haribhai V Desai College Pune SPPU</p>
            <p>Masters of Computer Applications MSC(CA)</p>
            <p>Pune</p>
          </div>
          <div className="right-side">
            <p>
              Currently pursuing my Master's degree in Computer Applications
              (MSC(CA)), I am deepening my knowledge and skills in various
              aspects of computer science.
            </p>
          </div>
        </div>
        <div className="cards">
          <div className="left-side">
            <p>2019-2022</p>
            <p>Haribhai V Desai College Pune SPPU</p>
            <p>Bachlors of Computer Applications MSC(CA)</p>
            <p>Pune</p>
          </div>
          <div className="right-side">
            <p>
              Having successfully completed my Bachelor's degree in Computer
              Applications (BCA), I have acquired a solid foundation in computer
              science principles and practices.
            </p>
          </div>
        </div>
        <h3>Professional skillset</h3>
        <div>
          <SkillsChart/>
        </div>
      </div>
      <div className="download-resume-btn">
        <a 
          href="/resume.pdf"
          download="RESUME-PDF-Aditya-Bhosale"
          target="_blank"
          rel="noreferrer"
        >
            <button>Download Resume</button>
        </a>
      </div>
      <div className="divider"></div>
    </div>
  );
};
export default Resume;
