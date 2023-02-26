import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardContainerGames from "../CardContainerGame/CardContainerGame";
import { setCurrentPageGames } from "../../redux/actions";
import style from "./Paginated.module.css";
import prev from "../../styles/images/left-arrow.png";
import next from "../../styles/images/right-arrow.png";
import { HStack, VStack, Button, useColorMode } from "@chakra-ui/react";

const PaginatedGame = () => {
  const { colorMode } = useColorMode();

  const dispatch = useDispatch();

  const allGames = useSelector((state) => state.games);

  const currentPage = useSelector((state) => state.currentPageGames);

  const [gamesPerPage] = useState(2);

  const handleClick = (event) => {
    dispatch(setCurrentPageGames(Number(event.target.id)));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(allGames.length / gamesPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = allGames.slice(indexOfFirstGame, indexOfLastGame);

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
      dispatch(setCurrentPageGames(currentPage + 1));
    } else {
      return null;
    }
  };

  const handlePrev = () => {
    if (currentPage - 1 >= 1) {
      dispatch(setCurrentPageGames(currentPage - 1));
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

      <HStack w="100%" justify="space-around">
        {CardContainerGames(currentGames)}
      </HStack>

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

export default PaginatedGame;
