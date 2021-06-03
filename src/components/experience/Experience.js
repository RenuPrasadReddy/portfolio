import React from "react";
import { Element } from "react-scroll";
import "./experience.css";

function Experience() {
  return (
    <Element className="exp" id="exp">
      <h3>EXPERIENCE</h3>
      <div className="container">
        <div className="row">
          <div className="expList">
            <div className="exp-item col-10 mx-auto">
              <h4 className="text-start">
                <span style={{ color: "#f64c08" }}>Company</span>: Tebio Pvt Ltd
                [2021 Jan - Till Date]
              </h4>
              <p>
                <span style={{ color: "#f64c08" }}>Role</span>: Software
                Engineer
                <br />
              </p>
              <p>
                <span style={{ color: "#f64c08" }}>Project</span>: Tebio B2B
                Marketplace <br />
                <span style={{ color: "#f64c08" }}>Description</span>: The
                website will be able to onboard vendors as well as buyers, in
                which Tebio will let vendors sell products to the B2B buyers
                based on their location. The website will be targeting the
                German market and will allow vendors all across the nation to
                sell their products.
              </p>
              <p>
                <span style={{ color: "#f64c08" }}>Technology</span>: PHP and
                Magento
              </p>
            </div>

            <div className="exp-item col-10 mx-auto">
              <h4 className="text-start">
                <span style={{ color: "#f64c08" }}>Company</span>: InsuredMine
                [2020 Feb - 2020 Dec]
              </h4>
              <p>
                <span style={{ color: "#f64c08" }}>Role</span>: Fullstack
                Developer (MERN stack)
              </p>
              <p>
                <span style={{ color: "#f64c08" }}>Project</span>: InsuredMine
                CRM tool
                <br />
                <span style={{ color: "#f64c08" }}>Description</span>: The
                website will be able to onboard vendors as well as buyers, in
                which Tebio will let vendors sell products to the B2B buyers
                based on their location. The website will be targeting the
                German market and will allow vendors all across the nation to
                sell their products.
              </p>
              <p>
                <span style={{ color: "#f64c08" }}>Technology</span>: Node
                js,Express js, MongoDB, Jenkins, Postman, REST APIs, GIT <br />
              </p>
            </div>

            <div className="exp-item col-10 mx-auto">
              <h4 className="text-start">
                <span style={{ color: "#f64c08" }}>Company</span>: NTT Data
                [June 2018 to Feb 2020]
              </h4>
              <p>
                <span style={{ color: "#f64c08" }}>Role</span>: Software
                Development Sr Associate.
                <br />
              </p>
              <p>
                <span style={{ color: "#f64c08" }}>Project</span>: Defined
                Benefit Pension System <br />
                <span style={{ color: "#f64c08" }}>Description</span>: The IM
                tool offers a set of tools for insurance agency efficiency and
                better customer experience. The platform features UX focused Web
                App and Mobile App for the Insured, an AI-driven chatbot to
                handle customer service, and an analytics-powered agency portal
                for email automation and prospect management.
              </p>
              <p>
                <span style={{ color: "#f64c08" }}>Technology </span>: Java,
                Spring, XML, Apache Tomcat, MySQL.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Experience;
