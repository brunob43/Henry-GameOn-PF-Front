import { NavLink } from "react-router-dom";
import logo from "../../styles/images/HenryLogo.png";
import style from "./NavBar.module.css";
import { useAuth0 } from '@auth0/auth0-react';
import React from "react";

const NavBar = (props) => {
  const {loginWithRedirect} = useAuth0();

  const darkmode = (event) => {
    if (event.target.className === style.dark) {
      event.target.className = style.light;
    } else {
      event.target.className = style.dark;
    }
  };
  
  return (
<div data-bs-theme="light">
    <nav className={style.btncontain}>
      <div className={style.navbar}>
        <a href="https://www.soyhenry.com"
         target="_blank"
         rel="noreferrer">
      <img src={logo} alt="Henry-Logo" width="" height=""></img>
    </a>
      </div>

      <div className={style.btnhome}>
        <NavLink to="/">
          <button className={style.bthm}>HOME</button>
        </NavLink>

        <NavLink to="/games">
          <button className={style.bthm}>GAMES</button>
        </NavLink>

        <NavLink to="/docs">
          <button className={style.bthm}>HENRYDOCS</button>
        </NavLink>

        <NavLink to="/about">
          <button className={style.bthm}>ABOUT US</button>
        </NavLink>

        <NavLink to="/donation">
          <button className={style.bthm}>DONATION</button>
        </NavLink>
        <NavLink to="/login">
  
                  <button onClick={() => loginWithRedirect()} className={style.bthm} src=" " alt=" ">LOGIN</button>

        </NavLink>

        <button type="button" className={style.dark} onClick={darkmode}>Dark / Light</button>
      </div>
    </nav>
</div>
  );
};

export default NavBar;