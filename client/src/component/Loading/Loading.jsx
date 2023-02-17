import React from "react";
import style from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={style.body}>
      <div className={style.contain}>
        <div className={style.pacman}></div>
        <div className={style.path}></div>
        <div className={style.path}></div>
        <div className={style.path}></div>
        <div className={style.path}></div>
        <div className={style.path}></div>
        <div className={style.path}></div>
        <div className={style.path}></div>
      </div>
    </div>
  );
};

export default Loading;
