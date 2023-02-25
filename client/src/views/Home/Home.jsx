import React from "react";
import Footer from "../../component/Footer/Footer";
import { Link } from "react-router-dom";
import {
  Button,
  Box,
  Text,
  Heading,
  VStack,
  HStack,
  Image,
  useColorMode
} from "@chakra-ui/react";
import foto from "../assets/imagen/MUNDOHENRY-1.jpg";
import logo from "../../styles/images/HenryLogo.png";
import logoclaro from "../../styles/images/HenryLogoClaro.webp"
import styles from "./Home.module.css";

const Home = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Box bgImage={foto} bgSize="cover" bgPosition="center">
        <VStack>
          <Heading
            mt={["350px", "200px", "150px", "70px", "70px"]}
            color="white"
            h="50"
            display="flex"
            flexDirection="row"
            padding="10"
            as="h1"
            size="xl"
            noOfLines={1}
          >
            Bienvenidos a...
          </Heading>
          <VStack w="500px" justify="center" color="black">
            <Image p="5px" w="100%" bg={colorMode === "dark" ? "black" : "yellow"} src={colorMode === "dark" ? logoclaro : logo}></Image>
            <Heading
              bg="yellow"
              fontSize="65px"
              w="100%"
              textAlign="center"
              className={styles.title}
            >
              GAME ON
            </Heading>
          </VStack>
          <Text
            color="blackAlpha.800"
            textAlign="center"
            fontSize="30"
            fontWeight="bold"
            bg="rgba(255, 255, 59, 0.655)"
            borderRadius="10px"
          >
            Un espacio donde podras codear jugando
          </Text>
          <Text
            _hover={{
              bg: "rgba(201, 201, 59, 0.455)",
              transition: "0.2s ease",
            }}
            w="80%"
            h={["400", "330", "200", "150"]}
            color="white"
            justifyContent="center"
            textAlign="center"
            fontSize="21px"
            fontWeight="bold"
          >
            Nuestro principal objetivo es hacer del aprendizaje de programacion, una
            experiencia inolvidable mas alla del estudio, aprender habilidades
            jugando (Games) y compartir conocimiento. (Docs)<br></br>Proponemos
            brindar a la comunidad de Henry un espacio donde la comunidad Henry
            pueda compartir resumenes de documentacion y aprender programacion
            con juegos.
          </Text>
        </VStack>
        <HStack>
          <VStack h="400px" color="white" justify="flex-start" fontSize="20px">
            <Link to="/games">
              <Button
                variant="ghost"
                _hover={{ bg: "yellow", color: "black" }}
                color="yellow"
                fontSize="22px"
                as="u"
              >
                Games👾
              </Button>
            </Link>
            <Text
              w="80%"
              textAlign="center"
              _hover={{
                bg: "rgba(201, 201, 59, 0.455)",
                transition: "0.2s ease",
              }}
            >
              HenryGames es una plataforma de juegos tematicos de programacion
              ,construidos con javascript, para entretenerse y aprender mientras
              tanto.
            </Text>
          </VStack>
          <VStack h="400px" color="white" justify="flex-start" fontSize="20px">
            <Link to="/docs">
              <Button
                variant="ghost"
                _hover={{ bg: "yellow", color: "black" }}
                color="yellow"
                fontSize="22px"
                as="u"
              >
                HenryDocs 📑
              </Button>
            </Link>
            <Text
              w="80%"
              textAlign="center"
              _hover={{
                bg: "rgba(201, 201, 59, 0.455)",
                transition: "0.2s ease",
              }}
            >
              HenryDocs es una plataforma social en la que puedes compartir
              documentos, resumenes, informacion util y demas a la comunidad y
              esta a su vez dar feedback con su like👍
            </Text>
          </VStack>
        </HStack>
      </Box>
      <Footer />
    </>
  );
};

export default Home;

//
//
//
//
//
