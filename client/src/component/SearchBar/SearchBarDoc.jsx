import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameDocs } from "../../redux/actions";
import style from "./SearchBar.module.css";

export default function SearchBarDoc() {
    const dispatch = useDispatch()
    const [name, setName] = useState("")

    function handlerInputChange(e) {
        e.preventDefault()
        setName(e.target.value)
    }


    function handleSubmit(e) {
        e.preventDefault()
       dispatch(getNameDocs(name))
    }

    return (
        <div className={style.container}>
            <input className={style.input}
                type="text"
                placeholder="Search doc..."
                onChange={(e) => handlerInputChange(e)}
            />
            <button className={style.button}
                type="submit"
                onClick={(e) => handleSubmit(e)}
            ></button>
        </div>
    )
}