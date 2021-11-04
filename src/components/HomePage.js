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
import { SmashingMagazineClone, TwitterClone } from "./Projects";
//IMAGES
import gitHubIcon from "../assets/images/homePage/GitHubLogo.png";
import emailIcon from "../assets/images/homePage/emailIcon.PNG";
import linkedInIcon from "../assets/images/homePage/linkedInIcon.PNG";

function HomePage() {
  return (
    <div className="homePage fadeInBasic">
      <Router>
        <nav className="siteNavigation fadeInLeft">
          <h1>Nicholas Cascella</h1>
          <ul className="socialMediaLinksList">
            <li className="socialMediaListItem">
              <a
                href="https://github.com/NickCascella?tab=repositories"
                target="_blank"
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
              <a href="" target="_blank">
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
              <li>About Me</li>
            </Link>
            <Link to="/home/Projects">
              <li>Projects</li>
            </Link>
          </ul>
        </nav>
        <section className="displayedPage">
          <Switch>
            <Route exact path="/personal-website">
              <Redirect to="/home/About-Me" />
            </Route>
            <Route path="/home/About-Me">
              <AboutMe></AboutMe>
            </Route>
            <Route exact path="/home/Projects">
              <Projects></Projects>
            </Route>
            <Route path="/home/Projects/TwitterClone">
              <TwitterClone></TwitterClone>
            </Route>
            <Route path="/home/Projects/SmashingMagazine">
              <SmashingMagazineClone></SmashingMagazineClone>
            </Route>
          </Switch>
        </section>
      </Router>
    </div>
  );
}

export default HomePage;
