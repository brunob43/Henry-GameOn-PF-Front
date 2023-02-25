import { Image, VStack } from "@chakra-ui/react";
import LoginButton from "./Login/Login";
import LogoutButton from "./Logout/Logout";
import Profile from "./Profile/Profile";
import foto from "../assets/imagen/Metaverso.png"

const LoginView = () => {
  return (
    <VStack  >
        <VStack mt={["350px", "200px", "150px", "75px", "75px"]}>
        <Image pos="fixed" zIndex="7" src={foto} w="100%" h="100%"></Image>
        <VStack zIndex="8" justifyContent="center" alignItems="center">
        <LoginButton />
        <LogoutButton />
        <Profile />
        </VStack>
        </VStack>
    </VStack>
  );
};

export default LoginView;
