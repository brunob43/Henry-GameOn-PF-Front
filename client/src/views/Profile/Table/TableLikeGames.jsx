import { Button, VStack, useColorMode } from "@chakra-ui/react";
import React from "react";
import DataTable from "react-data-table-component";
import { NavLink } from "react-router-dom";

const TableLikeGames = ({ games }) => {
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

  const columnsGames = [
    {
      name: "ID",
      selector: "game_id",
      sortable: true,
      width: "60px",
      bgColor: "yellow",
    },
    {
      name: "NAME",
      selector: "game_name",
      sortable: true,
      width: "250px",
      bgColor: "yellow",
    },
    {
      name: "         ",
      width: "150px",
      cell: (row) => (
        <Button
          borderColor={colorMode === "dark" ? "yellow" : "black"}
          _hover={
            colorMode === "dark"
              ? { color: "black", bg: "yellow" }
              : { bg: "black", color: "yellow" }
          }
          bg={colorMode === "dark" ? "black" : "yellow"}
          color={colorMode === "dark" ? "white" : "black"}
        >
          {" "}
          <NavLink to={`/games/${row.game_id}`}>Ir al Juego</NavLink>
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
    <VStack bgColor="black" w={["160px","230px", "350px", "450px", "450px"]}>
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
  );
};

export default TableLikeGames;
