import "../components/Projects.css";
//DEEPENDENCIES
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

function Projects() {
  return (
    <div className="projectsPage">
      <h2>Projects</h2>
      <p>
        Here is a list of some of the projects I have completed up until this
        point. If you view my Github, you can see the full list of projects. The
        reason they are not listed here is because while they were valuable
        learning experiences which taught important concepts, I only wanted to
        showcase the more developed projects.
      </p>
      <p>In chronological order:</p>
      <ul aria-label="List of completed projects." className="projectsList">
        <li>This Webapage!</li>
        <li>Smashing Magazine Webpage Clone</li>
        <li>New Scientist Webpage Clone</li>
        <li>
          <Link to="/home/Projects/TwitterClone">
            Twitter Clone<i>ish</i>
          </Link>
        </li>
        <li>Where's Waldo</li>
        <li>Odin Shop</li>
        <li>Memory Game</li>
        <li>Battleship</li>
        <li>Weather App</li>
      </ul>
    </div>
  );
}

function TwitterClone() {
  return (
    <div>
      <h3>Twitter Inspired Messaging System</h3>
      <h4>Project Description</h4>
      <p>
        A partial twitter clone that attempts to emulate to core functions of
        tweeting and profiles. In this application you can:
        <ul>
          <li>Sign in using your goolge account.</li>
          <li>Post tweets to a global feed.</li>
          <li>
            Interact with other users tweets by liking, retweeting, and starting
            reply chains.
          </li>
          <li>
            Profile edits that alter previous tweets by the user such as
            username, bio, profile picture, and profile background image.
          </li>
          <li>Follow/Unfollow other users and viewing their profiles.</li>
        </ul>
      </p>
    </div>
  );
}

export default Projects;
export { TwitterClone };
