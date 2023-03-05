import { useAuth0 } from "@auth0/auth0-react";
import { VStack, useColorMode, Box, useDisclosure, Button
} from "@chakra-ui/react";
import React from "react";
import { Link} from "react-router-dom";
import style from "./CardDocs.module.css";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
} from "@chakra-ui/modal";
import { useRef } from "react";

const CardDocs = ({ name, image, id, topic, author })=> {
  const { colorMode } = useColorMode();
  const {isAuthenticated, loginWithRedirect} = useAuth0();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  const LogInHandler = (event)=>{
    loginWithRedirect()
  }
    return (
      isAuthenticated ? (
      <VStack >
      <Box borderColor={colorMode === "dark" ? "yellow" : "black"} className={style.container}>
        <Link to={`/doc/${id}`} className={style.link}>
          <img src={image} alt="imagen card" className={style.image}/>
          <div className={style.name}>{name}</div>
          <div className={style.details}>
            <div className={style.topic}>
              {topic}
            </div>
            <div className={style.author}>
              {author.toUpperCase()}
            </div>
          </div>        
        </Link>
      </Box>
      </VStack>
      ):(
        <VStack >
      <Box borderColor={colorMode === "dark" ? "yellow" : "black"} className={style.container} onClick={onOpen}>
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
          <img src={image} alt="imagen card" className={style.image}/>
          <div className={style.name}>{name}</div>
          <div className={style.details}>
            <div className={style.topic}>
              {topic}
            </div>
            <div className={style.author}>
              {author.toUpperCase()}
            </div>
          </div>
      </Box>
      </VStack>
      )
    );
  }
  export default CardDocs;