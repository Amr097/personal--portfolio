import React from "react";
import { NavigationDots, SocialMedia } from "../components";

const date = new Date();
const AppWrap = (Component, idName, wrapper, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className={`${wrapper}app__wrapper app__flex`}>
          <Component />
          <div className="copyright">
            <p className="p-text">@{date.getFullYear()} Amr Abdelghany</p>
          </div>
        </div>

        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
