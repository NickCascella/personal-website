import "./AboutMe.css";
import "../sharedFeatures.css";

//Front-end icons
import pugIcon from "../../assets/images/homePage/mongoose_files/pug.png";
import htmlIcon from "../../assets/images/homePage/mongoose_files/html5.png";
import cssIcon from "../../assets/images/homePage/mongoose_files/css3.png";
import jsIcon from "../../assets/images/homePage/mongoose_files/javascript.png";
import reactIcon from "../../assets/images/homePage/mongoose_files/react.png";
import sassIcon from "../../assets/images/homePage/mongoose_files/sass.png";
import axiosIcon from "../../assets/images/homePage/axios.png";
// import nextIcon from "../assets/images/homePage/mongoose_files/next.png";
//Back-end icons
import nodejsIcon from "../../assets/images/homePage/mongoose_files/nodejs.png";
import expressIcon from "../../assets/images/homePage/expressDarkmode.png";
import mongodbIconTwo from "../../assets/images/homePage/mongoDbIcon.png";
import mongooseIcon from "../../assets/images/homePage/mongoose_files/mongoose.png";
import passportjsIcon from "../../assets/images/homePage/mongoose_files/passportjs.png";
import passportjsDarkmodeIcon from "../../assets/images/homePage/passportjsDarkmode.png";
import firebaseIcon from "../../assets/images/homePage/mongoose_files/firebase.png";
import firebaseDarkmodeIcon from "../../assets/images/homePage/firebaseIconDark.png";
//Miscellanious icons
import gitIcon from "../../assets/images/homePage/mongoose_files/git.png";
import npmIcon from "../../assets/images/homePage/mongoose_files/npm.png";
import webpackIcon from "../../assets/images/homePage/mongoose_files/webpack.png";
import herokuIcon from "../../assets/images/homePage/mongoose_files/heroku.png";
import githubIcon from "../../assets/images/homePage/mongoose_files/github.png";
import gitHubDarkIcon from "../../assets/images/homePage/GitHubDarkModeLarge.png";
import expoGoLightmodeIcon from "../../assets/images/homePage/expoGoLightmodeIcon.svg";
import expoGoDarkmodeIcon from "../../assets/images/homePage/expoGoDarkmodeIcon.png";
import jestIcon from "../../assets/images/homePage/mongoose_files/jest.png";
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
    return currentTheme.color === "black" ? lightModeIcon : darkModeIcon;
  };

  const frontEndIconArray = [
    [htmlIcon, "HTML"],
    [cssIcon, "CSS"],
    [jsIcon, "Java Script"],
    [sassIcon, "SASS"],
    [reactIcon, "React / React Native"],
    [pugIcon, "PUG"],
    [axiosIcon, "Axios"],
  ];

  const backEndIconArray = [
    [nodejsIcon, "Node.js"],
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
    [npmIcon, "npm"],
    [gitIcon, "Git"],
    [renderDarkOrLightModeIcon(githubIcon, gitHubDarkIcon), "GitHub"],
    [herokuIcon, "Heroku"],
    [
      renderDarkOrLightModeIcon(expoGoLightmodeIcon, expoGoDarkmodeIcon),
      "Expo Go",
    ],
    [webpackIcon, "Webpack"],
    [jestIcon, "Jest"],
  ];

  return (
    <div
      className="aboutMePage fadeIn"
      style={{ borderColor: changeBorderColor() }}
    >
      <h2>About Me</h2>
      <div className="aboutMeList">
        <p>
          Graduated McMaster University with a degree in{" "}
          <i>Honours Bachelor of Commerce</i> with distinction in June of 2020.
          My focus was in accounting.
        </p>
        <p>
          Worked in the hospitality/tourism sector after graduation in Niagara
          Falls, ON. Due to Covid-19 the hospitality industry has changed quite
          dramaically and as a result drove me to try developing a skill in
          another profession that I have been always curious about. This has led
          me to pursue coding!
        </p>
        <p>
          Have completed the majority of{" "}
          <a
            href="https://www.theodinproject.com/"
            target="_blank"
            rel="noreferrer"
            style={{ color: currentTheme.color }}
          >
            The Odin Project,
          </a>{" "}
          an open source full stack coding curriculum with tons of learning
          material and projects updated almost daily by a driven community.
        </p>
        <p>
          Currently enrolled in{" "}
          <a
            href="https://brainstation.io/course/online/remote-web-development-bootcamp"
            target="_blank"
            rel="noreferrer"
            style={{ color: currentTheme.color }}
          >
            Brain Stations Web Development Bootcamp
          </a>{" "}
          to be mentored by industry professionals and to refine and build upon
          what The Odin Project has taught me!
        </p>
      </div>
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
        <div>
          <i>
            Icons made by{" "}
            <a
              href="https://www.freepik.com"
              title="Freepik"
              style={{ color: currentTheme.color }}
            >
              Freepik
            </a>{" "}
            from{" "}
            <a
              href="https://www.flaticon.com/"
              title="Flaticon"
              style={{ color: currentTheme.color }}
            >
              www.flaticon.com
            </a>
          </i>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
