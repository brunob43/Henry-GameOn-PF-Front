import CardGame from "../CardGame/CardGame";
// import style from "./CardContainerGame.module.css"
import {HStack} from "@chakra-ui/react"


const CardContainerGame = (game) => {
    console.log(game)

    return(
        <HStack mt="60px" mb="60px" w="100%" justify="space-around">
            {game.map((g) => {
                return <CardGame
                    image = {g.game_image} 
                    name = {g.game_name}
                    topic = {g.game_topic}
                    difficulty = {g.game_difficulty}
                    key = {g.game_id}
                    id = {g.game_id}
                />
            })}
        </HStack>
    );
};
export default CardContainerGame;