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
import { updateGame } from "../../redux/actions";
import { useDispatch } from "react-redux";

export default function EditGame({rowGame,isOpenEditGame}){
    const dispatch=useDispatch()
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [input,setInput]=useState({
        game_name:"",
        game_topic:"",
        game_image:"",
        game_difficulty:"",
    })
      const {game_id}= rowGame
    useEffect(()=>{
      setInput({
        game_name:rowGame.game_name,
        game_topic:rowGame.game_topic,
        game_image:rowGame.game_image,
        game_difficulty:rowGame.game_difficulty,
    })
     if(isOpenEditGame){
        onOpen()
     }
       
    //    }
    },[rowGame])
    const handleChange=(e)=>{
        setInput({
            ...input,
            [e.target.name]: e.target.value,
          });
    }
    const onSubmit=(e)=>{
       e.preventDefault();
       dispatch(updateGame(game_id, input));
       onClose()
    }
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
            <DrawerHeader bgColor="yellow">Detalle de Juego</DrawerHeader>

            <DrawerBody>
            <form onSubmit={onSubmit}>
            <label>Nombre:</label>
              <Input
               bgColor="yellow"
               borderColor="black"
                autoComplete="off"
                type="text"
                value={input.game_name}
                name="game_name"
                required
                onChange={(e) => handleChange(e)}
              />
             <label>Tema:</label>
              <Input
               bgColor="yellow"
               borderColor="black"
                autoComplete="off"
                type="text"
                value={input.game_topic}
                name="game_topic"
                required
                onChange={(e) => handleChange(e)}
              />
               <label>Imagen:</label>
              <Input
               bgColor="yellow"
               borderColor="black"
                autoComplete="off"
                type="text"
                value={input.game_image}
                name="game_image"
                required
                onChange={(e) => handleChange(e)}
              />
              <label>Dificultad: </label>
              <Select name="game_difficulty" onChange={handleChange}>
                   <option value={input.game_difficulty} >{input.game_difficulty}</option>
                   <option value="Easy">Easy</option>
                   <option value="Medium">Medium</option>
                   <option value="Hard">Hard</option>
                   </Select>
               <Button  bgColor="yellow"
                  borderColor="black" type="submit">
                Save
              </Button>
        </form>
        
        
            </DrawerBody>

            <DrawerFooter>
              <Button  bgColor="yellow"
                  borderColor="black" variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    </div>
    )
};

