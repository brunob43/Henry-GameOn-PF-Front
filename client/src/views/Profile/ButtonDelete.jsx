import React from "react";
import { Button, AlertDialog, AlertDialogOverlay, AlertDialogHeader, AlertDialogBody, 
AlertDialogFooter, AlertDialogContent } from "@chakra-ui/react";
import { useRef } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../redux/actions";
import { useHistory } from "react-router-dom";



const ButtonDelete=()=>{
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.profile);
    const history = useHistory();

   const deleteHandler = ()=>{
    dispatch(deleteUser(profile.internal_id))
    history.push("/")
}    

const { isOpen, onOpen, onClose } = useDisclosure()
const cancelRef = useRef()



  return (
    <>
      <Button colorScheme='red' onClick={onOpen}>
        Delete Profile
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Delete Profile
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={deleteHandler} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}

export default ButtonDelete
