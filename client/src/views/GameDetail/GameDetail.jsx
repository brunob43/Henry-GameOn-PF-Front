import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  countViewsGames,
  addLikeGame,
  removeLikeGame,
  sendProfile,
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
  // const likedGames = useSelector((state) => state.gamesProfile);
  // const gameDetail = useSelector((state) => state.gameDetail);
  useEffect(() => {
    // dispatch(getDetailFromState(id));
    countViewsGames(id);
  }, [dispatch, id]);

  const likeHandler = () => {
    let user_email= profile.user_email
    dispatch(addLikeGame(id, profile.internal_id,aux));
    dispatch(sendProfile({user_email}));
  
  };
  const dislikeHandler = () => {
    let user_email= profile.user_email
    dispatch(removeLikeGame(id, profile.internal_id));
    dispatch(sendProfile({user_email}));
  };
  console.log(profile, "perfil");
  const game = gamesArray.filter((game) => game.id.toString() === id);
  console.log(game);
  console.log(game[0].id, "gameId");

  return (
    isAuthenticated ? (
    <VStack
      bgImage={colorMode === "dark" ? bgdark : bglight}
      className={style.main}
    >
      <Box
        className={style.title}
        mt={["400px", "250px", "200px", "120px", "120px"]}
      >
        {game[0].name}
      </Box>
      {Object.keys(profile).length && (
        <Box>
          {!profile.Games.map((g)=>g.game_id).includes(game[0].id) ? (
            <Button onClick={likeHandler}> Like👍🏼</Button>
          ) : (
            <Button onClick={dislikeHandler}>Quitar Like👎🏼</Button>
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
