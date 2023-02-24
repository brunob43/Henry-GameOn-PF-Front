import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import style from "../Logout/Logout.module.css"

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
    <button className={style.buttonLogout} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      LOG OUT
    </button>
    )
  );
};

export default LogoutButton;