import React from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const navItems = ["Home", "About", "Services", "Contact"];

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.navContent}>
          {/* Logo/Brand */}
          <div className={styles.logoContainer}>
            <span className={styles.logo}>SPORTS</span>
          </div>

          {/* Navigation Items */}
          <ul className={styles.navItems}>
            {navItems.map((item) => (
              <li key={item} className={styles.navItem}>
                <a href={`#${item.toLowerCase()}`} className={styles.navLink}>
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <button className={styles.ctaButton}>Plan My Trip</button>

          {/* Mobile Menu Button */}
          <button className={styles.mobileMenuButton}>
            <svg
              className={styles.mobileMenuIcon}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
