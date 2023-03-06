import React from "react";
import { postMessage } from "../../redux/actions";
import { useState } from "react";
import { VStack, useColorMode, Input, Textarea ,Text,FormControl,FormLabel, Button} from "@chakra-ui/react";
import foto from "../assets/imagen/contact.jpg";


export default function ContactUs() {
  const { colorMode } = useColorMode();
  const [input, setInput] = useState({
    message_issue: "",
    message_content: "",
    message_email: "",
  });
  const [error, setError] = useState({});

  const validate = (input) => {
    let error = {};
    if (!input.message_issue) {
      error.issue = "*Obligatory field";
    }
    if (!input.message_email) {
      error.email = "*Obligatory field";
    }
    if (!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(input.message_email)) {
      error.email = "Invalid email";
    }
    if (!input.message_content) {
      error.content = "*Obligatory field";
    }
    return error;
  };

  const handlerInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setError(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    console.log("submit");
    console.log(input);
    e.preventDefault();
    if (Object.keys(error).length === 0 && input.email !== "")
      postMessage(input);
    alert("Su mensaje fue recibido con éxito");
    setInput({
      message_issue: "",
      message_content: "",
      message_email: "",
    });
    window.location.href = "https://henry-pf-front.vercel.app/";
  };

  return (
  <VStack>  
    <VStack  mt={["220px", "50px", "80px", "85px", "85px"]} bgImage={foto} bgSize="cover" bgPosition="center" w="100%" h="880px" >
    <VStack
       mt="90px"
      bgColor={colorMode === "dark" ? "black" : "white"}
      color={colorMode === "dark" ? "white" : "black"}
      borderRadius="15px"
      h="550px"
      border="2px solid black"
    >
         <Text fontSize="20px" p="20px" mt="5px" as="u" >
          Contact Us
          </Text>
        <FormControl letterSpacing={3} p="6" onSubmit={handleSubmit}>
          <FormLabel mt="-2.5" >Issue:</FormLabel>
          <Input
           color={colorMode === "dark" ? "black" : "white"}
           bg={colorMode === "dark" ? "white" : "black"}
            onChange={handlerInputChange}
            autoComplete="off"
            type="text"
            name="message_issue"
            placeholder="Escribe tu nombre"
            required
            w={["180px","280px","400px","400px","400px"]}
          />

          {error.issue ? (
            <div>
              <p>{error.issue}</p>
            </div>
              ) : (
             <br></br>
              )}
              <br></br>

          <FormLabel mt="-2.5" >Email:</FormLabel>
          <Input
           color={colorMode === "dark" ? "black" : "white"}
           bg={colorMode === "dark" ? "white" : "black"}
            onChange={handlerInputChange}
            autoComplete="off"
            type="text"
            name="message_email"
            placeholder="Escribe tu email"
            required
            w={["180px","280px","400px","400px","400px"]}
          />
          {error.email ? (
            <div>
              <p>{error.email}</p>
            </div>
          ) : (
            <br></br>
          )}
          <br></br>

          {/* <label>Phone:</label>
           <input
           autoComplete="off"
           type= "tel"
          name="phone"
          placeholder="Phone"
             required
          /> */}

          <FormLabel mt="-2.5">Message:</FormLabel>
          <Textarea
         color={colorMode === "dark" ? "black" : "white"}
         bg={colorMode === "dark" ? "white" : "black"}
            onChange={handlerInputChange}
            w={["180px","280px","400px","400px","400px"]}
            h="80px"
            id="message"
            name="message_content"
            required=""
          
          ></Textarea>
          {error.content ? (
            <div>
              <p>{error.content}</p>
            </div>
          ) : (
            <br></br>
          )}
          <br></br>
          <VStack>
            <Button onClick= {handleSubmit}
              disabled={
                !Object.keys(error).length && input.message_email !== ""
                  ? false
                  : true
              }
              size="md"
              height="48px"
              width="100px"
              border="2px"
              borderColor={colorMode === "dark" ? "white" : "black"}
              _hover={
                colorMode === "dark"
                  ? { color: "black", bg: "white" }
                  : { bg: "black", color: "white" }
              }
              bg={colorMode === "dark" ? "black" : "white"}
            >
              SEND
            </Button>
          </VStack>
        </FormControl>
      </VStack>
      </VStack>
   
     
    
    </VStack>

  );
}
