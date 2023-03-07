import { NavLink } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuList, Image, Text, HStack, AvatarGroup ,  Avatar,} from "@chakra-ui/react";
import LogoutButton from "../../views/Auth/Logout/Logout";
import { useAuth0 } from "@auth0/auth0-react";
import {ExternalLinkIcon } from '@chakra-ui/icons'
import { useSelector } from "react-redux";

const PorfileButton = () => {
  const {isAuthenticated, isLoading } = useAuth0();
  const profile = useSelector((state)=>state.profile)
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <Menu>
        <MenuButton>
          <Image
            boxSize="2.8rem"
            borderRadius="full"
            border="2px"
            src={profile.user_image}
            alt={profile.user_name}
            mr="12px"
          />
        </MenuButton>
        <MenuList>
            <Text p="8px">Hola, {profile.user_name}!</Text>
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
