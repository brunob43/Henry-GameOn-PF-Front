import CardGame from "../CardGame/CardGame";

const CardContainerGame = (game) => {

    return(
        <div>
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