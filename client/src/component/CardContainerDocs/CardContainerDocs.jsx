import { HStack } from "@chakra-ui/react";
import CardDocs from "../CardDocs/CardDocs";

const CardContainerDocs = (doc) => {
    console.log(doc)
    console.log(1)

    return(
        <HStack flexDirection={["column","column","column","row","row"]} mt="60px" mb="60px" w="100%" justify="space-around">
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
        </HStack>
    );
};
export default CardContainerDocs;