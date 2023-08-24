import * as Yup from "yup";
import validationSchema from "./signUpSchema";
const signInSchema = Yup.object().shape({
  email: validationSchema.fields.email,
  password: validationSchema.fields.password,
});
export default signInSchema;
