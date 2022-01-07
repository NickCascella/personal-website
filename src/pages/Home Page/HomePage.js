import "./HomePage.css";
import "../sharedFeatures.css";
//DEEPENDENCIES
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
//COMPONENTS
import MenuButton from "../../components/MenuButton/MenuButton";
import ThemeSlider from "../../components/ThemeSlider/ThemeSlider";
import SocialMediaList from "../../components/SocialMediaList/SocialMediaList";
import AboutMe from "../About Me/AboutMe";
import Projects from "../Projects/Projects";
import { RenderProject } from "../Projects/Projects";

function HomePage({ currentTheme, setDarkThemeOn }) {
  const checkSpecialStyling = (hover) => {
    if (
      (currentTheme.color === "white" && hover === "true") ||
      currentTheme.color === "black"
    ) {
      return "black";
    } else return "white";
  };

  const changeBorderColor = () => {
    return currentTheme.color === "white" ? "white" : "black";
  };

  const switchClass = (classOneDarkTheme, classTwoLightTheme) => {
    return currentTheme.color === "white"
      ? classOneDarkTheme
      : classTwoLightTheme;
  };

  return (
    <div className="homePage" style={{ color: currentTheme.color }}>
      <Router>
        <nav
          className="siteNavigation fadeInLeft"
          style={{ borderColor: changeBorderColor() }}
        >
          <h1 className={switchClass("headerDarkmode", "headerLightmode")}>
            Nicholas Cascella
          </h1>
          <SocialMediaList currentTheme={currentTheme} />
          <ul className="pageLinks">
            <Link to="/home/About-Me">
              <li
                style={{ color: currentTheme.color }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = checkSpecialStyling("true");
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = checkSpecialStyling("false");
                }}
              >
                <span className="pageLinksUnderline">About Me</span>
              </li>
            </Link>
            <Link to="/home/Projects">
              <li
                style={{ color: currentTheme.color }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = checkSpecialStyling("true");
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = checkSpecialStyling("false");
                }}
              >
                <span className="pageLinksUnderline"> Projects </span>
              </li>
            </Link>
          </ul>
          <div className="menuAndSwitchContainer">
            <MenuButton currentTheme={currentTheme} />
            <ThemeSlider
              setDarkThemeOn={setDarkThemeOn}
              currentTheme={currentTheme}
            />
          </div>
        </nav>
        <section className="displayedPage">
          <Switch>
            <Route exact path="/personal-website">
              <Redirect to="/home/About-Me" />
            </Route>
            <Route path="/home/About-Me">
              <AboutMe
                currentTheme={currentTheme}
                borderTheme={changeBorderColor}
              ></AboutMe>
            </Route>
            <Route exact path="/home/Projects">
              <Projects
                borderTheme={changeBorderColor}
                currentTheme={currentTheme}
                specialStyling={checkSpecialStyling}
              ></Projects>
            </Route>
            <Route path="/home/Projects/">
              <RenderProject
                currentTheme={currentTheme}
                borderTheme={changeBorderColor}
              ></RenderProject>
            </Route>
          </Switch>
        </section>
      </Router>
    </div>
  );
}

export default HomePage;
