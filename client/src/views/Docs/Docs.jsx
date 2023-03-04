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
import SearchBarDoc from "../../component/SearchBar/SearchBarDoc";
import Error from "../../component/Error/ErrorDocs";
import { NavLink } from "react-router-dom";
import { HStack, VStack, Button, useColorMode, Select, Text } from "@chakra-ui/react";
import bglight from "../../styles/images/fondoblanco.jpg";
import bgdark from "../../styles/images/fondonegro.jpg";
import {RepeatIcon} from "@chakra-ui/icons"

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

  const reload = () =>{
    setFilterSelect({
      topic: [],
      dificulty: [],
    });
    dispatch(getDocs())
    dispatch (resetErrorDocs())
}

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
      <VStack >
        <Error />
        <div>
          <Button fontSize="25px" h="60px" w="300px"  onClick={handleDeleteFilter}>
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
        mt={["170px", "100px", "40px", "40px", "40px"]}
        
      >
        <Text 
        fontSize={["70px","90px"]}
        fontFamily= "I-pixel-u"
        mt="20"
        bg={
          colorMode === "dark"
            ? { color: "black", bg: "yellow" }
            : { bg: "black", color: "yellow" }
        }
        letterSpacing= "10px">DOCS</Text>
      </HStack>

      <HStack flexDirection={["column","column","column","row"]} alignItems={["center","center","center","flex-start"]} w="100%" justify="center" bg={
                colorMode === "dark"
                  ? { color: "black", bg: "yellow" }
                  : { bg: "black", color: "yellow" }
              }>
        <VStack pt="10px" w={["100%","100%","30%"]} justify="center">
          <Select
          w="120px"
            
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
        <HStack pt="10px">
        <SearchBarDoc />
        </HStack>
        <HStack pt="10px">
        <Button onClick={reload}><RepeatIcon/></Button>
        </HStack>
      <HStack pt="10px" w="250px" justify="space-around" align="flex-start">
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
              w="120px"
            >
              CREATE DOC
            </Button>
          </NavLink>
        </div>

        <vStack w="200px" justifyContent="flex-start">
          <Select
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
                  mt="10px"
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
        </vStack>
      </HStack>
      </HStack>

      <PaginatedDoc />
    </VStack>
  );
};

export default Docs;
