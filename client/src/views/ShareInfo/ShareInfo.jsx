import {
  VStack,
  Input,
  useColorMode,
  Textarea,
  Text,
  FormControl,
  FormLabel,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getDocs } from "../../redux/actions";
import UploadWidget from "../../component/CloudinaryUpload/cloudinaryWidget";
import fondo from "../../styles/images/fondodocs5.jpg";

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
  
  const aux =(resultData)=>{
    setForm({ ...form, doc_image: resultData });

  }
  const formWidget = (resultData) => {
    aux(resultData)
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(form);
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
        mt={["150px", "50px", "80px", "85px", "85px"]}
        bgImage={fondo}
        bgSize="cover"
        bgPosition="center"
        w="100%"
        h="800px"
      >
        <VStack
          mt="50px"
          bgColor={colorMode === "dark" ? "black" : "white"}
          color={colorMode === "dark" ? "white" : "black"}
          borderRadius="15px"
          h="680px"
          border="2px solid black"
        >
          <Text p="20px" mt="5px" as="u" fontSize="20px">
            Share your info
          </Text>
          <FormControl letterSpacing={3} p="6" onSubmit={submitHandler}>

           <FormLabel mt="5px">Image(Optional):</FormLabel>
            <Input
              color={colorMode === "dark" ? "black" : "white"}
              bg={colorMode === "dark" ? "white" : "black"}
              autoComplete="off"
              type="url"
              name="doc_image"
              placeholder="Agrega url de imagen"
              value={form.doc_image}
              onChange={changeHandler}
              w={["180px", "280px", "400px", "400px", "400px"]}
            />

                
<VStack>
            <Button>
              <UploadWidget formWidget={formWidget} />
            </Button>
            </VStack>

            <FormLabel mt="-2.5">Author:</FormLabel>
            <Input
              color={colorMode === "dark" ? "black" : "white"}
              bg={colorMode === "dark" ? "white" : "black"}
              type="text"
              name="doc_author"
              placeholder="Escribe tu nombre"
              value={form.doc_author}
              onChange={changeHandler}
              w={["180px", "280px", "400px", "400px", "400px"]}
            />

            <FormLabel mt="5px">Title:</FormLabel>
            <Input
              color={colorMode === "dark" ? "black" : "white"}
              bg={colorMode === "dark" ? "white" : "black"}
              autoComplete="off"
              type="text"
              name="doc_name"
              placeholder="Dale un nombre al doc"
              required
              value={form.doc_name}
              onChange={changeHandler}
              w={["180px", "280px", "400px", "400px", "400px"]}
            />

            <FormLabel mt="5px">Topic:</FormLabel>
            <Input
              color={colorMode === "dark" ? "black" : "white"}
              bg={colorMode === "dark" ? "white" : "black"}
              autoComplete="off"
              type="text"
              name="doc_topic"
              placeholder="Elige el tema del doc"
              required
              value={form.doc_topic}
              onChange={changeHandler}
              w={["180px", "280px", "400px", "400px", "400px"]}
            />

          <FormLabel mt="5px">Content:</FormLabel>
          <Textarea
            color={colorMode === "dark" ? "black" : "white"}
            bg={colorMode === "dark" ? "white" : "black"}
          w={["180px","280px","400px","400px","400px"]}
          h="80px"
            id="content"
            name="doc_content"
            required
            value={form.doc_content}
            onChange={changeHandler}
          ></Textarea>
           <VStack mt="5px">
            <Button  
             onClick={submitHandler}
             type="submit"
             marginTop="20px"
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
              POST
            </Button>
            </VStack>
          </FormControl>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default ShareInfo;
