import "./Projects.css";
import "../sharedFeatures.css";
//DEPENDENCIES
import { Link, useLocation, Redirect } from "react-router-dom";
import odinIcon from "../../assets/images/projects/odinIcon.svg";
import brainstationDarkIcon from "../../assets/images/projects/brainstationDarkIcon.png";
import brainstationLightIcon from "../../assets/images/projects/brainstationLightIcon.png";
import { useEffect } from "react";

function Projects(props) {
  const currentTheme = props.currentTheme;
  const checkSpecialStyling = props.specialStyling;
  const changeBorderColor = props.borderTheme;
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
    } else if (currentTheme.color === "black") {
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
            <Link
              className="projectTitle"
              to={{
                pathname: projectLinkInfo[key].path,
                state: {
                  specificProject: projectLinkInfo[key].state,
                  projectData: programData.projectData,
                },
              }}
              key={`${projectLinkInfo[key].path} link`}
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
          );
        })}
      </ul>
    );
  };

  return (
    <div
      className="projectsPage fadeIn"
      style={{ borderColor: changeBorderColor() }}
    >
      <div className="projectsListHeaderAndIcon">
        <h2>
          <span style={programData.programDetails.titleStyle}>
            {programData.programDetails.title}
          </span>
        </h2>
        <img
          className="icon"
          alt="program icon"
          src={checkIcons(programData.programDetails.icon)}
        ></img>
      </div>
      <p>
        Here is a list of some of the projects I have completed up until this
        point. If you view my Github, you can see the full list I have done but
        not included here.
      </p>
      <p>Click a project below to learn more!</p>
      {renderLinks()}
    </div>
  );
}

const RenderProject = ({ currentTheme, borderTheme }) => {
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
  const changeBorderColor = borderTheme;
  const uniqueId = () => {
    return Math.random() * 1000000;
  };
  if (!specificProject) {
    return <Redirect to={"/home/projects"} />;
  }

  return (
    <div
      className="projectsPage specificProject fadeIn"
      style={{ borderColor: changeBorderColor() }}
    >
      {}
      <h2>{specificProject.title}</h2>
      <h3>Project Description</h3>
      <p>{specificProject.description}</p>
      <ul className="projectKeyFeatures">
        {specificProject.features.map((feature) => {
          return <li key={uniqueId()}>{feature}</li>;
        })}
      </ul>
      <ul className="projectKeyFeatures projectDownsides">
        {specificProject.downsides.map((feature) => {
          return <li key={uniqueId()}>{feature}</li>;
        })}
      </ul>
      {specificProject.links.length > 0 &&
        specificProject.links.map((linkData) => {
          return (
            <a
              className="projectLink"
              style={{ color: currentTheme.color }}
              href={linkData[1]}
              target="_blank"
              rel="noreferrer"
              key={uniqueId()}
            >
              {linkData[0]}
            </a>
          );
        })}
      {specificProject.imgs &&
        specificProject.imgs.map((img) => {
          return (
            <div>
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
