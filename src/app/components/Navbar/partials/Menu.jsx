"use client";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import React from "react";
import "./Menu.scss";
import { useInView } from "react-intersection-observer";

const Menu = () => {
  const { ref, inView } = useInView();

  return (
    <div className="app__navbar-menu">
      <input type="checkbox"></input>

      <HiMenuAlt4></HiMenuAlt4>

      {
        <div className={"visible"}>
          <HiX></HiX>

          <ul tabIndex="0" ref={ref}>
            {["Home", "About", "Skills", "Work", "Contact"].map((item) => (
              <li>
                <a
                  className={"app__flex p-text " + (inView && "visible")}
                  key={`${item}`}
                  href={`#${item}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      }
    </div>
  );
};

export default Menu;
