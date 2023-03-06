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
<<<<<<< HEAD
  useColorMode,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import chat from "../../styles/images/chat.jpg";
=======
  Spinner,
  VStack,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import icon from "../../styles/images/iconopenai.png";
>>>>>>> a7277af3e29cc8826583d2f978c9fbee1f1462c2

export default function ChatBox() {
  const [animalInput, setAnimalInput] = useState("");
  const [result, setResult] = useState();
  const [engResult, setEngResult] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
<<<<<<< HEAD
  const { colorMode } = useColorMode();
=======
  const [loading, setLoading] = useState(false);
>>>>>>> a7277af3e29cc8826583d2f978c9fbee1f1462c2

  async function onSubmit(event) {
    setLoading(true);
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
          setLoading(false);
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
<<<<<<< HEAD
          zIndex="30"
          position="fixed"
          right="20px"
          bottom="20px"
=======
          zIndex="10"
          position="fixed"
          right="15px"
          bottom="15px"
>>>>>>> a7277af3e29cc8826583d2f978c9fbee1f1462c2
          ref={btnRef}
          colorScheme="teal"
          onClick={onOpen}
        >
<<<<<<< HEAD
          <Image mr="3px" w="30px" h="30px" src={chat}></Image>You need help?
=======
          <Image mr="3px" w="20px" h="20px" src={icon}></Image>ChatGPT
>>>>>>> a7277af3e29cc8826583d2f978c9fbee1f1462c2
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

<<<<<<< HEAD
            <DrawerBody >
              <form onSubmit={onSubmit}>
                <Input
                  color="black"
                  bg="white"
=======
            <DrawerBody>
              <form onSubmit={onSubmit}>
                <Input
>>>>>>> a7277af3e29cc8826583d2f978c9fbee1f1462c2
                  type="text"
                  name="animal"
                  placeholder="Enter an question"
                  value={animalInput}
                  onChange={(e) => setAnimalInput(e.target.value)}
                />
                <Input
<<<<<<< HEAD
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
=======
                  padding="5px"
                  bg="#10a37f"
                  mt="25px"
                  type="submit"
                  value="SEND / ENVIAR"
                />
              </form>
              {loading ? (
                <VStack aling="center">
                  <Spinner
                    mt="20px"
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="xl"
                  />{" "}
                </VStack>
              ) : (
                <Tabs mt="10px">
                  <TabList justifyContent="center">
                    <Tab>ESPAÑOL</Tab>
                    <Tab>ENGLISH</Tab>
                  </TabList>

                  <TabPanels>
                    <TabPanel>
                      <p>{result}</p>
                    </TabPanel>
                    <TabPanel>
                      <p>{engResult}</p>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              )}
>>>>>>> a7277af3e29cc8826583d2f978c9fbee1f1462c2
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
