import React from "react";
import styles from "./css/notLoggedIn.module.css";
import AuthButton from "../authButton/AuthButton.jsx";
function NotLoggedIn() {
  return (
    <div className={styles.buttonsWrapper}>
      <h2>Ups, You are not logged in!</h2>
      <p>Please, Sign Up or Sign In to access the website.</p>
      <AuthButton />
    </div>
  );
}

export default NotLoggedIn;
