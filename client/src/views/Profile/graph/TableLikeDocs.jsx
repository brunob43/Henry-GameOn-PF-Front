import { VStack } from "@chakra-ui/react";
import React from "react";
import DataTable from "react-data-table-component";


const TableLikeDocs =() =>{
    const array = [
        { id: 1, name: "Memory", difficulty: "easy", topic:"lenguaje"},
        { id: 2, name: "Sopa de letra", difficulty: "easy",topic:"codigo"},
        { id: 3, name: "Crucigrama", difficulty: "medium",topic:"general"},
        { id: 4, name: "Ahorcado", difficulty: "hard",topic:"metodos string"},
        { id: 5, name: "Codigo", difficulty: "medium",topic:"codigo"},

    ]
    const customStyle={
        header: {
            style: {
                fontSize: '25px',
                fontFamily: "cursive,Georgia",
                fontWeight: 'bold',
                paddingLeft: '0 8px',
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
        },
        { 
            name:'DIFFICULTY',
            selector:'difficulty',
            sortable:true,
            width: "120px"
        },
        {   name:'TOPIC',
            selector:'topic',
            sortable:true,
            width: "120px"
        },
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
title="Docs Liked"

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


export default TableLikeDocs