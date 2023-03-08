import { Link } from "react-router-dom";
// import style from "../PageNotFound/PageNotFound.module.css";
import { Box, Button, Text, VStack, useColorMode } from "@chakra-ui/react";

const Thanks = () => {


return (
<div>
<h4> Gracias</h4>
<h4> Gracias</h4>
<h4> Gracias</h4>
<h4> Gracias</h4>
<h4> Gracias</h4>
<h4> Gracias</h4>
<h4> Gracias</h4>
<h4> Gracias</h4>
<h4> Gracias</h4>
<h4> Gracias</h4>
<h4> Gracias</h4>
<h4> Gracias</h4>
<Link to="/">
          <Button
            size="md"
            height="48px"
            width="200px"
            border="2px"
            borderColor="yellow"
            /*_hover={
              colorMode === "dark"
                ? { color: "black", bg: "white" }
                : { bg: "black", color: "white" }
            }
            bg={colorMode === "dark" ? "black" : "white"}*/
          >
            Back To Home
            </Button>
        </Link>
</div>
)
}

export default Thanks;