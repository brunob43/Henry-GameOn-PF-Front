import style from "./Donation.module.css";
import coin from "../../styles/images/coin.png";
import mp from "../../styles/images/Mercado-Pago.jpg";
import { payment20, payment50, payment100 } from "../../redux/actions";
import { VStack, useColorMode,Heading, HStack, Text } from "@chakra-ui/react";


const Donation = () => {
  const { colorMode } = useColorMode();

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
      <VStack
        mt={["250px", "180px", "120px", "110px", "90px"]}
        mb="50px"
        bgColor={colorMode === "dark" ? "black" : "yellow"}
        color={colorMode === "dark" ? "yellow" : "black"}
        className={style.cont}
        borderColor={colorMode === "dark" ? "yellow" : "black"}
        border="5px solid"
        w={["350px","480px","600px","800px","800px"]}
        h={["1800px","1600px","1600px","900px","900px"]}
      >
        <Text fontSize={["25px","30px","40px","50px","50px"]} className={style.ttl}>💵DONACIONES💰</Text>
        <p className={style.msg}>
          Para aportar economicamente al desarrollo del sitio y juntos hacer mas
          contenido y mejoras al espacio HenryGameON
        </p>
        <Heading fontSize="50px">↓↓fichas↓↓</Heading>
        <HStack gap="10px" flexDirection={["column","column","column","row","row"]} w="100%" justify="space-around">
          <VStack 
            bgColor={colorMode === "dark" ? "black" : "yellow"}
            border="2px solid"
            borderColor={colorMode === "dark" ? "yellow" : "black"}
            _hover={colorMode === "dark" ? {bg:"rgb(180, 168, 0);", color:"black"} : {bg:"rgba(27, 27, 0, 0.781);", color:"yellow"}}
            fontSize="20px"
            onClick={pay20}
            className={style.coin}
          >
            <img className={style.imgcoin} src={coin} alt="coin 20"></img>
            <h2>Ayudita</h2>
            <h1>$20</h1>
          </VStack>
          <VStack 
          bgColor={colorMode === "dark" ? "black" : "yellow"}
          border="2px solid"
          borderColor={colorMode === "dark" ? "yellow" : "black"}
          _hover={colorMode === "dark" ? {bg:"rgb(180, 168, 0);", color:"black"} : {bg:"rgba(27, 27, 0, 0.781);", color:"yellow"}}
          fontSize="20px"
          onClick={pay50} className={style.coin}>
            <img className={style.imgcoin} src={coin} alt="coin 50"></img>
            <h2>Manón</h2>
            <h1>$50</h1>
          </VStack>
          <VStack 
          bgColor={colorMode === "dark" ? "black" : "yellow"}
          border="2px solid"
          borderColor={colorMode === "dark" ? "yellow" : "black"}
          _hover={colorMode === "dark" ? {bg:"rgb(180, 168, 0);", color:"black"} : {bg:"rgba(27, 27, 0, 0.781);", color:"yellow"}}
          fontSize="20px"
          onClick={pay100} className={style.coin}>
            <img className={style.imgcoin} src={coin} alt="coin 100"></img>
            <h2>Euforia</h2>
            <h1>$100</h1>
          </VStack>
        </HStack>
        <div className={style.textArea}>
          <br></br>
          <p>Las fichas corren en:</p>
          <img className={style.mp} src={mp} alt="mp"></img>👌🔒
        </div>
        <p className={style.textAreaS}>
          Son aceptadas tarjetas de debito y credito ya sean Visa, MasterCard o
          American Express. Tambien pago en Rapipago/Pagofacil y mas...
        </p>
      </VStack>
    </VStack>
  );
};

export default Donation;
