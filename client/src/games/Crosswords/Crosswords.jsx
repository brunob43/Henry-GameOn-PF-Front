import React, { useRef, useState } from 'react';
import style from "./Crosswords.module.css"
import {HStack, Text, useColorMode, VStack} from "@chakra-ui/react"
import Crosswords2 from './Crosswords2';

const Crosswords = () =>{
  const [crosswords, setCrosswords] = useState("1");
  console.log(crosswords);

    const { colorMode } = useColorMode();

    const palabra1_letra1 = ()=>{return(document.getElementById("fila1C3"))}
    const palabra1_letra2 = ()=>{return(document.getElementById("fila2C3"))}
    const palabra1_letra3 = ()=>{return(document.getElementById("fila3C3"))}
    const palabra2_letra1 = ()=>{return(document.getElementById("fila9C7"))}
    const palabra2_letra2 = ()=>{return(document.getElementById("fila8C7"))}
    const palabra2_letra3 = ()=>{return(document.getElementById("fila7C7"))}
    const palabra2_letra4 = ()=>{return(document.getElementById("fila6C7"))}
    const palabra2_letra5 = ()=>{return(document.getElementById("fila5C7"))}
    const palabra2_letra6 = ()=>{return(document.getElementById("fila4C7"))}
    const palabra2_letra7 = ()=>{return(document.getElementById("fila3C7"))}
    const palabra2_letra8 = ()=>{return(document.getElementById("fila2C7"))}
    const palabra3_letra1 = ()=>{return(document.getElementById("fila8C11"))}
    const palabra3_letra2 = ()=>{return(document.getElementById("fila9C11"))}
    const palabra3_letra3 = ()=>{return(document.getElementById("fila10C11"))}
    const palabra3_letra4 = ()=>{return(document.getElementById("fila11C11"))}
    const palabra3_letra5 = ()=>{return(document.getElementById("fila12C11"))}
    const palabra3_letra6 = ()=>{return(document.getElementById("fila13C11"))}
    const palabra3_letra7 = ()=>{return(document.getElementById("fila14C11"))}
    const palabra4_letra1 = ()=>{return(document.getElementById("fila2C3"))}
    const palabra4_letra2 = ()=>{return(document.getElementById("fila2C4"))}
    const palabra4_letra3 = ()=>{return(document.getElementById("fila2C5"))}
    const palabra4_letra4 = ()=>{return(document.getElementById("fila2C6"))}
    const palabra4_letra5 = ()=>{return(document.getElementById("fila2C7"))}
    const palabra5_letra1 = ()=>{return(document.getElementById("fila4C6"))}
    const palabra5_letra2 = ()=>{return(document.getElementById("fila4C7"))}
    const palabra5_letra3 = ()=>{return(document.getElementById("fila4C8"))}
    const palabra5_letra4 = ()=>{return(document.getElementById("fila4C9"))}
    const palabra5_letra5 = ()=>{return(document.getElementById("fila4C10"))}
    const palabra5_letra6 = ()=>{return(document.getElementById("fila4C11"))}
    const palabra5_letra7 = ()=>{return(document.getElementById("fila4C12"))}
    const palabra5_letra8 = ()=>{return(document.getElementById("fila4C13"))}
    const palabra6_letra1 = ()=>{return(document.getElementById("fila6C1"))}
    const palabra6_letra2 = ()=>{return(document.getElementById("fila6C2"))}
    const palabra6_letra3 = ()=>{return(document.getElementById("fila6C3"))}
    const palabra6_letra4 = ()=>{return(document.getElementById("fila6C4"))}
    const palabra6_letra5 = ()=>{return(document.getElementById("fila6C5"))}
    const palabra6_letra6 = ()=>{return(document.getElementById("fila6C6"))}
    const palabra6_letra7 = ()=>{return(document.getElementById("fila6C7"))}
    const palabra6_letra8 = ()=>{return(document.getElementById("fila6C9"))}
    const palabra6_letra9 = ()=>{return(document.getElementById("fila6C10"))}
    const palabra6_letra10 = ()=>{return(document.getElementById("fila6C11"))}
    const palabra6_letra11 = ()=>{return(document.getElementById("fila6C12"))}
    const palabra7_letra1 = ()=>{return(document.getElementById("fila9C6"))}
    const palabra7_letra2 = ()=>{return(document.getElementById("fila9C7"))}
    const palabra7_letra3 = ()=>{return(document.getElementById("fila9C8"))}
    const palabra7_letra4 = ()=>{return(document.getElementById("fila9C9"))}
    const palabra7_letra5 = ()=>{return(document.getElementById("fila9C10"))}
    const palabra7_letra6 = ()=>{return(document.getElementById("fila9C11"))}
    const palabra7_letra7 = ()=>{return(document.getElementById("fila9C12"))}
    const palabra7_letra8 = ()=>{return(document.getElementById("fila9C13"))}
    const palabra7_letra9 = ()=>{return(document.getElementById("fila9C14"))}
    const palabra8_letra1 = ()=>{return(document.getElementById("fila11C10"))}
    const palabra8_letra2 = ()=>{return(document.getElementById("fila11C11"))}
    const palabra8_letra3 = ()=>{return(document.getElementById("fila11C12"))}
    const palabra8_letra4 = ()=>{return(document.getElementById("fila11C13"))}

    const ButtonChange = useRef(null)

    function handleChange(event) {
      const id = ButtonChange.current.id;
      if(id === "1"){
        ButtonChange.current.id = "2"
        setCrosswords("2")
      }else if(id === "2"){
        ButtonChange.current.id = "1"
        setCrosswords("1")
      }
      console.log(ButtonChange.current.id);
    }

      var errorActivo=0;
      function error(){
        document.getElementById("mensaje").innerHTML="Existen palabras incorrectas";
        document.getElementById("mensaje").className="alert alert-danger";
        errorActivo=1;
      }

      function ocultarError(){
        if(errorActivo===1){
          document.getElementById("mensaje").innerHTML="";
          document.getElementById("mensaje").className="";
          errorActivo=0;
        }
      }

        //esta funcion es para ejecutarse cada 5 segundos
        setInterval(ocultarError(),5000);

      function verificar(){
        document.getElementById("mensaje").innerHTML="";
        const palabra1 = palabra1_letra1().value + palabra1_letra2().value + palabra1_letra3().value; 
        const palabra2 = palabra2_letra1().value + palabra2_letra2().value + palabra2_letra3().value + palabra2_letra4().value + palabra2_letra5().value + palabra2_letra6().value + palabra2_letra7().value + palabra2_letra8().value;  
        const palabra3 = palabra3_letra1().value + palabra3_letra2().value + palabra3_letra3().value + palabra3_letra4().value + palabra3_letra5().value + palabra3_letra6().value + palabra3_letra7().value; 
        const palabra4 = palabra4_letra1().value + palabra4_letra2().value + palabra4_letra3().value + palabra4_letra4().value + palabra4_letra5().value;
        const palabra5 = palabra5_letra1().value + palabra5_letra2().value + palabra5_letra3().value + palabra5_letra4().value + palabra5_letra5().value + palabra5_letra6().value + palabra5_letra7().value + palabra5_letra8().value;
        const palabra6 = palabra6_letra1().value + palabra6_letra2().value + palabra6_letra3().value + palabra6_letra4().value + palabra6_letra5().value + palabra6_letra6().value + palabra6_letra7().value + " " + palabra6_letra8().value + palabra6_letra9().value + palabra6_letra10().value + palabra6_letra11().value;
        const palabra7 = palabra7_letra1().value + palabra7_letra2().value + palabra7_letra3().value + palabra7_letra4().value + palabra7_letra5().value + palabra7_letra6().value + palabra7_letra7().value + palabra7_letra8().value + palabra7_letra9().value;
        const palabra8 = palabra8_letra1().value + palabra8_letra2().value + palabra8_letra3().value + palabra8_letra4().value;

        if(palabra1.toLowerCase()==="css" && palabra2.toLowerCase()==="homework" && palabra3.toLowerCase()==="metodos" && palabra4.toLowerCase()==="slack" && palabra5.toLowerCase()==="bootcamp" && palabra6.toLowerCase()==="sublime text" && palabra7.toLowerCase()==="challenge" && palabra8.toLowerCase()==="node"){
          document.getElementById("mensaje").innerHTML="Ganaste";
          document.getElementById("mensaje").style.fontSize="24px";
          document.getElementById("mensaje").className="alert alert-success";
        }else{
          if(palabra1.toLowerCase()!=="css"){
            palabra1_letra1().value="";
            palabra1_letra2().value="";
            palabra1_letra3().value="";
            error();
          }

          if(palabra2.toLowerCase()!=="homework"){
            palabra2_letra1().value="";
            palabra2_letra2().value="";
            palabra2_letra3().value="";
            palabra2_letra4().value="";
            palabra2_letra5().value="";
            palabra2_letra6().value="";
            palabra2_letra7().value="";
            palabra2_letra8().value="";
            error();
          }

          if(palabra3.toLowerCase()!=="metodos"){
            palabra3_letra1().value="";
            palabra3_letra2().value="";
            palabra3_letra3().value="";
            palabra3_letra4().value="";
            palabra3_letra5().value="";
            palabra3_letra6().value="";
            palabra3_letra7().value="";
            error();
          }

          if(palabra4.toLowerCase()!=="slack"){
            palabra4_letra1().value="";
            palabra4_letra2().value="";
            palabra4_letra3().value="";
            palabra4_letra4().value="";
            palabra4_letra5().value="";
            error();
          }

          if(palabra5.toLowerCase()!=="bootcamp"){
            palabra5_letra1().value="";
            palabra5_letra2().value="";
            palabra5_letra3().value="";
            palabra5_letra4().value="";
            palabra5_letra5().value="";
            palabra5_letra6().value="";
            palabra5_letra7().value="";
            palabra5_letra8().value="";
            error();
          }

          if(palabra6.toLowerCase()!=="sublime text"){
            palabra6_letra1().value="";
            palabra6_letra2().value="";
            palabra6_letra3().value="";
            palabra6_letra4().value="";
            palabra6_letra5().value="";
            palabra6_letra6().value="";
            palabra6_letra7().value="";
            palabra6_letra8().value="";
            palabra6_letra9().value="";
            palabra6_letra10().value="";
            palabra6_letra11().value="";
            error();
          }

          if(palabra7.toLowerCase()!=="challenge"){
            palabra7_letra1().value="";
            palabra7_letra2().value="";
            palabra7_letra3().value="";
            palabra7_letra4().value="";
            palabra7_letra5().value="";
            palabra7_letra6().value="";
            palabra7_letra7().value="";
            palabra7_letra8().value="";
            palabra7_letra9().value="";
            error();
          }

          if(palabra8.toLowerCase()!=="node"){
            palabra8_letra1().value="";
            palabra8_letra2().value="";
            palabra8_letra3().value="";
            palabra8_letra4().value="";
            error();
          }

          //corrector de palabras
          if(palabra1.toLowerCase()==="css"){
            palabra1_letra2().value="s";
          }

          if(palabra2.toLowerCase()==="homework"){
            palabra2_letra1().value="h";
            palabra2_letra4().value="e";
            palabra2_letra6().value="o";
            palabra2_letra8().value="k";
          }

          if(palabra3.toLowerCase()==="metodos"){
            palabra3_letra2().value="e";
            palabra3_letra4().value="o";
          }

          if(palabra4.toLowerCase()==="slack"){
            palabra4_letra1().value="s";
            palabra4_letra5().value="k";
          }

          if(palabra5.toLowerCase()==="bootcamp"){
            palabra5_letra2().value="o";
          }

          if(palabra6.toLowerCase()==="sublime text"){
            palabra6_letra7().value="e";
          }

          if(palabra7.toLowerCase()==="challenge"){
            palabra7_letra2().value="h";
            palabra7_letra6().value="e";
          }

          if(palabra8.toLowerCase()==="node"){
            palabra8_letra2().value="o";
          }
        }
      }

  return(
    <VStack>
      {crosswords === "1" 
      ?(
        <div className={style.body}>
          <div className={style.col_md_12}>
            <Text className={style.consigna} color={colorMode==="dark" ? "white" : "black"}>Completa el crucigrama con las palabras relacionadas a estas definiciones</Text><br />
            <HStack className={style.tableConcepts} alignItems="flex-start">
            <VStack className={style.definiciones} color={colorMode==="dark" ? "white" : "black"}>
                  <Text>
                    Verticales:
                    <br/>
                    1. Lenguaje que se utiliza para estilizar los elementos de un lenguaje de marcado.
                    <br/>
                    2. Deberes o tarea para ejercitar despues de clase.
                    <br/>
                    3. Nombre que reciben las funciones asociadas dentro de un objeto.(p)
                  </Text>
            </VStack>
  
            <VStack className={style.definiciones} color={colorMode==="dark" ? "white" : "black"}>
                    <Text>
                      Horizontal:
                      <br/>
                      4. Plataforma de colaboración en tiempo real.
                      <br/>
                      5. Se estudia a profundidad el stack tecnologico en un corto periodo de tiempo.
                      <br/>
                      6. Editor de codigo.
                      <br/>
                      7. Desafío técnico donde evaluamos todos los conceptos aprendidos en el Prep Course.
                      <br/>
                      8. Entorno en tiempo de ejecución multiplataforma para la capa del servidor.
                    </Text>	
            </VStack>
            </HStack>
  
            <div id="mensaje" ></div>
  
            <table className={style.table}>
              <tbody>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.casilla} type="text" maxLength="1" id="fila1C3" />
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/> 
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
              </tbody>
              <tbody>
                  <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.casilla} type="text" maxLength="1" id="fila2C3" />
                </td>
                <td>
                  <input className={style.casilla} type="text" maxLength="1" id="fila2C4" />
                </td>
                <td>
                  <input className={style.casilla} type="text" maxLength="1" id="fila2C5" />
                </td>
                <td>
                  <input className={style.casilla} type="text" maxLength="1" id="fila2C6" />
                </td>
                <td>
                  <input className={style.casilla} type="text" maxLength="1" id="fila2C7" />
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
              </tbody>
              <tbody>
              <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.casilla} type="text" maxLength="1" id="fila3C3" />
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.casilla} type="text" maxLength="1" id="fila3C7" />
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
              </tbody>
              <tbody>
              <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.casilla} type="text" maxLength="1" id="fila4C6" />
                </td>
                <td>
                  <input className={style.casilla} type="text" maxLength="1" id="fila4C7" />
                </td>
                <td>
                  <input className={style.casilla} type="text" maxLength="1" id="fila4C8" />
                </td>
                <td>
                  <input className={style.casilla} type="text" maxLength="1" id="fila4C9" />
                </td>
                <td>
                  <input className={style.casilla} type="text" maxLength="1" id="fila4C10" />
                </td>
                <td>
                  <input className={style.casilla} type="text" maxLength="1" id="fila4C11" />
                </td>
                <td>
                  <input className={style.casilla} type="text" maxLength="1" id="fila4C12" />
                </td>
                <td>
                  <input className={style.casilla} type="text" maxLength="1" id="fila4C13" />
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
              </tbody>
              <tbody>
              <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.casilla} type="text" maxLength="1" id="fila5C7" />
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
              </tbody>
              <tbody>
                <td>
                  <input className={style.casilla} type="text" maxLength="1" id="fila6C1" />
                </td>
                <td>
                  <input className={style.casilla} type="text" maxLength="1" id="fila6C2" />
                </td>
                <td>
                  <input className={style.casilla} type="text" maxLength="1" id="fila6C3" />
                </td>
                <td>
                  <input className={style.casilla} type="text" maxLength="1" id="fila6C4" />
                </td>
                <td>
                  <input className={style.casilla} type="text" maxLength="1" id="fila6C5" />
                </td>
                <td>
                  <input className={style.casilla} type="text" maxLength="1" id="fila6C6" />
                </td>
                <td>
                  <input className={style.casilla} type="text" maxLength="1" id="fila6C7" />
                </td>
                <td>
                  <input className={style.espacio} type="text" maxLength="1" disabled id="fila6C8" />
                </td>
                <td>
                  <input className={style.casilla} type="text" maxLength="1" id="fila6C9" />
                </td>
                <td>
                  <input className={style.casilla} type="text" maxLength="1" id="fila6C10" />
                </td>
                <td>
                  <input className={style.casilla} type="text" maxLength="1" id="fila6C11" />
                </td>
                <td>
                  <input className={style.casilla} type="text" maxLength="1" id="fila6C12" />
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
              </tbody>
              <tbody>
              <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.casilla} type="text" maxLength="1" id="fila7C7" />
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
              </tbody>
              <tbody>
              <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.casilla} type="text" maxLength="1" id="fila8C7" />
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.casilla} type="text" maxLength="1" id="fila8C11" />
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
              </tbody>
              <tbody>
              <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.casilla} type="text" maxLength="1" id="fila9C6" />
                </td>
                <td>
                  <input className={style.casilla} type="text" maxLength="1" id="fila9C7" />
                </td>
                <td>
                  <input className={style.casilla} type="text" maxLength="1" id="fila9C8" />
                </td>
                <td>
                  <input className={style.casilla} type="text" maxLength="1" id="fila9C9" />
                </td>
                <td>
                  <input className={style.casilla} type="text" maxLength="1" id="fila9C10" />
                </td>
                <td>
                  <input className={style.casilla} type="text" maxLength="1" id="fila9C11" />
                </td>
                <td>
                  <input className={style.casilla} type="text" maxLength="1" id="fila9C12" />
                </td>
                <td>
                  <input className={style.casilla} type="text" maxLength="1" id="fila9C13" />
                </td>
                <td>
                  <input className={style.casilla} type="text" maxLength="1" id="fila9C14" />
                </td>
              </tbody>
              <tbody>
              <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.casilla} type="text" maxLength="1" id="fila10C11" />
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
              </tbody>
              <tbody>
              <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.casilla} type="text" maxLength="1" id="fila11C10" />
                </td>
                <td>
                  <input className={style.casilla} type="text" maxLength="1" id="fila11C11" />
                </td>
                <td>
                  <input className={style.casilla} type="text" maxLength="1" id="fila11C12" />
                </td>
                <td>
                  <input className={style.casilla} type="text" maxLength="1" id="fila11C13" />
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
              </tbody>
              <tbody>
              <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.casilla} type="text" maxLength="1" id="fila12C11" />
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
              </tbody>
              <tbody>
              <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.casilla} type="text" maxLength="1" id="fila13C11" />
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
              </tbody>
              <tbody>
              <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.casilla} type="text" maxLength="1" id="fila14C11" />
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
                <td>
                  <input className={style.block} type="text" disabled maxLength="1" id="fila1C1"/>
                </td>
              </tbody>
            </table>
  
            <div className={style.botones}>
              <button onClick={verificar} 
              style={{
                margin:"10px",
                fontSize:"23px",
                padding:"0 2%"
              }}>Verificar</button>
            </div>
          </div>
        </div>
      ):(
        <>
        <Crosswords2/>
        </>
      )}
      <>
      <button id="1" onClick={handleChange} ref={ButtonChange} name="buttonChange"
      style={{  
        fontSize:"20px",
        padding:"0 2%"        
      }}>Cambiar Crucigrama</button>
      </>
    </VStack>
  )
}

export default Crosswords;