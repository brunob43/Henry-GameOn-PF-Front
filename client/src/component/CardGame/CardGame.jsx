import React from "react";
import { Link } from "react-router-dom";

const CardGame = ({ name, image, id})=> {
  return (
    <div>
      <Link to={`/games/${id}`}>
        <div>{name[0].toUpperCase() + name.slice(1)}</div>
        <img src={image} alt="imagen card"/>        
      </Link>
    </div>
  );
}
export default CardGame;