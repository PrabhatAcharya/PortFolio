import React, { useEffect } from "react";
import './About.css'


import Aos from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      useClassNames: true,
      initClassName: false,
      animatedClassName: "animated",
    });
  });
  return (
    <section id="about">
      <div className="about-cont container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-28 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="head" data-aos="fade-down">
            LET ME <span className="purple"> INTRODUCE </span> MYSELF
          </h1>
          <br></br>
          <br></br>
          <br></br>
          <div>
            <div>
              <div
                md={8}
                className="home-about-description"
                data-aos="fade-right"
              >
                <p className="home-about-body" style={{ fontSize: "1.4em" }}>
                  Dedicated and efficient full stack web developer with
                  excellent problem solving skills and ability to learn quickly
                  and perform well in a team. Strongly interested in obtaining
                  appropriate position to work in enhancing product and real
                  work experience.
                </p>
              </div>
            </div>
            <div></div>
          </div>
          <br></br>
          <br></br>
          <br></br>

          <div className="flex justify-center mt-14" data-aos="fade-up">
            <a
              href="https://drive.google.com/file/d/1yig6uZ3FMmPmj-M6ZkQWcwPNhPvCUneb/view?usp=share_link"
              target="_blank"
              className="inline-flex text-white bg-green-500 border-0 py-3 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Resume
            </a>
            <a
              href="/#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Projects
            </a>
          </div>
        </div>
        <div
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 m-auto"
          data-aos="fade-left"
        >
          <img
            className="image-approunded-full rounded-t-half rounded-b-full m-auto rounded-r-full and rounded-l-full border-8 w-2/4  "
            alt="img"
            src="/profile.png"
          />
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </section>
  );
}
