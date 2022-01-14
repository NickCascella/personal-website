import "./SocialMediaList.css";
import { SiGithub } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { SiLinkedin } from "react-icons/si";

const SocialMediaList = ({ currentTheme }) => {
  const newSocialMediaArray = [
    {
      link: "https://github.com/NickCascella?tab=repositories",
      icon: <SiGithub />,
      handle: "Nick Cascella",
    },
    {
      link: "mailto:cascella3509@gmail.com?subject=Congratulations.%20You%20got%20the%20job!",
      icon: <FcGoogle />,
      handle: "cascella3509@gmail.com",
    },
    {
      link: "https://www.linkedin.com/in/nick-cascella-a9546b14b/",
      icon: <SiLinkedin />,
      handle: "Nick Cascella",
    },
  ];

  return (
    <ul className="socialMediaLinksList">
      {newSocialMediaArray.map((item) => {
        return (
          <li key={item.link} className="socialMediaListItem">
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              style={{ color: currentTheme.color }}
            >
              {item.icon}
              <span className="socialMediaName">{item.handle}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialMediaList;
