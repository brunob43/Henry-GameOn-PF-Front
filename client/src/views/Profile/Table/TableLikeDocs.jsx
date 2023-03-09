import { VStack,Link } from "@chakra-ui/react";
import React from "react";
import DataTable from "react-data-table-component";
import { NavLink } from "react-router-dom"; 


const TableLikeDocs =({docs}) =>{
  
    const customStyle={
        header: {
            style: {
                fontSize: '25px',
                fontFamily: "cursive,Georgia",
                fontWeight: 'bold',
                padding: "10px",
                textAlign: 'center',
              }
        }
       }

       const columnsDocs=[
        {
            name:'ID',
            selector:'doc_id',
            sortable:true,
            width: "60px"
        },
        {   name:'NAME',
            selector:'doc_name',
            sortable:true,
            width: "130px"
        },
        {   name:'         ',
            width:"70px",
            cell:(row)=>(<NavLink to={`/games/${row.doc_id}`}>Ir al Doc</NavLink>)
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
columns={columnsDocs}
data={docs}
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