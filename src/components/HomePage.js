import "../components/HomePage.css";
import "../components/sharedFeatures.css";
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
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import { RenderProject } from "./Projects";

//IMAGES
import gitHubIcon from "../assets/images/homePage/GitHubLogo.png";
import emailIcon from "../assets/images/homePage/emailIcon.PNG";
import linkedInIcon from "../assets/images/homePage/linkedInIcon.PNG";
import { useState } from "react";

function HomePage(props) {
  const currentTheme = props.currentTheme;
  const setDarkThemeOn = props.setDarkThemeOn;

  const themeButtonDisplay = () => {
    if (currentTheme.color === "white") {
      return "Dark Theme";
    } else {
      return "Light Theme";
    }
  };

  const checkSpecialStyling = (hover) => {
    if (
      (currentTheme.color === "white" && hover === "true") ||
      currentTheme.color === "black"
    ) {
      return "black";
    } else return "white";
  };

  return (
    <div className="homePage fadeInBasic" style={{ color: currentTheme.color }}>
      <Router>
        <nav className="siteNavigation fadeInLeft">
          <h1>Nicholas Cascella</h1>
          <ul className="socialMediaLinksList">
            <li className="socialMediaListItem">
              <a
                href="https://github.com/NickCascella?tab=repositories"
                target="_blank"
                style={{ color: currentTheme.color }}
              >
                <img
                  className="socialMediaIcon"
                  src={gitHubIcon}
                  alt="GitHub Icon"
                ></img>{" "}
                <span className="socialMediaName">: NickCascella</span>
              </a>
            </li>
            <li className="socialMediaListItem">
              <a
                href="mailto:cascella3509@gmail.com?subject=Congratulations.%20You%20got%20the%20job!"
                target="_blank"
                style={{ color: currentTheme.color }}
              >
                <img
                  className="socialMediaIcon"
                  src={emailIcon}
                  alt="Email Icon"
                ></img>{" "}
                <span className="socialMediaName">
                  : cascella3509@gmail.com
                </span>
              </a>
            </li>
            <li className="socialMediaListItem">
              <a href="" target="_blank" style={{ color: currentTheme.color }}>
                <img
                  className="socialMediaIcon"
                  src={linkedInIcon}
                  alt="linkedIn Icon"
                ></img>
                <span className="socialMediaName">: NickCascella</span>
              </a>
            </li>
          </ul>
          <ul className="pageLinks">
            <Link to="/home/About-Me">
              <li
                style={{ color: currentTheme.color }}
                onMouseOver={(e) => {
                  e.target.style.color = checkSpecialStyling("true");
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = checkSpecialStyling("false");
                }}
              >
                About Me
              </li>
            </Link>
            <Link to="/home/Projects">
              <li
                style={{ color: currentTheme.color }}
                onMouseOver={(e) => {
                  e.target.style.color = checkSpecialStyling("true");
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = checkSpecialStyling("false");
                }}
              >
                Projects
              </li>
            </Link>
          </ul>
          <div className="themeSwitchingContainer">
            <div className="switchTitle">{themeButtonDisplay()}</div>
            <label class="switch">
              <input
                type="checkbox"
                onChange={(e) => {
                  setDarkThemeOn(e.target.checked);
                }}
              ></input>
              <span class="slider round"></span>
            </label>
          </div>
        </nav>
        <section className="displayedPage">
          <Switch>
            <Route exact path="/personal-website">
              <Redirect to="/home/About-Me" />
            </Route>
            <Route path="/home/About-Me">
              <AboutMe currentTheme={currentTheme}></AboutMe>
            </Route>
            <Route exact path="/home/Projects">
              <Projects
                currentTheme={currentTheme}
                specialStyling={checkSpecialStyling}
              ></Projects>
            </Route>
            <Route path="/home/Projects/">
              <RenderProject currentTheme={currentTheme}></RenderProject>
            </Route>
            s
          </Switch>
        </section>
      </Router>
    </div>
  );
}

export default HomePage;
