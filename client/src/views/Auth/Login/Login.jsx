import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import style from "../Login/Login.module.css"
import { Button, HStack, useColorMode, } from "@chakra-ui/react";

const LoginButton = () => {
  const { colorMode } = useColorMode();
  const { loginWithRedirect } = useAuth0();

  return (
    <HStack>
      <Button size="md"
            height="48px"
            width="200px"
            border="2px"
            borderColor="yellow"
            _hover={
              colorMode === "dark"
                ? { color: "black", bg: "white" }
                : { bg: "black", color: "white" }
            }
            bg={colorMode === "dark" ? "black" : "white"} onClick={() => loginWithRedirect()}>LOG IN</Button>;
    </HStack>
  );
};

export default LoginButton;
