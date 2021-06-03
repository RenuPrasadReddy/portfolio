import React from "react";
import { Link, Element } from "react-scroll";
import "./about.css";

function About() {
  return (
    <Element className="about" id="about">
      <div className="about__container">
        <div className="about__bio">
          <h2>RENUPRASAD K</h2>
          <p>A Professional MERN stack developer</p>
        </div>
        <div className="about__buttons">
          <a href="https://drive.google.com/uc?export=download&id=183TSJZ1pRlZ-oETW74wtDFMmzLhmxcGu"><button className=" btn dwnld-btn">Download CV</button></a>
          <Link to="projects" smooth={true} duration={500}>
            <button className=" btn myWorks-btn">My works</button>
          </Link>
        </div>
      </div>
    </Element>
  );
}

export default About;
