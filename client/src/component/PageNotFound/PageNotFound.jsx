import { Link } from "react-router-dom";
// import style from "../PageNotFound/PageNotFound.module.css";
import { Box, Button, Text, VStack, useColorMode } from "@chakra-ui/react";
import fond from "../../views/assets/imagen/404error.png";
export const PageNotFound = () => {
  const { colorMode } = useColorMode();
  return (
    <Box bgImage={fond} h='800' bgPosition='center' bgRepeat='no-repeat'>
      <VStack  padding="10">
        <Text mt={["350px", "200px", "150px", "70px", "70px"]} fontSize="40">404</Text>
        <Text>PAGE NOT FOUND</Text>
        <Link to="/">
          <Button
            size="md"
            height="48px"
            width="200px"
            border="2px"
            borderColor="yellow"
            _hover={
              colorMode === "dark"
                ? { color: "black", bg: "white" }
                : { bg: "black", color: "white" }
            }
            bg={colorMode === "dark" ? "black" : "white"}
          >
            Back To Home
          </Button>
        </Link>
      </VStack>
    </Box>
  );
};
