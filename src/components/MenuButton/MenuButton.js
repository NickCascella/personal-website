import "./MenuButton.css";
import { useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
const MenuButton = ({ currentTheme }) => {
  const [toggleClass, setToggleClass] = useState(false);
  const location = useLocation();
  const addMenuAnimation = () => {
    return toggleClass ? "change" : "noChange";
  };

  const toggleMenu = () => {
    setToggleClass(!toggleClass);
  };

  return (
    <div
      className="menuContainer"
      onMouseLeave={(e) => {
        toggleMenu();
      }}
    >
      <div
        className={`switch ${addMenuAnimation()}`}
        // onMouseEnter={() => {
        //   toggleMenu();
        // }}

        onClick={(e) => {
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
        {location.pathname !== "/home/About-Me" && (
          <Link
            to="/home/About-Me"
            onClick={() => {
              toggleMenu();
            }}
          >
            <div
              className="dropDownPageLink"
              style={{ color: currentTheme.color }}
            >
              {" "}
              About Me{" "}
            </div>
          </Link>
        )}
        {location.pathname !== "/home/Projects" && (
          <Link
            to="/home/Projects"
            onClick={() => {
              toggleMenu();
            }}
          >
            <div
              className="dropDownPageLink"
              style={{ color: currentTheme.color }}
            >
              {" "}
              Projects{" "}
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default MenuButton;
