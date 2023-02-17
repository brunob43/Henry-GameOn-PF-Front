import React from "react";
import style from "./Home.module.css";

const Home = () => {
  return (
    <>
      <div className={style.bodyHome}>
        <div>
          <h1 className={style.title1}>Bienvenidos a</h1>
        </div>
        <div>
          <h1 className={style.title}>Henry GameON</h1>
        </div>
        <div className={style.btngame}>
          <button>GAME</button>
          <button>HENRY DOCS</button>
        </div>
      </div>
    </>
  );
};
export default Home;
