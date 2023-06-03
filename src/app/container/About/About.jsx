"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./About.scss";

const About = () => {
  const abouts = [
    {
      title: "MERN Stack",
      description: "I'm a good Web Developer",
      image: "60ce44133ce5aee0e6c9cac9_Mern.png",
    },
    {
      title: "Frontend Web Dev",
      description: "I'm a good Web Developer",
      image: "24-248816_website-development-png.png",
    },
    {
      title: "Web Animations",
      description: "I'm a good Web Developer",
      image: "Daco_4367764.png",
    },
    {
      title: "Responsive Design",
      description: "I'm a good Web Developer",
      image: "—Pngtree—devices responsive web design_3540001.png",
    },
    {
      title: "Backend Web Dev",
      description: "I'm a good Web Developer",
      image: "pngegg.png",
    },
  ];
  return (
    <>
      <h2 className="head-text">
        I Know That <span>Good Development</span> <br /> means {""}
        <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={"./images/" + about.image} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
