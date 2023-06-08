import React from "react";
//import { FaLinkedinIn } from "react-icons/bs";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div className="git-icon">
        <a href="https://github.com/Amr097" target="_blank">
          <FaGithub />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/amrabdelghany/" target="_blank">
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
