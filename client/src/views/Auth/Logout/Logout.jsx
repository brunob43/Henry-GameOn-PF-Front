import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import style from "../Logout/Logout.module.css";
import { Button, HStack, useColorMode, } from "@chakra-ui/react";
// import meta from "../../assets/imagen/Metaverso.png"

const LogoutButton = () => {

  const { colorMode } = useColorMode();
  const { logout, isAuthenticated  } = useAuth0();

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
            bg={colorMode === "dark" ? "black" : "white"}
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
       LOG OUT
        </Button>
      </HStack>
    )
  );
};

export default LogoutButton;
