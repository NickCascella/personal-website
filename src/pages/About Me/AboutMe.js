import "./AboutMe.css";
import "../sharedFeatures.css";
import { useEffect } from "react";
import RenderSkillsIcons from "../../components/SkillsIcons/SkillsIcon";
import { useSelector } from "react-redux";

function AboutMe() {
  const theme = useSelector((store) => store.theme);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="aboutMePage fadeIn" style={{ borderColor: theme.color }}>
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
            style={{ color: theme.color, fontStyle: "italic" }}
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
            style={{ color: theme.color, fontStyle: "italic" }}
          >
            Brain Stations Web Development Bootcamp
          </a>{" "}
          to be mentored by industry professionals and to refine and build upon
          what I have learned so far!
        </p>
      </div>
      <h2 className="skillsTitle">Skills</h2>
      <RenderSkillsIcons />
    </div>
  );
}

export default AboutMe;
