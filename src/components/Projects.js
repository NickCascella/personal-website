import "../components/Projects.css";
import "../components/sharedFeatures.css";
//DEPENDENCIES
import { Link } from "react-router-dom";
import { useEffect } from "react";

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
        <li>This Webpage!</li>
        <Link className="projectTitle" to="/home/Projects/SmashingMagazine">
          <li>
            <span className="projectName">
              New Scientist / Smashing Magazine Webpage Clone
            </span>{" "}
            <span className="projectLanguage">JS / HTML / CSS</span>{" "}
          </li>
        </Link>

        <Link className="projectTitle" to="/home/Projects/TwitterClone">
          <li>
            <span className="projectName">
              Twitter Clone<i>ish</i>
            </span>
            <span className="projectLanguage">
              React / JS / HTML / CSS / Firebase
            </span>
          </li>
        </Link>
        <Link className="projectTitle" to="/home/Projects/WhereIsWaldo">
          <li>
            <span className="projectName">Where's Waldo</span>{" "}
            <span className="projectLanguage">
              React / JS / HTML / CSS / Firebase
            </span>
          </li>
        </Link>
        <li className="projectName">Odin Shop</li>
        <li className="projectName">Memory Game</li>
        <li className="projectName">Battleship</li>
        <li className="projectName">Weather App</li>
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
        Project's meant to test responsive design as well as layout replication
        of <i>Smashing Magazine</i> and <i>New Scientist</i>
        <ul className="projectKeyFeatures">
          <li>
            Responsively designed with flexbox and media queries for device
            dimensions
          </li>
          <li>
            Taught better layout design choices and help developed new ideas and
            standards for future projects
          </li>
          <li>Has mobile support</li>
        </ul>
      </p>
      <a
        className="projectLink"
        href="https://www.smashingmagazine.com/"
        target="_blank"
      >
        Smashing Magazine - Original
      </a>
      <a
        className="projectLink"
        href="https://nickcascella.github.io/SmashingMagazineClone/"
        target="_blank"
      >
        Smashing Magazine - Clone
      </a>
      <div className="divider"></div>
      <a
        className="projectLink"
        href="https://www.newscientist.com/article/2286218-ancient-lake-in-marss-gale-crater-may-have-actually-been-a-small-pond/"
        target="_blank"
      >
        New Scientist - Original
      </a>
      <a
        className="projectLink"
        href="https://nickcascella.github.io/NewScientistWebpageClone/"
        target="_blank"
      >
        New Scientist - Clone
      </a>
    </div>
  );
}

function TwitterClone() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          <li>
            Was designed only for display 1200px or larger, due to being made
            before learning about responsive design.
          </li>
        </ul>
      </p>
      <a
        className="projectLink"
        href="https://twitter-clone-848fe.web.app/"
        target="_blank"
      >
        Twitter Link
      </a>
    </div>
  );
}

function WhereIsWaldoGame() {
  return (
    <div className="projectsPage specificProject fadeIn">
      <h2>Where's Waldo Game</h2>
      <h3>Project Description</h3>
      <p>
        Is similar to the game Where's Waldo, where you must find 3 characters
        as fast as possible in order to get the bes score! This project uses
        React front-end and a Firebase hosted back-end. This was my first
        project using a back-end for data storage, where in which is keeps data
        on user highscores and character positions.
        <ul className="projectKeyFeatures">
          <li>
            This was my first project using a back-end for data storage, where
            in which it keeps data on user highscores and character positions.
          </li>
          <li>
            Was designed only for displays 1650px or larger, due to how large
            the actual game "board" is.
          </li>
        </ul>
      </p>
      <a
        className="projectLink"
        href="https://where-is-waldo-77531.web.app/"
        target="_blank"
      >
        Where's Waldo?!
      </a>
    </div>
  );
}

export default Projects;
export { TwitterClone, SmashingMagazineClone, WhereIsWaldoGame };
