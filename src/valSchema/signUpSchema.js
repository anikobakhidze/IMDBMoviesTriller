import * as Yup from "yup";
const signUpSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please, Enter a valid email")
    .required("Email is required"),
  userName: Yup.string().required("Username is required"),
  password: Yup.string()
    .min(8, "Password must be more than 8 characters")
    .matches(/[0-9]/, "Password must contain at least one number")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must be the same")
    .required("Password confirmation is required"),
});
export default signUpSchema;
