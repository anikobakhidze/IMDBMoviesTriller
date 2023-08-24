import React from "react";
import { useAuthContext } from "../context/auth/AuthContextProvider.jsx";
import NotLoggedIn from "../components/notLoggedIn/NotLoggedIn.jsx";
function AuthGuard({ children }) {
  const {
    state: { isUserLoggedIn },
  } = useAuthContext();
  return <>{isUserLoggedIn ? children : <NotLoggedIn />}</>;
}

export default AuthGuard;
