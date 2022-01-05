import "../components/AboutMe.css";
import "../components/sharedFeatures.css";
//Front-end icons
import pugIcon from "../assets/images/homePage/mongoose_files/pug.png";
import htmlIcon from "../assets/images/homePage/mongoose_files/html5.png";
import cssIcon from "../assets/images/homePage/mongoose_files/css3.png";
import jsIcon from "../assets/images/homePage/mongoose_files/javascript.png";
import reactIcon from "../assets/images/homePage/mongoose_files/react.png";
import sassIcon from "../assets/images/homePage/mongoose_files/sass.png";
// import nextIcon from "../assets/images/homePage/mongoose_files/next.png";
//Back-end icons
import nodejsIcon from "../assets/images/homePage/mongoose_files/nodejs.png";
import expressIcon from "../assets/images/homePage/expressDarkmode.png";
import mongodbIconTwo from "../assets/images/homePage/mongoDbIcon.png";
import mongooseIcon from "../assets/images/homePage/mongoose_files/mongoose.png";
import passportjsIcon from "../assets/images/homePage/mongoose_files/passportjs.png";
import passportjsDarkmodeIcon from "../assets/images/homePage/passportjsDarkmode.png";
import firebaseIcon from "../assets/images/homePage/mongoose_files/firebase.png";
import firebaseDarkmodeIcon from "../assets/images/homePage/firebaseIconDark.png";
//Miscellanious icons
import gitIcon from "../assets/images/homePage/mongoose_files/git.png";
import npmIcon from "../assets/images/homePage/mongoose_files/npm.png";
import webpackIcon from "../assets/images/homePage/mongoose_files/webpack.png";
import herokuIcon from "../assets/images/homePage/mongoose_files/heroku.png";
import githubIcon from "../assets/images/homePage/mongoose_files/github.png";
import gitHubDarkIcon from "../assets/images/homePage/GitHubDarkModeLarge.png";
import jestIcon from "../assets/images/homePage/mongoose_files/jest.png";
// import passportjsIcon from "../assets/images/homePage/passportjs.png";

function AboutMe({ currentTheme, borderTheme }) {
  const changeBorderColor = borderTheme;

  const renderIcons = (iconNameAndImgArray) => {
    return iconNameAndImgArray.map((icon) => {
      return (
        <div className="iconContainer" key={icon[1]}>
          <img className="icon" src={icon[0]} alt={icon[1]}></img>
          <div className="iconContainerText">{icon[1]}</div>
        </div>
      );
    });
  };

  const renderDarkOrLightModeIcon = (lightModeIcon, darkModeIcon) => {
    if (currentTheme.color === "black") {
      return lightModeIcon;
    }
    return darkModeIcon;
  };

  const frontEndIconArray = [
    [htmlIcon, "HTML"],
    [cssIcon, "CSS"],
    [jsIcon, "Java Script"],
    [sassIcon, "SASS"],
    [reactIcon, "React"],
    [pugIcon, "PUG"],
  ];

  const backEndIconArray = [
    [nodejsIcon, "Node.Js"],
    [expressIcon, "Express"],
    [mongodbIconTwo, "MongoDb"],
    [mongooseIcon, "Mongoose"],
    [renderDarkOrLightModeIcon(firebaseIcon, firebaseDarkmodeIcon), "Firebase"],
    [
      renderDarkOrLightModeIcon(passportjsIcon, passportjsDarkmodeIcon),
      "PassportJs",
    ],
  ];

  const miscellaneousIconArray = [
    [npmIcon, "NPM"],
    [gitIcon, "Git"],
    [renderDarkOrLightModeIcon(githubIcon, gitHubDarkIcon), "GitHub"],
    [webpackIcon, "Webpack"],
    [herokuIcon, "Heroku"],
    [jestIcon, "Jest"],
  ];

  return (
    <div
      className="aboutMePage fadeIn"
      style={{ borderColor: changeBorderColor() }}
    >
      <h2>About Me</h2>
      <ul className="aboutMeList">
        <li>
          Graduated McMaster University with a degree in{" "}
          <i>Honours Bachelor of Commerce</i> with distinction in June of 2020.
          My focus was in accounting.
        </li>
        <li>
          Worked in the hospitality/tourism sector after graduation in Niagara
          Falls, ON. Due to Covid-19 the hospitality industry has changed quite
          dramaically and as a result drove me to try developing a skill in
          another profession that I have been always curious about. This has led
          me to pursue coding!
        </li>
        <li>
          Have completed the majority of{" "}
          <a
            href="https://www.theodinproject.com/"
            target="_blank"
            rel="noreferrer"
            style={{ color: currentTheme.color }}
          >
            The Odin Project,
          </a>{" "}
          an open source full stack coding curriculum wtih 1000+ hours worth of
          learning material and projects updated almost daily by a driven
          community.
          <ul className="odinProjectOutline">
            {/* <li>
              <a
                className="completed"
                href="https://www.theodinproject.com/paths/foundations?"
                target="_blank"
                style={{ color: currentTheme.color }}
              >
                Foundations
              </a>
              <p>
                Taught the fundamentals of JS, GIT, and HTML/CSS through
                projects such as{" "}
                <span className="projectRef">Rock, Paper, Scissors</span> and{" "}
                <span className="projectRef">Etch-Sketch</span>
                {/* to show layouts,
                how to store and host projects on GitHub, and how JS can in turn
                manipulate the page based on user inputs. 
              </p>
            </li>
            <li>
              <a
                href="https://www.theodinproject.com/paths/full-stack-javascript?"
                target="_blank"
                style={{ color: currentTheme.color }}
              >
                Full Stack JS
              </a>
              <p>
                One of two paths offered after their Foundations course. Broken
                down into three sections:
              </p>
            </li> */}
            {/* <ul>
              <li>
                {" "}
                <a
                  href="https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript"
                  target="_blank"
                  style={{ color: currentTheme.color }}
                >
                  Front-end
                </a>
                <p>
                  Goes in depth on React, JS, and Firebase through projects such
                  as
                  <span className="projectRef"> Twitter Clone</span> or{" "}
                  <span className="projectRef">Where's Waldo</span>.
                </p>
              </li>
              <li>
                {" "}
                <a
                  href="https://www.theodinproject.com/paths/full-stack-javascript/courses/html-and-css"
                  target="_blank"
                  style={{ color: currentTheme.color }}
                >
                  Design
                </a>
              </li>
              <p>
                Focuses on topics such as HTML structrue using proper semantics,
                accessibility, and the user interface/experience. Such concepts
                are applied here in my{" "}
                <span className="projectRef">New Scientist</span> and{" "}
                <span className="projectRef">Smash Magazine</span> website
                clones.{" "}
              </p>
              <li>
                {" "}
                <a
                  href="https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs"
                  target="_blank"
                  style={{ color: currentTheme.color }}
                >
                  Back-end
                </a>
                <p>
                  Up until this point I have mostly used and done all database
                  and server hosting on Firebase, and all server requests in the
                  front-end. I am currently now learning how to create, use, and
                  properly write server side handling of requests, as well as my
                  own server with Node.js, Express, Mongoose, and MongoDb.
                </p>
              </li>
            </ul> */}
          </ul>
        </li>
      </ul>
      <h2 className="skillsTitle">Skills</h2>
      <div className="toolsLearned">
        <div className="section">
          <h3 className="sectionTitle">Front-end</h3>
          <div className="icons">{renderIcons(frontEndIconArray)}</div>
        </div>
        <div className="section">
          <h3 className="sectionTitle">Back-end</h3>
          <div className="icons">{renderIcons(backEndIconArray)}</div>
        </div>
        <div className="section">
          <h3 className="sectionTitle">Miscellaneous</h3>
          <div className="icons">{renderIcons(miscellaneousIconArray)}</div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
