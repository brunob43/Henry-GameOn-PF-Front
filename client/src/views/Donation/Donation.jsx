import style from "./Donation.module.css";
import coin from "../../styles/images/coin.png";
import mp from "../../styles/images/Mercado-Pago.jpg";
import { payment20, payment50, payment100 } from "../../redux/actions";
import { VStack, useColorMode,Heading } from "@chakra-ui/react";
import Footer from "../../component/Footer/Footer";

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
        mt={["400px", "250px", "200px", "125px", "125px"]}
        mb="50px"
        bgColor={colorMode === "dark" ? "black" : "yellow"}
        color={colorMode === "dark" ? "yellow" : "black"}
        className={style.cont}
        borderColor={colorMode === "dark" ? "yellow" : "black"}
        border="8px solid"
      >
        <p className={style.ttl}>💵DONACIONES💰</p>
        <p className={style.msg}>
          Para aportar economicamente al desarrollo del sitio y juntos hacer mas
          contenido y mejoras al espacio HenryGameON
        </p>
        <Heading fontSize="50px">↓↓fichas↓↓</Heading>
        <div className={style.coins}>
          <VStack
            bgColor={colorMode === "dark" ? "black" : "yellow"}
            border="8px outset"
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
          border="8px outset"
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
          border="8px outset"
          borderColor={colorMode === "dark" ? "yellow" : "black"}
          _hover={colorMode === "dark" ? {bg:"rgb(180, 168, 0);", color:"black"} : {bg:"rgba(27, 27, 0, 0.781);", color:"yellow"}}
          fontSize="20px"
          onClick={pay100} className={style.coin}>
            <img className={style.imgcoin} src={coin} alt="coin 100"></img>
            <h2>Euforia</h2>
            <h1>$100</h1>
          </VStack>
        </div>
        <div className={style.textArea}>
          Las fichas corren en{" "}
          <img className={style.mp} src={mp} alt="mp"></img>👌🔒
        </div>
        <p className={style.textAreaS}>
          Son aceptadas tarjetas de debito y credito ya sean Visa, MasterCard o
          American Express. Tambien pago en Rapipago/Pagofacil y mas...
        </p>
      </VStack>
      <Footer/>
    </VStack>
  );
};

export default Donation;
