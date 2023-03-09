import { VStack } from "@chakra-ui/react";
import React from "react";
import DataTable from "react-data-table-component";


const TableLikeGames =({games}) =>{
   
    const customStyle={
        header: {
            style: {
                fontSize: '25px',
                fontFamily: "cursive,Georgia",
                fontWeight: 'bold',
                padding: '10px',
                textAlign: 'center',
              }
        }
       }

       const columnsGames=[
        {
            name:'ID',
            selector:'game_id',
            sortable:true,
            width: "60px"
        },
        {   name:'NAME',
            selector:'game_name',
            sortable:true,
            width: "250px"
        },
        {   name:'         ',
            width:"150px",
            cell:(row)=>(<NavLink to={`/games/${row.game_id}`}>Ir al Juego</NavLink>)
    }
        
       ]
       const paginationOptions={
        rowsPerPageText:"Filas por página",
        rangeSeparatorText: "de",
        selectAllRowsItem: true,
        selectAllRowsItemText: "Todos"
     }

return (

<VStack>
<DataTable
customStyles={customStyle}
columns={columnsGames}
data={games}
title="Games Liked"

pagination
paginationComponentOptions={paginationOptions}
fixedHeader
fixedHeaderScrollHeight="600px"
theme="dark"
responsive={true}
highlightOnHover
pointerOnHover
/>
</VStack>



)}


export default TableLikeGames