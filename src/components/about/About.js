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
            In addition to coding, I find joy in various hobbies. Physical
            Fitness play a significant role in my life, running, swimming,
            and gym are my regular activities. Exploring the outdoors through
            trekking is another activity that fuels my adventurous spirit.
            When I'm not immersed in coding or exploring the world, I indulge
            in sketching, listening to music, learning to play Harmonica and
            watching movies. Let's connect and collaborate to transform
            innovative ideas into reality. Together, we can create digital
            experiences that leave a lasting impact.
          </p>
        </div>
      </div>
    </div>
    <div className="divider"></div>
    </>
  );
};

export default About;
