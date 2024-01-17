import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate, Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { userSignIn } from "../../api/auth.js";
import signInSchema from "../../valSchema/signInSchema.js";
import route from "../../constants/routes.js";
import { useAuthContext } from "../../context/auth/AuthContextProvider.jsx";
import { userLogIn } from "../../context/auth/actions/actionsCreators.js";
import styles from "../../sharedCss/styleForForm/styleForForm.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function SignInForm() {
  const user = { email: "", password: "" };
  const navigate = useNavigate();
  const { dispatch } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSubmit = (user) => {
    setIsLoading(true);
    userSignIn(user)
      .then((data) => {
        dispatch(userLogIn(data));
        navigate(route.HOME);
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  };
  const showPassword = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <>
      {isLoading ? (
        <ClipLoader color="#f07872" size={60} />
      ) : (
        <Formik
          initialValues={user}
          validationSchema={signInSchema}
          onSubmit={handleSubmit}
        >
          <Form>
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
            <div className={styles.passwordContainer}></div>
            <button type="submit">SignIn</button>
            <h4>
              Dont have an account?
              <span>
                <Link to={route.SIGNUP}>Sign up</Link>
              </span>
            </h4>
          </Form>
        </Formik>
      )}
      {error && (
        <div className={styles.signInError}>
          Ups... Here is an error :{error}
        </div>
      )}
    </>
  );
}

export default SignInForm;
