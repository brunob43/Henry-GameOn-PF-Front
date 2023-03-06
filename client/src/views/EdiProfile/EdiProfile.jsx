import {
  VStack,
  Text,
  Button,
  Image,
  FormControl,
  FormLabel,
  Editable,
  EditableInput,
  EditablePreview,
  useColorMode,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { profileCreation } from "../../component/Utils/utils";
import UploadWidget from "../../component/CloudinaryUpload/cloudinaryWidget";

const EdiProfile = () => {
  const { colorMode } = useColorMode();
  const profile = useSelector((state) => state.profile);

  const [edit, setEdit] = useState({
    user_image: "",
    user_name: "",
    user_email: "",
  });

  const dispatch = useDispatch();
  const user = profile;
  useEffect(() => {
    if (user) {
      let prof = profileCreation(user);
    }
  }, [user]);

  const formWidget = (data) => {
    setEdit({ ...edit, user_image: data });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(EdiProfile(user.user_id, edit));
    alert("El perfil se ha editado con exito");
    setEdit({
      name: "",
      image: "",
      email: "",
    });
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
            <Image
              src={profile.user_image}
              alt={profile.user_name}
              borderRadius="100px"
              w="200px"
              p="6"
            ></Image>
            <Button colorScheme='black' variant='outline' p="7px">
              <UploadWidget formWidget={formWidget} />
            </Button>

            <Text p="20px" mt="5px">
              Información personal
            </Text>
            <FormLabel fontSize="13px">
              {" "}
              Name:
              <Editable
                defaultValue={profile.user_name}
                border="2px"
                pl="6px"
                borderRadius="6px"
              >
                <EditablePreview />
                <EditableInput />
              </Editable>
            </FormLabel>
          </FormControl>

          <VStack>
            <HStack>
              <Button
                onClick={handleSubmit}
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
