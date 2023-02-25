import linkedin from "../assets/imagen/linkedin.png";
import github from "../assets/imagen/github.png";
import { NavLink } from "react-router-dom";
import belen from "../assets/imagen/belen.jpg";
import bruno from "../assets/imagen/bruno.png";
import nicole from "../assets/imagen/nicole.png";
import pablo from "../assets/imagen/pablo.jpg";
import abel from "../assets/imagen/Abel.png";
import larry from "../assets/imagen/Larry.png";
import manu from "../assets/imagen/manu.jpg";
import franco from "../assets/imagen/franco.jpg";
import fon from "../assets/imagen/shapesHowApply.png";
import Footer from "../../component/Footer/Footer";
import style from "./About.module.css"
import {
  Box,
  VStack,
  Container,
  Heading,
  Avatar,
  Image,
  Text,
  Link,
  Button,
  HStack,
  useColorMode,
} from "@chakra-ui/react";

const About = () => {
  const { colorMode } = useColorMode();
  return (
    <Box bg={colorMode === "dark" ? "black" : "white"}>
      <VStack
        bgImage={fon}
        bgPos="top right"
        bgRepeat="no-repeat"
        bgAttachment="fixed"
        zIndex="8"
      >
        <VStack mt={["350px", "200px", "150px", "70px", "70px"]}>
          <Heading
            padding="5"
            color={colorMode === "dark" ? "yellow" : "black"}
            className={style.title}
          >
            ¿QUIENES SOMOS?
          </Heading>
        </VStack>

        <VStack>
          <Container
            fontSize="24"
            fontWeight="bold"
            textAlign="center"
            padding="5"
            color={colorMode === "dark" ? "white" : "black"}
          >
            SOMOS UN EQUIPO DE TRABAJO QUE SE FUE FORMANDO A LO LARGO DEL
            BOOTCAMP DE HENRY. LOGRAMOS COINCIDIR Y COORDINAR NUESTRAS IDEAS Y
            PLASMARLAS PARA LLEGAR AL OBJETIVO EN COMÚN.<br></br>COMO OBJETIVO
            SIEMPRE NOS PROPUSIMOS TRABAJAR DE FORMA AMENA, CON RESPETO Y ASI
            DESARROLLAR UN SITIO NOVEDOSO Y DIVERTIDO APTO PARA CUALQUIER
            ENTUSIASTA DE LA PROGRAMACION.
          </Container>
        </VStack>

        <VStack w="85%">
          <HStack
            flexDirection={["column", "column", "row", "row"]}
            w="100%"
            justify="space-around"
          >
            <HStack
              m="30px"
              justify="space-around"
              border="2px solid"
              borderColor={colorMode === "dark" ? "white" : "black"}
              borderRadius="10"
              w={["80%", "80%", "40%", "40%"]}
              h="125px"
              bg="rgb(143 112 191)"
            >
              <Avatar
                name="Dan"
                src={abel}
                size="xl"
                border={
                  colorMode === "dark" ? "1px solid white" : "1px solid black"
                }
              />
              <Text fontSize="26px">Abel Moreno</Text>
              <VStack>
                <Link href="https://github.com/Abelmoreno97" target="_blank">
                  <Image src={github} alt="github" w="10" />
                </Link>

                <Link
                  href="https://www.linkedin.com/in/abelmoreno97/"
                  target="_blank"
                >
                  <Image src={linkedin} alt="linkedin" w="10" />
                </Link>
              </VStack>
            </HStack>

            <HStack
              m="30px"
              justify="space-around"
              border="2px solid"
              borderColor={colorMode === "dark" ? "white" : "black"}
              borderRadius="10"
              w={["80%", "80%", "40%", "40%"]}
              h="125px"
              bg="rgb(143 112 191)"
            >
              <Avatar
                name="Dan"
                src={bruno}
                size="xl"
                border={
                  colorMode === "dark" ? "1px solid white" : "1px solid black"
                }
              />
              <Text fontSize="26px">Bruno Buglioni</Text>
              <VStack>
                <Link href="https://github.com/brunob43" target="_blank">
                  <Image src={github} alt="github" w="10" />
                </Link>

                <Link
                  href="https://www.linkedin.com/in/bruno-buglioni-b0652a263/"
                  target="_blank"
                >
                  <Image src={linkedin} alt="linkedin" w="10" />
                </Link>
              </VStack>
            </HStack>
          </HStack>

          <HStack
            flexDirection={["column", "column", "row", "row"]}
            w="100%"
            justify="space-around"
          >
            <HStack
              m="30px"
              justify="space-around"
              border="2px solid"
              borderColor={colorMode === "dark" ? "white" : "black"}
              borderRadius="10"
              w={["80%", "80%", "40%", "40%"]}
              h="125px"
              bg="rgb(143 112 191)"
            >
              <Avatar
                name="Dan"
                src={franco}
                size="xl"
                border={
                  colorMode === "dark" ? "1px solid white" : "1px solid black"
                }
              />
              <Text fontSize="26px">Franco Frias</Text>
              <VStack>
                <Link href="https://github.com/FrancoFrias23" target="_blank">
                  <Image src={github} alt="github" w="10" />
                </Link>

                <Link
                  href="https://www.linkedin.com/in/franco-n-fr%C3%ADas-8a2631216/"
                  target="_blank"
                >
                  <Image src={linkedin} alt="linkedin" w="10" />
                </Link>
              </VStack>
            </HStack>

            <HStack
              m="30px"
              justify="space-around"
              border="2px solid"
              borderColor={colorMode === "dark" ? "white" : "black"}
              borderRadius="10"
              w={["80%", "80%", "40%", "40%"]}
              h="125px"
              bg="rgb(143 112 191)"
            >
              <Avatar
                name="Dan"
                src={nicole}
                size="xl"
                border={
                  colorMode === "dark" ? "1px solid white" : "1px solid black"
                }
              />
              <Text fontSize="26px">Florencia Braida</Text>
              <VStack>
                <Link href="https://github.com/NicoleA413" target="_blank">
                  <Image src={github} alt="github" w="10" />
                </Link>

                <Link
                  href="https://www.linkedin.com/in/nicolea4/"
                  target="_blank"
                >
                  <Image src={linkedin} alt="linkedin" w="10" />
                </Link>
              </VStack>
            </HStack>
          </HStack>

          <HStack
            flexDirection={["column", "column", "row", "row"]}
            w="100%"
            justify="space-around"
          >
            <HStack
              m="30px"
              justify="space-around"
              border="2px solid"
              borderColor={colorMode === "dark" ? "white" : "black"}
              borderRadius="10"
              w={["80%", "80%", "40%", "40%"]}
              h="125px"
              bg="rgb(143 112 191)"
            >
              <Avatar
                name="Dan"
                src={manu}
                size="xl"
                border={
                  colorMode === "dark" ? "1px solid white" : "1px solid black"
                }
              />
              <Text fontSize="26px">Manuel Albarracin</Text>
              <VStack>
                <Link href="https://github.com/Roxcon1" target="_blank">
                  <Image src={github} alt="github" w="10" />
                </Link>

                <Link
                  href="https://www.linkedin.com/in/Roxcon1"
                  target="_blank"
                >
                  <Image src={linkedin} alt="linkedin" w="10" />
                </Link>
              </VStack>
            </HStack>

            <HStack
              m="30px"
              justify="space-around"
              border="2px solid"
              borderColor={colorMode === "dark" ? "white" : "black"}
              borderRadius="10"
              w={["80%", "80%", "40%", "40%"]}
              h="125px"
              bg="rgb(143 112 191)"
            >
              <Avatar
                name="Dan"
                src={belen}
                size="xl"
                border={
                  colorMode === "dark" ? "1px solid white" : "1px solid black"
                }
              />
              <Text fontSize="26px">Belén Echazú</Text>
              <VStack>
                <Link href="https://github.com/BelenEchazu" target="_blank">
                  <Image src={github} alt="github" w="10" />
                </Link>

                <Link
                  href="https://www.linkedin.com/in/mar%C3%ADabel%C3%A9nechaz%C3%BAhiga/"
                  target="_blank"
                >
                  <Image src={linkedin} alt="linkedin" w="10" />
                </Link>
              </VStack>
            </HStack>
          </HStack>

          <HStack
            flexDirection={["column", "column", "row", "row"]}
            w="100%"
            justify="space-around"
          >
            <HStack
              m="30px"
              justify="space-around"
              border="2px solid"
              borderColor={colorMode === "dark" ? "white" : "black"}
              borderRadius="10"
              w={["80%", "80%", "40%", "40%"]}
              h="125px"
              bg="rgb(143 112 191)"
            >
              <Avatar
                name="Dan"
                src={larry}
                size="xl"
                border={
                  colorMode === "dark" ? "1px solid white" : "1px solid black"
                }
              />
              <Text fontSize="26px">Larry Guarenas</Text>
              <VStack>
                <Link href="https://github.com/Larryjose" target="_blank">
                  <Image src={github} alt="github" w="10" />
                </Link>

                <Link
                  href="https://www.linkedin.com/in/larry-jos%C3%A9-guarenas-arraez-100a5a256/"
                  target="_blank"
                >
                  <Image src={linkedin} alt="linkedin" w="10" />
                </Link>
              </VStack>
            </HStack>

            <HStack
              m="30px"
              justify="space-around"
              border="2px solid"
              borderColor={colorMode === "dark" ? "white" : "black"}
              borderRadius="10"
              w={["80%", "80%", "40%", "40%"]}
              h="125px"
              bg="rgb(143 112 191)"
            >
              <Avatar
                name="Dan"
                src={pablo}
                size="xl"
                border={
                  colorMode === "dark" ? "1px solid white" : "1px solid black"
                }
              />
              <Text fontSize="26px">Pablo Boria</Text>
              <VStack>
                <Link href="https://github.com/pabloboria" target="_blank">
                  <Image src={github} alt="github" w="10" />
                </Link>

                <Link href="https://github.com/pabloboria" target="_blank">
                  <Image src={linkedin} alt="linkedin" w="10" />
                </Link>
              </VStack>
            </HStack>
          </HStack>
        </VStack>

        <HStack justifyContent="center">
          <NavLink to="/contact">
            <Button
              size="md"
              height="48px"
              width="200px"
              border="2px"
              borderColor={colorMode === "dark" ? "yellow" : "black"}
              _hover={
                colorMode === "dark"
                  ? { color: "black", bg: "yellow" }
                  : { bg: "black", color: "yellow" }
              }
              bg={colorMode === "dark" ? "black" : "yellow"}
            >
              <Text>Contact</Text>
            </Button>
          </NavLink>
        </HStack>
        <Footer />
      </VStack>
    </Box>
  );
};
export default About;
