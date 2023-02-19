import React, {useState,useEffect} from "react";
import style from "./Register.module.css";
import{Link,useHistory} from 'react-router-dom';
import { postUser } from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";


// function validate(input){
//   let errors={};
//   if (!input.name){
//     errors.name = 'Se requiere un Nombre';
//   } else if (!input.email) {
//     errors.email= 'Email debe ser completado'
//   }
//}
export default function Register(){
  const dispatch =useDispatch()
  const history= useHistory()
  const [errors,setErrors]= useState({});

  const[input,setInput] = useState({
    name: "",
    email:"",
    contraseña:"",
  })

  function handleChange(e){
    setInput({
      ...input,
      [e.target.name] : e.target.value
    })
    // setErrors(validate({
    //   ...input,
    //   [e.target.name]: e.target.value
    // }));
    console.log(input)
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log(input)
    dispatchEvent(postUser(input))
    alert ("Te has registrado con exito")
    setInput({
      name:" ",
      email: " ",
      contraseña: " ",
    })
    history.pushState('/home')

  }
  return (
   <div className={style.body}>
    <div className={style.container}>
    <div className={style.title}>
    <h1>Henry GameOn</h1>
    </div>
    <div className={style.title2}>
    <h2>Registrate para ingresar a nuestra plataforma</h2>
    </div>
    <form onSubmit={(e)=>handleSubmit(e)}>
      <div className={style.inputName}>
        <label>Nombre del usuario:</label>
        <input
        type= "text"
        value= {input.name}
        name="name"
        onChange={(e)=>handleChange(e)}
        />
        {errors.name && (
          <p className="error">{errors.name}</p>
        )}
        <div className={style.titleEmail}>
          <label>E-mail</label>
          <input
          type="email"
          value={input.email}
          name= "email"
          onChange={(e)=>handleChange(e)}
          />
        </div>

        <div className={style.titleContraseña}>
          <label>Contraseña</label>
          <input
          type="contraseña"
          value={input.contraseña}
          name= "contraseña"
          onChange={(e)=>handleChange(e)}
          />
        </div>
        <div className={style.title3}>
          <h3>Recibiras confirmación del registro por email</h3>
        </div >
        <div className={style.title4}>
        <button type= 'submit'>Registrarme</button>
        </div>
        <div>
          <h4>ó</h4>
        </div>
      </div>
    </form>
    <Link className= "LinkForm" to= '/home'><button>Go Home</button></Link>
    </div>
   </div>
  )
}
