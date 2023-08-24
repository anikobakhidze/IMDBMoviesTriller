import React, { useState, useRef } from "react";
import img from "../../images/logo.png";
import NavBar from "../navbar/NavBar.jsx";
import { NavLink } from "react-router-dom";
import route from "../../constants/routes";
import { useAuthContext } from "../../context/auth/AuthContextProvider.jsx";
import { userLogOut } from "../../context/auth/actions/actionsCreators.js";
import Search from "../search/Search.jsx";
import AuthButton from "../authButton/AuthButton.jsx";
import styles from "./css/header.module.css";
import { FaArrowDown } from "react-icons/fa";
import BurgerBar from "../burgerBar/BurgerBar.jsx";
import useClickOutside from "../../hook/useClickOutside.jsx";

function Header() {
  const {
    state: { isUserLoggedIn, user },
    dispatch,
  } = useAuthContext();
  const [showSignOutButton, setShowSignOutButton] = useState(false);
  const containerRef = useRef(null);
  useClickOutside([containerRef], () => setShowSignOutButton(false));
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.logoWrapper}>
        <NavLink to={route.HOME}>
          <img className={styles.logo} src={img} alt="logo" />
        </NavLink>
      </div>
      {isUserLoggedIn ? (
        <>
          <div className={styles.navBarDisplay}>
            {" "}
            <NavBar />
          </div>
          <Search />
          <div
            className={styles.container}
            onClick={() => setShowSignOutButton(!showSignOutButton)}
            ref={containerRef}
          >
            <div className={styles.welcomeWrapper}>
              <h4 className={styles.welcome}>Welcome, {user.userName}</h4>
              <FaArrowDown />
            </div>
            {showSignOutButton && (
              <button
                className={styles.signOutButton}
                onClick={() => dispatch(userLogOut())}
              >
                Sign Out
              </button>
            )}
          </div>
          <BurgerBar />
        </>
      ) : (
        <div className={styles.authButton}>
          <AuthButton />
        </div>
      )}
    </header>
  );
}

export default Header;
