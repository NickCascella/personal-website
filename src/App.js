import { useState } from "react";
import "./App.css";
import HomePage from "./pages/Home Page/HomePage";

function App() {
  const darkTheme = {
    color: "white",
    backgroundColor: "rgba(0,0,0,1)",
  };

  const lightTheme = {
    color: "black",
    backgroundColor: "white",
  };

  // "rgba(255,255,255, 0.9)",
  const [darkThemeOn, setDarkThemeOn] = useState(true);

  const currentTheme = () => {
    if (darkThemeOn === true) {
      return darkTheme;
    } else {
      return lightTheme;
    }
  };

  const bubbleTheme = () => {
    return darkThemeOn
      ? "rgba(50, 48, 197, 0.546)"
      : "rgba(17, 117, 248, 0.552)";
  };

  const renderBubbles = () => {
    let arrayOfBubbles = [];
    for (let i = 0; i < 10; i++) {
      arrayOfBubbles.push(i);
    }
    return arrayOfBubbles.map(() => {
      return <li style={{ background: bubbleTheme() }}></li>;
    });
  };

  return (
    <div className="app">
      <HomePage
        currentTheme={currentTheme()}
        setDarkThemeOn={setDarkThemeOn}
      ></HomePage>
      <div className="area" style={currentTheme()}>
        <ul className="circles">{renderBubbles()}</ul>
      </div>
    </div>
  );
}

export default App;
