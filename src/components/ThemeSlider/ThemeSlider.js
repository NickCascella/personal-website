import "./ThemeSlider.css";
import moonIcon from "../../assets/images/homePage/moonIcon.png";
import sunIcon from "../../assets/images/homePage/sunIcon.png";

const ThemeSlider = ({ setDarkThemeOn, currentTheme }) => {
  const checkTheme = () => {
    return currentTheme.color === "white" ? moonIcon : sunIcon;
  };

  const backgroundColor = () => {
    return currentTheme.color === "white" ? "black" : "rgba(17, 117, 248, 1)";
  };

  const trackColor = () => {
    return currentTheme.color === "white"
      ? "rgba(50, 48, 197, 0.546)"
      : "rgba(17, 117, 248, 0.552)";
  };

  return (
    <div className="themeSwitchingContainer">
      <label className="switch" style={{ backgroundColor: trackColor() }}>
        <input
          type="checkbox"
          onChange={(e) => {
            setDarkThemeOn(!e.target.checked);
          }}
        ></input>

        <img
          className="slider round"
          alt="Slider for switch"
          src={checkTheme()}
          style={{ backgroundColor: backgroundColor() }}
        ></img>
      </label>
    </div>
  );
};

export default ThemeSlider;
