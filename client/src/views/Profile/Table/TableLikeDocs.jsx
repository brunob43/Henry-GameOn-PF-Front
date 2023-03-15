import { VStack, Button, useColorMode } from "@chakra-ui/react";
import React from "react";
import DataTable from "react-data-table-component";
import { NavLink } from "react-router-dom";

const TableLikeDocs = ({ docs }) => {
  const { colorMode } = useColorMode();
  const customStyle = {
    header: {
      style: {
        color: "yellow",
        fontSize: "25px",
        fontFamily: "cursive,Georgia",
        fontWeight: "bold",
        padding: "10px",
        textAlign: "center",
      },
    },
  };

  const columnsDocs = [
    {
      name: "ID",
      selector: "doc_id",
      sortable: true,
      width: "60px",
    },
    { name: "NAME", selector: "doc_name", sortable: true, width: "250px" },
    {
      name: "         ",
      width: "150px",

      cell: (row) => (
        <Button borderColor={colorMode === "dark" ? "yellow" : "black"}
        _hover={
            colorMode === "dark"
                ? { color: "black", bg: "yellow" }
                : { bg: "black", color: "yellow" }
        }
        bg={colorMode === "dark" ? "black" : "yellow"}
        color={colorMode === "dark" ? "white" : "black"}>
          <NavLink to={`/doc/${row.doc_id}`}>Ir al Doc</NavLink>
        </Button>
      ),
    },
  ];

  const paginationOptions = {
    rowsPerPageText: "Filas por página",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos",
  };

  return (
    <VStack bgColor="black" w={["160px", "230px", "350px", "450px", "450px"]}>
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
  );
};

export default TableLikeDocs;
