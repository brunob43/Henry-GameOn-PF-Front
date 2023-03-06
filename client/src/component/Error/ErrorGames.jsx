import { VStack, useColorMode, Text } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import style from "./Error.module.css"
const Error=()=>{
    //const reload=()=>{
        //window.location.reload()
   // }
    const error=useSelector(state=>state.errorGames)
    const { colorMode } = useColorMode();
    return(
        <VStack color={colorMode === "dark" ? "while" : "black"}>
        <div className={style.errorBackground}>
        <Text color={colorMode === "dark" ? "while" : "black"} className={style.titleError}>Oops! sorry, an error occurred</Text>
        <Text color={colorMode === "dark" ? "while" : "black"} className={style.error}>{error}</Text>
        <br />
        <Text color={colorMode === "dark" ? "while" : "black"} className={style.textError}>Go back please</Text>
        </div>
        </VStack>

    )
}
export default Error;