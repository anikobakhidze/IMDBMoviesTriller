import jwt_token from "jwt-decode";
const decodeToken = (token) => {
  const user = jwt_token(token);
  return user;
};
export default decodeToken;

export const toggleLocalStorage = (token) => {
  if (token) {
    return localStorage.setItem("authToken", token);
  }
  return localStorage.removeItem("authToken");
};
export const TokenIsValid = (token) => {
  const data = decodeToken(token);
  const currentDate = Date.now() / 1000;
  return data.exp > currentDate;
};
