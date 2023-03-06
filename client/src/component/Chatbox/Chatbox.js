import { useState, useRef } from "react";
import styles from "./index.module.css";
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
  Image,
  useColorMode,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import chat from "../../styles/images/chat.jpg";

export default function ChatBox() {
  const [animalInput, setAnimalInput] = useState("");
  const [result, setResult] = useState();
  const [engResult, setEngResult] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const { colorMode } = useColorMode();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://back-henrygame.up.railway.app/chatbot/generate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ animal: animalInput }),
        }
      );
      console.log(animalInput);
      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }

      const traduccion = data.result;
      setAnimalInput("");
      console.log(traduccion, "traduccion al ingles");
      try {
        const response = await fetch(
          "https://back-henrygame.up.railway.app/chatbot/generate2",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ animal: traduccion }),
          }
        );

        const data = await response.json();
        if (response.status !== 200) {
          throw (
            data.error ||
            new Error(`Request failed with status ${response.status}`)
          );
        }

        const aTraducir = data.result;
        setEngResult(aTraducir);
        console.log(aTraducir, "respuesta en ingles");
        try {
          const response = await fetch(
            "https://back-henrygame.up.railway.app/chatbot/generate3",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ animal: aTraducir }),
            }
          );

          const data = await response.json();
          if (response.status !== 200) {
            throw (
              data.error ||
              new Error(`Request failed with status ${response.status}`)
            );
          }

          setResult(data.result);
          console.log(data.result, "respuesta en español");
        } catch (error) {
          // Consider implementing your own error handling logic here
          console.error(error);
          alert(error.message);
        }
      } catch (error) {
        // Consider implementing your own error handling logic here
        console.error(error);
        alert(error.message);
      }
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div>
      <>
        <Button
          zIndex="30"
          position="fixed"
          right="20px"
          bottom="20px"
          ref={btnRef}
          colorScheme="teal"
          onClick={onOpen}
        >
          <Image mr="3px" w="30px" h="30px" src={chat}></Image>You need help?
        </Button>

        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent bg="black">
            <DrawerCloseButton />
            <DrawerHeader color="yellow">↓↓¿Alguna pregunta?↓↓</DrawerHeader>

            <DrawerBody >
              <form onSubmit={onSubmit}>
                <Input
                  color="black"
                  bg="white"
                  type="text"
                  name="animal"
                  placeholder="Enter an question"
                  value={animalInput}
                  onChange={(e) => setAnimalInput(e.target.value)}
                />
                <Input
                cursor='pointer'
                  marginLeft='10'
                  size="md"
                  height="48px"
                  width="200px"
                  border="2px"
                  borderColor={colorMode === "dark" ? "yellow" : "black"}
                  _hover={
                    colorMode === "dark"
                      ? { color: "black", bg: "yellow" }
                      : { bg: "black", color: "yellow" }
                  }
                  bg={colorMode === "dark" ? "black" : "yellow"}
                  value="SEND / ENVIAR"
                />
              </form>

              <div className={styles.result}>
                {/* <Spinner
                  thickness="4px"
                  speed="0.90s"
                  emptyColor="black"
                  color="yellow"
                  size="xl"
                /> */}
              </div>

              <div className={styles.result}>
                <h1>RESPUESTA EN ESPAÑOL:</h1>
                {result}
              </div>

              <div className={styles.result}>
                <h1>ANSWER IN ENGLISH:</h1>
                {engResult}
              </div>
            </DrawerBody>

            <DrawerFooter>
              <Button
                variant="outline"
                mr={3}
                onClick={onClose}
                bgColor="yellow"
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
