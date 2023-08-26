"use client";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { urlFor, client } from "@/client";

import "./Skills.scss";

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
      <div className="app__skills">
        <div className="app__skills-container">
          <h2 className="p-text skills-heading">Skills</h2>
          <div className="app__skills-list" ref={ref}>
            {skills.map((skill) => (
              <div
                className={
                  "app__skills-item app__flex " +
                  (inView && "skills-item-animation").toString()
                }
                key={uuidv4()}
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
                <p className="skills-text">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
