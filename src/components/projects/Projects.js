import React from "react";
import "./projects.css";
import { projectList } from "./projectList";
import ProjectDetails from "../projectDetails/ProjectDetails";

function Projects() {
  console.log(projectList.length);
  return (
    <div className="projects" id="projects">
      <div className="projects_content">
        <h3>PROJECTS</h3>
        <p>Here are some cool projects which I've done</p>
      </div>
      <div className="container">
          <div className="row">     
        {projectList.map((project, index) => (
          <ProjectDetails project={project} />
          ))}
          </div>
      </div>
    </div>
  );
}

export default Projects;
