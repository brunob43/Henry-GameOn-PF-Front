import { HStack, Input, useColorMode, Button} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameDocs } from "../../redux/actions";


export default function SearchBarDoc() {
    const dispatch = useDispatch()
    const [name, setName] = useState("")

    function handlerInputChange(e) {
        e.preventDefault()
        setName(e.target.value)
    }


    function handleSubmit(e) {
        e.preventDefault()
       dispatch(getNameDocs(name))
    }
    const { colorMode } = useColorMode();
    return (
        <HStack >
         <Input
        fontWeight="bold"
        _hover={
          colorMode === "dark"
            ? { bg: "rgba(255, 255, 0, 0.5)"}
            : { bg: "rgba(0, 0, 0, 0.5)" }
        }
        border="1px"
        borderColor={colorMode === "dark" ? "yellow" : "black"}
        type="text"
        placeholder="Search Doc..."
        onChange={(e) => handlerInputChange(e)}
      ></Input>
      <Button
        variant="ghost"
        _hover={
          colorMode === "dark"
            ? { bg: "yellow", color: "black" }
            : { bg: "black", color: "yellow" }
        }
        border="1px"
        borderColor={colorMode === "dark" ? "yellow" : "black"}
        type="submit"
        onClick={(e) => handleSubmit(e)}
      >
        {" "}
        <SearchIcon />{" "}
      </Button>
        </HStack>
    )
}