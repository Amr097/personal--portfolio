"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { AppWrap } from "@/app/wrapper";
import { client } from "@/client";
import { Skills } from "..";

import "./About.scss";

const About = () => {
  const { ref, inView } = useInView();
  const [resume, setResume] = useState([{ url: "", name: "" }]);
  const [summary, setSummary] = useState("");
  useEffect(() => {
    const resumeLink = '*[_type == "brands"]';
    const aboutMe = '*[_type == "summary"]';
    client.fetch(resumeLink).then((data) => {
      setResume(data);
    });
    client.fetch(aboutMe).then((data) => {
      setSummary(data[0].about);
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
            <p
              className="p-text"
              dangerouslySetInnerHTML={{ __html: summary }}
            ></p>

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
