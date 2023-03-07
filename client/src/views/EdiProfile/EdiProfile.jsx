import {
  VStack,
  Text,
  Button,
  Image,
  FormControl,
  FormLabel,
  useColorMode,
  HStack,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {  useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import UploadWidget from "../../component/CloudinaryUpload/cloudinaryWidget";
import { updateUser } from "../../redux/actions";

const EdiProfile = () => {
  const { colorMode } = useColorMode();
  const profile = useSelector((state) => state.profile);
  console.log(profile)
  const history = useHistory();

  const [edit, setEdit] = useState({
    user_image: "",
    user_name: "",
  });

  const dispatch = useDispatch();
  const user = profile;

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setEdit({ ...edit, [property]: value });
  };

  const formWidget = (data) => {
    setEdit({ ...edit, user_image: data });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateUser(user.internal_id, edit));
    alert("El perfil se ha editado con exito");
    setEdit({
      name: "",
      image: "",
    });
    

    history.push("/user")

  };

  return (
    <VStack>
      <VStack mt={["195px", "125px", "45px", "50px", "50px"]} >
        <VStack
          mt="50px"
          bgColor={colorMode === "dark" ? "white" : "black"}
          color={colorMode === "dark" ? "black" : "white"}
          borderRadius="15px"
          h="510px"
        >

          <FormControl letterSpacing={3} p="5" align="center" >
          <Text p="20px" mt="5px">
              Información personal
            </Text>
            <Image
              src={profile.user_image}
              alt={profile.user_name}
              borderRadius="100px"
              w="200px"
              p="6"
            ></Image>
            <FormLabel fontSize="13px">
              {" "}
              Image:
            <Input  color={colorMode === "dark" ? "black" : "white"}
              bg={colorMode === "dark" ? "white" : "black"}
              autoComplete="off"
              type="url"
              name="user_image"
              placeholder="Agrega url de imagen"
              value={edit.user_image}
              onChange={changeHandler}
              border="2px"
              pl="6px"
              borderRadius="6px"  ></Input>
            <Button colorScheme='black' variant='outline' p="7px">
              <UploadWidget formWidget={formWidget} />
            </Button>
            </FormLabel>

           
            <FormLabel fontSize="13px">
              {" "}
              Name:
              <Input
                type="text"
                name="user_name"
                defaultValue={profile.user_name}
                onChange={changeHandler}
                border="2px"
                pl="6px"
                borderRadius="6px"
              >
              </Input>
            </FormLabel>
          </FormControl>

          <VStack>
            <HStack>
              <Button
                onClick={handleSubmit}
                type="submit"
                size="sm"
                height="35px"
                width="80px"
                border="2px"
                borderColor={colorMode === "dark" ? "yellow" : "black"}
                _hover={
                  colorMode === "dark"
                    ? { color: "black", bg: "yellow" }
                    : { bg: "black", color: "yellow" }
                }
                bg={colorMode === "dark" ? "white" : "yellow"}
              >
                SAVE
              </Button>
              <NavLink to="/user">
                <Button
                  size="sm"
                  height="35px"
                  width="80px"
                  border="2px"
                  borderColor={colorMode === "dark" ? "yellow" : "black"}
                  _hover={
                    colorMode === "dark"
                      ? { color: "black", bg: "yellow" }
                      : { bg: "black", color: "yellow" }
                  }
                  bg={colorMode === "dark" ? "white" : "yellow"}
                >
                  CANCEL
                </Button>
              </NavLink>
            </HStack>
          </VStack>
          </VStack> 
        </VStack>
      </VStack>
  );
};

export default EdiProfile;
