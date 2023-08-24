import { Formik, Form, Field, ErrorMessage } from "formik";
import validationSchema from "../../valSchema/signUpSchema.js";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import route from "../../constants/routes.js";
import { userSignUP } from "../../api/auth.js";
import { ClipLoader } from "react-spinners";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styles from "../../sharedCss/styleForForm/styleForForm.module.css";
function SignUpForm() {
  const user = {
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const showPassword = () => {
    setPasswordVisible((prev) => !prev);
  };
  return (
    <>
      {isLoading ? (
        <ClipLoader color="#f07872" size={40} />
      ) : (
        <Formik
          initialValues={user}
          validationSchema={validationSchema}
          onSubmit={(user) => {
            setIsLoading(true);
            userSignUP(user)
              .then(() => navigate(route.SIGNIN, { state: { success: true } }))
              .catch((error) => {
                setError(error.message);
              })
              .finally(() => setIsLoading(false));
          }}
        >
          <Form>
            <div>
              <label htmlFor="userName">Username</label>
              <Field
                type="text"
                name="userName"
                id="userName"
                placeholder="Username"
              />
              <ErrorMessage name="userName" component="p" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" id="email" placeholder="Email" />
              <ErrorMessage name="email" component="p" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <div className={styles.passwordContainer}>
                <Field
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Password"
                />
                {passwordVisible ? (
                  <FaEye
                    className={styles.passwordCheckbox}
                    onClick={showPassword}
                  />
                ) : (
                  <FaEyeSlash
                    className={styles.passwordCheckbox}
                    onClick={showPassword}
                  />
                )}
              </div>
              <ErrorMessage name="password" component="p" />
            </div>
            <div>
              <label htmlFor="confirmPassword">Confirm password</label>
              <div className={styles.passwordContainer}>
                <Field
                  type={passwordVisible ? "text" : "password"}
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirm password"
                />
                {passwordVisible ? (
                  <FaEye
                    className={styles.passwordCheckbox}
                    onClick={showPassword}
                  />
                ) : (
                  <FaEyeSlash
                    className={styles.passwordCheckbox}
                    onClick={showPassword}
                  />
                )}
              </div>
              <ErrorMessage name="confirmPassword" component="p" />
            </div>
            <button type="submit">Sign Up</button>
            <h4>
              Already have an account? <Link to={route.SIGNIN}>Sign In</Link>
            </h4>
          </Form>
        </Formik>
      )}
      {error && <div className={styles.signUpError}>Ups...:{error}</div>}
    </>
  );
}

export default SignUpForm;
