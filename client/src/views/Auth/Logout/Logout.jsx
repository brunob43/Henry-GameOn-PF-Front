import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import style from "../Logout/Logout.module.css";
import { Button, HStack, useColorMode, Text } from "@chakra-ui/react";
// import meta from "../../assets/imagen/Metaverso.png"

const LogoutButton = () => {
  const { colorMode } = useColorMode();
  const { logout, isAuthenticated } = useAuth0();

  return (
    <HStack>
      <Text
        fontWeight="bold"
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        LOG OUT
      </Text>
    </HStack>
  );
};

export default LogoutButton;
