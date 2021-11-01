import "../components/HomePage.css";
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
//IMAGES
import GitHubIcon from "../assets/images/aboutMe/GitHubLogo.png";
import emailIcon from "../assets/images/aboutMe/emailIcon.PNG";

function HomePage() {
  return (
    <div className="homePage">
      <Router>
        <nav className="siteNavigation">
          <h1>Nicholas Cascella</h1>
          <ul className="socialMediaLinksList">
            <li className="socialMediaListItem">
              <a
                href="https://github.com/NickCascella?tab=repositories"
                target="_blank"
              >
                <img
                  className="socialMediaIcon"
                  src={GitHubIcon}
                  alt="GitHub Icon"
                ></img>{" "}
                <span>: NickCascella</span>
              </a>
            </li>
            <li className="socialMediaListItem">
              <a
                href="mailto:cascella3509@gmail.com?subject=Congratulations.%20You%20got%20the%20job!"
                target="_blank"
              >
                <img
                  className="socialMediaIcon"
                  src={emailIcon}
                  alt="Email Icon"
                ></img>{" "}
                <span>: cascella3509@gmail.com</span>
              </a>
            </li>
            <li>
              <Link to="/home/About-Me">About Me</Link>
            </li>
            <li>
              {" "}
              <Link to="/home/Projects">Projects</Link>
            </li>
          </ul>
        </nav>
        <section className="displayedPage">
          <Switch>
            <Route exact path="/">
              <Redirect to="/home/About-Me" />
            </Route>
            <Route path="/home/About-Me">
              <AboutMe></AboutMe>
            </Route>
            <Route path="/home/Projects">
              <Projects></Projects>
            </Route>
          </Switch>
        </section>
      </Router>
    </div>
  );
}

export default HomePage;
