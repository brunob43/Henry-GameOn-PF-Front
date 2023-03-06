import { NavLink } from "react-router-dom";
import logonegro from "../../styles/images/HenryLogo.png";
import logoblanco from "../../styles/images/HenryLogoDark.png";
import React from "react";
import {
  useColorMode,
  Button,
  HStack,
  Image,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher/ColorModeSwitcher";

import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileCreation } from "../Utils/utils";
import { sendProfile, resetProfile } from "../../redux/actions";
<<<<<<< HEAD
=======
import LoginButton from "../../views/Auth/Login/Login";
import ProfileButton from "../ProfileButton/ProfileButton";
>>>>>>> a7277af3e29cc8826583d2f978c9fbee1f1462c2

const NavBar = (props) => {
  const { user, isAuthenticated } = useAuth0();
  const profile = useSelector((state) => state.profile);
  console.log(user, isAuthenticated);

  const dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      let prof = profileCreation(user);
      dispatch(sendProfile(prof));
    } else {
      dispatch(resetProfile());
    }
  }, [isAuthenticated]);
  console.log(user);
  console.log(isAuthenticated);
  console.log(profile);

  const { colorMode } = useColorMode();
  return (
    <div data-bs-theme="light">
      <HStack
<<<<<<< HEAD
        zIndex="10"
        w="100%"
        position="fixed"
        flexDirection={["column", "column", "row"]}
        justify="space-around"
        p="10px"
=======

         zIndex="10"
          w='100%'
          position='fixed'
         flexDirection={["column", "row", "row"]}
         justify="space-between"

>>>>>>> a7277af3e29cc8826583d2f978c9fbee1f1462c2
        bg={colorMode === "dark" ? "black" : "yellow"}
      >
        <a href="https://www.soyhenry.com" target="_blank" rel="noreferrer">

          <Image 
            p={["15px", "20px", "25px"]}

            src={colorMode === "dark" ? logoblanco : logonegro}
            alt="Henry-Logo"
            w="254px"
            h="auto"
            alignItems="center"
          ></Image>
        </a>

        <HStack flexDirection={["column", "column", "column", "row", "row"]}>
          <HStack>
            <NavLink to="/">
              <Button colorScheme="black" variant="link" pr="3" pl="3">
                HOME
              </Button>
            </NavLink>

            <NavLink to="/games">
              <Button colorScheme="black" variant="link" pr="3" pl="3">
                GAMES
              </Button>
            </NavLink>

            <NavLink to="/docs">
              <Button colorScheme="black" variant="link" pr="3" pl="3">
                HENRYDOCS
              </Button>
            </NavLink>
          </HStack>
          <HStack>
            <NavLink to="/about">
              <Button colorScheme="black" variant="link" pr="3" pl="3">
                ABOUT US
              </Button>
            </NavLink>
            <NavLink to="/donation">
              <Button colorScheme="black" variant="link" pr="3" pl="3">
                DONATION
              </Button>
            </NavLink>
          </HStack>

        </HStack>
        <HStack pl="10px" pr="10px">
          <LoginButton />
          <ColorModeSwitcher  />
          <ProfileButton />
        </HStack>
      </HStack>
    </div>
  );
};

export default NavBar;
