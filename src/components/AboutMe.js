import "../components/AboutMe.css";
import "../components/sharedFeatures.css";

function AboutMe() {
  return (
    <div className="aboutMePage fadeIn">
      <h2>About Me</h2>
      <ul className="aboutMeList">
        <li>
          Graduated McMaster University with a degree in{" "}
          <i>Honours Bachelor of Commerce</i> with distinction in June of 2020.
          Specialized in accounting.
        </li>
        <li>
          Worked in the hospitality/tourism sector after graduation in Niagara
          Falls, ON. Became apparent it was not the career I was after and soon
          found a great interest in coding!
        </li>
        <li>
          Currently enrolled in{" "}
          <a href="https://www.theodinproject.com/" target="_blank">
            The Odin Project.
          </a>
          An open source full stack coding curriculum wtih 1000+ hours worth of
          learning material and projects updated almost daily by a driven
          community. It is broken up into various sections including, but not
          limited to:
          <ul>
            <li>
              <a
                className="completed"
                href="https://www.theodinproject.com/paths/foundations?"
                target="_blank"
              >
                Foundations
              </a>
            </li>
            <ul>
              <li className="completed">HTML/CSS</li>
              <li className="completed">GIT</li>
              <li className="completed">Javascript</li>
            </ul>
            <li>
              <a
                href="https://www.theodinproject.com/paths/full-stack-javascript?"
                target="_blank"
              >
                Full Stack JS
              </a>
            </li>
            <ul>
              <li className="completed">
                {" "}
                <a
                  className="completed"
                  href="https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript"
                  target="_blank"
                >
                  Front-end
                </a>
              </li>
              <ul>
                <li className="completed">Javascript</li>
                <li className="completed">React</li>
              </ul>
              <li>
                {" "}
                <a
                  href="https://www.theodinproject.com/paths/full-stack-javascript/courses/html-and-css"
                  target="_blank"
                >
                  Design
                </a>
              </li>
              <ul>
                <li className="completed">UI and UX</li>
                <li className="completed">Responsive Design</li>
                <li>Accessibility</li>
              </ul>
              <li>
                {" "}
                <a
                  href="https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs"
                  target="_blank"
                >
                  Back-end
                </a>
              </li>
              <ul>
                <li>NODEJS</li>
                <li>Express</li>
                <li>MongoDB</li>
              </ul>
            </ul>
          </ul>
        </li>
      </ul>
      <span className="noteOnOdinList">
        Note: bolded text is what I have completed up until this point
      </span>
    </div>
  );
}

export default AboutMe;
