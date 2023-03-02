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
    getDonations,
    deleteUser,
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
   const donations = useSelector((state)=>state.donations)
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
        selector:(row)=>row.user_id,
        sortable:true,
        width: "70px"
    },
    {   name:'Internal ID',
        selector:(row)=>row.internal_id,
        sortable:true
    },
    { 
        name:'Name',
        selector:(row)=>row.user_name,
        sortable:true
    },
    {   name:'Email',
        selector:(row)=>row.user_email,
        sortable:true
    },
    {   name:'Password',
        selector:(row)=>row.user_password,
        sortable:true,
        width: "70px"
    },
    {   name:'Image',
        selector:(row)=>row.user_image,
        sortable:true,
        width: "70px"
    },
    {   name:'Type',
        selector:(row)=>row.user_type,
        sortable:true,
        width: "70px"
    },
    {   name:'State',
        selector:(row)=>row.user_state,
        sortable:true,
        width: "70px"
    },
    {   name:'Eliminar',
        cell:(row)=>(<button
        onClick={()=>handleUserEliminate(row)}>{row.user_deleted?"Reincorporar":"Eliminar"}</button>)
    },
    {   name:'Editar',
        cell:(row)=>(<button
        onClick={()=>handleUserEdit(row)}>Editar</button>)
    }
]
    const handleUserEliminate=(row)=>{
         dispatch(deleteUser(row.internal_id))
         dispatch(getUsers())
    }

   const columnsGames=[
    {
        name:'ID',
        selector:'game_id',
        sortable:true,
        width: "70px"
    },
    { 
        name:'Name',
        selector:'game_name',
        sortable:true,
        width: "200px"
    },
    {   name:'Topic',
        selector:'game_topic',
        sortable:true,
        width: "200px"
    },
    {   name:'Image',
        selector:'game_image',
        sortable:true,
        width: "70px"
    },
    {   name:'Difficulty',
        selector:'game_difficulty',
        sortable:true,
        width: "200px"
    },
    {   name:'Views',
        selector:'game_views',
        sortable:true,
        width: "70px"
    },
    {   name:'Deleted',
        selector:'game_deleted',
        sortable:true,
        width: "70px"
    } 
   ]

   const columnsDocs=[
    {
        name:'ID',
        selector:'doc_id',
        sortable:true,
        width: "70px"
    },
    { 
        name:'Name',
        selector:'doc_name',
        sortable:true,
        width: "200px"
    },
    {   name:'Topic',
        selector:'doc_topic',
        sortable:true,
        width: "200px"
    },
    {   name:'Author',
        selector:'doc_author',
        sortable:true,
        width: "200px"
    },
    {   name:'Content',
        selector:'doc_content',
        sortable:true,
        width: "250px"
    },
    {   name:'Image',
        selector:'doc_image',
        sortable:true,
        width: "70px"
    },
    {   name:'Views',
        selector:'doc_views',
        sortable:true,
        width: "70px"
    },
    {   name:'Deleted',
        selector:'game_deleted',
        sortable:true,
        width: "70px"
    } 
   ];

   const columnsDonations=[
    {
        name:'ID',
        selector:'donation_id',
        sortable:true,
        width: "70px",
    },
    { 
        name:'Name',
        selector:'donation_name',
        sortable:true,
        width: "200px"
    },
    {   name:'Info',
        selector:'donation_info',
        sortable:true,
        width: "250px"
    },
    {   name:'Quantity',
        selector:'donation_quantity',
        sortable:true,
        width: "70px"
    }
   ]
   const paginationOptions={
      rowsPerPageText:"Filas por página",
      rangeSeparatorText: "de",
      selectAllRowsItem: true,
      selectAllRowsItemText: "Todos"
   }
   const ExpandedComponent = ({ users }) => <pre>{JSON.stringify(users, null, 2)}</pre>;
   useEffect(()=>{
      dispatch(getUsers());
      dispatch(getDocsAd());
      dispatch(getGamesAd());
      dispatch(getDonations())
   },[])
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
             pagination
             paginationComponentOptions={paginationOptions}
             fixedHeader
             fixedHeaderScrollHeight="600px"
             expandableRows
             expandableRowsComponent={ExpandedComponent}
             theme="dark"
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
             pagination
             paginationComponentOptions={paginationOptions}
             fixedHeader
             fixedHeaderScrollHeight="600px"
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
             pagination
             paginationComponentOptions={paginationOptions}
             fixedHeader
             fixedHeaderScrollHeight="600px"
             />
             <DataTable
             columns={columnsDonations}
             data={donations}
             title="Donaciones"
             pagination
             paginationComponentOptions={paginationOptions}
             fixedHeader
             fixedHeaderScrollHeight="600px"
             />
          </div>
   )
}

export default DashboardAdmin




// const handleSelectTypeUser = (row, e) => {


    // name: "Editar",
    //   cell: (row) => (      column


    //     <button
    //       className={styles.dashBoardAdm_button_Table}
    //       onClick={() => handleClickSix(row)}
    //     >
    //       Editar
    //     </button>