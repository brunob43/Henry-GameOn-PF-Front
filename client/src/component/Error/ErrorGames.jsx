import React from 'react';
import { useSelector } from 'react-redux';
import style from "./Error.module.css"
const Error=()=>{
    //const reload=()=>{
        //window.location.reload()
   // }
    const error=useSelector(state=>state.errorGames)
    return(
        <div className={style.errorBackground}>
        <h1 className={style.titleError}>Oops! sorry, an error occurred</h1>
        <h4 className={style.error}>{error}</h4>
        <br />
        <p className={style.textError}>Go back please</p>
        </div>

    )
}
export default Error;