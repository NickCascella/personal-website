import "./ThemeSlider.css";
import { useDispatch, useSelector } from "react-redux";
import { FaLightbulb } from "react-icons/fa";
import changeTheme from "../../Redux/actions";

const ThemeSlider = () => {
  const theme = useSelector((store) => store.theme);
  const dispatch = useDispatch();

  const checkTheme = () => {
    return theme.color === "white" ? (
      <FaLightbulb size={30} className="slider round" alt="Slider for switch" />
    ) : (
      <FaLightbulb size={30} className="slider round" alt="Slider for switch" />
    );
  };

  const trackColor = () => {
    return theme.color === "white"
      ? "rgba(50, 48, 197, 0.546)"
      : "rgba(17, 117, 248, 0.552)";
  };

  return (
    <div className="themeSwitchingContainer">
      <label className="switch" style={{ backgroundColor: trackColor() }}>
        <input
          type="checkbox"
          onChange={(e) => {
            dispatch(changeTheme(e.target.checked));
          }}
        ></input>
        {checkTheme()}

        {/* <img
          className="slider round"
          alt="Slider for switch"
          src={checkTheme()}
          style={{ backgroundColor: backgroundColor() }}
        ></img> */}
      </label>
    </div>
  );
};

export default ThemeSlider;
