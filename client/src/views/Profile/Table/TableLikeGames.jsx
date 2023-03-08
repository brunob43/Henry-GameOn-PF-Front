import { VStack } from "@chakra-ui/react";
import React from "react";
import DataTable from "react-data-table-component";


const TableLikeGames =() =>{
    const array = [
        { id: 1, name: "Memory"},
        { id: 2, name: "Sopa de letra"},
        { id: 3, name: "Crucigrama"},
        { id: 4, name: "Ahorcado"},
        { id: 5, name: "Codigo"}

    ]
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

       const columnsUsers=[
        {
            name:'ID',
            selector:'id',
            sortable:true,
            width: "60px"
        },
        {   name:'NAME',
            selector:'name',
            sortable:true,
            width: "130px"
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
columns={columnsUsers}
data={array}
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