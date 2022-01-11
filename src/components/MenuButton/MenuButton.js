import "./MenuButton.css";
import { useState } from "react";

import { Link } from "react-router-dom";
const MenuButton = ({ currentTheme }) => {
  const [toggleClass, setToggleClass] = useState(false);
  const addMenuAnimation = () => {
    return toggleClass ? "change" : "noChange";
  };

  const toggleMenu = () => {
    setToggleClass(!toggleClass);
  };

  return (
    <div
      className="menuContainer"
      onMouseLeave={() => {
        if (toggleClass) {
          toggleMenu();
        }
        return;
      }}
    >
      <div
        className={`switch ${addMenuAnimation()}`}
        onClick={() => {
          toggleMenu();
        }}
      >
        <div
          className="bar1"
          style={{ backgroundColor: currentTheme.color }}
        ></div>
        <div
          className="bar2"
          style={{ backgroundColor: currentTheme.color }}
        ></div>
        <div
          className="bar3"
          style={{ backgroundColor: currentTheme.color }}
        ></div>
      </div>
      <div className={`dropDownMenu ${addMenuAnimation()}`}>
        <Link
          to="/home/About-Me"
          onClick={() => {
            toggleMenu();
          }}
        >
          <div
            className="dropDownPageLink one"
            style={{ color: currentTheme.color }}
          >
            {" "}
            About Me{" "}
          </div>
        </Link>
        <Link
          to="/home/Projects"
          onClick={() => {
            toggleMenu();
          }}
        >
          <div
            className="dropDownPageLink two"
            style={{ color: currentTheme.color }}
          >
            {" "}
            Programs{" "}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MenuButton;
