import React from "react";
import Navbar from "../components/Navbar";
import { heroImage } from "../assets/assets.js";
import styles from "../styles/Home.module.css";
import SecondarySection from "../components/SecondarySection.jsx";
import TopPackages from "../components/TopPackages.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";
import SampleItinerary from "../components/SampleItinerary.jsx";
import AddOnsVipExperiences from "../components/AddOnsVipExperiences.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <>
      {" "}
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
            <p className={styles.subtitle}>
              Discover amazing sports experiences
            </p>
            <button className={styles.ctaButton}>Plan My Trip</button>
          </div>
        </div>
      </div>
      <div>
        <SecondarySection />
        <TopPackages />
        <WhyChooseUs />
        <SampleItinerary />
        <AddOnsVipExperiences />
        <Footer />
      </div>
    </>
  );
};

export default Home;
