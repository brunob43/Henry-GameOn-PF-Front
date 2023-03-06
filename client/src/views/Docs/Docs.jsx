import PaginatedDoc from "../../component/Paginated/PaginatedDoc";
import { useEffect, useRef, useState } from "react";
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
import { HStack, VStack, Button, useColorMode, Select, Text, Box, useDisclosure } from "@chakra-ui/react";
import bglight from "../../styles/images/fondoblanco.jpg";
import bgdark from "../../styles/images/fondonegro.jpg";
import {RepeatIcon} from "@chakra-ui/icons"
import { useAuth0 } from "@auth0/auth0-react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
} from "@chakra-ui/modal";

const Docs = () => {
  const { colorMode } = useColorMode();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.errorDocs);
  const allDocs = useSelector((state) => state.docs);
  const topics = useSelector((state) => state.docTopics);
  const {isAuthenticated, loginWithRedirect} = useAuth0();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

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

  const LogInHandler = (event)=>{
    alert('please log in')
    loginWithRedirect()
  }

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
          <Button  size="md"
            height="50px"
            width="170px"
            border="2px"
            borderColor="yellow"
            _hover={
              colorMode === "dark"
                ? { color: "black", bg: "white" }
                : { bg: "black", color: "white" }
            }
            bg={colorMode === "dark" ? "black" : "white"}  onClick={handleDeleteFilter}>
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
          w="200px"
            
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
        <VStack pt="10px" w={["100%","100%","30%"]} justify="center">
        <SearchBarDoc />
        </VStack>
        <HStack pt="10px">
        <Button border="1px"
            borderColor={colorMode === "dark" ? "yellow" : "black"}  onClick={reload}><RepeatIcon/></Button>
        </HStack>
      <HStack flexDirection={["column","column","column","row","row"]} pt="10px" w={["100%","100%","100%","30%","30%"]} justify="space-around" align="flex-start">
        {isAuthenticated ? (
          <Box mb="10px" display="flex" flexDirection="row" justifyContent="center" w={["100%","100%","100%","30%"]}>
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
        </Box>
        ):(
          <Box mb="10px" display="flex" flexDirection="row" justifyContent="center" w={["100%","100%","100%","30%"]}>
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
              onClick={onOpen}
            >
              CREATE DOC
            </Button>
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Want this content?
              </AlertDialogHeader>

              <AlertDialogBody>
                You need to be logged in to access this content
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="yellow" onClick={LogInHandler} ml={3}>
                  Log In
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>

        </Box>
        )}

        <VStack h="100px" w={["100%","100%","100%","30%"]} justifyContent="flex-start">
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
            w={["200px","200px","200px","120px","120px"]}
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
        </VStack>
      </HStack>
      </HStack>

      <PaginatedDoc />
    </VStack>
  );
};

export default Docs;
