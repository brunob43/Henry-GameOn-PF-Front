import { Button, Stack, useDisclosure, VStack ,Divider} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import style from "./CardGame.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
} from "@chakra-ui/modal";
import { useRef } from "react";

const CardGame = ({ name, image, id, topic, difficulty }) => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  const LogInHandler = (event) => {
    loginWithRedirect();
  };

  return (
    isAuthenticated ? (
    <VStack>
      <div className={style.container}>
        <Link to={`/games/${id}`} className={style.link}>
          <img src={image} alt="imagen card" className={style.image} />
          <div className={style.name}>{name}</div>
          <div className={style.details}>
            <div className={style.topic}>{topic}</div>
            <div className={style.dificulty}>{difficulty.toUpperCase()}</div>
          </div>
        </Link>
      </div>
    </VStack>
  ) : (
    <VStack>
      <div className={style.container} onClick={onOpen}>
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Want this content?
              </AlertDialogHeader>

              <AlertDialogBody>
                You need to be logged in to access this content
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="yellow" onClick={LogInHandler} ml={3}>
                  Log In
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
        <Link className={style.link}>
        <img src={image} alt="imagen card" className={style.image} />
        <div className={style.name}>{name}</div>
        <div className={style.details}>
          <Stack direction="row" h="30px" >
          <div className={style.topic}>Topic: {topic}</div>
          <Divider orientation="vertical"/>
          <div className={style.dificulty}>Difficulty: {difficulty.toUpperCase()}</div>
          </Stack>
        </div>
        </Link>
      </div> 
    </VStack>
    )
  );
};
export default CardGame;
