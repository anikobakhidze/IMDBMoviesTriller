import React from "react";
import SignInForm from "../../components/signInForm/SignInForm.jsx";
import { useLocation } from "react-router-dom";
import styles from "./css/signIn.module.css";
function SignIn() {
  const location = useLocation();
  return (
    <div className={styles.signInWrapper}>
      {location.state?.success && (
        <h2> Congrats! You have registered successfully </h2>
      )}
      <SignInForm />
    </div>
  );
}

export default SignIn;
