import { useState, useEffect } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  Select
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { updateUser } from "../../redux/actions";
import { useDispatch } from "react-redux";

export default function EditUser({rowUser,isOpenEditUser}){
    const dispatch=useDispatch()
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [input,setInput]=useState({
        user_name:"",
        user_email:"",
        user_image:"",
        user_type:"",
        user_state:"",
    })
      const {internal_id}= rowUser
    useEffect(()=>{
      setInput({
        user_name:rowUser.user_name,
        user_email:rowUser.user_email,
        user_image:rowUser.user_image,
        user_type:rowUser.user_type,
        user_state:rowUser.user_state,
    })
     if(isOpenEditUser){
        onOpen()
     }
       
    //    }
    },[rowUser])
    const handleChange=(e)=>{
        setInput({
            ...input,
            [e.target.name]: e.target.value,
          });
    }
    const onSubmit=(e)=>{
       e.preventDefault();
       dispatch(updateUser(internal_id, input));
       onClose()
    }
    console.log(input, "input de edit")
    console.log(rowUser,isOpenEditUser)
    return(
        <div>

      <>
      {/* <Button zIndex="10" position="fixed" right="15px" bottom="50px" colorScheme="teal" onClick={onOpen}>
         userEdit
        </Button> */}
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
        //   finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Detalle de Usuario</DrawerHeader>

            <DrawerBody>
            <form onSubmit={onSubmit}>
            <label>Nombre del usuario:</label>
              <Input
                autoComplete="off"
                type="text"
                value={input.user_name}
                name="user_name"
                required
                onChange={(e) => handleChange(e)}
              />
             <label>E-mail</label>
              <Input
                autoComplete="off"
                type="email"
                value={input.user_email}
                name="user_email"
                required
                onChange={(e) => handleChange(e)}
              />
               <label>Imagen:</label>
              <Input
                autoComplete="off"
                type="text"
                value={input.user_image}
                name="user_image"
                required
                onChange={(e) => handleChange(e)}
              />
              <label>Type: </label>
              <Select name="user_type" onChange={handleChange}>
                   <option value={input.user_type} >{input.user_type}</option>
                   <option value="user">User</option>
                   <option value="admin">Admin</option>
                   </Select>

              <label>State: </label>
              <Select name="user_state" onChange={handleChange}>
              <option value={input.user_state} >{input.user_state}</option>
                   <option value="active">Active</option>
                   <option value="warned">Warned</option>
                   <option value="banned">Banned</option>
                   </Select>
               <Button type="submit">
                Save
              </Button>
        </form>
        
        
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    </div>
    )
};
