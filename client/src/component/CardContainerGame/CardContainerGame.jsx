import CardGame from "../CardGame/CardGame";
import style from "./CardContainerGame.module.css"


const CardContainerGame = (game) => {
    console.log(game)

    return(
        <div className={style.container}>
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
        </div>
    );
};
export default CardContainerGame;