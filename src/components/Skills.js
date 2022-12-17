import React, { useEffect } from "react";
import "./Skills.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Skills() {
  useEffect(() => {
    AOS.init({
      useClassNames: true,
      initClassName: false,
      animatedClassName: "animated",
    });
  });
  return (
    <section id="Skills" class="skills-section">
      {/* <div class="container"></div> */}
      <h1 data-aos="fade-down">Tools And Skills</h1>

      <br></br>
      <br></br>
      <h2 data-aos="fade-down">Front-End</h2>
      <div class="skills-div">
        <div class="skills-card" data-aos="flip-up">
          <img
            src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
            alt=""
          />
          <h3>React</h3>
        </div>

        <div class="skills-card" data-aos="flip-up">
          <img src="https://cdn.svgporn.com/logos/javascript.svg" alt="" />
          <h3>JavaScript</h3>
        </div>

        <div class="skills-card" data-aos="flip-up">
          <img src="https://cdn-icons-png.flaticon.com/512/226/226777.png" alt="" />
          <h3>Java</h3>
        </div>


        <div class="skills-card" data-aos="flip-up">
          <img src="https://cdn.svgporn.com/logos/css-3.svg" alt="" />
          <h3>CSS</h3>
        </div>
        <div class="skills-card" data-aos="flip-up">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
            alt=""
          />
          <h3>HTML</h3>
        </div>

        {/* <div class="skills-card" data-aos="flip-up">
          <img src="https://cdn.svgporn.com/logos/redux.svg" alt="" />
          <h3>Redux</h3>
        </div> */}
        {/* <div class="skills-card" data-aos="flip-up">
          <img src="https://github.com/chakra-ui.png" alt="" />
          <h3>Chakra UI</h3>
        </div> */}
       
      </div>


      <br></br>
      <br></br>
      <h2 data-aos="fade-down">Tools</h2>
      <div class="skills-div">
        {/* <div class="skills-card" data-aos="flip-up">
          <img
            src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png"
            alt=""
          />
          <h3>MongoDB</h3>
        </div> */}
        <div class="skills-card" data-aos="flip-up">
          <img
            src="https://miro.medium.com/max/512/1*fVBL9mtLJmHIH6YpU7WvHQ.png"
            alt=""
          />
          <h3>Postman</h3>
        </div>
        {/* <div class="skills-card" data-aos="flip-up">
          <img
            src="https://cdn.freebiesupply.com/logos/large/2x/nodejs-icon-logo-png-transparent.png"
            alt=""
          />
          <h3>Node</h3>
        </div> */}
        {/* <div class="skills-card" data-aos="flip-up">
          <img
            src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
            alt="git"
          />
          <h3>Git</h3>
        </div> */}
        <div class="skills-card" data-aos="flip-up">
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="github"
          />
          <h3>Github</h3>
        </div>
      </div>
      <br></br>
      <br></br>
    </section>
  );
}
