import React from "react";
import { Link } from "react-router-dom";
import {
  VStack,
  Box
} from "@chakra-ui/react";
import foto from "../assets/imagen/banned.avif"


const Banned
 = () => {
return (
<Link to="/games">
<Link to="/docs">
<Link to="/donation">
    <VStack bgImage={foto} bgSize="cover" bgPosition="center" 
      h="1000px">
      <Box
            mt={["180px", "130px", "70px", "70px", "70px"]}
            display="flex"
            pt="100px"
            bgGradient='linear(to-l, yellow, white)'
            bgClip='text'
            fontSize={['4xl','5xl','6xl','6xl','6xl']}
            fontWeight='extrabold'
            textAlign="center"
  
          >
            💥 Estas Baneado Pibe 💥
              
              </Box>
             
              
           
        </VStack>
        </Link>
        </Link>
        </Link>

)
}

export default Banned;