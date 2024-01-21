import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Vinay</h1>
        <p className={styles.description}>
          I have been graduated from IIIT Lucknow. I have experience of  full-stack develoment in React and
          Java and SpringBoot Reach out if you'd like to learn more!
        </p>
        <a href="mailto:vinaychaudhary604@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};