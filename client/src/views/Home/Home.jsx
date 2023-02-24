import React from "react";
import Footer from "../../component/Footer/Footer";
//import { SearchBar } from "../SearchBar/SearchBar";
// import style from "./Home.module.css";
// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
//import { NavLink } from "react-router-dom";
//import { useState, useEffect } from "react";
//import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {Button, Box, Text, Heading, VStack, Container, HStack} from '@chakra-ui/react';
import foto from '../assets/imagen/MUNDOHENRY-1.jpg';

const Home = () => {
  /*const dispatch = useDispatch()
    

    useEffect(()=>{
        dispatch(())
    }. [])*/

  return (
    <>
     
      <Box bgImage={foto} bgSize='cover'>
     
        <VStack>
        <Heading color='white' h='50' display='flex' flexDirection='row' padding='10' as='h1' size='xl' noOfLines={1}>
            Bienvenidos a 
        </Heading>

        <Heading color='white' fontSize='70' h='70'  display='flex' flexDirection='row'>
            HENRY GAME ON
        </Heading>

        <Text color='white' textAlign='center' fontSize='23'>
            Un espacio donde podras codear jugando
        </Text>
        </VStack>

        <HStack justifyContent="space-evenly" >
        <Link to="/games">
          <Button  variant='ghost' _hover={{ bg: 'yellow', color: 'black' }} color='yellow' fontSize='22px' as='u'>Games</Button>
        </Link>
        <Link to="/docs">
          <Button  variant='ghost' _hover={{ bg: 'yellow', color: 'black' }} color='yellow' fontSize='22px' as='u'>HenryDocs</Button>
        </Link>
        </HStack>

        <VStack>
        <Container color='white' centerContent marginLeft='25' fontSize='20px' h='200' marginTop='10' >
          Nuestro principal objetivo es trabajar continuamente para transformar
          el aprendizaje en una experiencia inolvidable. Donde se puedan
          desarrollar habilidades a traves de la diversion y potenciando el
          talento
        </Container>
        </VStack>
        <VStack>
        <Container color='white' centerContent marginRight='25' fontSize='20px' h='200' marginTop='-34'>
          Proponemos brindar a la comunidad de Henry un espacio donde puedan
          encontrar material de estudio y juegos para poder adquirir mayor
          competencia y practica de forma amena y mas divertida.
        </Container>
        </VStack>
      </Box>

      <Footer />
    </>
  );
};

export default Home;
