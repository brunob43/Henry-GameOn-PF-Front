import { VStack } from "@chakra-ui/react";
import React from "react";
import DataTable from "react-data-table-component";


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
        {   name:'      ',
            width:"50px",
            cell:(row)=>(<link to={`/games/${row.doc_id}`}><button>Ir al Doc</button></link>)
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

/>
</VStack>



)}


export default TableLikeDocs