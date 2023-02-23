import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import style from "../Login/Login.module.css"

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className={style.buttonLogin} onClick={() => loginWithRedirect()}>LOG IN</button>;
};

export default LoginButton;