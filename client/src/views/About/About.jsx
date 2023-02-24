// import style from "./About.module.css";
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
import {
  Box,
  VStack,
  Container,
  Heading,
  WrapItem,
  Avatar,
  Center,
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
      <Image src={fon} position="fixed" right="0"></Image>
      <VStack>
        <Heading padding="5" color={colorMode === "dark" ? "yellow" : "black"}>
          ¿QUIENES SOMOS?
        </Heading>
      </VStack>

      <VStack>
        <Container
          textAlign="center"
          padding="5"
          color={colorMode === "dark" ? "white" : "black"}
        >
          SOMOS UN EQUIPO DE TRABAJO QUE SE FUE FORMANDO A LO LARGO DEL BOOTCAMP
          DE HENRY, A PESAR DE NO SER DEL MISMO GRUPO DE SUP, LOGRAMOS COINCIDIR
          Y COORDINAR NUESTRAS IDEAS Y PLASMARLAS PARA LLEGAR AL OBJETIVO EN
          COMÚN. COMO OBJETIVO SIEMPRE NOS PROPUSIMOS TRABAJAR DE FORMA AMENA,
          CON RESPETO Y A TRAVES DE ESO PODER DESARROLLAR ALGO QUE SEA CREATIVO,
          DIVERTIDO Y QUE LO PUEDA UTILIZAR CUALQUIER PERSONA QUE LE APASIONE EL
          MUNDO DE LA PROGRAMACION.
        </Container>
      </VStack>

      <VStack columns={2} spacingX="40px" spacingY="20px">
        <HStack>
          <WrapItem padding="20">
            <Center
              padding="10"
              borderRadius="10"
              w="450px"
              h="100px"
              bg="rgb(143 112 191)"
            >
              <Avatar name="Dan" src={abel} size="xl" />
              <Text fontSize="2xl">Abel Yamil Moreno</Text>
              <VStack marginLeft="7">
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
            </Center>
          </WrapItem>

          <WrapItem padding="20">
            <Center
              padding="10"
              borderRadius="10"
              w="450px"
              h="100px"
              bg="rgb(143 112 191)"
            >
              <Avatar name="Dan" src={bruno} size="xl" />
              <Text fontSize="2xl">Bruno Buglioni</Text>
              <VStack marginLeft="7">
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
            </Center>
          </WrapItem>
        </HStack>
        <HStack>
          <WrapItem padding="20">
            <Center
              padding="10"
              borderRadius="10"
              w="450px"
              h="100px"
              bg="rgb(143 112 191)"
            >
              <Avatar name="Dan" src={nicole} size="xl" />
              <Text fontSize="2xl">Florencia Braida</Text>
              <VStack marginLeft="7">
                <Link href="https://github.com/BelenEchazu" target="_blank">
                  <Image src={github} alt="github" w="10" />
                </Link>

                <Link
                  href="https://www.linkedin.com/in/nicolea4/"
                  target="_blank"
                >
                  <Image src={linkedin} alt="linkedin" w="10" />
                </Link>
              </VStack>
            </Center>
          </WrapItem>

          <WrapItem padding="20">
            <Center
              padding="10"
              borderRadius="10"
              w="450px"
              h="100px"
              bg="rgb(143 112 191)"
            >
              <Avatar name="Dan" src={franco} size="xl" />
              <Text fontSize="2xl">Franco Frias</Text>
              <VStack marginLeft="7">
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
            </Center>
          </WrapItem>
        </HStack>

        <HStack>
          <WrapItem padding="20">
            <Center
              padding="10"
              borderRadius="10"
              w="450px"
              h="100px"
              bg="rgb(143 112 191)"
            >
              <Avatar name="Dan" src={manu} size="xl" />
              <Text fontSize="2xl">Manuel Albarracin</Text>
              <VStack marginLeft="7">
                <Link href="https://github.com/Roxcon1" target="_blank">
                  <Image src={github} alt="github" w="10" />
                </Link>

                <Link href="https://github.com/Roxcon1" target="_blank">
                  <Image src={linkedin} alt="linkedin" w="10" />
                </Link>
              </VStack>
            </Center>
          </WrapItem>

          <WrapItem padding="20">
            <Center
              padding="10"
              borderRadius="10"
              w="450px"
              h="100px"
              bg="rgb(143 112 191)"
            >
              <Avatar name="Dan" src={belen} size="xl" />
              <Text fontSize="2xl">María Belén Echazú Higa</Text>
              <VStack marginLeft="7">
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
            </Center>
          </WrapItem>
        </HStack>

        <HStack>
          <WrapItem padding="20">
            <Center
              padding="10"
              borderRadius="10"
              w="450px"
              h="100px"
              bg="rgb(143 112 191)"
            >
              <Avatar name="Dan" src={larry} size="xl" />
              <Text fontSize="2xl">Larry Guarenas</Text>
              <VStack marginLeft="7">
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
            </Center>
          </WrapItem>

          <WrapItem padding="20">
            <Center
              padding="10"
              borderRadius="10"
              w="450px"
              h="100px"
              bg="rgb(143 112 191)"
            >
              <Avatar name="Dan" src={pablo} size="xl" />
              <Text fontSize="2xl">Pablo Boria</Text>
              <VStack marginLeft="7">
                <Link href="https://github.com/pabloboria" target="_blank">
                  <Image src={github} alt="github" w="10" />
                </Link>

                <Link href="https://github.com/pabloboria" target="_blank">
                  <Image src={linkedin} alt="linkedin" w="10" />
                </Link>
              </VStack>
            </Center>
          </WrapItem>
        </HStack>
      </VStack>

      <HStack justifyContent="center">
        <NavLink to="/contact">
          <Button
            size="md"
            height="48px"
            width="200px"
            border="2px"
            borderColor="yellow"
            _hover={
              colorMode === "dark"
                ? { color: "black", bg: "white" }
                : { bg: "black", color: "white" }
            }
            bg={colorMode === "dark" ? "black" : "white"}
          >
            <Text>Contact</Text>
          </Button>
        </NavLink>
      </HStack>
    </Box>
  );
};
export default About;
