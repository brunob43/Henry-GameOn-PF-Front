import PaginatedGame from "../../component/Paginated/PaginatedGame";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByDifficultyGames,
  filterByNameGames,
  filterByTopicGames,
  filterByViewsGames,
  getGames,
  resetErrorGames,
  setCurrentPageGames,
} from "../../redux/actions";
import SearchBarGame from "../../component/SearchBar/SearchBarGame";
import Error from "../../component/Error/ErrorGames";
import { useColorMode, HStack, VStack, Select, Button,Text } from "@chakra-ui/react";
import {CloseIcon} from '@chakra-ui/icons'
import bglight from "../../styles/images/fondoblanco.jpg";
import bgdark from "../../styles/images/fondonegro.jpg";
import {RepeatIcon} from "@chakra-ui/icons"
// import fontGame from "../../styles/fonts/I-pixel-u.ttf"

const Games = () => {
  const { colorMode } = useColorMode();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.errorGames);
  const allGames = useSelector((state) => state.games);
  const topics = useSelector((state) => state.topics);
  const dificulties = useSelector((state) => state.dificulties);
  // const gamesTopic = useSelector(state => state.gamesTopic)
  // const gamesDif = useSelector(state => state.gamesDif)

  const [filterSelect, setFilterSelect] = useState({
    topic: [],
    dificulty: [],
  });


  useEffect(() => {
    if (!allGames.length) {
      dispatch(getGames());
    }
  }, [dispatch, allGames]);

  const reload = () =>{
    setFilterSelect({
      topic: [],
      dificulty: [],
    });
    dispatch(getGames())
    dispatch (resetErrorGames())
}

//------------------------------------------HANDLERS-------------------------------------------

  let disabledSelectTopic = !!filterSelect.topic.length;
  let disabledSelectDif = !!filterSelect.dificulty.length;

    const handleFilterTopic = (event) => {
        const value = event.target.value;
        if (value === "all"){
            dispatch(getGames())
        }else{
        dispatch(filterByTopicGames(value));

        setFilterSelect({
            ...filterSelect,
            topic: [value],
        });            
        }
    };

    const handleFilterDificulty = (event) => {
        const value = event.target.value

        if (value === "all"){
            dispatch(getGames())
        }else{
        dispatch(filterByDifficultyGames(value));

        setFilterSelect({
            ...filterSelect,
            dificulty: [value],
        });            
        }

    };

    const handleDeleteFilter = (event) => {
            setFilterSelect({
                topic: [],
                dificulty: [],
            });
            // window.location.reload();        
            dispatch(getGames());
            dispatch (resetErrorGames())
        // } 
    }

  const handleFilterOrder = (event) => {
    const value = event.target.value;

    if (value === "asc" || value === "des") {
      dispatch(filterByNameGames(value));
      setCurrentPageGames(1);
    }
    if (value === "popular" || value === "unpopular") {
      dispatch(filterByViewsGames(value));
      setCurrentPageGames(1);
    }

    if (value === "default") {
      dispatch(getGames());
      setCurrentPageGames(1);
    }
  };

  //------------------------------------------VIEW-----------------------------------------------
  if (error) {
    return (
      <VStack>
        <Error />
        <div>
          <Button fontSize="25px" h="60px" w="300px" onClick={handleDeleteFilter}>
            Return to Games
          </Button>
        </div>
      </VStack>
    );
  }

  return (
    <VStack  bgImage={colorMode === "dark" ? bgdark : bglight}>
      <HStack mt={["350px", "200px", "150px", "70px", "70px"]}
         color={colorMode === "dark" ? "yellow" : "black"}
      >
        <Text 
        fontSize="90px"
        fontFamily= "I-pixel-u"
        mt="80px"
        mb="30px"
        bg={
          colorMode === "dark"
            ? { color: "black", bg: "yellow" }
            : { bg: "black", color: "yellow" }
        }
        letterSpacing= "10px">GAMES</Text>
      </HStack>

     <HStack alignItems="flex-start" w="100%" justify="center">
          <HStack w="30%" justify="center">
         
           <Select 
            w="200px"
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
          </HStack>

          <HStack w="30%" justify="center">
           <SearchBarGame />
           </HStack>
           <Button onClick={reload}><RepeatIcon/></Button>

        <HStack align="flex-start" w="30%">
          <VStack w="200px" justifyContent="flex-start">
            <Select
            w="130px"
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
                      _hover={
                        colorMode === "dark"
                          ? { bg: "rgba(255, 255, 0, 0.5)" }
                          : { bg: "rgba(0, 0, 0, 0.5)" }
                      }
                      border="1px"
                      borderColor={colorMode === "dark" ? "yellow" : "black"}
                      value={topic}
                      name={topic}
                      key={topic}
                      onClick={handleDeleteFilter}
                    >
                      <CloseIcon/>--{topic}
                    </Button>
                  </div>
                </div>
              );
            })}
          </VStack>

          <VStack w="200px" justifyContent="flex-start">
            <Select
            w="145px"
              _hover={
                colorMode === "dark"
                  ? { bg: "rgba(255, 255, 0, 0.5)" }
                  : { bg: "rgba(0, 0, 0, 0.5)" }
              }
              border="1px"
              borderColor={colorMode === "dark" ? "yellow" : "black"}
              disabled={disabledSelectDif}
              onChange={handleFilterDificulty}
              defaultValue="all"
            >
              <option value="all">All Dificulties</option>
              {dificulties.map((dificulty) => {
                return (
                  <option value={dificulty} key={dificulty}>
                    {dificulty.toUpperCase()}
                  </option>
                );
              })}
            </Select>

            {filterSelect.dificulty?.map((dificulty, index) => {
              return (
                <div>
                  <div key={index}>
                    <Button
                      _hover={
                        colorMode === "dark"
                          ? { bg: "rgba(255, 255, 0, 0.5)" }
                          : { bg: "rgba(0, 0, 0, 0.5)" }
                      }
                      border="1px"
                      borderColor={colorMode === "dark" ? "yellow" : "black"}
                      value={dificulty}
                      name={dificulty}
                      key={dificulty}
                      onClick={handleDeleteFilter}
                    >
                      <CloseIcon/>--{dificulty.toUpperCase()}
                    </Button>
                  </div>
                </div>
              );
            })}
          </VStack>
        </HStack>
      </HStack>
      <PaginatedGame />
    </VStack>
  );
};

export default Games;
