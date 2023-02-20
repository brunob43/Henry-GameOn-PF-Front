import CardDocs from "../CardDocs/CardDocs";
import style from "./CardContainerDocs.module.css"
const CardContainerDocs = (doc) => {
    console.log(doc)
    console.log(1)

    return(
        <div className={style.container}>
            {doc.map((d) => {
                return <CardDocs
                    image = {d.doc_image} 
                    name = {d.doc_name}
                    topic = {d.doc_topic}
                    author={d.doc_author}
                    key = {d.doc_id}
                    id = {d.doc_id}
                />
            })}
        </div>
    );
};
export default CardContainerDocs;