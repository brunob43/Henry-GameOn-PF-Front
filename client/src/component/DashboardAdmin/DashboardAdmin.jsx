import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import {Input, Button,HStack,VStack,Form}from "@chakra-ui/react";
import {
    getUsers,
    getNameUsers,
   
    getGamesAd,
    getNameGamesAd,
    getDocsAd,
    getNameDocsAd,
    getDonations,
    deleteUser,
    deleteGame,
    deleteDoc, 
    //postUser,
    //postDoc,
    //postGame
} from "../../redux/actions"
import EditUser from "./EditUser";
import EditGame from "./EditGame";
import EditDoc from "./EditDoc";
import PostGame from "./PostGame";

const DashboardAdmin =()=>{
   const users = useSelector((state)=>state.users)
   const games = useSelector((state)=>state.gamesAd)
   const docs = useSelector((state)=>state.docsAd)
   const donations = useSelector((state)=>state.donations)
   const [rowUser,setRowUser]=useState({})
    const [rowGame,setRowGame]=useState({})
    const [rowDoc,setRowDoc]=useState({})
   const [isOpenEditUser,setIsOpenEditUser]=useState(false)
    const [isOpenEditGame,setIsOpenEditGame]=useState(false)
    const [isOpenEditDoc,setIsOpenEditDoc]=useState(false)
    const [isOpenPostGame ,setIsOpenPostGame]=useState(false)
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
    {   name:'INTERNAL ID',
        selector:(row)=>row.internal_id,
        sortable:true,
        width: "150px"
    },
    { 
        name:'NAME',
        selector:(row)=>row.user_name,
        sortable:true,
        width: "200px"
    },
    {   name:'EMAIL',
        selector:(row)=>row.user_email,
        sortable:true,
        width: "200px"
    },
    // {   name:'Password',
    //     selector:(row)=>row.user_password,
    //     sortable:true,
    //     width: "70px"
    // },
    {   name:'IMAGE',
        selector:(row)=>row.user_image,
        sortable:true,
        width: "150px"
    },
    {   name:'TYPE',
        selector:(row)=>row.user_type,
        sortable:true,
        width: "70px"
    },
    {   name:'STATE',
        selector:(row)=>row.user_state,
        sortable:true,
        width: "70px"
    },
    {   name:'ELIMINAR',
        width:"150px",
        cell:(row)=>(<Button
        onClick={()=>handleUserEliminate(row)}>{row.user_deleted?"Reincorporar":"Eliminar"}</Button>)
    },
    {   name:'EDITAR',
        width:"150px",
        cell:(row)=>(<Button
        onClick={()=>handleUserEdit(row)}>Detalle/Editar</Button>)
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
        width: "50px"
    },
    { 
        name:'NAME',
        selector:'game_name',
        sortable:true,
        width: "200px"
    },
    {   name:'TOPIC',
        selector:'game_topic',
        sortable:true,
        width: "100px"
    },
    {   name:'IMAGE',
        selector:'game_image',
        sortable:true,
        width: "200px"
    },
    {   name:'DIFFICULTY',
        selector:'game_difficulty',
        sortable:true,
        width: "120px"
    },
    {   name:'VIEWS',
        selector:'game_views',
        sortable:true,
        width: "100px"
    },
    // {   name:'Deleted',
    //     selector:'game_deleted',
    //     sortable:true,
    //     width: "70px"
    // } ,
    {   name:'ELIMINAR',
        width:"150px",
        cell:(row)=>(<Button
        onClick={()=>handleGameEliminate(row)}>{row.game_deleted?"Reincorporar":"Eliminar"}</Button>)
    },
    {   name:'EDITAR',
        width:"150px",
        cell:(row)=>(<Button
        onClick={()=>handleGameEdit(row)}>Detalle/Editar</Button>)
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
        width: "50px"
    },
    { 
        name:'NAME',
        selector:'doc_name',
        sortable:true,
        width: "150px"
    },
    {   name:'TOPIC',
        selector:'doc_topic',
        sortable:true,
        width: "150px"
    },
    {   name:'AUTHOR',
        selector:'doc_author',
        sortable:true,
        width: "120px"
    },
    {   name:'CONTENT',
        selector:'doc_content',
        sortable:true,
        width: "250px"
    },
    {   name:'IMAGE',
        selector:'doc_image',
        sortable:true,
        width: "150px"
    },
    {   name:'VIEWS',
        selector:'doc_views',
        sortable:true,
        width: "100px"
    },
    // {   name:'Deleted',
    //     selector:'game_deleted',
    //     sortable:true,
    //     width: "70px"
    // } ,
    {   name:'ELIMINAR',
        width:"150px",
        cell:(row)=>(<Button
        onClick={()=>handleDocEliminate(row)}>{row.doc_deleted?"Reincorporar":"Eliminar"}</Button>)
    },
    {   name:'EDITAR',
        width:"150px",
        cell:(row)=>(<Button
        onClick={()=>handleDocEdit(row)}>Detalle/Editar</Button>)
    }
   ];

   const handleDocEliminate=(row)=>{
    dispatch(deleteDoc(row.doc_id))
   }
  const handleDocEdit=(row)=>{
    const aux={
        doc_id:row.doc_id,
        doc_name:row.doc_name,
        doc_topic:row.doc_topic,
        doc_image:row.doc_image,
        doc_content:row.doc_content,
    }

    setRowDoc(aux);
    setIsOpenEditDoc(true)
  }
    
   const columnsDonations=[
    {
        name:'ID',
        selector:'donation_id',
        sortable:true,
        width: "50px",
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
   const createGame =()=>{
    if(isOpenPostGame){
        setIsOpenPostGame(false)
    }else{
        setIsOpenPostGame(true)
    }
   }
   useEffect(()=>{
      dispatch(getUsers());
      dispatch(getDocsAd());
      dispatch(getGamesAd());
      dispatch(getDonations())
   },[])  
   return(
          <div>
             <EditUser rowUser={rowUser} isOpenEditUser={isOpenEditUser}/>
             <EditGame rowGame={rowGame} isOpenEditGame={isOpenEditGame}/>
             <EditDoc rowDoc={rowDoc} isOpenEditDoc={isOpenEditDoc}/>
             <PostGame isOpenPostGame={isOpenPostGame}/>
             <HStack alignItems="flex" w="100%">
             <Form alignItems="flex" onSubmit={handleUsersSubmit}>
                <Input
                w ="250px"gi
                type="text"
                value={input.inputUser}
                name="inputUser"
                placeholder="Buscar usuarios"
                onChange={handleChange}></Input><Button type="submit">Buscar</Button>
                <Button onClick={resetUsers}>Reset</Button>
             </Form>
             </HStack>
             <DataTable
             columns={columnsUsers}
             data={users}
             title="Usuarios"
             
             pagination
             paginationComponentOptions={paginationOptions}
             fixedHeader
             fixedHeaderScrollHeight="600px"
             theme="dark"
             responsive={true}
             highlightOnHover
		     pointerOnHover
             />
            <HStack alignItems="flex-start" w="100%" justify="center">
             <Form onSubmit={handleGameSubmit}>
                <Input
                w ="250px"
                type="text"
                value={input.inputGame}
                name="inputGame"
                placeholder="Buscar juegos"
                onChange={handleChange}></Input><Button type="submit">Buscar</Button>
                <Button onClick={resetGames}>Reset</Button>
                <Button onClick={createGame}>New Game</Button>
             </Form>
            </HStack>
             <DataTable
             columns={columnsGames}
             data={games}
             title="Juegos"
             pagination
             paginationComponentOptions={paginationOptions}
             fixedHeader
             fixedHeaderScrollHeight="600px"
             responsive = {true}
             theme="dark"
             />
             <HStack alignItems="flex-start" w="100%" justify="center">
             <Form alignItems="flex-start" onSubmit={handleDocsSubmit}>
                <Input
                w ="250px"
                type="text"
                value={input.inputDoc}
                name="inputDoc"
                placeholder="Buscar Docs"
                onChange={handleChange}></Input><Button type="submit">Buscar</Button>
                <Button onClick={resetDocs}>Reset</Button>
             </Form>
             </HStack>
             <DataTable
             columns={columnsDocs}
             data={docs}
             title="Documentos"
             pagination
             paginationComponentOptions={paginationOptions}
             fixedHeader
             fixedHeaderScrollHeight="600px"
             responsive={true}
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
             responsive = {true}   
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