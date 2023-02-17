import React from "react";
//import { SearchBar } from "../SearchBar/SearchBar";
import style from "./Home.module.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";




const Home = () =>{
    /*const dispatch = useDispatch()
    

    useEffect(()=>{
        dispatch(())
    }. [])*/
    return(
     <>

       
        <div className={style.bodyHome}>
            
            
            <h1 className={style.title1}>Bienvenido a</h1>
            <h2 className={style.title2}>Henry GameOn</h2>
            <h3 className={style.title3}>un espacio donde podras codear jugando</h3>
        
                    <Link to="/games">
                        <button className={style.button}>Games</button>
                    </Link>
                    <Link to="/henrydocs">
                    <button className={style.button}>HenryDocs</button>
                    </Link>
        

                
            <h4 className={style.title4}>Nuestro principal objetivo es 
            trabajar continuamente para 
            transformar el aprendisaje en una
             experiencia inolvidable. Donde se puedan 
             desarrollar habilidades 
             a traves de la diversion y 
             potenciando el talento</h4>
            <h5 className={style.title5}>Proponemos brindar a la 
            comunidad de Henry un espacio 
            donde puedan encontrar material 
            de estudio y juegos para poder
            adquirir mayor competencia y 
            practica de forma amena y mas 
            divertida.</h5>
                        
          

            
            
           
        </div>
    </>
    )
}

export default Home;