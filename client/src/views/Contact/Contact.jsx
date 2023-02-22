import React from "react";
import style from "./Contact.module.css";
import{useHistory} from 'react-router-dom';
import { postMessage } from "../../redux/actions";
 import {useDispatch} from "react-redux";
 import { useState } from "react";

export default function ContactUs(){
  const history = useHistory();
  const dispatch = useDispatch();
  const [input, setInput]= useState({
    issue: "",
    content: "",
    email: ""
  })
  const [error,setError]= useState({});

  const validate=(input)=>{
    let error={};
    if (!input.issue){
      error.issue = '*Obligatory field';
    } 
    if (!input.email) {
      error.email= '*Obligatory field';
    } 
    if(!(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/).test(input.email)){
      error.email= "Invalid email"
    }
    if (!input.content) {
     error.content= '*Obligatory field';
    }
 return error;
  }

  const handlerInputChange =(e)=>{
    setInput({
      ...input,
      [e.target.name]:e.target.value
     });
     setError(validate({
      ...input,
       [e.target.name]: e.target.value
     }));
  }

  const handleSubmit=(e)=>{
    console.log("submit")
    e.preventDefault();
    if(Object.keys(error).length===0&&input.email!=="")
    dispatch(postMessage(input));
    setInput({
      issue: "",
      content: "",
      email: ""
    });
    history.push("/home")
  }
  return(
    <div className={style.body}>
    <div className={style.container}>
      <div className={style.title}>
        <h1>Contact Us</h1>
      </div>
      <form className={style.form} onSubmit={handleSubmit}>
        <label>Issue:</label>
        <input
        onChange={handlerInputChange}
        autoComplete="off"
        type= "text"
        name="name"
        placeholder="Escribe tu nombre"
        required
        />
        {error.issue?(<div><p>{error.issue}</p>
                            </div>):(<br></br>)}
              <br></br>

        <label>Email:</label>
        <input
        onChange={handlerInputChange}
        autoComplete="off"
        type= "text"
        name="email"
        placeholder="Escribe tu email"
        required
        />
         {error.email?(<div><p>{error.email}</p>
                            </div>):(<br></br>)}
              <br></br>

        {/* <label>Phone:</label>
        <input
        autoComplete="off"
        type= "tel"
        name="phone"
        placeholder="Phone"
        required
        /> */}

         <label>Message:</label>
        <textarea onChange={handlerInputChange} className={style.textarea} id="message" name="message" required=""></textarea>
        {error.content?(<div><p>{error.constent}</p>
                            </div>):(<br></br>)}
              <br></br>
        <div>
        <button disabled={!Object.keys(error).length&&input.email!==""?false:true} className={style.button} type= 'submit'>SEND</button>
        </div>

      </form>

    </div>
    </div>
  )
}