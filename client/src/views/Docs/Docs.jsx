import PaginatedDoc from "../../component/Paginated/PaginatedDoc";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByNameDocs,
  filterByTopicDocs,
  getDocs,
  setCurrentPageDocs,
  filterByViewsDocs,
  getTopicDocs,
  resetErrorDocs
} from "../../redux/actions";
import style from "./Docs.module.css";
import SearchBarDoc from "../../component/SearchBar/SearchBarDoc";
import Error from "../../component/Error/ErrorDocs";
import { NavLink } from "react-router-dom";
import { HStack, VStack, Button, useColorMode, Select } from "@chakra-ui/react";
import bglight from "../../styles/images/fondo_henry_light.jpg";
import bgdark from "../../styles/images/fondo_henry_dark.png";

const Docs = () => {
  const { colorMode } = useColorMode();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.errorDocs);
  const allDocs = useSelector((state) => state.docs);
  const topics = useSelector((state) => state.docTopics);

  const [filterSelect, setFilterSelect] = useState({
    topic: [],
  });
  console.log(allDocs);
  useEffect(() => {
    if (!allDocs.length) {
      dispatch(getDocs());
      dispatch(getTopicDocs());
    }
  }, [dispatch, allDocs]);

  //------------------------------------------HANDLERS-------------------------------------------
  let disabledSelectTopic = !!filterSelect.topic.length;

  const handleFilterTopic = (event) => {
    const value = event.target.value;

    dispatch(filterByTopicDocs(value));

    setFilterSelect({
      ...filterSelect,
      topic: [value],
    });
  };

  const handleDeleteFilter = (event) => {
    setFilterSelect({
      topic: [],
    });
    // window.location.reload();
    dispatch(getDocs());
    dispatch (resetErrorDocs())
    
  };
  const handleFilterOrder = (event) => {
    const value = event.target.value;

    if (value === "asc" || value === "des") {
      dispatch(filterByNameDocs(value));
      setCurrentPageDocs(1);
    }
    if (value === "popular" || value === "unpopular") {
      dispatch(filterByViewsDocs(value));
      setCurrentPageDocs(1);
    }

    if (value === "default") {
      dispatch(getDocs());
      setCurrentPageDocs(1);
    }
  };
  ///-----VIEW--------
  if (error) {
    return (
      <VStack className={style.errorcontainer}>
        <Error />
        <div>
          <Button fontSize="25px" h="60px" w="300px" className={style.button} onClick={handleDeleteFilter}>
            Return to Docs
          </Button>
        </div>
      </VStack>
    );
  }

  return (
    <VStack bgImage={colorMode === "dark" ? bgdark : bglight}>
      <HStack
        color={colorMode === "dark" ? "yellow" : "black"}
        mt={["350px", "200px", "150px", "70px", "70px"]}
        
      >
        <h2 className={style.title}>DOCS</h2>
      </HStack>

      <HStack justify="center" w="80%">
        <VStack align="flex-end" w="250px">
          <Select
          w="120px"
            fontWeight="bold"
            _hover={
              colorMode === "dark"
                ? { bg: "rgba(255, 255, 0, 0.5)" }
                : { bg: "rgba(0, 0, 0, 0.5)" }
            }
            border="1px"
            borderColor={colorMode === "dark" ? "yellow" : "black"}
            onChange={handleFilterOrder}
            defaultValue="default"
          >
            <option value="default">Default</option>
            <option value="asc">A-Z</option>
            <option value="des">Z-A</option>
            <option value="popular">Popular</option>
            <option value="unpopular">Unpopular</option>
          </Select>
        </VStack>
        <SearchBarDoc />
        
      <VStack w="250px" justify="space-around" align="flex-start">
        <div>
          <NavLink to="/docs/share">
            <Button
              variant="ghost"
              _hover={
                colorMode === "dark"
                  ? { bg: "yellow", color: "black" }
                  : { bg: "black", color: "yellow" }
              }
              border="1px"
              borderColor={colorMode === "dark" ? "yellow" : "black"}
              className={style.create}
            >
              CREATE DOC
            </Button>
          </NavLink>
        </div>

        <div className={style.filtersContainer}>
          <Select
            fontWeight="bold"
            _hover={
              colorMode === "dark"
                ? { bg: "rgba(255, 255, 0, 0.5)" }
                : { bg: "rgba(0, 0, 0, 0.5)" }
            }
            border="1px"
            borderColor={colorMode === "dark" ? "yellow" : "black"}
            disabled={disabledSelectTopic}
            onChange={handleFilterTopic}
            defaultValue="all"
          >
            <option value="all">All Topics</option>
            {topics.map((topic) => {
              return (
                <option value={topic} key={topic}>
                  {topic}
                </option>
              );
            })}
          </Select>

          {filterSelect.topic?.map((topic, index) => {
            return (
              <div>
                <div key={index}>
                  <Button
                  ml="10px"
                    variant="ghost"
                    _hover={
                      colorMode === "dark"
                        ? { bg: "yellow", color: "black" }
                        : { bg: "black", color: "yellow" }
                    }
                    border="1px"
                    borderColor={colorMode === "dark" ? "yellow" : "black"}
                    value={topic}
                    name={topic}
                    key={topic}
                    onClick={handleDeleteFilter}
                  >
                    X -- {topic}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </VStack>
      </HStack>

      <PaginatedDoc />
    </VStack>
  );
};

export default Docs;
