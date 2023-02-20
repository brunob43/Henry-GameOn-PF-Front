import React from "react";
import style from "./Contact.module.css";
//import{Link,useHistory} from 'react-router-dom';
// import { postUser } from "../../redux/actions";
 //import {useDispatch} from "react-redux";
 //import { useState } from "react";

export default function Register(){
 
  return(
    <div className={style.body}>
    <div className={style.container}>
      <div className={style.title}>
        <h1>Contact Us</h1>
      </div>
      <form className={style.form}>
        <label>Name:</label>
        <input
        autoComplete="off"
        type= "text"
        name="name"
        placeholder="Escribe tu nombre"
        required
        />

        <label>Email:</label>
        <input
        autoComplete="off"
        type= "text"
        name="email"
        placeholder="Escribe tu email"
        required
        />

        <label>Phone:</label>
        <input
        autoComplete="off"
        type= "tel"
        name="phone"
        placeholder="Phone"
        required
        />

         <label>Message:</label>
        <textarea className={style.textarea} id="message" name="message" required=""></textarea>
        <div>
        <button className={style.button} type= 'submit'>SEND</button>
        </div>

      </form>

    </div>
    </div>
  )
}