import "./HomePage.css";
import "../sharedFeatures.css";
//DEEPENDENCIES
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import { useSelector } from "react-redux";
//COMPONENTS
import MenuButton from "../../components/MenuButton/MenuButton";
import ThemeSlider from "../../components/ThemeSlider/ThemeSlider";
import SocialMediaList from "../../components/SocialMediaList/SocialMediaList";
import AboutMe from "../About Me/AboutMe";
import Projects from "../Projects/Projects";
import ProjectProgramsPage from "../Project Programs/ProjectProgramList";
import { RenderProject } from "../Projects/Projects";

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const theme = useSelector((store) => store.theme);

  const checkSpecialStyling = (hover) => {
    if (
      (theme.color === "white" && hover === "true") ||
      theme.color === "black"
    ) {
      return "black";
    } else return "white";
  };

  const switchClass = (classOneDarkTheme, classTwoLightTheme) => {
    return theme.color === "white" ? classOneDarkTheme : classTwoLightTheme;
  };

  return (
    <div className="homePage" style={{ color: theme.color }}>
      <Router basename="/personal-website">
        <nav
          className="siteNavigation fadeInLeft"
          style={{ borderColor: theme.color }}
        >
          <h1 className={switchClass("headerDarkmode", "headerLightmode")}>
            Nicholas Cascella
          </h1>
          <SocialMediaList />
          <ul className="pageLinks">
            <Link to="/home/About-Me">
              <li
                style={{ color: theme.color }}
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
                style={{ color: theme.color }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = checkSpecialStyling("true");
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = checkSpecialStyling("false");
                }}
              >
                <span className="pageLinksUnderline">Programs</span>
              </li>
            </Link>
          </ul>
          <div className="menuAndSwitchContainer">
            <MenuButton />
            <ThemeSlider />
          </div>
        </nav>
        <section className="displayedPage">
          <Switch>
            <Route exact path="/">
              <Redirect to="/home/About-Me" />
            </Route>
            <Route path="/home/About-Me">
              <AboutMe />
            </Route>
            <Route exact path="/home/Projects">
              <ProjectProgramsPage />
            </Route>
            <Route exact path="/home/Projects/:projectProgram">
              <Projects specialStyling={checkSpecialStyling} />
            </Route>
            <Route path="/home/Projects/:projectProgram/:project">
              <RenderProject />
            </Route>
            <Route path="*">
              <Redirect to="/home/About-Me" />
            </Route>
          </Switch>
        </section>
      </Router>
    </div>
  );
}

export default HomePage;
