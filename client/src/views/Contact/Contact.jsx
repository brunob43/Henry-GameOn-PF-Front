import React from "react";
import style from "./Contact.module.css";
import { postMessage } from "../../redux/actions";
import { useState } from "react";

export default function ContactUs(){
  const [input, setInput]= useState({
    message_issue: "",
    message_content: "",
    message_email: ""
  })
  const [error,setError]= useState({});

  const validate=(input)=>{
    let error={};
    if (!input.message_issue){
      error.issue = '*Obligatory field';
    } 
    if (!input.message_email) {
      error.email= '*Obligatory field';
    } 
    if(!(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/).test(input.message_email)){
      error.email= "Invalid email"
    }
    if (!input.message_content) {
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
    console.log(input)
    e.preventDefault();
    if(Object.keys(error).length===0&&input.email!=="")
    postMessage(input);
    alert("Su mensaje fue recibido con éxito");
    setInput({
      message_issue: "",
      message_content: "",
      message_email: ""
    });
    window.location.href="https://henry-pf-front.vercel.app/"
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
        name="message_issue"
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
        name="message_email"
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
        <textarea onChange={handlerInputChange} className={style.textarea} id="message" name="message_content" required=""></textarea>
        {error.content?(<div><p>{error.content}</p>
                            </div>):(<br></br>)}
              <br></br>
        <div>
        <button disabled={!Object.keys(error).length&&input.message_email!==""?false:true} className={style.button} type= 'submit'>SEND</button>
        </div>

      </form>

    </div>
    </div>
  )
}