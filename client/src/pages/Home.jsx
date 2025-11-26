import React from "react";
import Navbar from "../components/Navbar";
import { heroImage } from "../assets/assets.js";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      {/* Hero Image Background */}
      <div
        className={styles.heroBackground}
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        {/* Optional overlay for better text contrast */}
        <div className={styles.overlay}></div>
      </div>

      {/* Navbar with higher z-index */}
      <div className={styles.navbarContainer}>
        <Navbar />
      </div>

      {/* Main Content Area */}
      <div className={styles.mainContent}>
        {/* Add your main content here */}
        <div className={styles.contentWrapper}>
          <h1 className={styles.mainTitle}>
            Sports Travel Package for Global Events
          </h1>
          <p className={styles.subtitle}>Discover amazing sports experiences</p>
          <button className={styles.ctaButton}>Plan My Trip</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
