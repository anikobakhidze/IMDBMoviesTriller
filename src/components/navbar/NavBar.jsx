import React from "react";
import { NavLink } from "react-router-dom";
import route from "../../constants/routes";
import styles from "./css/navbar.module.css";

function NavBar() {
  const activeColor = ({ isActive }) =>
    isActive ? styles.activeColor : styles.navlists;
  return (
    <nav>
      <ul className={styles.listWrapper}>
        <li>
          <NavLink to={route.HOME} className={activeColor}>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to={route.MOVIES} className={activeColor}>
            MOVIES
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
