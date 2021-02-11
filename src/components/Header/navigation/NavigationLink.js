import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const NavigationLink = ({ path, exact, name }) => (
  <li>
    <NavLink
      to={path}
      exact={exact}
      className={styles.navLink}
      activeClassName={styles.activeLink}
    >
      {name}
    </NavLink>
  </li>
);

export default NavigationLink;
