import "./MenuButton.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const MenuButton = () => {
  const theme = useSelector((store) => store.theme);
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
        return toggleClass ? toggleMenu() : null;
      }}
    >
      <div
        className={`switch ${addMenuAnimation()}`}
        onClick={() => {
          toggleMenu();
        }}
      >
        <div className="bar1" style={{ backgroundColor: theme.color }}></div>
        <div className="bar2" style={{ backgroundColor: theme.color }}></div>
        <div className="bar3" style={{ backgroundColor: theme.color }}></div>
      </div>
      <div className={`dropDownMenu ${addMenuAnimation()}`}>
        <Link
          to="/home/About-Me"
          onClick={() => {
            toggleMenu();
          }}
        >
          <div className="dropDownPageLink one" style={{ color: theme.color }}>
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
          <div className="dropDownPageLink two" style={{ color: theme.color }}>
            {" "}
            Programs & Projects{" "}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MenuButton;
