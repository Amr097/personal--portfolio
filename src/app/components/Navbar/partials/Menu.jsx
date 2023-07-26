"use client";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import "./Menu.scss";
import { useInView } from "react-intersection-observer";

const Menu = () => {
  const { ref, inView } = useInView();

  const unCheckMenu = () => {
    document.querySelector("#checkbox").checked = false;
  };

  return (
    <div className="app__navbar-menu">
      <input type="checkbox" id="checkbox"></input>

      <HiMenuAlt4></HiMenuAlt4>

      {
        <div className={"visible"}>
          <HiX></HiX>

          <ul tabIndex="0" ref={ref} id="hamMenu">
            {["Home", "About", "Services", "Projects", "Contact"].map(
              (item) => (
                <li key={uuidv4()}>
                  <a
                    className={
                      "app__flex p-text " + (inView && "visible").toString()
                    }
                    href={`#${item}`}
                    onClick={unCheckMenu}
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      }
    </div>
  );
};

export default Menu;
