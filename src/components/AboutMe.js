import "../components/AboutMe.css";

function AboutMe() {
  return (
    <div className="aboutMePage">
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
          <a href="https://www.theodinproject.com/">The Odin Project</a>. An
          open source full stack coding curriculum wtih over 1000 hours worth of
          learning material and projects updated almost daily by a driven
          community. It is broken up into various sections including, but not
          limited to:
          <ul>
            <li>
              <a href="https://www.theodinproject.com/paths/foundations?">
                Foundations
              </a>
            </li>
            <ul>
              <li>HTML/CSS</li>
              <li>GIT</li>
              <li>Javascript</li>
            </ul>
            <li>
              <a href="https://www.theodinproject.com/paths/full-stack-javascript?">
                Full Stack JS
              </a>
            </li>
            <ul>
              <li>
                {" "}
                <a href="https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript">
                  Front-end
                </a>
              </li>
              <ul>
                <li>Javascript</li>
                <li>React</li>
              </ul>
              <li>
                {" "}
                <a href="https://www.theodinproject.com/paths/full-stack-javascript/courses/html-and-css">
                  Design
                </a>
              </li>
              <ul>
                <li>Responsive Design</li>
                <li>Accessibility</li>
              </ul>
              <li>
                {" "}
                <a href="https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs">
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
      <h2>What I write in</h2>
      <li>
        At this moment, I have a strong understanding of Front-end development
      </li>
      <p></p>
    </div>
  );
}

export default AboutMe;
