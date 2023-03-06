import style from "./Donation.module.css";
import coin from "../../styles/images/coin.png";
import mp from "../../styles/images/Mercado-Pago.jpg";
import { payment20, payment50, payment100 } from "../../redux/actions";
import { VStack, useColorMode,Heading, HStack, Text, Button, useDisclosure } from "@chakra-ui/react";
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
import bgdark from "../assets/imagen/darkdonation.jpg"
import bglight from "../assets/imagen/lightdonation.jpg"
const Donation = () => {
  const { colorMode } = useColorMode();
  const {isAuthenticated, loginWithRedirect} = useAuth0();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  const LogInHandler = (event)=>{
    alert('please log in')
    loginWithRedirect()
  }

  const pay20 = (e) => {
    payment20()();
  };

  const pay50 = (e) => {
    payment50()();
  };

  const pay100 = (e) => {
    payment100()();
  };

  return (
    <VStack>
      <VStack  bgImage={colorMode === "dark" ? bgdark : bglight} bgSize="contain" bgPosition="center" w="100%">
      <VStack
        mt={["280px", "200px", "140px", "130px", "110px"]}
        mb="50px"
        bgColor={colorMode === "dark" ? "blackAlpha.700" : "whiteAlpha.700"}
        color={colorMode === "dark" ? "yellow" : "black"}
        className={style.cont}
        borderColor={colorMode === "dark" ? "yellow" : "black"}
        border="3px solid"
        w={["300px","400px","550px","600px","600px"]}
        h={["1600px","1400px","1400px","700px","700px"]}
      >
        <Text fontSize={["15px","25px","30px","40px","40px"]} className={style.ttl}>💵DONACIONES💰</Text>
        <p className={style.msg}>
          Para aportar economicamente al desarrollo del sitio y juntos hacer mas
          contenido y mejoras al espacio HenryGameON
        </p>
        <Heading fontSize="25px">↓↓fichas↓↓</Heading>
        <HStack gap="10px" flexDirection={["column","column","column","row","row"]} w="100%" justify="space-around">
          <VStack 
            bgColor={colorMode === "dark" ? "blackAlpha.200" : "whiteAlpha.200"}
            border="2px solid"
            borderColor={colorMode === "dark" ? "yellow" : "black"}
            _hover={colorMode === "dark" ? {bg:"rgb(180, 168, 0);", color:"black"} : {bg:"rgba(27, 27, 0, 0.781);", color:"yellow"}}
            fontSize="16px"
            onClick={isAuthenticated ? pay20 : onOpen}
            className={style.coin}
          >
            <img className={style.imgcoin} src={coin} alt="coin 20"></img>
            <h2>Ayudita</h2>
            <h1>$20</h1>
          </VStack>
          <VStack 
          bgColor={colorMode === "dark" ? "blackAlpha.200" : "whiteAlpha.200"}
          border="2px solid"
          borderColor={colorMode === "dark" ? "yellow" : "black"}
          _hover={colorMode === "dark" ? {bg:"rgb(180, 168, 0);", color:"black"} : {bg:"rgba(27, 27, 0, 0.781);", color:"yellow"}}
          fontSize="16px"
          onClick={isAuthenticated ? pay50 : onOpen} className={style.coin}>
            <img className={style.imgcoin} src={coin} alt="coin 50"></img>
            <h2>Manón</h2>
            <h1>$50</h1>
          </VStack>
          <VStack 
          bgColor={colorMode === "dark" ? "blackAlpha.200" : "whiteAlpha.200"}
          border="2px solid"
          borderColor={colorMode === "dark" ? "yellow" : "black"}
          _hover={colorMode === "dark" ? {bg:"rgb(180, 168, 0);", color:"black"} : {bg:"rgba(27, 27, 0, 0.781);", color:"yellow"}}
          fontSize="16px"
          onClick={isAuthenticated ? pay100 : onOpen} className={style.coin}>
            <img className={style.imgcoin} src={coin} alt="coin 100"></img>
            <h2>Euforia</h2>
            <h1>$100</h1>
          </VStack>
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
        </HStack>
        <div className={style.textArea}>
          <br></br>
         <HStack>
          <p>Las fichas corren en:</p>
          <img className={style.mp} src={mp} alt="mp"></img>
          <Text>👌🔒</Text>
          </HStack>
        </div>
        <p className={style.textAreaS}>
          Son aceptadas tarjetas de débito y crédito Visa, MasterCard o
          American Express. También Rapipago/Pagofácil y más...
        </p>
      </VStack>
    </VStack>
    </VStack>
  );
};

export default Donation;
