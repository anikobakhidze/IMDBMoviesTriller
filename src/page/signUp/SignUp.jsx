import React from "react";
import SignUpForm from "../../components/signUpForm/SignUpForm.jsx";
import styles from "./css/signUp.module.css";
function SignUp() {
  return (
    <div className={styles.signUpWrapper}>
      <SignUpForm />
    </div>
  );
}

export default SignUp;
