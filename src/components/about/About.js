import "./about.scss";

const About = () => {
  return (
    <>
    <div className="about-container" id="about">
      <div className="my-bio-header">
        <h1>About Me</h1>
      </div>
      <div className="bio-container">
        <div className="my-bio-content-left">
          <div className="content">
            <label>Full Name :</label>
            <span>Aditya Mukund Bhosale</span>
          </div>
          <div className="content">
            <label> Date Of Birth :</label>
            <span>11<sup>th</sup> July 2002</span>
          </div>
          <div className="content">
            <label>Address :</label>
            <span>Bhawani Peth Pune</span>
          </div>
          <div className="content">
            <label> Zip Code :</label>
            <span>411042</span>
          </div>
          <div className="content">
            <label>Email :</label>
            <span>411042</span>
          </div>
          <div className="content">
            <label> Phone :</label>
            <span>8766971902</span>
          </div>
        </div>
        <div className="my-bio-content-right">
          <h3>Hello There</h3>
          <p>
            Welcome to my portfolio website! I'm Aditya Bhosale, a developer,
            programmer, and tech enthusiast residing in Pune. My passion lies
            in creating exceptional digital experiences, with a strong
            affinity for JavaScript and React.js. These technologies allow me
            to build dynamic and interactive web applications that engage
            users.
          </p>
          <p>
          In addition to coding, I stay engaged with tech-related activities and continuous learning. Attending conferences like Next.js Conf helps me stay updated on the latest trends. Freelancing as a Frontend Developer has sharpened my skills in building responsive web applications. I enjoy collaborating on innovative projects, participating in tech quizzes, and exploring new technologies. Let’s connect and create impactful digital experiences together.
          </p>
        </div>
      </div>
    </div>
    <div className="divider"></div>
    </>
  );
};

export default About;
