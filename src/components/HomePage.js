import "../components/HomePage.css";
import AboutMe from "./AboutMe";
import GitHubIcon from "../assets/images/aboutMe/GitHubLogo.png";
import emailIcon from "../assets/images/aboutMe/emailIcon.PNG";

function HomePage() {
  return (
    <div className="homePage">
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
          <li>About Me</li>
          <li>Projects</li>
        </ul>
      </nav>
      <section className="displayedPage">
        <AboutMe></AboutMe>
      </section>
    </div>
  );
}

export default HomePage;
