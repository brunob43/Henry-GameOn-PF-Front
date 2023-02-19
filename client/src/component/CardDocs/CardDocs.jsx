import React from "react";
import { Link } from "react-router-dom";
import style from "./CardDocs.module.css"

const CardDocs = ({ name, image,topic })=> {
  console.log(name)
  return (
    <div className={style.container}>
      <Link to={`/docs/${id}`} className={style.link}>
        <img src={image} alt="imagen docs" className={style.image}/>
        <div className={style.name}>{name}</div>
        <div className={style.details}>
          <div className={style.topic}>
            {topic}
          </div>
        </div>        
      </Link>
    </div>
  );
}
export default CardDocs;