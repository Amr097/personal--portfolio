"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { AppWrap } from "@/app/wrapper";
import { urlFor, client } from "@/client";

import "./Skills.scss";
import "./About.scss";

const About = () => {
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);
  const { ref, inView } = useInView();

  useEffect(() => {
    const queryExperience = '*[_type == "experiences"]';
    const querySkill = '*[_type == "skills"]';
    client.fetch(queryExperience).then((data) => {
      setExperience(data);
    });
    client.fetch(querySkill).then((data) => {
      let sortedSkills = {};
      let mySkills = [];
      for (let i = 0; i <= data.length - 1; i++) {
        sortedSkills[data[i].order] = data[i];
      }
      for (let j = 0; j <= data.length; j++) {
        if (sortedSkills[j]) {
          mySkills.push(sortedSkills[j]);
        }
      }

      setSkills(mySkills);
    });
  }, []);
  return (
    <>
      <h2 className="head-text">Who Am I?</h2>
      <div className="app__about-container">
        <div className="app__aboutme">
          <div className="app__aboutme-wrapper">
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
            {/* development. May describe myself as an organized person, highly
              enthusiastic about problem-solving with high attention to detail,
              Also a Family person who loves animals -especially birds-, reading
              and point and click adventure/puzzle games.
              <br />
              <br />
              One of my ambitions is to become the best programmer I can humanly
              be.
              <br />
              Although I find everything about programming interesting, web
              development is my passion and I love working in all of its areas :
              Front-End, Back-End, Databases and even Security, My experience
              mostly spans the Javascript-ecosystem. */}

            <a href="" className="btn btn--white p-text">
              View Resume
            </a>
          </div>
        </div>
        <div className="app__skills">
          <div className="app__skills-container">
            <h2 className="p-text">Skills</h2>
            <div className="app__skills-list" ref={ref}>
              {skills.map((skill, index) => (
                <div
                  className={
                    "app__skills-item app__flex " +
                    (inView && "skills-item-animation")
                  }
                  key={skill.name}
                >
                  <div
                    className="app__flex"
                    style={{ backgroundColor: skill.bgColor }}
                  >
                    <img
                      src={urlFor(skill.icon)}
                      alt={skill.name}
                      loading="lazy"
                    />
                  </div>
                  <p className="p-text">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(About, "About", "about-");
