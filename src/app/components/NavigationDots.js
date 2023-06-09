import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["Home", "About", "Services", "Projects", "Contact"].map(
        (item, index) => (
          <a
            className="app__navigation-dot"
            key={item + index}
            href={`#${item}`}
            style={active === item ? { backgroundColor: "#313BAC" } : {}}
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
