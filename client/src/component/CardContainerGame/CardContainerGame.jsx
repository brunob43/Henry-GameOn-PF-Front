import CardGame from "../CardGame/CardGame";

const CardContainerGame = (game) => {

    return(
        <div>
            {game.map((g) => {
                return <CardGame 
                    name = {g.name}
                    image = {g.image}
                    key = {g.id}
                    id = {g.id}
                />
            })}
        </div>
    );
};
export default CardContainerGame;