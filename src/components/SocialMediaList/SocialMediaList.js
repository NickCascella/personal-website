import gitHubLightIcon from "../../assets/images/homePage/GithubLightMode.PNG";
import gitHubDarkIcon from "../../assets/images/homePage/GithubDarkMode.PNG";
import emailIcon from "../../assets/images/homePage/emailIcon.PNG";
import linkedInLightIcon from "../../assets/images/homePage/LinkedInLightMode.PNG";
import linkedInDarkIcon from "../../assets/images/homePage/LinkedInDarkMode.PNG";

const SocialMediaList = ({ currentTheme }) => {
  const socialMediaArray = [
    {
      link: "https://github.com/NickCascella?tab=repositories",
      src: "github",
      alt: "GitHub Icon",
      handle: ": Nick Cascella",
    },
    {
      link: "mailto:cascella3509@gmail.com?subject=Congratulations.%20You%20got%20the%20job!",
      src: "emailIcon",
      alt: "Email Icon",
      handle: ": cascella3509@gmail.com",
    },
    {
      link: "https://www.linkedin.com/in/nick-cascella-a9546b14b/",
      src: "linkedIn",
      alt: "LinkedIn Icon",
      handle: ": Nick Cascella",
    },
  ];

  const iconPicker = (iconNeeded) => {
    if (currentTheme.color === "white" && iconNeeded === "github") {
      return gitHubDarkIcon;
    } else if (iconNeeded === "github") {
      return gitHubLightIcon;
    } else if (currentTheme.color === "white" && iconNeeded === "linkedIn") {
      return linkedInDarkIcon;
    } else if (iconNeeded === "linkedIn") {
      return linkedInLightIcon;
    } else {
      return emailIcon;
    }
  };

  return (
    <ul className="socialMediaLinksList">
      {socialMediaArray.map((item) => {
        return (
          <li key={item.link} className="socialMediaListItem">
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              style={{ color: currentTheme.color }}
            >
              <img
                className="socialMediaIcon"
                src={iconPicker(item.src)}
                alt={item.alt}
              ></img>{" "}
              <span className="socialMediaName">{item.handle}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialMediaList;
