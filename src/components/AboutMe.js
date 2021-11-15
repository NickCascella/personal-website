import "../components/AboutMe.css";
import "../components/sharedFeatures.css";

function AboutMe(props) {
  const currentTheme = props.currentTheme;
  const changeBorderColor = props.borderTheme;

  return (
    <div
      className="aboutMePage fadeIn"
      style={{ borderColor: changeBorderColor() }}
    >
      <h2>About Me</h2>
      <ul className="aboutMeList">
        <li>
          Graduated McMaster University with a degree in{" "}
          <i>Honours Bachelor of Commerce</i> with distinction in June of 2020.
          Specialized in accounting.
        </li>
        <li>
          Worked in the hospitality/tourism sector after graduation in Niagara
          Falls, ON. Due do Covid-19 the industry has changed quite dramaically
          and as a result drove me to try developing a skill in another
          profession that I have been always curious about. This has led me to
          pursue coding!
        </li>
        <li>
          Currently enrolled in{" "}
          <a
            href="https://www.theodinproject.com/"
            target="_blank"
            style={{ color: currentTheme.color }}
          >
            The Odin Project,
          </a>{" "}
          an open source full stack coding curriculum wtih 1000+ hours worth of
          learning material and projects updated almost daily by a driven
          community. It is broken up into various sections including, but not
          limited to:
          <ul className="odinProjectOutline">
            <li>
              <a
                className="completed"
                href="https://www.theodinproject.com/paths/foundations?"
                target="_blank"
                style={{ color: currentTheme.color }}
              >
                Foundations
              </a>
              <p>
                Taught the fundamentals of JS, GIT, and HTML/CSS through
                projects such as{" "}
                <span className="projectRef">Rock, Paper, Scissors</span> and{" "}
                <span className="projectRef">Etch-Sketch</span>
                {/* to show layouts,
                how to store and host projects on GitHub, and how JS can in turn
                manipulate the page based on user inputs. */}
              </p>
            </li>
            <li>
              <a
                href="https://www.theodinproject.com/paths/full-stack-javascript?"
                target="_blank"
                style={{ color: currentTheme.color }}
              >
                Full Stack JS
              </a>
              <p>
                One of two paths offered after their Foundations course. Broken
                down into three sections: Front-end, Design, and Back-end.
              </p>
            </li>
            <ul>
              <li>
                {" "}
                <a
                  href="https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript"
                  target="_blank"
                  style={{ color: currentTheme.color }}
                >
                  Front-end
                </a>
                <p>
                  {/* Front-end focuses heavily on more in depth projects with JS
                  and React while using Firebase as the back-end until you
                  progress to their back-end section. This includes projects
                  such as my */}
                  Goes in depth on material for React, JS, and Firebase through
                  projects such as
                  <span className="projectRef"> Twitter Clone</span> or{" "}
                  <span className="projectRef">Where's Waldo</span>.
                </p>
              </li>
              <li>
                {" "}
                <a
                  href="https://www.theodinproject.com/paths/full-stack-javascript/courses/html-and-css"
                  target="_blank"
                  style={{ color: currentTheme.color }}
                >
                  Design
                </a>
              </li>
              <p>
                Focuses on topics such as HTML structrue using proper semantics,
                Accessibility, and the User Interface/Experience. Some such
                concepts are applied here in as my{" "}
                <span className="projectRef">New Scientist</span> and{" "}
                <span className="projectRef">Smash Magazine</span> website
                clones.{" "}
                <span className="projectRef">
                  Note: I am currently on this part of the course.
                </span>
              </p>
              <li>
                {" "}
                <a
                  href="https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs"
                  target="_blank"
                  style={{ color: currentTheme.color }}
                >
                  Back-end
                </a>
                <p>
                  To quote The Odin Project{" "}
                  <span className="projectRef">
                    "Learn how to fully craft your site's backend using Express,
                    the most popular back-end JavaScript framework! You will
                    also learn how to use a non-relational database, MongoDB."
                  </span>{" "}
                  I have not yet reached this part of the curriculum but to
                  learn more click the{" "}
                  <span className="projectRef">Back-end</span> tag above as I
                  will be completing it in the near future.
                </p>
              </li>
            </ul>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default AboutMe;
