import React from "react";
import { Link } from "react-router-dom";
import style from "./CardGame.module.css"

const CardGame = ({ name, image, id, topic, difficulty })=> {
  console.log(name)
  console.log(difficulty)
  return (
    <div className={style.container}>
      <Link to={`/games/${id}`} className={style.link}>
        <img src={image} alt="imagen card" className={style.image}/>
        <div className={style.name}>{name}</div>
        <div className={style.details}>
          <div className={style.topic}>
            {topic}
          </div>
          <div className={style.dificulty}>
            {difficulty.toUpperCase()}
          </div>
        </div>        
      </Link>
    </div>
  );
}
export default CardGame;