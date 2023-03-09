import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Input, Button, HStack, VStack, FormControl, Text, useColorMode } from "@chakra-ui/react";
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
    getContacts,
    answerMessage,
    //postUser,
    //postDoc,
    //postGame
} from "../../redux/actions"
import EditUser from "./EditUser";
import EditGame from "./EditGame";
import EditDoc from "./EditDoc";
import PostGame from "./PostGame";

const DashboardAdmin = () => {
    const { colorMode } = useColorMode();
    const contacts = useSelector((state) => state.allContacts)
    const users = useSelector((state) => state.users)
    const games = useSelector((state) => state.gamesAd)
    const docs = useSelector((state) => state.docsAd)
    const donations = useSelector((state) => state.donations)
    const [rowUser, setRowUser] = useState({})
    const [rowGame, setRowGame] = useState({})
    const [rowDoc, setRowDoc] = useState({})
    const [isOpenEditUser, setIsOpenEditUser] = useState(false)
    const [isOpenEditGame, setIsOpenEditGame] = useState(false)
    const [isOpenEditDoc, setIsOpenEditDoc] = useState(false)
    const [isOpenPostGame, setIsOpenPostGame] = useState(false)
    const [input, setInput] = useState({
        inputUser: "",
        inputGame: "",
        inputDoc: ""
    })
    const dispatch = useDispatch();

    const handleChange = (e) => {
        console.log(input)
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleUsersSubmit = (e) => {
        e.preventDefault();
        console.log("Buscando")
        dispatch(getNameUsers(input.inputUser));
        setInput({
            ...input,
            inputUser: ""
        })
        console.log(e)
    }
    const handleDocsSubmit = (e) => {
        e.preventDefault();
        dispatch(getNameDocsAd(input.inputDoc));
        setInput({
            ...input,
            inputDoc: ""
        })
    }
    const handleGameSubmit = (e) => {
        e.preventDefault();
        dispatch(getNameGamesAd(input.inputGame));
        setInput({
            ...input,
            inputGame: ""
        })
    }
    const resetUsers = () => {
        console.log("Reset")
        dispatch(getUsers())
    }
    const resetGames = () => {
        dispatch(getGamesAd())
    }
    const resetDocs = () => {
        dispatch(getDocsAd())
    }

    const handleContactAnswer = (row) => {
        dispatch(answerMessage(row.message_id))
    }
    const columnsUsers = [
        {
            name: 'ID',
            selector: (row) => row.user_id,
            sortable: true,
            width: "70px"
        },
        {
            name: 'INTERNAL ID',
            selector: (row) => row.internal_id,
            sortable: true,
            width: "150px"
        },
        {
            name: 'NAME',
            selector: (row) => row.user_name,
            sortable: true,
            width: "200px"
        },
        {
            name: 'EMAIL',
            selector: (row) => row.user_email,
            sortable: true,
            width: "200px"
        },
        // {   name:'Password',
        //     selector:(row)=>row.user_password,
        //     sortable:true,
        //     width: "70px"
        // },
        {
            name: 'IMAGE',
            selector: (row) => row.user_image,
            cell: row => <img height="84px" width="80px" src={row.user_image} />,
            width: "110px"
        },
        {
            name: 'TYPE',
            selector: (row) => row.user_type,
            sortable: true,
            width: "100px"
        },
        {
            name: 'STATE',
            selector: (row) => row.user_state,
            sortable: true,
            width: "100px"
        },
        {
            name: 'ELIMINAR',
            width: "200px",
            cell: (row) => (<Button
                margin="30px"
                size="md"
                height="48px"
                width="250px"
                border="2px"
                borderColor={colorMode === "dark" ? "yellow" : "black"}
                _hover={
                    colorMode === "dark"
                        ? { color: "black", bg: "yellow" }
                        : { bg: "black", color: "yellow" }
                }
                bg={colorMode === "dark" ? "black" : "yellow"}
                color={colorMode === "dark" ? "white" : "black"}
                onClick={() => handleUserEliminate(row)}
            >
                {row.user_deleted ? <Text>Agregar</Text> : <Text>Eliminar</Text>}
            </Button>)
        },
        {
            name: 'EDITAR',

            cell: (row) => (<Button
                margin="20px"
                height="48px"
                width="200px"
                border="2px"
                borderColor={colorMode === "dark" ? "yellow" : "black"}
                _hover={
                    colorMode === "dark"
                        ? { color: "black", bg: "yellow" }
                        : { bg: "black", color: "yellow" }
                }
                bg={colorMode === "dark" ? "black" : "yellow"}
                color={colorMode === "dark" ? "white" : "black"}
                onClick={() => handleUserEdit(row)}
            >
                Detalle/Editar
            </Button>)
        }
    ]
    const handleUserEliminate = (row) => {
        dispatch(deleteUser(row.internal_id))
    }
    const handleUserEdit = (row) => {
        const aux = {
            user_name: row.user_name,
            user_email: row.user_email,
            user_image: row.user_image,
            user_type: row.user_type,
            user_state: row.user_state,
            internal_id: row.internal_id
        }

        setRowUser(aux);
        setIsOpenEditUser(true)
    }

    const columnsGames = [
        {
            name: 'ID',
            selector: 'game_id',
            sortable: true,
            width: "50px"
        },
        {
            name: 'NAME',
            selector: 'game_name',
            sortable: true,
            width: "200px"
        },
        {
            name: 'TOPIC',
            selector: 'game_topic',
            sortable: true,
            width: "100px"
        },
        {
            name: 'DIFFICULTY',
            selector: 'game_difficulty',
            sortable: true,
            width: "120px"
        },
        {
            name: 'VIEWS',
            selector: 'game_views',
            sortable: true,
            width: "100px"
        },
        {
            name: 'IMAGE',
            selector: 'game_image',
            cell: row => <img height="84px" width="80px" src={row.game_image} />,
            width: "110px"
        },
        // {   name:'Deleted',
        //     selector:'game_deleted',
        //     sortable:true,
        //     width: "70px"
        // } ,
        {
            name: 'ELIMINAR',
            width: "150px",
            cell: (row) => (<Button
                margin="20px"
                height="48px"
                width="200px"
                border="2px"
                borderColor={colorMode === "dark" ? "yellow" : "black"}
                _hover={
                    colorMode === "dark"
                        ? { color: "black", bg: "yellow" }
                        : { bg: "black", color: "yellow" }
                }
                bg={colorMode === "dark" ? "black" : "yellow"}
                color={colorMode === "dark" ? "white" : "black"}
                onOpen={() => handleGameEliminate(row)}
            >
                {row.game_deleted ? <Text>Agregar</Text> : <Text>Eliminar</Text>}
            </Button>)
        },
        {
            name: 'EDITAR',
            cell: (row) => (<Button
                height="48px"
                width="200px"
                border="2px"
                borderColor={colorMode === "dark" ? "yellow" : "black"}
                _hover={
                    colorMode === "dark"
                        ? { color: "black", bg: "yellow" }
                        : { bg: "black", color: "yellow" }
                }
                bg={colorMode === "dark" ? "black" : "yellow"}
                color={colorMode === "dark" ? "white" : "black"}
                onClick={() => handleGameEdit(row)}
            >
                Detalle/Editar
            </Button>
            )
        }
    ]
    const handleGameEliminate = (row) => {
        dispatch(deleteGame(row.game_id))
    }
    const handleGameEdit = (row) => {
        const aux = {
            game_id: row.game_id,
            game_name: row.game_name,
            game_topic: row.game_topic,
            game_image: row.game_image,
            game_difficulty: row.game_difficulty,
        }

        setRowGame(aux);
        setIsOpenEditGame(true)
    }
    const columnsDocs = [
        {
            name: 'ID',
            selector: 'doc_id',
            sortable: true,
            width: "50px"
        },
        {
            name: 'NAME',
            selector: 'doc_name',
            sortable: true,
            width: "150px"
        },
        {
            name: 'TOPIC',
            selector: 'doc_topic',
            sortable: true,
            width: "150px"
        },
        {
            name: 'AUTHOR',
            selector: 'doc_author',
            sortable: true,
            width: "120px"
        },
        {
            name: 'CONTENT',
            selector: 'doc_content',
            sortable: true,
            width: "250px"
        },
        {
            name: 'IMAGE',
            selector: 'doc_image',
            width: "110px",
            cell: row => <img height="84px" width="80px" src={row.doc_image} />

        },
        {
            name: 'VIEWS',
            selector: 'doc_views',
            sortable: true,
            width: "100px"
        },
        // {   name:'Deleted',
        //     selector:'game_deleted',
        //     sortable:true,
        //     width: "70px"
        // } ,
        {
            name: 'ELIMINAR',
            width: "150px",
            cell: (row) => (<Button
                margin="20px"
                height="48px"
                width="200px"
                border="2px"
                borderColor={colorMode === "dark" ? "yellow" : "black"}
                _hover={
                    colorMode === "dark"
                        ? { color: "black", bg: "yellow" }
                        : { bg: "black", color: "yellow" }
                }
                bg={colorMode === "dark" ? "black" : "yellow"}
                color={colorMode === "dark" ? "white" : "black"}
                onOpen={() => handleDocEliminate(row)}
            >
                {row.doc_deleted ? <Text>Agregar</Text> : <Text>Eliminar</Text>}
            </Button>)
        },
        {
            name: 'EDITAR',

            cell: (row) => (<Button
                size="md"
                height="48px"
                width="200px"
                border="2px"
                borderColor={colorMode === "dark" ? "yellow" : "black"}
                _hover={
                    colorMode === "dark"
                        ? { color: "black", bg: "yellow" }
                        : { bg: "black", color: "yellow" }
                }
                bg={colorMode === "dark" ? "black" : "yellow"}
                color={colorMode === "dark" ? "white" : "black"}
                onClick={() => handleDocEdit(row)}
            >
                Detalle/Editar
            </Button>
            )
        }
    ];

    const handleDocEliminate = (row) => {
        dispatch(deleteDoc(row.doc_id))
    }
    const handleDocEdit = (row) => {
        const aux = {
            doc_id: row.doc_id,
            doc_name: row.doc_name,
            doc_topic: row.doc_topic,
            doc_image: row.doc_image,
            doc_content: row.doc_content,
        }

        setRowDoc(aux);
        setIsOpenEditDoc(true)
    }

    const columnsDonations = [
        {
            name: 'ID',
            selector: 'donation_id',
            sortable: true,
            width: "120px",
        },
        {
            name: 'Name',
            selector: 'donation_name',
            sortable: true,
            width: "200px"
        },
        {
            name: 'Quantity',
            selector: 'donation_quantity',
            sortable: true,
            width: "250px"
        },
        {
            name: 'Data Id',
            selector: 'donation_data_id',
            sortable: true,
            width: "120px"
        },
        {
            name: 'Status',
            selector: 'donation_status',
            sortable: true,
            width: "120px"
        },
        {
            name: 'Info',
            selector: 'donation_info',
            sortable: true,
            width: "120px"
        },
    ]
    const columnsContact = [
        {
            name: 'ID',
            selector: (row) => row.message_id,
            sortable: true,
            width: "70px"
        },
        {
            name: 'ISSUE',
            selector: (row) => row.message_issue,
            sortable: true,
            width: "200px"
        },
        {
            name: 'MESSAGE CONTENT',
            selector: (row) => row.message_content,
            sortable: true,
            width: "800px"
        },
        {
            name: 'MESSAGE EMAIL',
            selector: (row) => row.message_email,
            sortable: true,
            width: "200px"
        },

        {
            name: 'RESPONDIDO',
            width: "150px",
            cell: (row) => (<Button
                onClick={() => handleContactAnswer(row)}>{row.message_answered ? <Text color="black">Revertir</Text> : <Text color="black">Responder</Text>}</Button>)
        },]

    const paginationOptions = {
        rowsPerPageText: "Filas por página",
        rangeSeparatorText: "de",
        selectAllRowsItem: true,
        selectAllRowsItemText: "Todos"
    }
    const createGame = () => {
        if (isOpenPostGame) {
            setIsOpenPostGame(false)
        } else {
            setIsOpenPostGame(true)
        }
    }
    useEffect(() => {
        dispatch(getContacts())
        dispatch(getUsers());
        dispatch(getDocsAd());
        dispatch(getGamesAd());
        dispatch(getDonations())
    }, [])
    const customStyle = {
        header: {
            style: {
                fontSize: '40px',
                fontFamily: "cursive,Georgia",
                fontWeight: 'bold',
                paddingLeft: '0 8px',
                textAlign: 'center',
            }
        }
    }
    return (
        <div fontFamily="Georgia">
            <EditUser rowUser={rowUser} isOpenEditUser={isOpenEditUser} />
            <EditGame rowGame={rowGame} isOpenEditGame={isOpenEditGame} />
            <EditDoc rowDoc={rowDoc} isOpenEditDoc={isOpenEditDoc} />
            <PostGame isOpenPostGame={isOpenPostGame} />
            <HStack bg="black" alignItems="flex" w="100%" >
                <FormControl alignItems="flex" marginTop='5'>
                    <HStack marginTop='20' bg="black">
                        <Input
                            w="250px"
                            type="text"
                            color="yellow"
                            borderColor='yellow'
                            value={input.inputUser}
                            name="inputUser"
                            placeholder="Buscar usuarios"
                            onChange={handleChange}></Input>
                        <Button
                            borderColor={colorMode === "dark" ? "yellow" : "black"}
                            _hover={
                                colorMode === "dark"
                                    ? { color: "black", bg: "yellow" }
                                    : { bg: "black", color: "yellow" }
                            }
                            bg={colorMode === "dark" ? "black" : "yellow"}
                            onClick={handleUsersSubmit}
                        >
                            Buscar
                        </Button>
                        <Button
                            borderColor={colorMode === "dark" ? "yellow" : "black"}
                            _hover={
                                colorMode === "dark"
                                    ? { color: "black", bg: "yellow" }
                                    : { bg: "black", color: "yellow" }
                            }
                            bg={colorMode === "dark" ? "black" : "yellow"}
                            onClick={resetUsers}
                        >
                            Reset
                        </Button>

                    </HStack>
                </FormControl>
            </HStack>
            <DataTable
                customStyles={customStyle}
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
                <FormControl>
                    <HStack bg="black">
                        <Input
                            w="250px"
                            type="text"
                            color="yellow"
                            borderColor='yellow'
                            value={input.inputGame}
                            name="inputGame"
                            placeholder="Buscar juegos"
                            onChange={handleChange}></Input><Button
                                borderColor={colorMode === "dark" ? "yellow" : "black"}
                                _hover={
                                    colorMode === "dark"
                                        ? { color: "black", bg: "yellow" }
                                        : { bg: "black", color: "yellow" }
                                }
                                bg={colorMode === "dark" ? "black" : "yellow"}
                                onClick={handleGameSubmit}
                            >
                            Buscar
                        </Button>

                        <Button
                            borderColor={colorMode === "dark" ? "yellow" : "black"}
                            _hover={
                                colorMode === "dark"
                                    ? { color: "black", bg: "yellow" }
                                    : { bg: "black", color: "yellow" }
                            }
                            bg={colorMode === "dark" ? "black" : "yellow"}
                            onClick={resetGames}
                        >
                            Reset
                        </Button>
                        <Button
                            borderColor={colorMode === "dark" ? "yellow" : "black"}
                            _hover={
                                colorMode === "dark"
                                    ? { color: "black", bg: "yellow" }
                                    : { bg: "black", color: "yellow" }
                            }
                            bg={colorMode === "dark" ? "black" : "yellow"}
                            onClick={createGame}
                        >
                            New Game
                        </Button>
                    </HStack>
                </FormControl>
            </HStack>
            <DataTable
                customStyles={customStyle}
                columns={columnsGames}
                data={games}
                title="Juegos"
                pagination
                paginationComponentOptions={paginationOptions}
                fixedHeader
                fixedHeaderScrollHeight="600px"
                responsive={true}
                theme="dark"
                highlightOnHover
                pointerOnHover
            />
            <HStack bg="black" alignItems="flex-start" w="100%" justify="center">
                <FormControl alignItems="flex-start">
                    <HStack>
                        <Input
                            w="250px"
                            type="text"
                            color="yellow"
                            borderColor='yellow'
                            value={input.inputDoc}
                            name="inputDoc"
                            placeholder="Buscar Docs"
                            onChange={handleChange}></Input><Button
                                borderColor={colorMode === "dark" ? "yellow" : "black"}
                                _hover={
                                    colorMode === "dark"
                                        ? { color: "black", bg: "yellow" }
                                        : { bg: "black", color: "yellow" }
                                }
                                bg={colorMode === "dark" ? "black" : "yellow"}
                                onClick={handleDocsSubmit}
                            >
                            Buscar
                        </Button>
                        <Button
                            borderColor={colorMode === "dark" ? "yellow" : "black"}
                            _hover={
                                colorMode === "dark"
                                    ? { color: "black", bg: "yellow" }
                                    : { bg: "black", color: "yellow" }
                            }
                            bg={colorMode === "dark" ? "black" : "yellow"}
                            onClick={resetDocs}
                        >
                            Reset
                        </Button>
                    </HStack>
                </FormControl>
            </HStack>
            <DataTable
                customStyles={customStyle}
                columns={columnsDocs}
                data={docs}
                title="Documentos"
                pagination
                paginationComponentOptions={paginationOptions}
                fixedHeader
                fixedHeaderScrollHeight="600px"
                responsive={true}
                theme="dark"
                highlightOnHover
                pointerOnHover
            />
            <HStack bg="black" alignItems="flex-start" w="100%" justify="center"></HStack>
            <FormControl alignItems="flex-start">
                <HStack bg="black">
                    <Button bg="black" _hover="none"></Button>
                </HStack>
            </FormControl>
            <DataTable
                customStyles={customStyle}
                columns={columnsDonations}
                data={donations}
                title="Donaciones"
                pagination
                paginationComponentOptions={paginationOptions}
                fixedHeader
                fixedHeaderScrollHeight="600px"
                responsive={true}
                theme="dark"
                highlightOnHover
                pointerOnHover
            />

            <HStack bg="black" alignItems="flex-start" w="100%" justify="center"></HStack>
            <FormControl alignItems="flex-start">
                <HStack bg="black">
                    <Button bg="black" _hover="none"></Button>
                </HStack>
            </FormControl>
            <DataTable
                customStyles={customStyle}
                columns={columnsContact}
                data={contacts}
                title="Mensajes"
                pagination
                paginationComponentOptions={paginationOptions}
                fixedHeader
                fixedHeaderScrollHeight="600px"
                responsive={true}
                theme="dark"
                highlightOnHover
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