import { useEffect, useState } from 'react';
import profile from"./data/profile.json";
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
  const [profileData,setProfileData]=useState([]);
  const getProfile=()=>{
    return new Promise((resolve) => {
      resolve(profile);
    });
  }
  const processData=(Promise)=> {
    Promise.then((data) => {
      setProfileData(data)
      console.log("Data:::",data);
    }).catch(Error);
  }
  useEffect(()=>{
    processData(getProfile());
  },[]);

  return (
    <div className="App">
      {console.log("profileData",profileData)}
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