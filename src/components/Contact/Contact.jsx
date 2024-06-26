// eslint-disable-next-line no-unused-vars
import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
   return (
      <footer id="contact" className={styles.container}>
         <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
         </div>
         <ul className={styles.links}>
            <li className={styles.link}>
               <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
               <a href="mailto:Dylanmill@outlook.com">Dylanmill@outlook.com</a>
            </li>
            <li className={styles.link}>
               <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
               <a href="https://www.linkedin.com/in/dylan-millette/">
                  linkedin.com/in/dylan-millette/
               </a>
            </li>
            <li className={styles.link}>
               <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
               <a href="https://github.com/DylanMill">github.com/DylanMill</a>
            </li>
         </ul>
      </footer>
   );
};
