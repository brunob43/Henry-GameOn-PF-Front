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
    //getDetailFromStateAd,
    getDocsAd,
    getNameDocsAd,
    //getDocDetailFromStateAd,
    getDonations,
    deleteUser,
    //updateUser,
    //updateGame,
    deleteGame,
    //updateDoc,
    deleteDoc,
    //postDoc,
    //postGame
} from "../../redux/actions"
import EditUser from "./EditUser";
import EditGame from "./EditGame";
// import EditDoc from "./EditDoc";

const DashboardAdmin =()=>{
   const users = useSelector((state)=>state.users)
   const games = useSelector((state)=>state.gamesAd)
   const docs = useSelector((state)=>state.docsAd)
   const donations = useSelector((state)=>state.donations)
   const [rowUser,setRowUser]=useState({})
    const [rowGame,setRowGame]=useState({})
//    const [rowDoc,setRowDoc]=useState({})
   const [isOpenEditUser,setIsOpenEditUser]=useState(false)
    const [isOpenEditGame,setIsOpenEditGame]=useState(false)
//    const [isOpenEditDoc,setIsOpenEditDoc]=useState(false)
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
       dispatch(getUsers())
   }
   const resetGames=()=>{
       dispatch(getGamesAd())
   }
   const resetDocs=()=>{
       dispatch(getDocsAd())
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
    {   name:'EDITAR',
        cell:(row)=>(<button
        onClick={()=>handleUserEdit(row)}>Ver Detalle/Editar</button>)
    }
]
    const handleUserEliminate=(row)=>{
         dispatch(deleteUser(row.internal_id))
    }
    const handleUserEdit=(row)=>{
        const aux={
            user_name:row.user_name,
            user_email:row.user_email,
            user_image:row.user_image,
            user_type:row.user_type,
            user_state:row.user_state,
            internal_id:row.internal_id
        }
        
        setRowUser(aux);
        setIsOpenEditUser(true)
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
    } ,
    {   name:'Eliminar',
        cell:(row)=>(<button
        onClick={()=>handleGameEliminate(row)}>{row.game_deleted?"Reincorporar":"Eliminar"}</button>)
    },
    {   name:'Editar',
        cell:(row)=>(<button
        onClick={()=>handleGameEdit(row)}>Editar</button>)
    }
   ]
   const handleGameEliminate=(row)=>{
     dispatch(deleteGame(row.game_id))
    }
   const handleGameEdit=(row)=>{
    const aux={
        game_id:row.game_id,
        game_name:row.game_name,
        game_topic:row.game_topic,
        game_image:row.game_image,
        game_difficulty:row.game_difficulty,
    }
    
    setRowGame(aux);
    setIsOpenEditGame(true)
   }
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
    } ,
    {   name:'Eliminar',
        cell:(row)=>(<button
        onClick={()=>handleDocEliminate(row)}>{row.doc_deleted?"Reincorporar":"Eliminar"}</button>)
    },
    {   name:'Editar',
        cell:(row)=>(<button
        onClick={()=>handleDocEdit(row)}>Editar</button>)
    }
   ];

   const handleDocEliminate=(row)=>{
    dispatch(deleteDoc(row.doc_id))
   }
  const handleDocEdit=()=>{
    // setRowDoc(row);
    // setIsOpenEditDoc(true)
  }
    
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
   return(
          <div>
             <EditUser rowUser={rowUser} isOpenEditUser={isOpenEditUser}/>
             {/* <EditGame row={rowGame} opened={isOpenEditGame}/>
             <EditDoc row={rowDoc} opened={isOpenEditDoc}/> */}
             <form onSubmit={handleUsersSubmit}>
                <input
                type="text"
                value={input.inputUser}
                name="inputUser"
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
             responsive
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
             responsive
             theme="dark"
             />
             <form onSubmit={handleDocsSubmit}>
                <input
                type="text"
                value={input.inputDoc}
                name="inputDoc"
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
             responsive
             theme="dark"
             />
             <DataTable
             columns={columnsDonations}
             data={donations}
             title="Donaciones"
             pagination
             paginationComponentOptions={paginationOptions}
             fixedHeader
             fixedHeaderScrollHeight="600px"
             responsive   
             theme="dark"        
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