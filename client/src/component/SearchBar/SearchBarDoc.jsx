import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameDocs } from "../../redux/actions";


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
        <div style={{ marginRight: '20px' }}>
            <input
                type="text"
                placeholder="Search..."
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
                    backgroundColor: 'rgb(255,255,0)',
                    borderRadius: '50px',
                    color: 'white',
                    textDecoration: 'none'
                }}
            >Search</button>
        </div>
    )
}