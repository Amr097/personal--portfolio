"use client";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Navbar.scss";
import Menu from "./partials/Menu";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="#">
          {" "}
          <img
            src="/images/AMR Logo - Original - 5000x5000 .png"
            alt="Logo"
          ></img>
        </a>
      </div>
      <ul className="app__navbar-links">
        {["Home", "About", "Services", "Projects", "Contact"].map(
          (item, index) => (
            <li className="app__flex p-text" key={uuidv4()}>
              <div></div>
              <a href={`#${item}`}>{item}</a>
            </li>
          )
        )}
      </ul>
      <Menu toggle={toggle} setToggle={setToggle} />
    </nav>
  );
};

export default Navbar;
