import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardContainerDocs from "../CardContainerDocs/CardContainerDocs";
import { setCurrentPage } from "../../redux/actions";
import style from "./Paginated.module.css";
import prev from "../../styles/images/left-arrow.png"
import next from "../../styles/images/right-arrow.png"

const PaginatedDoc = ()=>{

    const dispatch = useDispatch();
  
    const allDocs = useSelector((state) => state.docs);
  
    const currentPage = useSelector((state) => state.currentPage);
  
    const [docsPerPage] = useState(2);

    const handleClick = (event) => {     
        dispatch(setCurrentPage(Number(event.target.id)));
      };
    
      const pages = [];
      for (let i = 1; i <= Math.ceil(allDocs.length / docsPerPage); i++) {
        pages.push(i);
      }
      const indexOfLastDoc = currentPage * docsPerPage;
  const indexOfFirstDoc = indexOfLastDoc - docsPerPage;
  console.log(allDocs)
  const currentDocs = allDocs.slice(
    indexOfFirstDoc,
    indexOfLastDoc
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
        {CardContainerDocs(currentDocs)}
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

export default PaginatedDoc;