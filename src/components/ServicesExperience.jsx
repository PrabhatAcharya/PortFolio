import React, { useState } from "react";

function ServicesExperience() {
  const [services] = useState([
    {
      icon: "fa-paintbrush",
      title: "MERN Stack",
      desc: "I am upgrowing web developer currently thriving on MERN stack. Stepping up with Javascript as my key language while having Java, HTML,CSS,Windows Form, Oracle Apex, Sql in bag too. Alongside web-dev, I have keen grip on DSA, Problem Solving and enthusiasm in digital designing.",
      active: false,
    },
  
  ]);
  return (
    <section className="services-experience">
      <div className="container">
        <div className="services" id="services">
          {services.map((service, i) => (
            <div
              key={i}
              className={`service ${service.active ? "active" : ""}`}
            >
              <i className={`fas ${service.icon}`} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              {/* <button className="btn">Know More</button> */}
            </div>
          ))}
        </div>
        <div className="experiences" id="experiences">
          <div className="experience">
            <h3>1.5</h3>
            <p>Year Experience</p>
          </div>
          <div className="portfolios">
            <div className="portfolio">
              <h4> Worked for 2+ client </h4>
              <p>Ex Infosys Ltd</p>
              <p></p>
            </div>
            <div className="portfolio">
              <h4>B.Tech 2020 </h4>
              <p>GITAM Bhubaneswar</p>
            </div>
            {/* <div className="portfolio">
           
          <a href="#">
            <i  className="fab fa-github"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
   
            </div>
            <div className="portfolio">
              <h4>10</h4>
              <p>Achievements</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesExperience;
