import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { countViewsGames, getDetailFromState } from "../../redux/actions";
import {VStack, Box, HStack, useColorMode} from '@chakra-ui/react'
import gamesArray from "../../games/gamesIndex";
import style from "./GameDetail.module.css";
import bglight from "../../styles/images/fondogameblanco.jpg";
import bgdark from "../../styles/images/fondogames.jpg";


const GameDetail = () =>{
    const { colorMode } = useColorMode();
    const { id } = useParams();
    const dispatch = useDispatch();
    console.log(id)
    
    useEffect(()=>{
        dispatch(getDetailFromState(id));
        countViewsGames(id)
    }, [dispatch, id])

    const gameDetail = useSelector((state) => state.gameDetail);
   
    console.log(gamesArray)

    console.log(gameDetail)

    const game = gamesArray.filter((game) => game.id.toString() === id)

    console.log(game)

    return(
        
        <VStack bgImage={colorMode === "dark" ? bgdark : bglight} className={style.main}>


        <Box className={style.title} mt= {["400px", "250px", "200px", "120px", "120px"]}>
            {game[0].name} 
        </Box>

        <HStack >
            {game.length === 1 
            ? game[0].game
            : console.log(id)
            }
        </HStack>


    </VStack>

)
}

export default GameDetail;