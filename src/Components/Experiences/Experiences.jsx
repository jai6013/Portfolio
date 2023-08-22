import React, { useContext } from "react";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import styles from "./Experiences.module.css";

const Experiences = () => {
  const { newTheme } = useContext(ThemeContext);
  return (
    <div className={styles.experiences}>
      <h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
        Experience
      </h1>
      <div className={styles.borderBottom} />

      <div className={styles.container}>
        <div className={styles.position}>
          Associate Software Engineer (Frontend)
        </div>
        <div className={styles.date}>Jan 2022 - Present</div>
        <fieldset className={styles.responsibilites}>
          <legend>
            <h3>Roles & responsibilities</h3>
          </legend>
          <ul>
            <li>
              Enhanced code reusability across all Tekion products by
              contributing common components to the Tekion components library.
            </li>
            <li>
              Championed test-driven development by crafting unit tests using
              Jest and React Testing Library, while also shaping the testing
              strategy to achieve impeccable 100% code coverage.
            </li>
            <li>
              Collaborated seamlessly with the backend team through technical
              analysis, UX discussions, and API design sessions, ensuring secure
              and high-performance integrations.
            </li>

            <li>
              Revamped front-end site performance through the strategic
              application of performance patterns such as lazy loading,
              preloading, and code splitting, resulting in an impressive initial
              load time reduction to 2 seconds.
            </li>
            <li>
              Demonstrated expertise in SDLC, Agile Methodology, GIT version
              control systems, and Jira defect tracking tools.
            </li>
            <li>
              Elevated code quality by meticulously reviewing teammates code,
              pinpointing errors, and providing insightful solutions.
            </li>
            <li>
              Guided and empowered new team members, ensuring their alignment
              with tasks and on-time task completion.
            </li>

            <li>
              Orchestrated agile practices, including daily stand-ups, story and
              bug ticket management, active participation in sprint planning and
              retrospectives, and close collaboration with QA for resolving
              critical issues.
            </li>

            <li>
              Effectively troubleshooted and resolved over 100 production issues
              and numerous UI/UX concerns, contributing to the overall stability
              and user experience of the projects.
            </li>
          </ul>
        </fieldset>

        <br />
        <div className={styles.position}>Design Engineer (Mechanical)</div>
        <div className={styles.date}>Feb 2020 - Jan 2021</div>
        <fieldset className={styles.responsibilites}>
          <legend>
            <h3> Roles & responsibilites </h3>
          </legend>
          <ul>
            <li>
              Used computer aided design software like AutoCAD and SolidWorks to
              develop designs
            </li>
            <li>
              Developed and designed processes and provided visual aids to
              assist new employees with the implementation of new processes.
            </li>
            <li>
              Facilitated and executed offsite rework program during major
              assemblies
            </li>

            <li>
              Wrote technical reports from material inspection to product
              dispatch
            </li>
          </ul>
        </fieldset>
      </div>
    </div>
  );
};

export default Experiences;
