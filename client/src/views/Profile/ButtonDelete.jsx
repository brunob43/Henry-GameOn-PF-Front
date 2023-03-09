import React from "react";
import {
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogContent,
  useColorMode,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, resetProfile } from "../../redux/actions";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const ButtonDelete = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const history = useHistory();
  const { logout } = useAuth0();
  const { colorMode } = useColorMode();

  const deleteHandler = () => {
    dispatch(deleteUser(profile.internal_id));
    dispatch(resetProfile());
    logout({ logoutParams: { returnTo: window.location.origin } });
    history.push("/");
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  return (
    <>
      <Button
        borderColor={colorMode === "dark" ? "yellow" : "black"}
        _hover={
          colorMode === "dark"
            ? { color: "black", bg: "yellow" }
            : { bg: "black", color: "yellow" }
        }
        bg={colorMode === "dark" ? "black" : "yellow"}
        color={colorMode === "dark" ? "white" : "black"}
        onClick={onOpen}
      >
        Delete Profile
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Profile
            </AlertDialogHeader>

            <AlertDialogBody>
              ¿Seguro que quieres eliminar tu perfil?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={deleteHandler} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default ButtonDelete;
