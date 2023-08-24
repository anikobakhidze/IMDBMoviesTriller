import React, { useState, useRef } from "react";
import { FaBars } from "react-icons/fa";
import useClickOutside from "../../hook/useClickOutside.jsx";
import NavBar from "../navbar/NavBar.jsx";
import { useAuthContext } from "../../context/auth/AuthContextProvider.jsx";
import { userLogOut } from "../../context/auth/actions/actionsCreators.js";
import styles from "./css/burgerBar.module.css";

function BurgerBar() {
  const { dispatch } = useAuthContext();
  const [showMenuList, setShowMenuList] = useState(false);
  const burgerBarWrapperRef = useRef(null);
  const burgerBarListRef = useRef(null);

  useClickOutside([burgerBarWrapperRef, burgerBarListRef], () => {
    setShowMenuList(false);
  });

  return (
    <div className={styles.burgerBarWrapper} ref={burgerBarWrapperRef}>
      <button
        className={styles.burgerBarIcon}
        onClick={() => setShowMenuList(!showMenuList)}
      >
        <FaBars className={styles.burgerBar} />
      </button>
      {showMenuList && (
        <div className={styles.burgerBarList} ref={burgerBarListRef}>
          <NavBar />
          <button
            className={styles.signOutButton}
            onClick={() => dispatch(userLogOut())}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}

export default BurgerBar;
