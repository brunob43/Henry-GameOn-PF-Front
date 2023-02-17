import { NavLink } from "react-router-dom";
import logo from "../../styles/images/HenryLogo.png";
import style from "./NavBar.module.css";
const NavBar = () => {
  const darkmode = (event) => {
    if (event.target.className === style.dark) {
      event.target.className = style.light;
    } else {
      event.target.className = style.dark;
    }
  };
  return (
    <nav className={style.btncontain}>
      <div className={style.navbar}>
        <a href="https://www.soyhenry.com/%22%3E">
          <img src={logo} alt="Henry-Logo" height="15px"></img>
        </a>
      </div>

      <div className={style.btnhome}>
        <NavLink to="/">
          <button className={style.bthm}>HOME</button>
        </NavLink>

        <NavLink to="/games">
          <button className={style.bthm}>GAMES</button>
        </NavLink>

        <NavLink to="/henrydocs">
          <button className={style.bthm}>HENRYDOCS</button>
        </NavLink>

        <NavLink to="/about">
          <button className={style.bthm}>ABOUT US</button>
        </NavLink>

        <NavLink to="/register">
          <button className={style.bthm}>REGISTER</button>
        </NavLink>

        <NavLink to="/donation">
          <button className={style.bthm}>DONATION</button>
        </NavLink>

        <button className={style.dark} onClick={darkmode}>
          🌗
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
