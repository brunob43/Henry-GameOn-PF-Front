import React from "react";
import { Link } from "react-router-dom";

const CardGame = ({ name, image, id, topic, dificulty })=> {
  return (
    <div>
      <Link to={`/games/${id}`}>
        <img src={image} alt="imagen card"/>
        <div>{name}</div>
        <div>
          <div>
            {topic}
          </div>
          <div>
            {dificulty}
          </div>
        </div>        
      </Link>
    </div>
  );
}
export default CardGame;