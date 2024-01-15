import Header from "../header/Header";
import "./home.scss";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import myPic from '../../assets/mypic.png';
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <><div className="main-container">
      <Header />
      <div className="home" id="home">
        <div className="intro">
          <h4 className="intro-heading">
            Hello{" "}👋{" "}{" "}<span>I'am</span>
            <h1>Aditya Bhosale</h1>
          </h4>
          <div className="typewriter">
            <Typewriter
            options={{
              strings: ["Programmer.", "Frontend Developer.", "Learner."],
              autoStart: true,
              loop: true,
              skipAddStyles: true,
              cursorClassName: "typed-cursor",
              wrapperClassName: "typed-text",
            }}
          />
          </div>
          <p>
          As a fresh and passionate web developer and programmer, I'm dedicated to bringing your digital ideas to life. I strive to craft innovative solutions that make a lasting impact. Let's collaborate and build the future of the web together.
          </p>
          <div className="checkout">
            <span>check out my</span>
            <div className="icons">
              <span><a href="https://github.com/Aditya8766"><GitHubIcon /></a></span>
              <span><a href="https://www.linkedin.com/in/aditya-bhosale-107682249/"><LinkedInIcon /></a></span>
            </div>
          </div>
        </div>
        <div className="side-image">
          <div className="image-box">
            <img src={myPic} alt="img" />
          </div>
        </div>
      </div>
    </div>
 
    </>
  );
};
export default Home;
