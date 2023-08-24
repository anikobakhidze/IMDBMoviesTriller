import React, { createContext, useContext, useEffect, useReducer } from "react";
import { initialValue, authContextReducer } from "./authContextReducer";
import decodeToken, { TokenIsValid } from "../../utils/jwt";
import { UserAuthenticate } from "./actions/actionsCreators";
const context = createContext();
const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authContextReducer, initialValue);
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token && TokenIsValid(token)) {
      const user = decodeToken(token);
      return dispatch(UserAuthenticate(user));
    }
  }, []);
  return (
    <context.Provider value={{ state, dispatch }}>{children}</context.Provider>
  );
};

export const useAuthContext = () => {
  const authContext = useContext(context);
  if (authContext) {
    return authContext;
  }
  throw new Error("Upss Error happened");
};
export default AuthContextProvider;
