"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { AppWrap } from "@/app/wrapper";
import { urlFor, client } from "@/client";

import "./Skills.scss";
import { Footer } from "..";
const Skills = () => {
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
      {" "}
      <h2 className="head-text">Take a coffee & chat with me</h2>
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
        <Footer />
      </div>
    </>
  );
};

export default AppWrap(Skills, "Contact", "base-");
