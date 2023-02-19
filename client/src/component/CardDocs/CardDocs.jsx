import React from "react";
import { Link } from "react-router-dom";
import style from "./CardDocs.module.css"

const CardDocs = ({ name, image, id, topic, author })=> {
    return (
      <div className={style.container}>
        <Link to={`/doc/${id}`} className={style.link}>
          <img src={image} alt="imagen card" className={style.image}/>
          <div className={style.name}>{name}</div>
          <div className={style.details}>
            <div className={style.topic}>
              {topic}
            </div>
            <div className={style.author}>
              {author.toUpperCase()}
            </div>
          </div>        
        </Link>
      </div>
    );
  }
  export default CardDocs;

