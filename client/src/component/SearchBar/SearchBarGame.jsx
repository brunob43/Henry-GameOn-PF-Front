//import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameGames } from "../../redux/actions"
import style from "./SearchBar.module.css";

export default function SearchBarGame() {
    const dispatch = useDispatch()
    const [name, setName] = useState("")

    function handlerInputChange(e) {
        e.preventDefault()
        setName(e.target.value)
    }


    function handleSubmit(e) {
        e.preventDefault()
       dispatch(getNameGames(name))  
    }

    return (
        <div className={style.container}>
            <input className={style.input}
                type="text"
                placeholder="Search game..."
                onChange={(e) => handlerInputChange(e)}
            ></input>
            <button className={style.button}
                type="submit"
                onClick={(e) => handleSubmit(e)}
            ></button>
        </div>
    )
}