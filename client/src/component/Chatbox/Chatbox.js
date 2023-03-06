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
  Spinner,
  VStack,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  useColorMode,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import icon from "../../styles/images/iconopenai.png";

export default function ChatBox() {
  const [animalInput, setAnimalInput] = useState("");
  const [result, setResult] = useState();
  const [engResult, setEngResult] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const { colorMode } = useColorMode();
  const [loading, setLoading] = useState(false);

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
          zIndex="10"
          position="fixed"
          right="15px"
          bottom="15px"
          ref={btnRef}
          colorScheme="teal"
          onClick={onOpen}
        >
          <Image mr="3px" w="20px" h="20px" src={icon}></Image>ChatGPT
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
