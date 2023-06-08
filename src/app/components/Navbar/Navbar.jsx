"use client";
import React, { useState } from "react";
import "./Navbar.scss";
import Menu from "./partials/Menu";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img
          src="/images/AMR Logo - Original - 5000x5000 .png"
          alt="Logo"
        ></img>
      </div>
      <ul className="app__navbar-links">
        {["Home", "Services", "Projects", "Contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div></div>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <Menu toggle={toggle} setToggle={setToggle} />
    </nav>
  );
};

export default Navbar;
