import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import {
    getUsers,
    getNameUsers,
   // postUser,
   getGamesAd,
    getNameGamesAd,
    //filterByViewsGamesAd,
    //getDetailFromStateAd,
   getDocsAd,
    //filterByViewsDocsAd,
    getNameDocsAd,
    //getDocDetailFromStateAd,
    //getDonations,
    //updateUser,
    //deleteUser,
    //updateGame,
    //deleteGame,
    //updateDoc,
    //deleteDoc,
    //postDoc,
    //postGame
} from "../../redux/actions"

const DashboardAdmin =()=>{
   const users = useSelector((state)=>state.users)
   const games = useSelector((state)=>state.gamesAd)
   const docs = useSelector((state)=>state.docsAd)
//    const donations = useSelector((state)=>state.donations)
//    const gameDetail = useSelector((state)=>state.gameDetailAd)
//    const docDetail = useSelector((state)=>state.docDetailAd)
   const [input,setInput]=useState({
    inputUser:"",
    inputGame:"",
    inputDoc:""
   })
   const dispatch = useDispatch();
    
   const handleChange =(e)=>{
      setInput({
        ...input,
    [e.target.name]:e.target.value
      })
   }

   const handleUsersSubmit=(e)=>{
        e.preventDefault();
        dispatch(getNameUsers(input.inputUser));
        setInput({
            ...input,
            inputUser:""
        })
   }
   const handleDocsSubmit=(e)=>{
        e.preventDefault(); 
        dispatch(getNameDocsAd(input.inputDoc));
        setInput({
            ...input,
            inputDoc:""
        })
   }
   const handleGameSubmit=(e)=>{
        e.preventDefault();
        dispatch(getNameGamesAd(input.inputGame));
        setInput({
            ...input,
            inputGame:""
        })
   }
   const resetUsers=()=>{

   }
   const resetGames=()=>{

   }
   const resetDocs=()=>{

   }
   const columnsUsers=[
    {
        name:'ID',
        selector:'user_id',
        sortable:true
    },
    {   name:'Internal ID',
        selector:'internal_id',
        sortable:true
    },
    { 
        name:'Name',
        selector:'user_name',
        sortable:true
    },
    {   name:'Email',
        selector:'user_email',
        sortable:true
    },
    {   name:'Password',
        selector:'user_password',
        sortable:true
    },
    {   name:'Image',
        selector:'user_image',
        sortable:true
    },
    {   name:'Type',
        selector:'user_type',
        sortable:true
    },
    {   name:'State',
        selector:'user_state',
        sortable:true
    },
    {   name:'Deleted',
        selector:'user_deleted',
        sortable:true
    }
    
   ]
   const columnsGames=[
    {
        name:'ID',
        selector:'game_id',
        sortable:true
    },
    { 
        name:'Name',
        selector:'game_name',
        sortable:true
    },
    {   name:'Topic',
        selector:'game_topic',
        sortable:true
    },
    {   name:'Image',
        selector:'game_image',
        sortable:true
    },
    {   name:'Difficulty',
        selector:'game_difficulty',
        sortable:true
    },
    {   name:'Views',
        selector:'game_views',
        sortable:true
    },
    {   name:'Deleted',
        selector:'game_deleted',
        sortable:true
    } 
   ]

   const columnsDocs=[
    {
        name:'ID',
        selector:'doc_id',
        sortable:true
    },
    { 
        name:'Name',
        selector:'doc_name',
        sortable:true
    },
    {   name:'Topic',
        selector:'doc_topic',
        sortable:true
    },
    {   name:'Author',
        selector:'doc_author',
        sortable:true
    },
    {   name:'Content',
        selector:'doc_content',
        sortable:true
    },
    {   name:'Image',
        selector:'doc_image',
        sortable:true
    },
    {   name:'Views',
        selector:'doc_views',
        sortable:true
    },
    {   name:'Deleted',
        selector:'game_deleted',
        sortable:true
    } 
   ]
   useEffect(()=>{
      dispatch(getUsers())
      dispatch(getDocsAd()),
      dispatch(getGamesAd())
    //   dispatch(getDonations())
   },[users])
   console.log(users)
   return(
          <div>
             <form onSubmit={handleUsersSubmit}>
                <input
                type="text"
                value={input.inputUser}
                name="InputUser"
                placeholder="Buscar usuarios"
                onChange={handleChange}></input>
                <button type="submit">Buscar</button>
                <button onClick={resetUsers}>Reset</button>
             </form>
             <DataTable
             columns={columnsUsers}
             data={users}
             title="Usuarios"
             />

             <form onSubmit={handleGameSubmit}>
                <input
                type="text"
                value={input.inputGame}
                name="inputGame"
                placeholder="Buscar juegos"
                onChange={handleChange}></input>
                <button type="submit">Buscar</button>
                <button onClick={resetGames}>Reset</button>
             </form>
             <DataTable
             columns={columnsGames}
             data={games}
             title="Juegos"
             />
             <form onSubmit={handleDocsSubmit}>
                <input
                type="text"
                value={input.inputDoc}
                name="InputDoc"
                placeholder="Buscar Docs"
                onChange={handleChange}></input>
                <button type="submit">Buscar</button>
                <button onClick={resetDocs}>Reset</button>
             </form>
             <DataTable
             columns={columnsDocs}
             data={docs}
             title="Documentos"
             />
          </div>
   )
}

export default DashboardAdmin