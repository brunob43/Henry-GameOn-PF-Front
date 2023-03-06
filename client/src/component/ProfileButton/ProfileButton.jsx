import { NavLink } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuList, Image, Text, HStack, AvatarGroup ,  Avatar,} from "@chakra-ui/react";
import LogoutButton from "../../views/Auth/Logout/Logout";
import { useAuth0 } from "@auth0/auth0-react";
import {ExternalLinkIcon } from '@chakra-ui/icons'

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
            border="1px"
            src={user.picture}
            alt={user.name}
            mr="12px"
          />
        </MenuButton>
        <MenuList>
            <Text p="8px">Hola, {user.name}!</Text>
          <MenuItem minH="48px">
          <HStack>
           <AvatarGroup spacing='1rem'>
           <Avatar bg='gray' size="xs" />
           </AvatarGroup>
            <NavLink to="/user">
              My Profile
            </NavLink>
            </HStack>
          </MenuItem>
          <MenuItem>
          <HStack>
              <ExternalLinkIcon/>
            <LogoutButton />
            </HStack>
          </MenuItem>
        </MenuList>
      </Menu>
    )
  );
};

export default PorfileButton;
