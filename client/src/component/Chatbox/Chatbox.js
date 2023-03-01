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
  Image
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import icon from "../../styles/images/iconopenai.png"

export default function ChatBox() {
  const [animalInput, setAnimalInput] = useState("");
  const [result, setResult] = useState();
  const [engResult, setEngResult] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

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
        <Button zIndex="10" position="fixed" right="15px" bottom="15px" ref={btnRef} colorScheme="teal" onClick={onOpen}>
         <Image mr="3px" w="20px" h="20px" src={icon} ></Image>ChatGPT
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>↓↓haz tu pregunta↓↓</DrawerHeader>

            <DrawerBody>
            <form onSubmit={onSubmit}>
          <Input
            type="text"
            name="animal"
            placeholder="Enter an question"
            value={animalInput}
            onChange={(e) => setAnimalInput(e.target.value)}
          />
          <Input padding="5px" bg="#10a37f" mt="25px" type="submit" value="SEND / ENVIAR" />
        </form>
        <div className={styles.result}>espere 20 segundos que la respuesta tarda y no me sale poner el boton de loading... gracias</div>
        <div className={styles.result}><h1>ANSWER IN ENGLISH:</h1>{engResult}</div>
        
        <div className={styles.result}><h1>RESPUESTA EN ESPAÑOL:</h1>{result}</div>
        
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
  );
}
