import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { countViewsGames,addLikeGame,removeLikeGame } from "../../redux/actions";
import {VStack, Box, HStack, useColorMode, Button} from '@chakra-ui/react'
import gamesArray from "../../games/gamesIndex";
import style from "./GameDetail.module.css";
import bglight from "../../styles/images/fondogameblanco.jpg";
import bgdark from "../../styles/images/fondogames.jpg";


const GameDetail = () =>{
    const { colorMode } = useColorMode();
    const { id } = useParams();
    const dispatch = useDispatch();
    const profile = useSelector((state)=>state.profile)
    // const gameDetail = useSelector((state) => state.gameDetail);
    let likedGames=[];
    useEffect(()=>{
        // dispatch(getDetailFromState(id));
        countViewsGames(id)
    }, [dispatch, id])
    useEffect(()=>{
        likedGames = profile.Games.map((g)=>g.game_id)
    },[profile])
    const likeHandler=()=>{
        dispatch(addLikeGame(id,profile.internal_id))
    }
    const dislikeHandler=()=>{
        dispatch(removeLikeGame(id,profile.internal_id))
    }
    console.log(profile, likedGames,"perfil y gustados")
    const game = gamesArray.filter((game) => game.id.toString() === id)

    return(
        
        <VStack bgImage={colorMode === "dark" ? bgdark : bglight} className={style.main}>


        <Box className={style.title} mt= {["400px", "250px", "200px", "120px", "120px"]}>
            {game[0].name} 
        </Box>

        {profile&likedGames.includes(game.id)&<Button onClick={dislikeHandler}>Quitar Like</Button>}
        
        {profile&!likedGames.includes(game.id)&<Button onClick={likeHandler}>Dar Like</Button>}
        
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