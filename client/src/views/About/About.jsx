import React from "react";
import style from "./About.module.css";

const About = () => {
  return (
    <div className={style.contain}>
      <img src={fondoAbout} alt="fondo" className={style.fondo} />
      <div className={style.p}>
        <p>Proyecto Final (PF)</p>
      </div>
      <div className={style.button}>
        <Link to="/">
          <button className={style.but}>Home</button>
        </Link>
      </div>
    </div>
  );
};

export default About;
