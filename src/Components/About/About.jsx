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
          Hello, I'm Jai Yadav, a Software Engineer with 4 years of experience 
          designing and delivering scalable, high-performance web applications. 
          Currently working as Software Development Engineer – II at VComm Infomedia, 
          I specialize in full-stack development with expertise in React.js, Next.js, 
          Node.js, TypeScript, and AWS cloud infrastructure.
          <br></br> 
          <br></br> 
          I have a proven track record of building products from 0-to-1, including 
          scaling a B2B SaaS platform (Shopclips) to ₹20 lakh MRR. My experience spans 
          across Shopify integrations, microservices architecture, performance optimization, 
          and leading engineering teams in Agile environments. I'm passionate about creating 
          production-ready solutions that drive business impact and deliver exceptional user 
          experiences.
          <br></br> 
          <br></br>
          <a 
            href="https://drive.google.com/file/d/1g6abCwkl18xcuhzN45y2dslgwin1joil/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{color:"#00a0a0", textDecoration: "underline"}}
          >
            Download My Resume
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;