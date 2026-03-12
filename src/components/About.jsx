import React from 'react';
import '../assets/css/about.css';
import Education from './Education';

const About = () => {
  return (
    <section className="About">
      <h1 className="about-greeting">Hi, I'm <span>Rutvi Bhoraniya</span></h1>
      <p className="about-role">A Passionate Shopify and MERN Stack Developer</p>
      <Education />
    </section>
  );
};

export default About;
