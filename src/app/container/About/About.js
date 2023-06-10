"use client";
import React, { use } from "react";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { AppWrap } from "@/app/wrapper";
import { client } from "@/client";
import { Skills } from "..";

import "./About.scss";

const About = () => {
  const { ref, inView } = useInView();
  const [resume, setResume] = useState([{ url: "", name: "" }]);
  useEffect(() => {
    const resumeLink = '*[_type == "brands"]';

    client.fetch(resumeLink).then((data) => {
      setResume(data);
    });
  }, []);
  return (
    <>
      <div className="app__about-container">
        <div className="app__aboutme">
          <div className="app__aboutme-wrapper">
            <h2
              ref={ref}
              className={
                "head-text mono " +
                (inView && "about-heading-animation").toString()
              }
            >
              My name is <span>Amr Abdelghany</span>
            </h2>
            <p className="p-text">
              I am an Egyptian based Software Developer, One of my strongest
              ambitions is to become the best programmer I can humanly be.
              Although I find everything about programming interesting, web
              development is my passion and I enjoy facing challenges across the
              entire stack. <br />
              <br />
              Hobbies beside programming: Reading, Sports and Low combat
              narrative/puzzle heavy Games.
            </p>

            <a
              href={resume[0].name}
              target="_blank"
              className="btn btn--white p-text"
            >
              View Resume
            </a>
          </div>
        </div>
        <Skills />
      </div>
    </>
  );
};

export default AppWrap(About, "About", "about-");
