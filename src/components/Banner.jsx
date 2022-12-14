/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <img id="mydp" src="./About.png" alt="Prabhat" />
          </div>
          <div className="banner-content">
            <h6>Hello, I'm Prabhat Kumar Acharya</h6>
            <h3>MERN Stack Developer</h3>
            <p>
            Who enjoys coding and solving problems.As an aspiring Full Stack Web developer, I like the impact it creates on the world.One of my strongest skills is creativity and it helps me a lot in web designs I have created various end to end website clone using MERN stack
            </p>
            <a className="btn"  href="https://drive.google.com/file/d/1PZGDLSmCjZ47-VIonxDq3mz-NxdACVOn/view?usp=share_link" target="_blank">
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
