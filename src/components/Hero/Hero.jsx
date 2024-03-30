/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
   return (
      <section className={styles.container}>
         <div className={styles.content}>
            <h1 className={styles.title}>Hey, I'm Dylan!</h1>
            <p className={styles.description}>
               I'm a junior developer well-versed in modern web frameworks like React.js, Next.js,
               and ASP.NET, with a sprinkle of experience in Laravel.
            </p>
            <p className={styles.description}>
               Fresh out of college, I am eagerly seeking opportunities as a junior developer. I'm
               enthusiastic about leveraging my skills to contribute to innovative projects and
               drive progress in the tech industry.
            </p>
            <a href="mailto:Dylanmill@outlook.com" className={styles.contactBtn}>
               Contact Me
            </a>
         </div>
         <img
            src={getImageUrl("hero/heroImage2.png")}
            alt="Hero image of me"
            className={styles.heroImg}
         />
         <div className={styles.topBlur} />
         <div className={styles.bottomBlur} />
      </section>
   );
};
