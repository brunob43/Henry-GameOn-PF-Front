import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardContainerDocs from "../CardContainerDocs/CardContainerDocs";
import { setCurrentPageDocs } from "../../redux/actions";
import style from "./Paginated.module.css";
import { HStack, VStack, Button, useColorMode } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

const PaginatedDoc = () => {
  const { colorMode } = useColorMode();

  const dispatch = useDispatch();

  const allDocs = useSelector((state) => state.docs);

  const currentPage = useSelector((state) => state.currentPageDocs);

  const [docsPerPage] = useState(6);

  const handleClick = (event) => {
    dispatch(setCurrentPageDocs(Number(event.target.id)));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(allDocs.length / docsPerPage); i++) {
    pages.push(i);
  }
  const indexOfLastDoc = currentPage * docsPerPage;
  const indexOfFirstDoc = indexOfLastDoc - docsPerPage;
  console.log(allDocs);
  const currentDocs = allDocs.slice(indexOfFirstDoc, indexOfLastDoc);
  const pageNumbers = pages.map((number) => {
    if (currentPage === number) {
      return (
        <li
          className={style.active}
          key={number}
          id={number}
          onClick={handleClick}
        >
          {number}
        </li>
      );
    } else {
      return (
        <li
          className={style.number}
          key={number}
          id={number}
          onClick={handleClick}
        >
          {number}
        </li>
      );
    }
  });

  const handleNext = () => {
    if (currentPage + 1 <= pages.length) {
      dispatch(setCurrentPageDocs(currentPage + 1));
    } else {
      return null;
    }
  };
  const handlePrev = () => {
    if (currentPage - 1 >= 1) {
      dispatch(setCurrentPageDocs(currentPage - 1));
    } else {
      return null;
    }
  };
  return (

    <VStack w="80%">
      <VStack w="100%" justify="space-around">
    {CardContainerDocs(currentDocs)}</VStack>

      <HStack>
        <ul className={style.pages} name="bottom">
        <li>
            <Button
              onClick={handlePrev}
              variant="ghost"
              _hover={
                colorMode === "dark"
             ? { bg: "yellow", color: "black" }
             : { bg: "black", color: "yellow" }
              }
             border="1px"
              borderColor={colorMode === "dark" ? "yellow" : "black"}
            >
             <ChevronLeftIcon/>
            </Button>
          </li>

          {pageNumbers}

          <li>
            <Button
              onClick={handleNext}
              variant="ghost"
               _hover={
               colorMode === "dark"
                ? { bg: "yellow", color: "black" }
                : { bg: "black", color: "yellow" }
               }
                border="1px"
                borderColor={colorMode === "dark" ? "yellow" : "black"}
            >
             <ChevronRightIcon/>
            </Button>
          </li>
        </ul>
      </HStack>
    </VStack>
  );
};

export default PaginatedDoc;
