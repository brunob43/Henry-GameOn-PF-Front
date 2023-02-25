import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardContainerDocs from "../CardContainerDocs/CardContainerDocs";
import { setCurrentPageDocs } from "../../redux/actions";
import style from "./Paginated.module.css";
import prev from "../../styles/images/left-arrow.png";
import next from "../../styles/images/right-arrow.png";
import { HStack, VStack, Button, useColorMode } from "@chakra-ui/react";

const PaginatedDoc = () => {
  const { colorMode } = useColorMode();

  const dispatch = useDispatch();

  const allDocs = useSelector((state) => state.docs);

  const currentPage = useSelector((state) => state.currentPageDocs);

  const [docsPerPage] = useState(2);

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
    <VStack>
      <HStack>
        <ul className={style.pages} name="top">
          <li>
            <Button
              _hover={{
                cursor: "pointer",
                transition: "400ms",
                transform: "scale(130%)",
              }}
              bg={colorMode === "dark" ? "yellow" : "white"}
              transition="400ms"
              onClick={handlePrev}
            >
              <img src={prev} alt="prev" className={style.arrow} />
            </Button>
          </li>

          {pageNumbers}

          <li>
            <Button
              _hover={{
                cursor: "pointer",
                transition: "400ms",
                transform: "scale(130%)",
              }}
              bg={colorMode === "dark" ? "yellow" : "white"}
              onClick={handleNext}
            >
              <img src={next} alt="next" className={style.arrow} />
            </Button>
          </li>
        </ul>
      </HStack>

      <div className={style.container}>{CardContainerDocs(currentDocs)}</div>

      <HStack>
        <ul className={style.pages} name="bottom">
        <li>
            <Button
              _hover={{
                cursor: "pointer",
                transition: "400ms",
                transform: "scale(130%)",
              }}
              bg={colorMode === "dark" ? "yellow" : "white"}
              transition="400ms"
              onClick={handlePrev}
            >
              <img src={prev} alt="prev" className={style.arrow} />
            </Button>
          </li>

          {pageNumbers}

          <li>
            <Button
              _hover={{
                cursor: "pointer",
                transition: "400ms",
                transform: "scale(130%)",
              }}
              bg={colorMode === "dark" ? "yellow" : "white"}
              onClick={handleNext}
            >
              <img src={next} alt="next" className={style.arrow} />
            </Button>
          </li>
        </ul>
      </HStack>
    </VStack>
  );
};

export default PaginatedDoc;
