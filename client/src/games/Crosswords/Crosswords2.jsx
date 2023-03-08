import React from 'react';
import style from "./Crosswords2.module.css"
import {Box, Button, HStack, Text, useColorMode, VStack} from "@chakra-ui/react"

const Crosswords2 = () =>{
    const { colorMode } = useColorMode();

    const palabra1_letra1 = ()=>{return(document.getElementById("fila6C5"))}
    const palabra1_letra2 = ()=>{return(document.getElementById("fila7C5"))}
    const palabra1_letra3 = ()=>{return(document.getElementById("fila8C5"))}
    const palabra1_letra4 = ()=>{return(document.getElementById("fila9C5"))}
    const palabra1_letra5 = ()=>{return(document.getElementById("fila10C5"))}
    const palabra1_letra6 = ()=>{return(document.getElementById("fila11C5"))}
    const palabra1_letra7 = ()=>{return(document.getElementById("fila12C5"))}
    const palabra1_letra8 = ()=>{return(document.getElementById("fila13C5"))}
    const palabra2_letra1 = ()=>{return(document.getElementById("fila3C8"))}
    const palabra2_letra2 = ()=>{return(document.getElementById("fila4C8"))}
    const palabra2_letra3 = ()=>{return(document.getElementById("fila5C8"))}
    const palabra2_letra4 = ()=>{return(document.getElementById("fila6C8"))}
    const palabra2_letra5 = ()=>{return(document.getElementById("fila7C8"))}
    const palabra2_letra6 = ()=>{return(document.getElementById("fila8C8"))}
    const palabra2_letra7 = ()=>{return(document.getElementById("fila9C8"))}
    const palabra2_letra8 = ()=>{return(document.getElementById("fila10C8"))}
    const palabra2_letra9 = ()=>{return(document.getElementById("fila11C8"))}
    const palabra2_letra10 = ()=>{return(document.getElementById("fila12C8"))}
    const palabra3_letra1 = ()=>{return(document.getElementById("fila5C11"))}
    const palabra3_letra2 = ()=>{return(document.getElementById("fila4C11"))}
    const palabra3_letra3 = ()=>{return(document.getElementById("fila3C11"))}
    const palabra3_letra4 = ()=>{return(document.getElementById("fila2C11"))}
    const palabra3_letra5 = ()=>{return(document.getElementById("fila1C11"))}
    const palabra4_letra1 = ()=>{return(document.getElementById("fila4C5"))}
    const palabra4_letra2 = ()=>{return(document.getElementById("fila4C6"))}
    const palabra4_letra3 = ()=>{return(document.getElementById("fila4C7"))}
    const palabra4_letra4 = ()=>{return(document.getElementById("fila4C8"))}
    const palabra5_letra1 = ()=>{return(document.getElementById("fila5C8"))}
    const palabra5_letra2 = ()=>{return(document.getElementById("fila5C9"))}
    const palabra5_letra3 = ()=>{return(document.getElementById("fila5C10"))}
    const palabra5_letra4 = ()=>{return(document.getElementById("fila5C11"))}
    const palabra5_letra5 = ()=>{return(document.getElementById("fila5C12"))}
    const palabra5_letra6 = ()=>{return(document.getElementById("fila5C13"))}
    const palabra6_letra1 = ()=>{return(document.getElementById("fila7C2"))}
    const palabra6_letra2 = ()=>{return(document.getElementById("fila7C3"))}
    const palabra6_letra3 = ()=>{return(document.getElementById("fila7C4"))}
    const palabra6_letra4 = ()=>{return(document.getElementById("fila7C5"))}
    const palabra6_letra5 = ()=>{return(document.getElementById("fila7C6"))}
    const palabra6_letra6 = ()=>{return(document.getElementById("fila7C7"))}
    const palabra6_letra7 = ()=>{return(document.getElementById("fila7C8"))}
    const palabra6_letra8 = ()=>{return(document.getElementById("fila7C9"))}
    const palabra6_letra9 = ()=>{return(document.getElementById("fila7C10"))}
    const palabra6_letra10 = ()=>{return(document.getElementById("fila7C11"))}
    const palabra7_letra1 = ()=>{return(document.getElementById("fila9C3"))}
    const palabra7_letra2 = ()=>{return(document.getElementById("fila9C4"))}
    const palabra7_letra3 = ()=>{return(document.getElementById("fila9C5"))}
    const palabra7_letra4 = ()=>{return(document.getElementById("fila9C6"))}
    const palabra7_letra5 = ()=>{return(document.getElementById("fila9C7"))}
    const palabra7_letra6 = ()=>{return(document.getElementById("fila9C8"))}
    const palabra7_letra7 = ()=>{return(document.getElementById("fila9C9"))}
    const palabra7_letra8 = ()=>{return(document.getElementById("fila9C10"))}
    const palabra7_letra9 = ()=>{return(document.getElementById("fila9C11"))}
    const palabra8_letra1 = ()=>{return(document.getElementById("fila11C1"))}
    const palabra8_letra2 = ()=>{return(document.getElementById("fila11C2"))}
    const palabra8_letra3 = ()=>{return(document.getElementById("fila11C3"))}
    const palabra8_letra4 = ()=>{return(document.getElementById("fila11C4"))}
    const palabra8_letra5 = ()=>{return(document.getElementById("fila11C5"))}
    const palabra8_letra6 = ()=>{return(document.getElementById("fila11C6"))}
    

      var errorActivo=0;
      function error(){
        document.getElementById("mensaje").innerHTML="Existen palabras incorrectas";
        document.getElementById("mensaje").className=style.alert;
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
        const palabra1 = palabra1_letra1().value + palabra1_letra2().value + palabra1_letra3().value + palabra1_letra4().value + palabra1_letra5().value + palabra1_letra6().value + palabra1_letra7().value + palabra1_letra8().value; 
        const palabra2 = palabra2_letra1().value + palabra2_letra2().value + palabra2_letra3().value + palabra2_letra4().value + palabra2_letra5().value + palabra2_letra6().value + palabra2_letra7().value + palabra2_letra8().value + palabra2_letra9().value + palabra2_letra10().value;  
        const palabra3 = palabra3_letra1().value + palabra3_letra2().value + palabra3_letra3().value + palabra3_letra4().value + palabra3_letra5().value; 
        const palabra4 = palabra4_letra1().value + palabra4_letra2().value + palabra4_letra3().value + palabra4_letra4().value;
        const palabra5 = palabra5_letra1().value + palabra5_letra2().value + palabra5_letra3().value + palabra5_letra4().value + palabra5_letra5().value + palabra5_letra6().value;
        const palabra6 = palabra6_letra1().value + palabra6_letra2().value + palabra6_letra3().value + palabra6_letra4().value + palabra6_letra5().value + palabra6_letra6().value + palabra6_letra7().value + palabra6_letra8().value + palabra6_letra9().value + palabra6_letra10().value;
        const palabra7 = palabra7_letra1().value + palabra7_letra2().value + palabra7_letra3().value + palabra7_letra4().value + palabra7_letra5().value + palabra7_letra6().value + palabra7_letra7().value + palabra7_letra8().value + palabra7_letra9().value;
        const palabra8 = palabra8_letra1().value + palabra8_letra2().value + palabra8_letra3().value + palabra8_letra4().value + palabra8_letra5().value + palabra8_letra6().value;

        if(palabra1.toLowerCase()==="callback" && palabra2.toLowerCase()==="algoritmos" && palabra3.toLowerCase()==="henry" && palabra4.toLowerCase()==="html" && palabra5.toLowerCase()==="github" && palabra6.toLowerCase()==="javascript" && palabra7.toLowerCase()==="fullstack" && palabra8.toLowerCase()==="visual"){
          document.getElementById("mensaje").innerHTML="Ganaste";
          document.getElementById("mensaje").style.fontSize="24px";
          document.getElementById("mensaje").className=style.alert;
        }else{
          if(palabra1.toLowerCase()!=="callback"){
            palabra1_letra1().value="";
            palabra1_letra2().value="";
            palabra1_letra3().value="";
            palabra1_letra4().value="";
            palabra1_letra5().value="";
            palabra1_letra6().value="";
            palabra1_letra7().value="";
            palabra1_letra8().value="";
            error();
          }

          if(palabra2.toLowerCase()!=="algoritmos"){
            palabra2_letra1().value="";
            palabra2_letra2().value="";
            palabra2_letra3().value="";
            palabra2_letra4().value="";
            palabra2_letra5().value="";
            palabra2_letra6().value="";
            palabra2_letra7().value="";
            palabra2_letra8().value="";
            palabra2_letra9().value="";
            palabra2_letra10().value="";
            error();
          }

          if(palabra3.toLowerCase()!=="henry"){
            palabra3_letra1().value="";
            palabra3_letra2().value="";
            palabra3_letra3().value="";
            palabra3_letra4().value="";
            palabra3_letra5().value="";
            error();
          }

          if(palabra4.toLowerCase()!=="html"){
            palabra4_letra1().value="";
            palabra4_letra2().value="";
            palabra4_letra3().value="";
            palabra4_letra4().value="";
            error();
          }

          if(palabra5.toLowerCase()!=="github"){
            palabra5_letra1().value="";
            palabra5_letra2().value="";
            palabra5_letra3().value="";
            palabra5_letra4().value="";
            palabra5_letra5().value="";
            palabra5_letra6().value="";
            error();
          }

          if(palabra6.toLowerCase()!=="javascript"){
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
            error();
          }

          if(palabra7.toLowerCase()!=="fullstack"){
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

          if(palabra8.toLowerCase()!=="visual"){
            palabra8_letra1().value="";
            palabra8_letra2().value="";
            palabra8_letra3().value="";
            palabra8_letra4().value="";
            palabra8_letra5().value="";
            palabra8_letra6().value="";
            error();
          }

          //corrector de palabras
          if(palabra1.toLowerCase()==="callback"){
            palabra1_letra2().value="a";
            palabra1_letra4().value="l";
            palabra1_letra6().value="a";
          }

          if(palabra2.toLowerCase()==="algoritmos"){
            palabra2_letra2().value="l";
            palabra2_letra3().value="g";
            palabra2_letra5().value="r";
            palabra2_letra7().value="t";
          }

          if(palabra3.toLowerCase()==="henry"){
            palabra3_letra1().value="h";
          }

          if(palabra4.toLowerCase()==="html"){
            palabra4_letra4().value="l";
          }

          if(palabra5.toLowerCase()==="github"){
            palabra5_letra1().value="g";
            palabra5_letra4().value="h";
          }

          if(palabra6.toLowerCase()==="javascript"){
            palabra6_letra4().value="a";
            palabra6_letra7().value="r";
          }

          if(palabra7.toLowerCase()==="fullstack"){
            palabra7_letra3().value="l";
            palabra7_letra6().value="t";
          }

          if(palabra8.toLowerCase()==="visual"){
            palabra8_letra5().value="a";
          }
        }
      }

    return(
        <div className={style.body}>
        <div className={style.col_md_12}>
    
          <Text className={style.consigna} bg={colorMode==="dark"?"blackAlpha.800":"whiteAlpha.800"} color={colorMode==="dark" ? "white" : "black"}>Completa el crucigrama con las palabras relacionadas a estas definiciones</Text><br />
          <HStack className={style.tableConcepts} bg={colorMode==="dark"?"blackAlpha.800":"whiteAlpha.800"} alignItems="flex-start">
                <VStack className={style.definiciones} color={colorMode==="dark" ? "white" : "black"}>
                  <Text>
                    Verticales:
                    <br/>
                    1. Función que recibe como argumento otra función y la ejecuta.
                    <br/>
                    2. Conjunto de reglas para realizar una tarea.(p)
                    <br/>
                    3. Academia virtual que invierte en la educación de las personas.
                  </Text>
                </VStack>

                <VStack className={style.definiciones} color={colorMode==="dark" ? "white" : "black"}>
                  <Text>
                    Horizontal:
                    <br/>
                    4. Lenguaje de marcado.
                    <br/>
                    5. Servicio de alojamiento web para el control de versiones.
                    <br/>
                    6. Lenguaje de programación web por excelencia.
                    <br/>
                    7. Desarrolladores que conocen tanto los lenguajes de frontend como de backend.
                    <br/>
                    8. Editor de código.
                  </Text>	
                </VStack>
          </HStack>

          <div id="mensaje" ></div>
          <Box padding="20px" border="2px dashed black" backgroundColor="rgba(255, 255, 0, 0.5)">
          <table className={style.table}>
            <tbody>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/> 
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/> 
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.casilla} type="text" maxlength="1" id="fila1C11" />
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
            </tbody>
            <tbody>
                <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.casilla} type="text" maxlength="1" id="fila2C11" />
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
            </tbody>
            <tbody>
            <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.casilla} type="text" maxlength="1" id="fila3C8" />
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.casilla} type="text" maxlength="1" id="fila3C11" />
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
            </tbody>
            <tbody>
            <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.casilla} type="text" maxlength="1" id="fila4C5" />
              </td>
              <td>
                <input className={style.casilla} type="text" maxlength="1" id="fila4C6" />
              </td>
              <td>
                <input className={style.casilla} type="text" maxlength="1" id="fila4C7" />
              </td>
              <td>
                <input className={style.casilla} type="text" maxlength="1" id="fila4C8" />
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.casilla} type="text" maxlength="1" id="fila4C11" />
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
            </tbody>
            <tbody>
            <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.casilla} type="text" maxlength="1" id="fila5C8" />
              </td>
              <td>
                <input className={style.casilla} type="text" maxlength="1" id="fila5C9" />
              </td>
              <td>
                <input className={style.casilla} type="text" maxlength="1" id="fila5C10" />
              </td>
              <td>
                <input className={style.casilla} type="text" maxlength="1" id="fila5C11" />
              </td>
              <td>
                <input className={style.casilla} type="text" maxlength="1" id="fila5C12" />
              </td>
              <td>
                <input className={style.casilla} type="text" maxlength="1" id="fila5C13" />
              </td>
            </tbody>
            <tbody>
            <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.casilla} type="text" maxlength="1" id="fila6C5" name="word01"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.casilla} type="text" maxlength="1" id="fila6C8" />
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
            </tbody>
            <tbody>
            <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.casilla} type="text" maxlength="1" id="fila7C2" />
              </td>
              <td>
                <input className={style.casilla} type="text" maxlength="1" id="fila7C3" />
              </td>
              <td>
                <input className={style.casilla} type="text" maxlength="1" id="fila7C4" />
              </td>
              <td>
                <input className={style.casilla} type="text" maxlength="1" id="fila7C5" />
              </td>
              <td>
                <input className={style.casilla} type="text" maxlength="1" id="fila7C6" />
              </td>
              <td>
                <input className={style.casilla} type="text" maxlength="1" id="fila7C7" />
              </td>
              <td>
                <input className={style.casilla} type="text" maxlength="1" id="fila7C8" />
              </td>
              <td>
                <input className={style.casilla} type="text" maxlength="1" id="fila7C9" />
              </td>
              <td>
                <input className={style.casilla} type="text" maxlength="1" id="fila7C10" />
              </td>
              <td>
                <input className={style.casilla} type="text" maxlength="1" id="fila7C11" />
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
            </tbody>
            <tbody>
            <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.casilla} type="text" maxlength="1" id="fila8C5" />
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.casilla} type="text" maxlength="1" id="fila8C8" />
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
            </tbody>
            <tbody>
            <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.casilla} type="text" maxlength="1" id="fila9C3" />
              </td>
              <td>
                <input className={style.casilla} type="text" maxlength="1" id="fila9C4" />
              </td>
              <td>
                <input className={style.casilla} type="text" maxlength="1" id="fila9C5" />
              </td>
              <td>
                <input className={style.casilla} type="text" maxlength="1" id="fila9C6" />
              </td>
              <td>
                <input className={style.casilla} type="text" maxlength="1" id="fila9C7" />
              </td>
              <td>
                <input className={style.casilla} type="text" maxlength="1" id="fila9C8" />
              </td>
              <td>
                <input className={style.casilla} type="text" maxlength="1" id="fila9C9" />
              </td>
              <td>
                <input className={style.casilla} type="text" maxlength="1" id="fila9C10" />
              </td>
              <td>
                <input className={style.casilla} type="text" maxlength="1" id="fila9C11" />
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
            </tbody>
            <tbody>
            <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.casilla} type="text" maxlength="1" id="fila10C5" />
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.casilla} type="text" maxlength="1" id="fila10C8" />
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
            </tbody>
            <tbody>
            <td>
                <input className={style.casilla} type="text" maxlength="1" id="fila11C1" />
              </td>
              <td>
                <input className={style.casilla} type="text" maxlength="1" id="fila11C2" />
              </td>
              <td>
                <input className={style.casilla} type="text" maxlength="1" id="fila11C3" />
              </td>
              <td>
                <input className={style.casilla} type="text" maxlength="1" id="fila11C4" />
              </td>
              <td>
                <input className={style.casilla} type="text" maxlength="1" id="fila11C5" />
              </td>
              <td>
                <input className={style.casilla} type="text" maxlength="1" id="fila11C6" />
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.casilla} type="text" maxlength="1" id="fila11C8" />
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
            </tbody>
            <tbody>
            <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.casilla} type="text" maxlength="1" id="fila12C5" />
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.casilla} type="text" maxlength="1" id="fila12C8" />
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
            </tbody>
            <tbody>
            <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.casilla} type="text" maxlength="1" id="fila13C5" />
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
              <td>
                <input className={style.block} type="text" disabled maxlength="1" id="fila1C1"/>
              </td>
            </tbody>
          </table>
          </Box>

          <div className={style.botones}>
          <Button backgroundColor="yellow" color="black" border="1px solid black" _hover={{backgroundColor:"rgb(220, 220, 0)"}} marginTop="10px" fontSize="23px" padding="0 20px" onClick={verificar}>Verificar</Button>
          </div>
          
        </div>
    
      </div>
    )
}

export default Crosswords2;