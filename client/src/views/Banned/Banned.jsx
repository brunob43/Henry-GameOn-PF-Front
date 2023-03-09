import React from "react";
import {
  VStack,
  Box
} from "@chakra-ui/react";
import foto from "../assets/imagen/banned.avif"


const Banned
 = () => {
return (

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
              <Link to="/games"></Link>
              <Link to="/docs"></Link>
              <Link to="/donation"></Link>
        </VStack>

)
}

export default Banned;