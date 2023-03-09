import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  VStack,
  useColorMode,
  Box
} from "@chakra-ui/react";
import foto from "../assets/imagen/gracias3.jpg"

const Thanks = () => {
  const { colorMode } = useColorMode();


return (
<VStack bgImage={foto} bgSize="" bgPosition="center" 
      h="1000px">
      <Box
            mt={["180px", "130px", "70px", "70px", "70px"]}
            display="flex"
            pt="70px"
            bgGradient='linear(to-l, yellow, white)'
            bgClip='text'
            fontSize={['4xl','5xl','6xl','6xl','6xl']}
            fontWeight='extrabold'
            textAlign="center"
  
          >
              GRACIAS POR TU DONACIóN 
              
              </Box>
              
         <Link to="/">
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
            Back To Home
            </Button>
        </Link>
        </VStack>
)
}

export default Thanks;