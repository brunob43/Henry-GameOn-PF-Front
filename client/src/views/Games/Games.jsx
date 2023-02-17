import Paginated from "component/Paginated/Paginated";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByDificulty, filterByName, filterByTopic, filterByViews, getGames, setCurrentPage } from "redux/actions";
import SearchBarGame from "component/SearchBar/SearchBarGame";

const Games= () =>{
    const dispatch = useDispatch();
    const error = useSelector(state => state.error);
    const allGames = useSelector(state => state.games);
    const topics = useSelector(state => state.topics);
    const dificulties = useSelector(state => state.dificulties);

    const [filterSelect, setFilterSelect] = useState({
        topic: [], 
        dificulty: [], 
    });

    useEffect(()=>{
        if(!allGames.length){
          dispatch(getGames())
        }
      },[dispatch,allGames])
//------------------------------------------HANDLERS-------------------------------------------

    let disabledSelect = !(!filterSelect.topic.length) || !(!filterSelect.dificulty.length);

    const handleFilterTopic = (event) => {
        event.preventDefault();
        const value = event.target.value;

        dispatch(filterByTopic(value));

        setFilterSelect({
            ...filterSelect,
            topic: [value],
        });
    };

    const handleFilterDificulty = (event) => {
        const value = event.target.value

        dispatch(filterByDificulty(value));

        setFilterSelect({
            ...filterSelect,
            dificulty: [value],
        });
    };

    const handleDeleteFilter = (event) => {

        setFilterSelect({
            topic: [],
            dificulty: [],
        })

        window.location.reload();
        dispatch(getGames())
    }

    const handleFilterOrder = (event) => {
        const value = event.target.value

        if (value === "asc" || value === "des") {

            dispatch(filterByName(value));
            setCurrentPage(1);
        }
        if (value === "popular" || value === "unpopular") {

            dispatch(filterByViews(value));
            setCurrentPage(1);
        }

        if (value === "default") {

            dispatch(getGames())
            setCurrentPage(1);
        }
    }

//------------------------------------------VIEW-----------------------------------------------
    if(error){
        return(
            <div>
            <h2>Oops, {error}</h2>
            <button onClick={handleDeleteFilter}>Return to Games</button>
            </div>
        )
    }

    return(
        <div>
            <div>
             <h2>GAMES</h2>   
            </div>
            
            <div>
    
                <div>
                    <select onChange={handleFilterOrder} defaultValue="default">
                        <option value="default">Default</option>
                        <option value="asc">A-Z</option>
                        <option value="des">Z-A</option>
                        <option value="popular">Popular</option>
                        <option value="unpopular">Unpopular</option>
                    </select>                        
                </div>

                <div> 
                    <div>
                        <select disabled={disabledSelect} onChange={handleFilterTopic} defaultValue="all">
                            <option value="all">All Topics</option>
                            {topics.map(topic => {
                            return <option value={topic} key={topic}>{topic}</option>
                            })}
                        </select>

                        {filterSelect.topic?.map((topic, index) => {
                            return (
                                <div>
                                    <div key={index}>
                                        <button name={topic} key={topic} onClick={handleDeleteFilter}>{topic}</button>
                                    </div>
                                </div>
                            )
                        })}                            
                    </div>
                    <div>
                        <select disabled={disabledSelect} onChange={handleFilterDificulty} defaultValue="all">
                            <option value="all">All Dificulties</option>
                            {dificulties.map(dificulty => {
                                return <option value={dificulty} key={dificulty}>{dificulty.toUpperCase()}</option>
                            })}
                        </select>

                        {filterSelect.dificulty?.map((dificulty, index) => {
                            return (
                                <div>
                                    <div key={index}>
                                        <button name={dificulty} key={dificulty} onClick={handleDeleteFilter}>{dificulty}</button>
                                    </div>
                                </div>
                            )
                        })}                               
                    </div>
                </div>

            

            </div>
            <Paginated />
           <SearchBarGame/>
        </div>

    )
}

export default Games;