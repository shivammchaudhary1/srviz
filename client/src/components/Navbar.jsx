import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectIsAuthenticated,
  selectUserName,
  setLogout,
} from "../redux/slices/authSlice";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const userName = useSelector(selectUserName);
  const navItems = ["Home", "About", "Services", "Contact"];

  const handleLogout = () => {
    dispatch(setLogout());
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.navContent}>
          {/* Logo/Brand */}
          <Link to="/" className={styles.logoContainer}>
            <span className={styles.logo}>SPORTS</span>
          </Link>

          {/* Navigation Items */}
          <ul className={styles.navItems}>
            {navItems.map((item) => (
              <li key={item} className={styles.navItem}>
                <p className={styles.navLink}>{item}</p>
              </li>
            ))}
          </ul>

          {/* CTA Button or Welcome Message */}
          {isAuthenticated ? (
            <div className={styles.welcomeContainer}>
              <span className={styles.welcomeText}>Welcome, {userName}!</span>
              <button
                onClick={handleLogout}
                className={styles.logoutButton}
                title="Logout"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/register" className={styles.ctaButtonLink}>
              <button className={styles.ctaButton}>Plan My Trip</button>
            </Link>
          )}

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
