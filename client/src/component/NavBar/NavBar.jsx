import { NavLink } from "react-router-dom";
import logonegro from "../../styles/images/HenryLogo.png";
import logoblanco from "../../styles/images/HenryLogoDark.png";
import React from "react";
import { useColorMode, Button, HStack, Image } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher/ColorModeSwitcher";

import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileCreation } from "../Utils/utils";
import { sendProfile,resetProfile } from "../../redux/actions";



const NavBar = (props) => {
  const { user, isAuthenticated } = useAuth0();
  const profile = useSelector((state) => state.profile)
  console.log(user, isAuthenticated);

const dispatch = useDispatch();
useEffect ( () => {

if (user) {

  let prof = profileCreation (user)
  dispatch (sendProfile(prof))

}else{
  dispatch(resetProfile())
};

}, [isAuthenticated] );
console.log(user)
console.log(isAuthenticated)
console.log(profile)

  const { colorMode } = useColorMode();
  return (
    <div data-bs-theme="light">
    
      <HStack
         zIndex="10"
          w='100%'
          position='fixed'
         flexDirection={["column", "column", "row"]}
         justify="space-between"
         p="1px"
             
        bg={colorMode === "dark" ? "black" : "yellow"}
               >
        <a href="https://www.soyhenry.com" target="_blank" rel="noreferrer">
          <Image 
            p="35px"
            src={colorMode === "dark" ? logoblanco : logonegro}
            alt="Henry-Logo"
            w= "254px"
            h="auto"
            alignItems="center" 
          ></Image>
        </a>

        <HStack  flexDirection={["column", "column", "column", "row", "row"]}>
          <HStack  flexDirection={["column", "row", "row", "row", "row"]}>
            <NavLink to="/">
            <Button
                colorScheme='black' variant='link'
                pr="3" pl="3"
              
              >
                
                HOME
              </Button>
            </NavLink>

            <NavLink to="/games">
              <Button
                colorScheme='black' variant='link'
                pr="3" pl="3"
              >
                GAMES
              </Button>
            </NavLink>

            <NavLink to="/docs">
              <Button
                colorScheme='black' variant='link'
                pr="3" pl="3"
              >
                HENRYDOCS
              </Button>
            </NavLink>
          </HStack >
          <HStack flexDirection={["column", "row", "row", "row", "row"]}>
            <NavLink to="/about">
              <Button
              colorScheme='black' variant='link'
              pr="3" pl="3"
              >
                ABOUT US
              </Button>
            </NavLink>
            <NavLink to="/donation">
              <Button 
              colorScheme='black' variant='link'
              pr="3" pl="3"
              >
                DONATION
              </Button>
            </NavLink>
           
          </HStack>
          
          </HStack >
          <HStack >
          <NavLink to="/login">
              <Button
              colorScheme='black' variant='link'
              
              >
                LOGIN
              </Button>
            </NavLink>
            <ColorModeSwitcher />
            </HStack>
        
        </HStack>
      
      
    </div>
  );
};

export default NavBar;