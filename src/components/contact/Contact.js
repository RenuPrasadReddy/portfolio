import React from "react";
import "./contact.css";
import { Element } from "react-scroll";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
function Contact() {
  return (
    <Element className="contact">
      <div className="container">
        <div className="row">
          <div className="square-box col-sm-8 col-md-8 mx-auto">
          <h3 style={{textAlign:"center", marginBottom:"30px", fontWeight: "500"}}>CONTACT</h3>
          <div className="contact_box col-12 d-flex flex-column align-items-center mx-auto">
            <div className="email">
              <h4 style={{color:"#f64c08"}}>Email: <span style={{color:"white"}}>renudurga32@gmail.com</span></h4>
            </div>
            <ul className="d-flex justify-content-center">
              <li>
                <a href="https://github.com/RenuPrasadReddy" target="_blank">
                  <GitHubIcon/>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/renuprasad-k-525458130" target="_blank">
                  <LinkedInIcon />
                </a>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Contact;
