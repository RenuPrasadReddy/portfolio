import React from "react";
import "./projectDetails.css";

function ProjectDetails(props) {
  const { title, desc, githubLink, live, src } = props.project;
  return (
    // <div className="projectDetails col-md-6">
    //     <h4>{title}</h4>
    //     <p>{desc}</p>
    // </div>
    <div className="col-sm-12 d-flex justify-content-center col-md-6 mx-auto">
      <div className="card" style={{ width: "18rem" }}>
        <img src={`/images/${src}`} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
        </div>
        <div class="card-footer">
          
        <a
            href={githubLink}
            target="_blank"
            className="btn mr-1 card-btn"
          >
            Code
          </a>
          <a
            href={live}
            target="_blank"
            className="btn card-btn"
          >
            Live demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
