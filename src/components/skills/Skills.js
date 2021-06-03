import React from "react";
import "./skills.css";
import { Element } from "react-scroll";
import skillsImg from "../../assets/skills.jpg";
import Card from "../card/Card";

function Skills() {
  return (
    <Element className="skills" id="skills">
      <div className="skills_left">
        <img src={skillsImg} alt="skills_img" className="skills_img" />
      </div>
      <div className="skills_right">
        <h3>SKILLSET</h3>
        <div className="content">
          <Card title="Node js" />
          <Card title="React js" />
          <Card title="Redux" />
          <Card title="MongoDB" />
          <Card title="HTML" />
          <Card title="CSS" />
          <Card title="Bootstrap" />
          <Card title="Express js" />
          <Card title="Core java" />
          <Card title="GIT" />
          <Card title="Jenkins" />
        </div>
      </div>
    </Element>
  );
}

export default Skills;
