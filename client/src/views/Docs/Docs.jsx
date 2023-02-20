import PaginatedDoc from "../../component/Paginated/PaginatedDoc";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {filterByNameDocs, filterByTopicDocs,getDocs, setCurrentPage } from "../../redux/actions";
import style from "./Docs.module.css"
import SearchBarDoc from "../../component/SearchBar/SearchBarDoc";
import Error from "../../component/Error/Error";

const Docs = () =>{
    const dispatch = useDispatch();
    const error = useSelector(state => state.error);
    const allDocs = useSelector(state => state.docs);
    const topics = useSelector(state => state.docTopics);

    const [filterSelect, setFilterSelect] = useState({
        topic: [],  
    });
    console.log(allDocs)
    useEffect(()=>{
        if(!allDocs.length){
          dispatch(getDocs())
        }
      },[dispatch,allDocs])

      //------------------------------------------HANDLERS-------------------------------------------
      let disabledSelectTopic = !(!filterSelect.topic.length);

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
        window.location.reload();        
        dispatch(getDocs());
    }
    const handleFilterOrder = (event) => {
        const value = event.target.value

        if (value === "asc" || value === "des") {

            dispatch(filterByNameDocs(value));
            setCurrentPage(1);
        }
        // if (value === "popular" || value === "unpopular") {

        //     dispatch(filterByViewsGames(value));
        //     setCurrentPage(1);
        // }

        if (value === "default") {

            dispatch(getDocs())
            setCurrentPage(1);
        }
    }
///-----VIEW--------
    if(error){
        return(
            <div className={style.errorcontainer}>
            <Error/>
            <div>
            <button className={style.button} onClick={handleDeleteFilter}>Return to Docs</button>
            </div>
            </div>
        )
    }

    return(
        <div className={style.main}>
        <div className={style.title}>
         <h2>DOCS</h2>   
        </div>

        <div className={style.searchBar}>
         <SearchBarDoc/>   
        </div>

        <div className={style.filters}>

            <div className={style.orderFilter}>
                <select onChange={handleFilterOrder} defaultValue="default">
                    <option value="default">Default</option>
                    <option value="asc">A-Z</option>
                    <option value="des">Z-A</option>
                    {/* <option value="popular">Popular</option>
                    <option value="unpopular">Unpopular</option> */}
                </select>                        
            </div>

            <div className={style.filtersContainer}> 
                <div className={style.selectButtons}>
                    <select disabled={disabledSelectTopic} onChange={handleFilterTopic} defaultValue="all">
                        <option value="all">All Topics</option>
                        {topics.map(topic => {
                        return <option value={topic} key={topic}>{topic}</option>
                        })}
                    </select>

                    {filterSelect.topic?.map((topic, index) => {
                        return (
                            <div>
                                <div key={index}>
                                    <button value={topic} name={topic} key={topic} onClick={handleDeleteFilter}>{topic}</button>
                                </div>
                            </div>
                        )
                    })}                            
                </div>
                {/* <div className={style.selectButtons} id="difFilter">
                    <select disabled={disabledSelectDif} onChange={handleFilterDificulty} defaultValue="all">
                        <option value="all">All Dificulties</option>
                        {dificulties.map(dificulty => {
                            return <option value={dificulty} key={dificulty}>{dificulty.toUpperCase()}</option>
                        })}
                    </select>

                    {filterSelect.dificulty?.map((dificulty, index) => {
                        return (
                            <div>
                                <div key={index}>
                                    <button  value={dificulty} name={dificulty} key={dificulty} onClick={handleDeleteFilter}>{dificulty.toUpperCase()}</button>
                                </div>
                            </div>
                        )
                    })}                               
                </div> */}
            </div>

        

        </div>
        <PaginatedDoc />
    </div>
    
    )
}

export default Docs;