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
  Select,
  useColorMode,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { postGame } from "../../redux/actions";
import { useDispatch } from "react-redux";

export default function PostGame({ isOpenPostGame }) {
  const { colorMode } = useColorMode();
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [input, setInput] = useState({
    game_name: "",
    game_topic: "",
    game_image: "",
    game_difficulty: "Easy",
  });
  useEffect(() => {
    if (isOpenPostGame) {
      onOpen();
    }
  }, [isOpenPostGame]);
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(postGame(input));
    setInput({
      game_name: "",
      game_topic: "",
      game_image: "",
      game_difficulty: "",
    });
    onClose();
  };
  return (
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
            <DrawerHeader
              borderColor={colorMode === "dark" ? "yellow" : "black"}
              _hover={
                colorMode === "dark"
                  ? { color: "black", bg: "yellow" }
                  : { bg: "black", color: "yellow" }
              }
              bg={colorMode === "dark" ? "black" : "yellow"}
              color={colorMode === "dark" ? "white" : "black"}
            >
              Nuevo juego
            </DrawerHeader>

            <DrawerBody>
              <form onSubmit={onSubmit}>
                <label>Nombre:</label>
                <Input
                  borderColor={colorMode === "dark" ? "yellow" : "black"}
                  _hover={
                    colorMode === "dark"
                      ? { color: "black", bg: "yellow" }
                      : { bg: "black", color: "yellow" }
                  }
                  bg={colorMode === "dark" ? "black" : "yellow"}
                  color={colorMode === "dark" ? "white" : "black"}
                  autoComplete="off"
                  type="text"
                  value={input.game_name}
                  name="game_name"
                  required
                  onChange={(e) => handleChange(e)}
                />
                <label>Tema:</label>
                <Input
                  borderColor={colorMode === "dark" ? "yellow" : "black"}
                  _hover={
                    colorMode === "dark"
                      ? { color: "black", bg: "yellow" }
                      : { bg: "black", color: "yellow" }
                  }
                  bg={colorMode === "dark" ? "black" : "yellow"}
                  color={colorMode === "dark" ? "white" : "black"}
                  autoComplete="off"
                  type="text"
                  value={input.game_topic}
                  name="game_topic"
                  required
                  onChange={(e) => handleChange(e)}
                />
                <label>Imagen:</label>
                <Input
                  borderColor={colorMode === "dark" ? "yellow" : "black"}
                  _hover={
                    colorMode === "dark"
                      ? { color: "black", bg: "yellow" }
                      : { bg: "black", color: "yellow" }
                  }
                  bg={colorMode === "dark" ? "black" : "yellow"}
                  color={colorMode === "dark" ? "white" : "black"}
                  autoComplete="off"
                  type="text"
                  value={input.game_image}
                  name="game_image"
                  required
                  onChange={(e) => handleChange(e)}
                />
                <label>Dificultad:</label>
                <Select
                  borderColor={colorMode === "dark" ? "yellow" : "black"}
                  _hover={
                    colorMode === "dark"
                      ? { color: "black", bg: "yellow" }
                      : { bg: "black", color: "yellow" }
                  }
                  bg={colorMode === "dark" ? "black" : "yellow"}
                  color={colorMode === "dark" ? "white" : "black"}
                  defaultValue="Easy"
                  name="game_difficulty"
                  onChange={handleChange}
                >
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </Select>
                <Button
                  borderColor={colorMode === "dark" ? "yellow" : "black"}
                  _hover={
                    colorMode === "dark"
                      ? { color: "black", bg: "yellow" }
                      : { bg: "black", color: "yellow" }
                  }
                  bg={colorMode === "dark" ? "black" : "yellow"}
                  color={colorMode === "dark" ? "white" : "black"}
                  type="submit"
                >
                  Create
                </Button>
              </form>
            </DrawerBody>

            <DrawerFooter>
              <Button
                borderColor={colorMode === "dark" ? "yellow" : "black"}
                _hover={
                  colorMode === "dark"
                    ? { color: "black", bg: "yellow" }
                    : { bg: "black", color: "yellow" }
                }
                bg={colorMode === "dark" ? "black" : "yellow"}
                color={colorMode === "dark" ? "white" : "black"}
                variant="outline"
                mr={3}
                onClick={onClose}
              >
                Cancel
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    </div>
  );
}
