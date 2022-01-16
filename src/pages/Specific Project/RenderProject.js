import "./RenderProject.css";

//DEPENDENCIES
import { v4 as uuidv4 } from "uuid";
import { useLocation, Redirect } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";

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

export default RenderProject;
