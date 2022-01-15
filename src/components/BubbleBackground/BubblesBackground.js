import { useSelector } from "react-redux";
import "./BubblesBackground.css";

const RenderBubbles = () => {
  const theme = useSelector((store) => store.theme);

  const bubbleTheme = () => {
    return theme.color === "white"
      ? "rgba(50, 48, 197, 0.546)"
      : "rgba(17, 117, 248, 0.552)";
  };

  const renderBubbles = () => {
    let arrayOfBubbles = [];
    for (let i = 0; i < 10; i++) {
      arrayOfBubbles.push(i);
    }
    return arrayOfBubbles.map((index) => {
      return <li key={index} style={{ background: bubbleTheme() }}></li>;
    });
  };

  return (
    <div className="area" style={theme}>
      <ul className="circles">{renderBubbles()}</ul>
    </div>
  );
};

export default RenderBubbles;
