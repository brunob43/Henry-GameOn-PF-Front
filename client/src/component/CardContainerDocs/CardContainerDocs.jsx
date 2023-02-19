import CardDocs from "../CardDocs/CardDocs";
import style from "./CardContainerDocs.module.css"


const CardContainerDocs = (game) => {
    console.log(game)

    return(
        <div className={style.container}>
            {game.map((g) => {
                return <CardDocs
                    image = {g.docs_image} 
                    name = {g.docs_name}
                    topic = {g.docs_topic}
                />
            })}
        </div>
    );
};
export default CardContainerDocs;