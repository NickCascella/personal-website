import "../components/Projects.css";
import "../components/sharedFeatures.css";
//DEPENDENCIES
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import projectsData from "../assets/images/projectsInfo";
import { useEffect } from "react";

function Projects(props) {
  const currentTheme = props.currentTheme;
  const checkSpecialStyling = props.specialStyling;

  useEffect(() => {
    // Update the document title using the browser API
    console.log(checkSpecialStyling);
  });

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
        <Link
          className="projectTitle"
          to={{
            pathname: "/home/Projects/SmashingMagazine",
            state: "smashingMagazineAndNewScientist",
          }}
        >
          <li
            style={{ color: currentTheme.color }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = checkSpecialStyling("true");
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = checkSpecialStyling("false");
            }}
          >
            <span className="projectName">
              New Scientist / Smashing Magazine Webpage Clone
            </span>{" "}
            <span className="projectLanguage">JS / HTML / CSS</span>{" "}
          </li>
        </Link>

        <Link
          className="projectTitle"
          to={{
            pathname: "/home/Projects/TwitterClone",
            state: "twitterClone",
          }}
        >
          <li
            style={{ color: currentTheme.color }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = checkSpecialStyling("true");
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = checkSpecialStyling("false");
            }}
          >
            <span className="projectName">
              Twitter Clone<i>ish</i>
            </span>
            <span className="projectLanguage">
              React / JS / HTML / CSS / Firebase
            </span>
          </li>
        </Link>
        <Link
          className="projectTitle"
          to={{
            pathname: "/home/Projects/WhereIsWaldo",
            state: "whereIsWaldo",
          }}
        >
          <li
            style={{ color: currentTheme.color }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = checkSpecialStyling("true");
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = checkSpecialStyling("false");
            }}
          >
            <span className="projectName">Where's Waldo</span>{" "}
            <span className="projectLanguage">
              React / JS / HTML / CSS / Firebase
            </span>
          </li>
        </Link>
        <Link
          to={{
            pathname: "/home/Projects/OdinShop",
            state: "odinShop",
          }}
        >
          <li
            style={{ color: currentTheme.color }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = checkSpecialStyling("true");
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = checkSpecialStyling("false");
            }}
          >
            <span className="projectName">Odin Shop</span>{" "}
            <span className="projectLanguage">React / JS / HTML / CSS</span>
          </li>
        </Link>
        <Link
          to={{
            pathname: "/home/Projects/MemoryGame",
            state: "memoryGame",
          }}
        >
          <li
            style={{ color: currentTheme.color }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = checkSpecialStyling("true");
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = checkSpecialStyling("false");
            }}
          >
            <span className="projectName">Memory Game</span>{" "}
            <span className="projectLanguage">React / JS / HTML / CSS</span>
          </li>
        </Link>
        <Link
          to={{
            pathname: "/home/Projects/Battleship",
            state: "battleship",
          }}
        >
          <li
            style={{ color: currentTheme.color }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = checkSpecialStyling("true");
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = checkSpecialStyling("false");
            }}
          >
            <span className="projectName">Battleship</span>{" "}
            <span className="projectLanguage">JS / HTML / CSS</span>
          </li>
        </Link>
        <Link
          to={{
            pathname: "/home/Projects/WeatherApp",
            state: "weatherApp",
          }}
        >
          <li
            style={{ color: currentTheme.color }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = checkSpecialStyling("true");
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = checkSpecialStyling("false");
            }}
          >
            <span className="projectName">Weather App</span>{" "}
            <span className="projectLanguage">JS / HTML / CSS</span>
          </li>
        </Link>
      </ul>
    </div>
  );
}

const RenderProject = (props) => {
  const location = useLocation();
  const specificProject = projectsData[location.state];
  const currentTheme = props.currentTheme;
  const uniqueId = () => {
    return Math.random() * 1000000;
  };
  if (!specificProject) {
    return <div>ERROR</div>;
  }

  return (
    <div className="projectsPage specificProject fadeIn">
      <h2>{specificProject.title}</h2>
      <h3>Project Description</h3>
      <p>{specificProject.description}</p>
      <ul className="projectKeyFeatures">
        {specificProject.features.map((feature) => {
          return <li key={uniqueId()}>{feature}</li>;
        })}
      </ul>
      {specificProject.links.map((linkData) => {
        return (
          <a
            className="projectLink"
            style={{ color: currentTheme.color }}
            href={linkData[1]}
            target="_blank"
            key={uniqueId()}
          >
            {linkData[0]}
          </a>
        );
      })}
    </div>
  );
};

// function SmashingMagazineClone() {
//   return (
//     <div className="projectsPage specificProject fadeIn">
//       <h2>Smashing Magazine Clone</h2>
//       <h3>Project Description</h3>
//       <p>
//         Project's meant to test responsive design as well as layout replication
//         of <i>Smashing Magazine</i> and <i>New Scientist</i>
//         <ul className="projectKeyFeatures">
//           <li>
//             Responsively designed with flexbox and media queries for device
//             dimensions
//           </li>
//           <li>
//             Taught better layout design choices and help developed new ideas and
//             standards for future projects
//           </li>
//           <li>Has mobile support</li>
//         </ul>
//       </p>
//       <a
//         className="projectLink"
//         href="https://www.smashingmagazine.com/"
//         target="_blank"
//       >
//         Smashing Magazine - Original
//       </a>
//       <a
//         className="projectLink"
//         href="https://nickcascella.github.io/SmashingMagazineClone/"
//         target="_blank"
//       >
//         Smashing Magazine - Clone
//       </a>
//       <div className="divider"></div>
//       <a
//         className="projectLink"
//         href="https://www.newscientist.com/article/2286218-ancient-lake-in-marss-gale-crater-may-have-actually-been-a-small-pond/"
//         target="_blank"
//       >
//         New Scientist - Original
//       </a>
//       <a
//         className="projectLink"
//         href="https://nickcascella.github.io/NewScientistWebpageClone/"
//         target="_blank"
//       >
//         New Scientist - Clone
//       </a>
//     </div>
//   );
// }

// function TwitterClone() {
//   return (
//     <div className="projectsPage specificProject fadeIn">
//       <h2>Twitter Inspired Messaging System</h2>
//       <h3>Project Description</h3>
//       <p>
//         A partial twitter clone using React front-end and a Firebase hosted
//         back-end, that attempts to emulate the core functions of tweeting and
//         user profiles. In this application you can:
//         <ul className="projectKeyFeatures">
//           <li>Sign in using your google account.</li>
//           <li>Post tweets to a global feed.</li>
//           <li>
//             Interact with other user tweets by liking, retweeting, and starting
//             reply chains.
//           </li>
//           <li>
//             Profile edits that alter previous tweets by the user such as
//             username, bio, profile picture, and profile background image.
//           </li>
//           <li>Follow/Unfollow other users and viewing their profiles.</li>
//           <li>
//             Was designed only for display 1200px or larger, due to being made
//             before learning about responsive design.
//           </li>
//         </ul>
//       </p>
//       <a
//         className="projectLink"
//         href="https://twitter-clone-848fe.web.app/"
//         target="_blank"
//       >
//         Twitter Link
//       </a>
//     </div>
//   );
// }

// function WhereIsWaldoGame() {
//   return (
//     <div className="projectsPage specificProject fadeIn">
//       <h2>Where's Waldo Game</h2>
//       <h3>Project Description</h3>
//       <p>
//         Is similar to the game Where's Waldo, where you must find 3 characters
//         as fast as possible in order to get the bes score! This project uses
//         React front-end and a Firebase hosted back-end. This was my first
//         project using a back-end for data storage, where in which is keeps data
//         on user highscores and character positions.
//         <ul className="projectKeyFeatures">
//           <li className="checked">
//             With this being my first time using a Back-end service, this project
//             taught me how to store and retrieve some basic information when
//             needed. Such as data on user highscores and character positions.
//           </li>
//           <li>
//             Was designed only for displays 1650px or larger, due to how large
//             the actual game "board" is.
//           </li>
//         </ul>
//       </p>
//       <a
//         className="projectLink"
//         href="https://where-is-waldo-77531.web.app/"
//         target="_blank"
//       >
//         Where's Waldo?!
//       </a>
//     </div>
//   );
// }

// function OdinShop() {
//   return (
//     <div className="projectsPage specificProject fadeIn">
//       <h2>Odin Shop</h2>
//       <h3>Project Description</h3>
//       <p>
//         My first multi page application using React. This project is a store
//         where you can purchase pokemon and pokemon related items using a pokemon
//         api. NOTE: Made before the concepts of responsive design were taught,
//         works ideally on display ~1600px.
//         <ul className="projectKeyFeatures">
//           <li>
//             Uses api calls to retrieve data on various pokemon to be used by the
//             app.
//           </li>
//           <li>
//             Uses react router to dynamically load into pages based off which
//             pokemon or item the user has clicked.
//           </li>
//           <li>
//             Demonstrated a simplified version of pagination where limits were
//             put on api calls to retrieve only 20 amount of pokemon every page
//             when browsing in the{" "}
//             <a href="https://odin-shop.web.app/shopPokemon">shop pokemon</a>{" "}
//             section.
//           </li>
//         </ul>
//       </p>
//       <a
//         className="projectLink"
//         href="https://odin-shop.web.app/"
//         target="_blank"
//       >
//         Odin Shop
//       </a>
//     </div>
//   );
// }

export default Projects;
export { RenderProject };
