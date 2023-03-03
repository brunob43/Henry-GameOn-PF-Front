import { NavLink } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuList, Image, Text } from "@chakra-ui/react";
import LogoutButton from "../../views/Auth/Logout/Logout";
import { useAuth0 } from "@auth0/auth0-react";

const PorfileButton = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <Menu>
        <MenuButton>
          <Image
            boxSize="2rem"
            borderRadius="full"
            src={user.picture}
            alt={user.name}
            mr="12px"
          />
        </MenuButton>
        <MenuList>
            <Text p="8px">Hola, {user.name}!</Text>
          <MenuItem minH="48px">
            <NavLink to="/user">
              My Profile
            </NavLink>
          </MenuItem>
          <MenuItem>
            <LogoutButton />
          </MenuItem>
        </MenuList>
      </Menu>
    )
  );
};

export default PorfileButton;
