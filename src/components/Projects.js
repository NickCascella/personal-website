import "../components/Projects.css";
import "../components/sharedFeatures.css";
//DEPENDENCIES
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="projectsPage fadeIn">
      <h2>Projects</h2>
      <p>
        Here is a list of some of the projects I have completed up until this
        point. If you view my Github, you can see the full list of projects. The
        reason they are not all listed here is because while they were valuable
        learning experiences which taught important concepts, I only wanted to
        showcase the more developed projects.
      </p>
      <p>Click a project below to learn more.</p>
      <ul aria-label="List of completed projects." className="projectsList">
        <li>This Webapage!</li>
        <Link className="projectTitle" to="/home/Projects/SmashingMagazine">
          <li>
            <span>Smashing Magazine Webpage Clone</span>{" "}
            <span>JS / HTML / CSS</span>{" "}
          </li>
        </Link>
        <li>
          <span>New Scientist Webpage Clone</span>
          <span>JS / HTML / CSS</span>
        </li>
        <Link className="projectTitle" to="/home/Projects/TwitterClone">
          <li>
            <span>
              Twitter Clone<i>ish</i>
            </span>
            <span>React / JS / HTML / CSS / Firebase</span>
          </li>
        </Link>
        <li>
          <span>Where's Waldo</span>{" "}
          <span>React / JS / HTML / CSS / Firebase</span>
        </li>
        <li>Odin Shop</li>
        <li>Memory Game</li>
        <li>Battleship</li>
        <li>Weather App</li>
      </ul>
    </div>
  );
}

function SmashingMagazineClone() {
  return (
    <div className="projectsPage specificProject fadeIn">
      <h2>Smashing Magazine Clone</h2>
      <h3>Project Description</h3>
      <p>
        A partial twitter clone using React front-end and a Firebase hosted
        back-end, that attempts to emulate the core functions of tweeting and
        user profiles. In this application you can:
        <ul className="projectKeyFeatures">
          <li>Sign in using your google account.</li>
          <li>Post tweets to a global feed.</li>
          <li>
            Interact with other user tweets by liking, retweeting, and starting
            reply chains.
          </li>
          <li>
            Profile edits that alter previous tweets by the user such as
            username, bio, profile picture, and profile background image.
          </li>
          <li>Follow/Unfollow other users and viewing their profiles.</li>
        </ul>
      </p>
      <a className="projectLink" href="" target="_blank">
        Twitter Link
      </a>
    </div>
  );
}

function TwitterClone() {
  return (
    <div className="projectsPage specificProject fadeIn">
      <h2>Twitter Inspired Messaging System</h2>
      <h3>Project Description</h3>
      <p>
        A partial twitter clone using React front-end and a Firebase hosted
        back-end, that attempts to emulate the core functions of tweeting and
        user profiles. In this application you can:
        <ul className="projectKeyFeatures">
          <li>Sign in using your google account.</li>
          <li>Post tweets to a global feed.</li>
          <li>
            Interact with other user tweets by liking, retweeting, and starting
            reply chains.
          </li>
          <li>
            Profile edits that alter previous tweets by the user such as
            username, bio, profile picture, and profile background image.
          </li>
          <li>Follow/Unfollow other users and viewing their profiles.</li>
        </ul>
      </p>
      <a className="projectLink" href="" target="_blank">
        Twitter Link
      </a>
    </div>
  );
}

export default Projects;
export { TwitterClone, SmashingMagazineClone };
