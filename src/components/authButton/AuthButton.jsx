import React from "react";
import { useNavigate } from "react-router-dom";
import route from "../../constants/routes";
import "./css/authButton.module.css";
function AuthButton() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate(route.SIGNIN)}>Sign In</button>
      <button onClick={() => navigate(route.SIGNUP)}>SignUp</button>
    </div>
  );
}

export default AuthButton;
