import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import style from "../Login/Login.module.css"
import { Button, HStack, Text, useColorMode } from "@chakra-ui/react";

const LoginButton = () => {
  const { colorMode } = useColorMode();
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <HStack>
        <Text
          fontWeight="bold"
          _hover={{ cursor: "pointer" }}
          onClick={() => loginWithRedirect()}
        >
          LOG IN
        </Text>
        ;
      </HStack>
    )
  );
};

export default LoginButton;
