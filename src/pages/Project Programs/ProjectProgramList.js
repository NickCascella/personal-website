import "./ProjectPrograms.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import projectsDataTOP from "../../assets/projects/projectsInfoTOP";
import projectLinksInfoTOP from "../../assets/projects/projectLinkInfoTOP";
import projectsDataBrainStation from "../../assets/projects/projectsInfoBrainStation";
import projectLinksBrainStation from "../../assets/projects/projectLinkInfoBrainStation";
import odinIcon from "../../assets/images/projects/odinIcon.svg";
import brainstationDarkIcon from "../../assets/images/projects/brainstationDarkIcon.png";
import brainstationLightIcon from "../../assets/images/projects/brainstationLightIcon.png";
import { useSelector } from "react-redux";

const ProjectProgramsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const theme = useSelector((store) => store.theme);
  const renderBackground = () => {
    return theme.color === "black"
      ? "rgba(0,0,0,0.3)"
      : "rgba(255,255,255,0.3)";
  };

  const renderDarkLightIcon = () => {
    return theme.color === "black"
      ? brainstationLightIcon
      : brainstationDarkIcon;
  };

  return (
    <div
      className="projectsProgramPage fadeIn"
      style={{ borderColor: theme.color }}
    >
      <h1>Programs</h1>
      <div
        className="program"
        style={{
          color: theme.color,
          border: `1px solid ${renderBackground()}`,
        }}
      >
        <img className="icon" alt="Program logo" src={odinIcon}></img>
        <a
          href="https://www.theodinproject.com/"
          target="_blank"
          rel="noreferrer"
        >
          <h3
            className="programTitle"
            style={{ color: "#cc9543", fontFamily: "norseregular" }}
          >
            {" "}
            The Odin Project{" "}
          </h3>
        </a>
        <h4 className="programDates" style={{ fontFamily: "norseregular" }}>
          April 2021 - present
        </h4>
        <p className="programDetails">
          Where it all began. The Odin Project has taught me a great deal and is
          what drove me to seriously consider being a web developer and take the
          step forward for the career change. I have dedicated quite some time
          into making these projects that test and teach a variety of important
          skills both on the front-end and back-end. I feel this program has
          been a great start to my journey and I hope showcases I have the
          interest, determination and ability to learn and work with an
          assortment of tools in order to make my goal of becoming a full-stack
          developer a reality. I know I still have a great deal to learn and
          that the learning never ends but the only way is up and I will get
          there one project at a time.
        </p>
        <Link
          to={{
            pathname: "/home/Projects/Odin-Project",
            state: {
              projectData: projectsDataTOP,
              projectLinkInfo: projectLinksInfoTOP,
              programDetails: {
                icon: odinIcon,
                title: "The Odin Project Projects",
                titleStyle: {
                  fontFamily: "norseregular",
                  color: "#cc9543",
                },
                bio: `Here is a list of some of the more developed projects I have done up
                until this point. If you view my Github, you can see the full
                list of projects I have completed that are not included here.`,
              },
            },
          }}
        >
          <span
            className="projectsLink"
            style={{ color: "#cc9543", fontFamily: "norseregular" }}
          >
            Browse Projects
          </span>
        </Link>
      </div>
      <div
        className="program"
        style={{
          color: theme.color,
          border: `1px solid ${renderBackground()}`,
        }}
      >
        <img
          className="icon"
          alt="Program logo"
          src={renderDarkLightIcon()}
        ></img>
        <a
          href="https://brainstation.io/course/online/remote-web-development-bootcamp"
          target="_blank"
          rel="noreferrer"
          style={{ color: theme.color, fontStyle: "italic" }}
        >
          <h3
            className="programTitle"
            style={{ color: "#1358db", fontFamily: "Roboto" }}
          >
            {" "}
            BrainStation{" "}
          </h3>
        </a>
        <h4 className="programDates" style={{ fontFamily: "Roboto" }}>
          January 2021 - April 2021
        </h4>
        <p className="programDetails">
          The next phase of my journey. Taught by industry professionals, I
          enrolled in Brainstation to learn what I could not being self taught.
          This program has been proven to create quality web developers and I
          hope to be able to call myself one by the end of it. This program
          builds upon and goes beyond the topics I have learned previously
          through The Odin Project. I am excited for what the program has in
          store as well as the people I will meet throughout my time here.
        </p>
        <Link
          to={{
            pathname: "/home/Projects/BrainStation",
            state: {
              projectData: projectsDataBrainStation,
              projectLinkInfo: projectLinksBrainStation,
              programDetails: {
                icon: brainstationDarkIcon,
                title: "BrainStation Projects",
                titleStyle: {
                  fontFamily: "Roberto",
                  color: "#1358db",
                },
                bio: "A list of future Brainstation projects soon to come..stay tuned.",
              },
            },
          }}
        >
          <span
            className="projectsLink"
            style={{ color: "#1358db", fontFamily: "Roberto" }}
          >
            Browse Projects
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ProjectProgramsPage;
