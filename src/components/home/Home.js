import Header from "../header/Header";
import "./home.scss";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import myPic from '../../assets/mypic.png';
import Typewriter from "typewriter-effect";
import { useEffect, useRef } from "react";

const Home = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if(canvas){
        const ctx = canvas.getContext("2d");
    
        const lines = [];
        const numLines = 50;
    
        for (let i = 0; i < numLines; i++) {
          lines.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            speed: Math.random() * 10 + 5,
          });
        }
    
        const draw = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
    
          lines.forEach((line) => {
            line.x += line.speed;
    
            // Reset the line position when it goes out of the canvas
            if (line.x > canvas.width) {
              line.x = 0;
            }
    
            ctx.beginPath();
            ctx.moveTo(line.x, line.y);
            ctx.lineTo(line.x + 5, line.y + 5);
            ctx.strokeStyle = "white";
            ctx.lineWidth = 2;
            ctx.stroke();
          });
    
          requestAnimationFrame(draw);
        };
    
        draw();
    }

  }, []);
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
