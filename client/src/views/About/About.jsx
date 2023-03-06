import linkedin from "../assets/imagen/linkedin.png";
import github from "../assets/imagen/github.png";
import { NavLink } from "react-router-dom";
import belen from "../assets/imagen/Belen_IA.jpg";
import bruno from "../assets/imagen/Bruno_IA.jpg";
import nicole from "../assets/imagen/Nicole_IA.jpg";
import pablo from "../assets/imagen/Nicole_IA.jpg";
import abel from "../assets/imagen/Abel_IA.jpg";
import larry from "../assets/imagen/Larry_IA.png";
import manu from "../assets/imagen/Abel_IA.jpg";
import franco from "../assets/imagen/Larry_IA.png";
import fon from "../assets/imagen/shapesHowApply.png";
import {
  Box,
  VStack,
  Avatar,
  Image,
  Text,
  Link,
  Button,
  HStack,
  useColorMode,
  Divider
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
        <VStack mt={["170px", "100px", "40px", "40px", "40px"]}>
         <VStack>
          <Text
            mt="50px"
            padding="30px"
            color={colorMode === "dark" ? "while" : "black"}
            textAlign="center"
            fontSize={["32px","52px"]}
            fontWeight="extrabold"
            w=""
          >
            HENRY GAME ON
          </Text>
        </VStack>

        <VStack w="90%" p="25px" align="flex-start">
          <Text
            fontSize={["20px","20px","28px", "30px"]}
            padding="3px"
            color={colorMode === "dark" ? "white" : "black"}
            justifyContent="flex-start"
            fontWeight="bold" as="u"
          >
         Porque creamos Henry GameOn
          </Text>
          <Text fontSize="18px">
              Creemos que las soft kills son parte importante para el camino de
              los desarrolladores, es por eso que decidimos crear un espacio en
              el cual el aprendizaje sea una experiencia inolvidable, donde a
              través del juego y compartiendo información potenciemos dichas
              habilidades. 
            </Text>
            <Text fontSize="30px" fontWeight="bold" as="u">
              Nuestro Equipo
            </Text>
            <Text fontSize="18px">
              Nuestro equipo de trabajo se fue formando a lo largo del bootcamp
              de Henry. Logramos coincidir, coordinar nuestras ideas y
              plasmarlas en el proyecto. Nuestro principal objetivo fue trabajar en un
              ambiente tranquilo, con respeto y disfrutar el proceso del
              proyecto, para poder así desarrollar un sitio novedoso y divertido
              para estudiantes de la comunidad de Henry.
            </Text>
          </VStack>
        </VStack>

        <Divider  orientation="horizontal" />

        <VStack w="85%">
          <HStack
            flexDirection={["column", "column", "row", "row","row"]}
            w="100%"
            justify="space-around"
          >
            <HStack
              m="30px"
              justify="flex-start"
              w="320px"
              h="125px"
            >
              <Avatar
                name="Dan"
                src={abel}
                size="xl"
                border={
                  colorMode === "dark" ? "1px solid white" : "1px solid black"
                }
              />
              <VStack >
              <Text fontSize="24px" >Abel Moreno</Text>
              <HStack>
                <Link href="https://github.com/Abelmoreno97" target="_blank">
                  <Image src={github} alt="github" w="10" />
                </Link>

                <Link
                  href="https://www.linkedin.com/in/abelmoreno97/"
                  target="_blank"
                >
                  <Image src={linkedin} alt="linkedin" w="10" />
                </Link>
              </HStack>
              </VStack>
            </HStack>

            <HStack
              m="30px"
              justify="flex-start"
              w="320px"
              h="125px"
            >
              <Avatar
                name="Dan"
                src={bruno}
                size="xl"
                border={
                  colorMode === "dark" ? "1px solid white" : "1px solid black"
                }
              />
              <VStack>
              <Text fontSize="24px">Bruno Buglioni</Text>
              <HStack>
                <Link href="https://github.com/brunob43" target="_blank">
                  <Image src={github} alt="github" w="10" />
                </Link>

                <Link
                  href="https://www.linkedin.com/in/bruno-buglioni-b0652a263/"
                  target="_blank"
                >
                  <Image src={linkedin} alt="linkedin" w="10" />
                </Link>
              </HStack>
              </VStack>
            </HStack>
          </HStack>

          <HStack
            flexDirection={["column", "column", "row", "row","row"]}
            w="100%"
            justify="space-around"
          >
            <HStack
              m="30px"
              justify="flex-start"
              w="320px"
              h="125px"
            >
              <Avatar
                name="Dan"
                src={franco}
                size="xl"
                border={
                  colorMode === "dark" ? "1px solid white" : "1px solid black"
                }
              />
              <VStack>
              <Text fontSize="24px">Franco Frias</Text>
              <HStack>
                <Link href="https://github.com/FrancoFrias23" target="_blank">
                  <Image src={github} alt="github" w="10" />
                </Link>

                <Link
                  href="https://www.linkedin.com/in/franco-n-fr%C3%ADas-8a2631216/"
                  target="_blank"
                >
                  <Image src={linkedin} alt="linkedin" w="10" />
                </Link>
              </HStack>
              </VStack>
            </HStack>

            <HStack
              m="30px"
              justify="flex-start"
              w="320px"
              h="125px"
            >
              <Avatar
                name="Dan"
                src={nicole}
                size="xl"
                border={
                  colorMode === "dark" ? "1px solid white" : "1px solid black"
                }
              />
              <VStack>
              <Text fontSize="24px">Florencia Braida</Text>
              <HStack>
                <Link href="https://github.com/NicoleA413" target="_blank">
                  <Image src={github} alt="github" w="10" />
                </Link>

                <Link
                  href="https://www.linkedin.com/in/nicolea4/"
                  target="_blank"
                >
                  <Image src={linkedin} alt="linkedin" w="10" />
                </Link>
              </HStack>
              </VStack>
            </HStack>
          </HStack>

          <HStack
            flexDirection={["column", "column", "row", "row","row"]}
            w="100%"
            justify="space-around"
          >
            <HStack
              m="30px"
              justify="flex-start"
              w="320px"
              h="125px"
              >
              <Avatar
                name="Dan"
                src={manu}
                size="xl"
                border={
                  colorMode === "dark" ? "1px solid white" : "1px solid black"
                }
              />
              <VStack>
              <Text fontSize="24px">Manuel Albarracin</Text>
              <HStack>
                <Link href="https://github.com/Roxcon1" target="_blank">
                  <Image src={github} alt="github" w="10" />
                </Link>

                <Link
                  href="https://www.linkedin.com/in/manuel-albarracin-b16437268/"
                  target="_blank"
                >
                  <Image src={linkedin} alt="linkedin" w="10" />
                </Link>
              </HStack>
              </VStack>
            </HStack>

            <HStack
              m="30px"
              justify="flex-start"
              w="320px"
              h="125px"
            >
              <Avatar
                name="Dan"
                src={belen}
                size="xl"
                border={
                  colorMode === "dark" ? "1px solid white" : "1px solid black"
                }
              />
              <VStack>
              <Text fontSize="24px">Belén Echazú</Text>
              <HStack>
                <Link href="https://github.com/BelenEchazu" target="_blank">
                  <Image src={github} alt="github" w="10" />
                </Link>

                <Link
                  href="https://www.linkedin.com/in/mar%C3%ADabel%C3%A9nechaz%C3%BAhiga/"
                  target="_blank"
                >
                  <Image src={linkedin} alt="linkedin" w="10" />
                </Link>
              </HStack>
              </VStack>
            </HStack>
          </HStack>

          <HStack
            flexDirection={["column", "column", "row", "row","row"]}
            w="100%"
            justify="space-around"
          >
            <HStack
              m="30px"
              justify="flex-start"
              w="320px"
              h="125px"
            >
              <Avatar
                name="Dan"
                src={larry}
                size="xl"
                border={
                  colorMode === "dark" ? "1px solid white" : "1px solid black"
                }
              />
              <VStack>
              <Text fontSize="24px">Larry Guarenas</Text>
              <HStack>
                <Link href="https://github.com/Larryjose" target="_blank">
                  <Image src={github} alt="github" w="10" />
                </Link>

                <Link
                  href="https://www.linkedin.com/in/larry-jos%C3%A9-guarenas-arraez-100a5a256/"
                  target="_blank"
                >
                  <Image src={linkedin} alt="linkedin" w="10" />
                </Link>
              </HStack>
              </VStack>
            </HStack>

            <HStack
              m="30px"
              justify="flex-start"
              w="320px"
              h="125px"
            >
              <Avatar
                name="Dan"
                src={pablo}
                size="xl"
                border={
                  colorMode === "dark" ? "1px solid white" : "1px solid black"
                }
              />
              <VStack>
              <Text fontSize="24px">Pablo Boria</Text>
              <HStack>
                <Link href="https://github.com/pabloboria" target="_blank">
                  <Image src={github} alt="github" w="10" />
                </Link>

                <Link href="https://www.linkedin.com/in/pablo-boria-1a635b268/" target="_blank">
                  <Image src={linkedin} alt="linkedin" w="10" />
                </Link>
              </HStack>
              </VStack>
            </HStack>
          </HStack>
        </VStack>

 

        <HStack justifyContent="center">
          <NavLink to="/contact">
            <Button
              margin="40px"
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
      </VStack>
    </Box>
  );
};
export default About;