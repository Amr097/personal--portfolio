"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import "./Header.scss";
import AppWrap from "@/app/wrapper/AppWrap";

const Header = () => {
  const { ref, inView } = useInView();
  return (
    <div className="app__header app__flex" ref={ref}>
      <div className="app__header-info">
        <div className="app__header-badge">
          <div className="badge-cmp app__flex badge-cmp-animation">
            <span className={inView ? "span-animation" : undefined}>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello I am</p>
              <h1 className="head-text">Amr</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex tag-cmp-animation">
            <p className="p-text">Web Developer</p>
            <p className="p-text">Freelancer</p>
            <img
              className="angry-toon"
              src="images/—Pngtree—cartoon angry symbols_5990755.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="app__header-img">
        <img src="/images/one.png" alt="profile_bg"></img>
        <img
          className={
            "overlay_circle " +
            (inView ? "overlay_circle-animation" : undefined)
          }
          src="/images/circle.svg"
          alt="profile_circle"
          loading="lazy"
        />
      </div>

      <div className="app__header-circles">
        {[
          "/images/sass.png",
          "/images/react.png",
          "/images/nextjs.256x256.png",
        ].map((circle, index) => (
          <div
            className={
              "circle-cmp app__flex " +
              (inView ? "circle-cmp-animation" : undefined)
            }
            key={`circle-${index}`}
          >
            <img src={circle} alt={circle} loading="lazy"></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(Header, "Home", "base-");
