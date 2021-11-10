import { useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage";

function App() {
  const darkTheme = {
    color: "white",
    backgroundColor: "rgba(0,0,0,0.8)",
  };

  const lightTheme = {
    color: "black",
    backgroundColor: "rgba(255,255,255,0.8)",
  };

  const [darkThemeOn, setDarkThemeOn] = useState(false);

  const currentTheme = () => {
    if (darkThemeOn === true) {
      return darkTheme;
    } else {
      return lightTheme;
    }
  };

  return (
    <div className="app">
      <HomePage currentTheme={currentTheme()}></HomePage>
      <div className="area" style={currentTheme()}>
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
