import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardContainerGames from "../CardContainerGame/CardContainerGame";
import { getGames, setCurrentPage } from "../../redux/actions";
import style from "./Paginated.module.css";
import prev from "../../styles/images/left-arrow.png"
import next from "../../styles/images/right-arrow.png"

const Paginated = ()=>{

  const dispatch = useDispatch();

  const allGames = useSelector((state) => state.games);

  const currentPage = useSelector((state) => state.currentPage);

  const [gamesPerPage] = useState(2);

  

  const handleClick = (event) => {     
    dispatch(setCurrentPage(Number(event.target.id)));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(allGames.length / gamesPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = allGames.slice(
    indexOfFirstGame,
    indexOfLastGame
  );

  const pageNumbers = pages.map((number) => {
    if(currentPage === number){
      return (
        <li
        className={style.active}
        key={number}
        id={number}
        onClick={handleClick}
        >
        {number}
        </li>
      );
    }else{
      return (
        <li
        className={style.number}
        key={number}
        id={number}
        onClick={handleClick}
        >
        {number}
        </li>
      );
    };
  });
    
  const handleNext = () => {
    if (currentPage + 1 <= pages.length) {
      dispatch(setCurrentPage(currentPage + 1));
    } else {
      return null;
    }
  };

  const handlePrev = () => {
    if (currentPage - 1 >= 1) {
      dispatch(setCurrentPage(currentPage - 1));
    } else {
      return null;
    }
  };

  return (
    <div className={style.mainContainer}>
      <nav className={style.nav}>
        <ul className={style.pages} name="top">
          <li>
            <button className={style.button} id="prev" onClick={handlePrev}><img src={prev} alt="prev" className={style.arrow} /></button>
          </li>
    
          {pageNumbers}
    
          <li>
            <button className={style.button} id="next" onClick={handleNext}><img src={next} alt="next" className={style.arrow}/></button>
          </li>
        </ul>
      </nav>
      
      <div className={style.container}>
        {CardContainerGames(currentGames)}
      </div>
    
      <nav className={style.nav}>
        <ul className={style.pages} name="bottom">
          <li>
            <button className={style.button} onClick={handlePrev}><img src={prev} alt="prev" className={style.arrow}/></button>
          </li>
    
          {pageNumbers}
    
          <li>
            <button className={style.button} id="next" onClick={handleNext}><img src={next} alt="next" className={style.arrow}/></button>
          </li>
        </ul>
      </nav>
    </div>
  );
    
}

export default Paginated;