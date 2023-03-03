import { VStack, Input, useColorMode,Textarea, Text, FormControl, FormLabel, Button } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getDocs } from "../../redux/actions";
import UploadWidget from "../../component/CloudinaryUpload/cloudinaryWidget";
import fondo from "../../styles/images/fondodocs5.jpg"

const ShareInfo = () => {
  const { colorMode } = useColorMode();
  const dispatch = useDispatch();

  const history = useHistory();

  const [form, setForm] = useState({
    doc_name: "",
    doc_image: "",
    doc_topic: "",
    doc_content: "",
    doc_author: "",
  });

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [property]: value });
  };

  const formWidget = (data) => {
    setForm({...form, doc_image : data})
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(form)
    axios
      .post("/doc", form)
      .then((res) => {
        alert("Info shared succesfully");
        history.push("/docs");
        dispatch(getDocs());
      })
      .catch((err) => {
        alert("There was an error, try again");
      });
  };

  return (
    <VStack>
      <VStack
        mt={["400px", "250px", "200px", "125px", "125px"]}
        bgColor={colorMode === "dark" ? "white" : "black"}
        color={colorMode === "dark" ? "black" : "white"}
        borderRadius="15px"
        h="610"
      >
        <Text  p="20px" mt="5px" as="u" fontSize="25px">
          Share your info
        </Text>
        <FormControl letterSpacing={3} p="6" onSubmit={submitHandler}>
          <FormLabel mt="-2.5" >Author:</FormLabel>
          <Input
          color={colorMode === "dark" ? "white" : "black"}
          bg={colorMode === "dark" ? "black" : "white"}
            type="text"
            name="doc_author"
            placeholder="Escribe tu nombre"
            value={form.doc_author}
            onChange={changeHandler}
            w="367px"
          />
          
          <FormLabel mt="5px">Image(Optional):</FormLabel>
          <Input
          color={colorMode === "dark" ? "white" : "black"}
          bg={colorMode === "dark" ? "black" : "white"}
            autoComplete="off"
            type="url"
            name="doc_image"
            placeholder="Agrega url de imagen"
            value={form.doc_image}
            onChange={changeHandler}
            w="367px"
          />

          <UploadWidget formWidget={formWidget}/>

          <FormLabel mt="5px">Name:</FormLabel>
          <Input
           color={colorMode === "dark" ? "white" : "black"}
           bg={colorMode === "dark" ? "black" : "white"}
            autoComplete="off"
            type="text"
            name="doc_name"
            placeholder="Dale un nombre al doc"
            required
            value={form.doc_name}
            onChange={changeHandler}
            w="367px"
          />

          <FormLabel mt="5px">Topic:</FormLabel>
          <Input
             color={colorMode === "dark" ? "white" : "black"}
             bg={colorMode === "dark" ? "black" : "white"}
            autoComplete="off"
            type="text"
            name="doc_topic"
            placeholder="Elige el tema del doc"
            required
            value={form.doc_topic}
            onChange={changeHandler}
            w="367px"
          />

          <FormLabel mt="5px">Content:</FormLabel>
          <Textarea
            color={colorMode === "dark" ? "white" : "black"}
            bg={colorMode === "dark" ? "black" : "white"}
          w="367px"
          h="80px"
            id="content"
            name="doc_content"
            required
            value={form.doc_content}
            onChange={changeHandler}
          ></Textarea>
           <VStack mt="5px">
            <Button  
             type="submit"
             marginTop="20px"
             size="md"
             height="48px"
             width="100px"
             border="2px"
             borderColor={colorMode === "dark" ? "yellow" : "black"}
             _hover={
               colorMode === "dark"
                 ? { color: "black", bg: "yellow" }
                 : { bg: "black", color: "yellow" }
             }
             bg={colorMode === "dark" ? "white" : "yellow"}
             onClick={submitHandler}
             >
              POST
            </Button>
            </VStack>
        </FormControl>
      </VStack>
    </VStack>
  );
};

export default ShareInfo;

