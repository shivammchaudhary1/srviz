import React from "react";
import { F1Racing } from "../../assets/assets";
import styles from "../../styles/home/SecondarySection.module.css";

const SecondarySection = () => {
  return (
    <div>
      <div
        className={styles.heroContainer}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${F1Racing})`,
        }}
      >
        <h1 className={styles.heroTitle}>F1 JAPAN</h1>

        <p className={styles.heroSubtitle}>
          Experience the thrill of Formula 1 racing in the land of the rising
          sun
        </p>

        <button className={styles.ctaButton}>Get Tickets Now</button>
      </div>
    </div>
  );
};

export default SecondarySection;
