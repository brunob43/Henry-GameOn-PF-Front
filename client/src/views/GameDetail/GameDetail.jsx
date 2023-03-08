import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileCreation } from "../../component/Utils/utils";
import { useParams } from "react-router-dom";
import {
  countViewsGames,
  addLikeGame,
  removeLikeGame,
  sendProfile,
  getUserDetail
} from "../../redux/actions";
import { VStack, Box, HStack, useColorMode, Button } from "@chakra-ui/react";
import gamesArray from "../../games/gamesIndex";
import style from "./GameDetail.module.css";
import bglight from "../../styles/images/fondogameblanco.jpg";
import bgdark from "../../styles/images/fondogames.jpg";
import { useAuth0 } from "@auth0/auth0-react";
import { PageNotFound } from "../../component/PageNotFound/PageNotFound";

const GameDetail = () => {
  const { isAuthenticated } = useAuth0();
  const { colorMode } = useColorMode();
  const { id } = useParams();
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const user = useSelector((state)=>state.userDetail)
  
  useEffect(() => {
    // dispatch(getDetailFromState(id));
    getUserDetail(profile.internal_id)
    countViewsGames(id);
  }, [dispatch, id]);

  const likeHandler = () => {
    console.log("1 like handler doc" )
    dispatch(addLikeGame(id, profile.internal_id));
    console.log("2 like handler doc" )
   
  };
  const dislikeHandler = () => {
    dispatch(removeLikeGame(id, profile.internal_id));
  
  };
  const game = gamesArray.filter((game) => game.id.toString() === id);
  console.log(game[0].id, "gameId");

  return (
    isAuthenticated ? (
    <VStack
      bgImage={colorMode === "dark" ? bgdark : bglight}
      className={style.main}
    >
      <Box
        textAlign="center"
        bgColor={colorMode === "dark" ? "blackAlpha.800" : "whiteAlpha.800"}
        color={colorMode === "dark" ? "yellow" : "black"}
        className={style.title}
        mt={["200px", "80px", "120px", "120px", "120px"]}
      >
        {game[0].name}
      </Box>
      {Object.keys(user).length && (
        <Box>
          {!user.Games.map((g)=>g.game_id).includes(game[0].id) ? (
            <Button bg="yellow" border="1px solid black" color="black" _hover={{bg:"#c4be00"}} onClick={likeHandler}> Like👍🏼</Button>
          ) : (
            <Button bg="yellow" border="1px solid black" color="black" _hover={{bg:"#c4be00"}} onClick={dislikeHandler}>Quitar Like👎🏼</Button>
          )}
        </Box>
      )}

      <HStack>{game.length === 1 ? game[0].game : console.log(id)}</HStack>
    </VStack>
  ) : (
    <PageNotFound />
  )
  );
};


export default GameDetail;
