import { ImHtmlFive2 } from "react-icons/im";
import {
  SiCss3,
  SiPug,
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiPassport,
  SiFirebase,
  SiGithub,
  SiWebpack,
  SiJest,
  SiExpo,
} from "react-icons/si";
import {
  DiSass,
  DiReact,
  DiNodejsSmall,
  DiNpm,
  DiGit,
  DiHeroku,
} from "react-icons/di";

const RenderSkillsIcons = ({ currentTheme }) => {
  const iconSize = 80;
  const frontEndIconArray = [
    [
      <ImHtmlFive2 size={iconSize} color="orange" className="icon" />,
      "HyperText Markup Language",
    ],
    [
      <SiCss3 size={iconSize} color="blue" className="icon" />,
      "Cascading Style Sheets",
    ],
    [
      <SiJavascript
        size={iconSize}
        style={{ color: "rgb(227, 227, 6)", borderRadius: "5px" }}
        className="icon"
      />,
      "Java Script",
    ],

    [
      <DiReact
        size={iconSize}
        style={{ color: "rgb(87, 213, 255)" }}
        className="icon"
      />,
      "React/React Native",
    ],
    [
      <DiSass size={iconSize} style={{ color: "pink" }} className="icon" />,
      "Syntactically Awesome Style Sheets",
    ],
    [
      <SiPug size={iconSize} style={{ color: "brown" }} className="icon" />,
      "PUG",
    ],
    [
      <SiTypescript
        size={iconSize}
        style={{ color: "rgb(83, 137, 218)" }}
        className="icon"
      />,
      "Typescript",
    ],
  ];

  const backEndIconArray = [
    [
      <DiNodejsSmall
        size={iconSize}
        style={{ color: "rgb(3, 225, 3)" }}
        className="icon"
      />,
      "NodeJs",
    ],
    [
      <SiExpress
        size={iconSize}
        style={{ color: currentTheme.color }}
        className="icon"
      />,
      "Express",
    ],
    [
      <SiMongodb size={iconSize} style={{ color: "green" }} className="icon" />,
      "Mongodb/Mongoose",
    ],
    [
      <SiPassport
        size={iconSize}
        style={{ color: "rgb(118, 208, 238)" }}
        className="icon"
      />,
      "PassportJs",
    ],
    [
      <SiFirebase
        size={iconSize}
        style={{ color: "orange" }}
        className="icon"
      />,
      "Firebase",
    ],
  ];

  const miscellaneousIconArray = [
    [
      <DiNpm
        size={iconSize}
        style={{ color: "rgb(200, 0, 0)" }}
        className="icon"
      />,
      "Node Package Manager",
    ],
    [
      <DiGit size={iconSize} style={{ color: "orange" }} className="icon" />,
      "Git",
    ],
    [
      <SiGithub size={iconSize} style={{ color: "none" }} className="icon" />,
      "GitHub",
    ],
    [
      <DiHeroku size={iconSize} style={{ color: "purple" }} className="icon" />,
      "Heroku",
    ],
    [
      <SiExpo
        size={iconSize}
        style={{ color: currentTheme.color }}
        className="icon"
      />,
      "Expo",
    ],
    [
      <SiWebpack
        size={iconSize}
        style={{ color: "lightblue" }}
        className="icon"
      />,
      "Webpack",
    ],
    [
      <SiJest
        size={iconSize}
        style={{ color: "rgb(154, 25, 70)" }}
        className="icon"
      />,
      "Jest",
    ],
  ];

  const renderIcons = (iconArray) => {
    return iconArray.map((icon) => {
      return (
        <div className="iconContainer" key={icon[1]}>
          {icon[0]}
          <div className="iconContainerText">{icon[1]}</div>
        </div>
      );
    });
  };

  return (
    <div className="toolsLearned">
      <div className="section">
        <h3 className="sectionTitle">Front-end</h3>
        <div className="icons"> {renderIcons(frontEndIconArray)}</div>
      </div>
      <div className="section">
        <h3 className="sectionTitle">Back-end</h3>
        <div className="icons"> {renderIcons(backEndIconArray)}</div>
      </div>
      <div className="section">
        <h3 className="sectionTitle">Miscellaneous</h3>
        <div className="icons"> {renderIcons(miscellaneousIconArray)}</div>
      </div>
    </div>
  );
};

export default RenderSkillsIcons;
