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
import AboutMe from "../About Me/AboutMe";
import Projects from "../Projects/Projects";
import { RenderProject } from "../Projects/Projects";
//IMAGES
import gitHubLightIcon from "../../assets/images/homePage/GithubLightMode.PNG";
import gitHubDarkIcon from "../../assets/images/homePage/GithubDarkMode.PNG";
import emailIcon from "../../assets/images/homePage/emailIcon.PNG";
import linkedInLightIcon from "../../assets/images/homePage/LinkedInLightMode.PNG";
import linkedInDarkIcon from "../../assets/images/homePage/LinkedInDarkMode.PNG";

function HomePage(props) {
  const currentTheme = props.currentTheme;
  const setDarkThemeOn = props.setDarkThemeOn;

  // const themeButtonDisplay = () => {
  //   return currentTheme.color === "white" ? "Dark Theme" : "Light Theme";
  // };

  const checkSpecialStyling = (hover) => {
    if (
      (currentTheme.color === "white" && hover === "true") ||
      currentTheme.color === "black"
    ) {
      return "black";
    } else return "white";
  };

  const iconPicker = (iconNeeded) => {
    if (currentTheme.color === "white" && iconNeeded === "github") {
      return gitHubDarkIcon;
    } else if (iconNeeded === "github") {
      return gitHubLightIcon;
    } else if (currentTheme.color === "white" && iconNeeded === "linkedIn") {
      return linkedInDarkIcon;
    } else if (iconNeeded === "linkedIn") {
      return linkedInLightIcon;
    }
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
    <div className="homePage fadeInBasic" style={{ color: currentTheme.color }}>
      <Router>
        <nav
          className="siteNavigation fadeInLeft"
          style={{ borderColor: changeBorderColor() }}
        >
          <h1 className={switchClass("headerDarkmode", "headerLightmode")}>
            Nicholas Cascella
          </h1>
          <ul className="socialMediaLinksList">
            <li className="socialMediaListItem">
              <a
                href="https://github.com/NickCascella?tab=repositories"
                target="_blank"
                rel="noreferrer"
                style={{ color: currentTheme.color }}
              >
                <img
                  className="socialMediaIcon"
                  src={iconPicker("github")}
                  alt="GitHub Icon"
                ></img>{" "}
                <span className="socialMediaName">: NickCascella</span>
              </a>
            </li>
            <li className="socialMediaListItem">
              <a
                href="mailto:cascella3509@gmail.com?subject=Congratulations.%20You%20got%20the%20job!"
                target="_blank"
                rel="noreferrer"
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
              <a
                href="https://www.linkedin.com/in/nick-cascella-a9546b14b/"
                target="_blank"
                rel="noreferrer"
                style={{ color: currentTheme.color }}
              >
                <img
                  className="socialMediaIcon"
                  src={iconPicker("linkedIn")}
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
            <div className="themeSwitchingContainer">
              {/* <div className="switchTitle">{themeButtonDisplay()}</div> */}
              <label className="switch">
                <input
                  type="checkbox"
                  onChange={(e) => {
                    setDarkThemeOn(e.target.checked);
                  }}
                ></input>
                <span className="slider round"></span>
              </label>
            </div>
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
