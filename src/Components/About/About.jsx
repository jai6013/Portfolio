import React from "react";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import WindowSize from "../../Utils/WindowSize";
import styles from "./About.module.css";

const About = () => {
  const { newTheme } = React.useContext(ThemeContext);
  const [width] = WindowSize();
  const img =
    width < 650
      ? "https://avatars.githubusercontent.com/u/86410092?v=4"
      : "https://github.com/himrd95/portfolio/blob/main/public/developer.gif?raw=true";
  return (
    <div
      className={styles.container}
      style={{ boxShadow: `3px 3px 5px ${newTheme.line}` }}
    >
      <div className={styles.first}>
        <img
          src={
            "https://github.com/himrd95/portfolio/blob/main/public/developer.gif?raw=true"
          }
          alt=""
        />
      </div>
      <div className={styles.second}>
        <h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
          About Me
        </h1>
        <div className={styles.borderBottom} />
        <p style={{ color: `${newTheme.para}` }} className={styles.aboutMe}>
          Hello, I'm Jai Yadav, a frontend developer with 1.7 years of
          experience starting in April 2021. I'm passionate about creating
          engaging web experiences, proficient in HTML, CSS, and JavaScript.
		  <br></br> 
		  <br></br> 
		  I thrive in collaborative environments and have a track record of
          delivering exceptional web projects. Beyond coding, I enjoy exploring
          new technologies and tackling coding challenges. Currently, I'm
          actively <span style={{color:"#00a0a0"}}>seeking frontend development opportunities</span> to further my
          growth and contribute to innovative projects. .
        </p>
      </div>
    </div>
  );
};

export default About;
