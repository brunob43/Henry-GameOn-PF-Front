import { HStack, VStack } from "@chakra-ui/react";
// import style from "./Footer.module.css";

const Footer = () => {
  return (
    <HStack justifyContent="center" bg="yellow">
      <VStack fontSize="14">
        <h1>Trabajo realizado con 💓 por alumnos de Henry</h1>
        <h1>Politicas de privacidad 🔒 | Terminos y condiciones</h1>
        <h2>2023</h2>
      </VStack>
    </HStack>
  );
};

export default Footer;
