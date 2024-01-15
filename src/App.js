import React from 'react';
import Home from './components/home/Home';
import About from './components/about/About';
import Resume from './components/resume/Resume';
import Projects from './components/projects/Projects';
import Contact from './components/contact-me/Contact';
import Hire from './components/hire-me/Hire';
import Footer from './components/footer/Footer';
import './app.css';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Resume/>
      <Projects/>
      <Hire/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;