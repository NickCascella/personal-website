import "./Projects.css";
import "../sharedFeatures.css";
//DEPENDENCIES
import { v4 as uuidv4 } from "uuid";
import { Link, useLocation, Redirect } from "react-router-dom";
import odinIcon from "../../assets/images/projects/odinIcon.svg";
import brainstationDarkIcon from "../../assets/images/projects/brainstationDarkIcon.png";
import brainstationLightIcon from "../../assets/images/projects/brainstationLightIcon.png";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function Projects({ specialStyling }) {
  const theme = useSelector((store) => store.theme);
  const location = useLocation();
  const programData = location.state;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!programData) {
    return <Redirect to={"/home/projects"} />;
  }
  const projectLinkInfo = programData.projectLinkInfo;

  //fix this
  const checkIcons = (icon) => {
    if (icon === odinIcon) {
      return odinIcon;
    } else if (theme.color === "black") {
      return brainstationLightIcon;
    } else {
      return brainstationDarkIcon;
    }
  };

  const renderLinks = () => {
    const arrayOfLinkKeys = Object.keys(projectLinkInfo);

    return (
      <ul aria-label="List of completed projects." className="projectsList">
        {arrayOfLinkKeys.map((key) => {
          return (
            <div key={uuidv4()}>
              {projectLinkInfo[key].month && (
                <h3
                  key={uuidv4()}
                  style={programData.programDetails.titleStyle}
                  className="projectMonth"
                >
                  {projectLinkInfo[key].month}
                </h3>
              )}
              <Link
                className="projectTitle"
                to={{
                  pathname: projectLinkInfo[key].path,
                  state: {
                    specificProject: projectLinkInfo[key].state,
                    projectData: programData.projectData,
                    headerStyle: programData.programDetails.titleStyle,
                  },
                }}
                key={`${projectLinkInfo[key].path} link`}
              >
                <li
                  style={{ color: theme.color }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = specialStyling("true");
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = specialStyling("false");
                  }}
                >
                  <span className="projectName pageLinksUnderline">
                    {projectLinkInfo[key].title}
                  </span>{" "}
                  <span className="projectLanguage">
                    {projectLinkInfo[key].packagesUsed.map((item) => {
                      if (
                        projectLinkInfo[key].packagesUsed.indexOf(item) ===
                        projectLinkInfo[key].packagesUsed.length - 1
                      ) {
                        return `${item} `;
                      } else {
                        return `${item} / `;
                      }
                    })}
                  </span>
                </li>
              </Link>
            </div>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="projectsPage fadeIn" style={{ borderColor: theme.color }}>
      <div className="projectsListHeaderAndIcon">
        <h2>
          <span
            className="programTitle"
            style={programData.programDetails.titleStyle}
          >
            {programData.programDetails.title}
          </span>
        </h2>
        <img
          className="icon"
          alt="program icon"
          src={checkIcons(programData.programDetails.icon)}
        ></img>
      </div>
      <p>{programData.programDetails.bio}</p>
      <p>Click a project below to learn more!</p>
      {renderLinks()}
    </div>
  );
}

const RenderProject = () => {
  const theme = useSelector((store) => store.theme);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();
  let locationData = location.state;
  if (!locationData) {
    return <Redirect to={"/home/projects"} />;
  }
  const projectsData = locationData.projectData;
  const specificProject = projectsData[locationData.specificProject];

  return (
    <div
      className="projectsPage specificProject fadeIn"
      style={{ borderColor: theme.color }}
    >
      <h2 className="specificProjectHeader" style={locationData.headerStyle}>
        {specificProject.title}
      </h2>
      <h3>Project Description</h3>
      <p>{specificProject.description}</p>
      <ul className="projectKeyFeatures">
        {specificProject.features.map((feature) => {
          return <li key={uuidv4()}>{feature}</li>;
        })}
      </ul>
      <ul className="projectKeyFeatures projectDownsides">
        {specificProject.downsides.map((feature) => {
          return <li key={uuidv4()}>{feature}</li>;
        })}
      </ul>
      {specificProject.links.length > 0 &&
        specificProject.links.map((linkData) => {
          return (
            <a
              className="projectLink"
              style={{ color: theme.color }}
              href={linkData[1]}
              target="_blank"
              rel="noreferrer"
              key={uuidv4()}
            >
              {linkData[0]}
            </a>
          );
        })}
      {specificProject.imgs &&
        specificProject.imgs.map((img) => {
          return (
            <div key={uuidv4()}>
              <h3 className="projectImgsTitle">{img[2]}</h3>
              <img className="projectImg" src={img[0]} alt={img[1]}></img>
            </div>
          );
        })}
    </div>
  );
};

export default Projects;
export { RenderProject };
