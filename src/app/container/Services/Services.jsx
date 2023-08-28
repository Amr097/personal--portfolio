"use client";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { urlFor, client } from "@/client";
import AppWrap from "@/app/wrapper/AppWrap";
import "./Services.scss";

const Services = () => {
  const [abouts, setAbouts] = useState([]);
  const { ref, inView } = useInView();

  useEffect(() => {
    const query = '*[_type=="abouts"]';
    client.fetch(query).then((data) => setAbouts(data));
  }, []);
  return (
    <>
      <h2 className="head-text">
        What We <span>Offer</span> For <br /> {""}
        <span>Your Business</span>
      </h2>

      <div className="app__profiles" ref={ref}>
        {abouts.map((about, index) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3, type: "tween" }}
            className={
              "app__profile-item " +
              (inView && "app__profile-item--animation").toString()
            }
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} loading="lazy" />
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

export default AppWrap(Services, "Services", "services-");
