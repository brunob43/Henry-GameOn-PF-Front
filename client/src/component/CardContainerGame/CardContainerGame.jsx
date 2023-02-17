import CardGame from "../CardGame/CardGame";
import style from "./CardContainerGame.module.css"


const CardContainerGame = (game) => {

    return(
        <div className={style.container}>
            {game.map((g) => {
                return <CardGame
                    image = {g.image} 
                    name = {g.name}
                    topic = {g.topic}
                    dificulty = {g.dificulty}
                    key = {g.id}
                    id = {g.id}
                />
            })}
        </div>
    );
};
export default CardContainerGame;