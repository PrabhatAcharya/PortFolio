/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";

function Projects() {
  const [projects] = useState([
    {
      title: "Myntra Clone",
      img: "/projects/2.png",
      gLink: "https://github.com/PrabhatAcharya/Myntra",
      lLink: "https://myntra-prabhat.netlify.app/",
    },
    {
      title: "Beauty Bebo Clone",
      img: "/projects/1.png",
      gLink: "https://github.com/harshita0802goswami/Beauty-bebo/tree/Prabhat",
      lLink: "https://beauty-beboclone.netlify.app/",
    },
   
  ]);
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="title">
          <h3>Featured Projects</h3>
          <a
            href="https://github.com/PrabhatAcharya"
            target="_blank"
            className="btn"
            rel="noreferrer"
          >
            View All
          </a>
        </div>
        <div className="projects-wrapper">
          {projects.map((project, i) => (
            <div className="project" key={i}>
              <div className="img-container">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="description">
                <h4>{project.title}</h4>
                <div className="links">
                  <a href={project.gLink} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={project.lLink} target="_blank" rel="noreferrer">
                    <i className="fa fa-globe"></i>
                  </a>
                </div>
              </div>
              <p>
              Landing page UI consisting of megadrown navbar, carasouel, animated image cards and authentications i.e.; Login & Register
            Paginations for each sub-sections
            Implementation of local storage on authentications
Address, payment, checkout done with using local storage concepts and raw css (No external libraries has been implemented for the same to have a effect !!)
uthentication process undercover with Local Storage.
Pagination for each category with working mega dropdown.
Dynamic Products, Wishlist page using locally created json data.
All the product description, prices, discounts, are updated in real time.
              </p>
            </div>
            
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
