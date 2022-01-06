import "./Projects.css";
import "../sharedFeatures.css";
//DEPENDENCIES
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import projectsData from "../../assets/projects/projectsInfo";
import projectLinkInfo from "../../assets/projects/projectLinkInfo";

function Projects(props) {
  const currentTheme = props.currentTheme;
  const checkSpecialStyling = props.specialStyling;
  const changeBorderColor = props.borderTheme;

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
                state: projectLinkInfo[key].state,
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
      <h2>Projects</h2>
      <p>
        Here is a list of some of the projects I have completed up until this
        point. If you view my Github, you can see the full list of projects I
        have done. Browse away!
      </p>
      <p>Click a project below to learn more.</p>
      {renderLinks()}
    </div>
  );
}

const RenderProject = (props) => {
  const location = useLocation();
  const specificProject = projectsData[location.state];
  const currentTheme = props.currentTheme;
  const changeBorderColor = props.borderTheme;
  const uniqueId = () => {
    return Math.random() * 1000000;
  };
  if (!specificProject) {
    return <div>ERROR</div>;
  }

  return (
    <div
      className="projectsPage specificProject fadeIn"
      style={{ borderColor: changeBorderColor() }}
    >
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
    </div>
  );
};

export default Projects;
export { RenderProject };
