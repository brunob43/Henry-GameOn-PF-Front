import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameGames } from "../../redux/actions"


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
        <div style={{ marginRight: '20px' }}>
            <input
                type="text"
                placeholder="Search game..."
                onChange={(e) => handlerInputChange(e)}
                style={{
                    marginLeft: '20px',
                    padding: '10px 15px 10px 15px',
                    backgroundColor: '#00000094',
                    color: 'white',
                    borderRadius: '50px',
                    textDecoration: 'none',
                    outline: 'none',
                    border: '1px solid rgba(255, 255, 255, 0.172)'
                }}
            />
            <button
                type="submit"
                onClick={(e) => handleSubmit(e)}
                style={{
                    marginLeft: '20px',
                    padding: '10px 15px 10px 15px',
                    backgroundColor: 'rgb(255, 255, 0)',
                    borderRadius: '50px',
                    color: 'black',
                    textDecoration: 'none',
                }}
                disabled={name===""}
            >Search</button>
        </div>
    )
}