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

const ProjectProgramsPage = ({ currentTheme }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const renderBackground = () => {
    return currentTheme.color === "black"
      ? "rgba(0,0,0,0.3)"
      : "rgba(255,255,255,0.3)";
  };

  const renderDarkLightIcon = () => {
    return currentTheme.color === "black"
      ? brainstationLightIcon
      : brainstationDarkIcon;
  };

  return (
    <div className="projectsProgramPage fadeIn">
      <h1>Programs</h1>
      <div
        className="program"
        style={{
          color: currentTheme.color,
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
          "The Odin Project is one of those "What I wish I had when I was
          learning" resources. Not everyone has access to a computer science
          education or the funds to attend an intensive coding school and
          neither of those is right for everyone anyway. This project is
          designed to fill in the gap for people who are trying to hack it on
          their own but still want a high quality education."
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
                  fontSize: "50px",
                },
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
          color: currentTheme.color,
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
          style={{ color: currentTheme.color, fontStyle: "italic" }}
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
          "BrainStation is more than a Web Development bootcamp: it's a career
          transformation experience. Beyond learning the essential technical
          skills you'll need to start a new career as a Web Developer, you'll
          gain hands-on, industry experience through unique real-world projects
          where you'll work alongside industry professionals on real business
          problems and collaborate with designers, data scientists, and digital
          marketers to deliver a real-world solution. See why thousands of
          graduates have launched their new careers with BrainStation through
          this Web Development bootcamp."
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
                  fontSize: "50px",
                },
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
