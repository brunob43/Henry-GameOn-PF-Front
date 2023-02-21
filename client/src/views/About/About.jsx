import style from "./About.module.css"
import linkedin from "../assets/imagen/linkedin.png"
import github from "../assets/imagen/github.png"
import { NavLink } from "react-router-dom";
import belen from "../assets/imagen/belen.jpg"
import bruno from "../assets/imagen/bruno.png"
import nicole from "../assets/imagen/nicole.png"
import pablo from "../assets/imagen/pablo.jpg"
import abel from "../assets/imagen/abel.jpg"
import larry from "../assets/imagen/larry.jpeg"
import manu from "../assets/imagen/manu.jpg"
import franco from "../assets/imagen/franco.jpg"


const About = () =>{
    return (
    <div className={style.bodyAbout}>
     <h1 className={style.title}>¿QUIENES SOMOS?</h1>
     <h2 className={style.parrafo}>
      SOMOS UN EQUIPO DE TRABAJO QUE SE FUE FORMANDO A LO LARGO DEL BOOTCAMP DE HENRY, 
      A PESAR DE NO SER DEL MISMO GRUPO DE SUP, LOGRAMOS COINCIDIR Y COORDINAR NUESTRAS
      IDEAS Y PLASMARLAS PARA LLEGAR AL OBJETIVO EN COMÚN.
      COMO OBJETIVO SIEMPRE NOS PROPUSIMOS TRABAJAR DE FORMA AMENA, CON RESPETO Y A TRAVES
      DE ESO PODER DESARROLLAR ALGO QUE SEA CREATIVO, DIVERTIDO Y QUE LO PUEDA UTILIZAR CUALQUIER 
      PERSONA QUE LE APASIONE EL MUNDO DE LA PROGRAMACION.
     </h2>

    
     <div className={style.containicon}>
        <div>
        <div className={style.contenedorimagen}>
        <img src={belen} alt="user"/>
      </div>
            <h1 className={style.nameBelen}>María Belén Echazú Higa</h1>
      <a
        href="https://www.linkedin.com/in/mar%C3%ADabel%C3%A9nechaz%C3%BAhiga/"
        target="_blank"
        rel="noreferrer"

      >
        <img className={style.icon} src={linkedin} alt="linkedin" />
      </a>
      <a
        href="https://github.com/BelenEchazu"
        target="_blank"
        rel="noreferrer"
      >
        <img className={style.icon} src={github} alt="github" />
      </a>

      </div>
      
    </div>

    <div className={style.containicon1}>
    <div className={style.contenedorimagen}>
        <img src={bruno} alt="user"/>
      </div>
    <h1 className={style.nameBruno}>Bruno Buglioni</h1>
    <div>
      <a
        href="https://www.linkedin.com/in/bruno-buglioni-b0652a263/"
        target="_blank"
        rel="noreferrer"
      >
        <img className={style.bruno} src={linkedin} alt="linkedin" />
      </a>
      <a
        href="https://github.com/brunob43"
        target="_blank"
        rel="noreferrer"
      >
        <img className={style.bruno} src={github} alt="github" />
      </a>
      </div>


    </div>

    <div className={style.containicon2}>
    <div className={style.contenedorimagen}>
        <img src={nicole} alt="user"/>
      </div>
    <h1 className={style.nameNicole}>Florencia Braida</h1>

    <a
        href="https://www.linkedin.com/in/nicolea4/"
        target="_blank"
        rel="noreferrer"
      >
        <img className={style.nicole} src={linkedin} alt="linkedin" />
      </a>
      <a
        href="https://github.com/NicoleA413"
        target="_blank"
        rel="noreferrer"
      >
        <img className={style.nicole} src={github} alt="github" />
    </a>
    </div>

    <div className={style.containicon3}>
    <div className={style.contenedorimagen}>
        <img src={abel} alt="user"/>
      </div>
    <h1 className={style.nameAbel}>Abel Yamil Moreno</h1>
    <a
         href="https://www.linkedin.com/in/abelmoreno97/"
         target="_blank"
         rel="noreferrer"
       >
         <img className={style.abel} src={linkedin} alt="linkedin" />
       </a>
       <a
         href="https://github.com/Abelmoreno97"
         target="_blank"
         rel="noreferrer"
       >
         <img className={style.abel} src={github} alt="github" />
    </a>
    </div>

    <div className={style.containicon4}>
    <div className={style.contenedorimagen}>
        <img src={manu} alt="user"/>
      </div>
    <h1 className={style.nameManu}>Manuel Albarracín</h1>
    <a
         href="https://github.com/Roxcon1"
         target="_blank"
         rel="noreferrer"
       >
         <img className={style.manu} src={linkedin} alt="linkedin" />
       </a>
       <a
         href="https://github.com/Roxcon1"
         target="_blank"
         rel="noreferrer"
       >
         <img className={style.manu} src={github} alt="github" />
    </a>
    </div>

    <div className={style.containicon5}>
    <div className={style.contenedorimagen}>
        <img src={franco} alt="user"/>
      </div>
    <h1 className={style.nameFranco}>Franco Frias</h1>
    <a
         href="https://www.linkedin.com/in/franco-n-fr%C3%ADas-8a2631216/"
         target="_blank"
         rel="noreferrer"
       >
         <img className={style.franco} src={linkedin} alt="linkedin" />
       </a>
       <a
         href="https://github.com/FrancoFrias23"
         target="_blank"
         rel="noreferrer"
       >
         <img className={style.franco} src={github} alt="github" />
    </a>
    </div>

    <div className={style.containicon6}>
    <div className={style.contenedorimagen}>
        <img src={pablo} alt="user"/>
      </div>
    <h1 className={style.namePablo}>Pablo Boria</h1>
    <a
        href="https://github.com/pabloboria"
        target="_blank"
        rel="noreferrer"
      >
        <img className={style.pablo} src={linkedin} alt="linkedin" />
      </a>
      <a
        href="https://github.com/pabloboria"
        target="_blank"
        rel="noreferrer"
      >
        <img className={style.pablo} src={github} alt="github" />
    </a>
    </div>

    <div className={style.containicon7}>
    <div className={style.contenedorimagen}>
        <img src={larry} alt="user"/>
      </div>
    <h1 className={style.nameLarry}>Larry Jose Guarenas Arraez</h1>
    <a
        href="https://www.linkedin.com/in/larry-jos%C3%A9-guarenas-arraez-100a5a256/"
        target="_blank"
        rel="noreferrer"
      >
        <img className={style.larry} src={linkedin} alt="linkedin" />
      </a>
      <a
        href="https://github.com/Larryjose"
        target="_blank"
        rel="noreferrer"
      >
        <img className={style.larry} src={github} alt="github" />
    </a>
    </div>

    <NavLink to="/contact">
          <button className={style.button}>CONTACT</button>
    </NavLink>


   </div>


  
);
};
export default About;
  