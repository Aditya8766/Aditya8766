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
              had taught Information Technology subject for 12<sup>th</sup>{" "}
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
        <div className="cards">
          <div className="progress-container">
            <div className="left-side-progress">
              <div className="progress-wrap">
                <h3><span>HTML5</span><span>90%</span></h3>
                <div className="progress">
                  <div className="progress-bar progress-bar-1" style={{ width: "90%" }}></div>
                </div>
              </div>
              <div className="progress-wrap">
                <h3><span>CSS3</span><span>90%</span></h3>
                <div className="progress">
                  <div className="progress-bar progress-bar-2" style={{ width: "90%" }}></div>
                </div>
              </div>
              <div className="progress-wrap">
                <h3><span>JavaScript</span><span>88%</span></h3>
                <div className="progress">
                  <div className="progress-bar progress-bar-3" style={{ width: "88%" }}></div>
                </div>
              </div>
              <div className="progress-wrap">
                <h3><span>NodeJs</span><span>80%</span></h3>
                <div className="progress">
                  <div className="progress-bar progress-bar-4" style={{ width: "80%" }}></div>
                </div>
              </div>
            </div>
            <div className="right-side-progress">
              <div className="progress-wrap">
                <h3><span>React JS</span><span>85%</span></h3>
                <div className="progress">
                  <div className="progress-bar progress-bar-1" style={{ width: "85%" }}></div>
                </div>
              </div>
              <div className="progress-wrap">
                <h3><span>Express</span><span>80%</span></h3>
                <div className="progress">
                  <div className="progress-bar progress-bar-1" style={{ width: "80%" }}></div>
                </div>
              </div>
              <div className="progress-wrap">
                <h3><span>MongoDB</span><span>85%</span></h3>
                <div className="progress">
                  <div className="progress-bar progress-bar-1" style={{ width: "85%" }}></div>
                </div>
              </div>
              <div className="progress-wrap">
                <h3><span>Angular</span><span>75%</span></h3>
                <div className="progress">
                  <div className="progress-bar progress-bar-1" style={{ width: "75%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="download-resume-btn">
        <a 
          href="/resume.pdf"
          download="RESUME-PDF-Aditya-Bhosale"
          target="_blank"
          rel="noreferrer"
        >
            <button>Donload Resume</button>
        </a>
      </div>
      <div className="divider"></div>
    </div>
  );
};
export default Resume;
