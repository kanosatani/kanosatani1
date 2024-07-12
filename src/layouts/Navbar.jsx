import React from "react";
import styles from "../styles/layouts/navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.logo}>
        <p>bootstrap</p>
      </div>
      <div className={styles.listContainer}>
        <ul>
          <li>
            <Link className={styles.link} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/products">
              Products
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
