import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { countViewsGames} from "../../redux/actions";
import {VStack, Box, HStack, useColorMode} from '@chakra-ui/react'
import gamesArray from "../../games/gamesIndex";
import style from "./GameDetail.module.css";
import bglight from "../../styles/images/fondogameblanco.jpg";
import bgdark from "../../styles/images/fondogames.jpg";


const GameDetail = () =>{
    const { colorMode } = useColorMode();
    const { id } = useParams();
    const dispatch = useDispatch();
    // const profile = useSelector((state)=>state.profile)
    // const likedGames = useSelector((state)=>state.gamesProfile)
    // const gameDetail = useSelector((state) => state.gameDetail);
    useEffect(()=>{
        // dispatch(getDetailFromState(id));
        countViewsGames(id)
    }, [dispatch, id])
    // const likeHandler=()=>{
    //     dispatch(addLikeGame(id,profile.internal_id))
    // }
    // const dislikeHandler=()=>{
    //     dispatch(removeLikeGame(id,profile.internal_id))
    // }
    // console.log(profile, likedGames,"perfil y gustados")
    const game = gamesArray.filter((game) => game.id.toString() === id)
    // console.log(game)
    // console.log(game[0].name,"gamename")
    // console.log(likedGames, "gameliked")

    return(
        
        <VStack bgImage={colorMode === "dark" ? bgdark : bglight} className={style.main}>


        <Box className={style.title} mt= {["400px", "250px", "200px", "120px", "120px"]}>
            {game[0].name} 
        </Box>
        {/* {likedGames.includes(game[0].name)?<Button onClick={likeHandler}>Dar Like</Button>:<Button onClick={dislikeHandler}>Quitar Like</Button>} */}

        
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