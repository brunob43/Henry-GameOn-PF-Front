import React from "react";
import style from "./Register.module.css";
import { Link, useHistory } from "react-router-dom";
import { postUser } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function Register() {
  function validate(input) {
    let errors = {};
    if (!input.name) {
      errors.name = "*Campo obligatorio";
    }
    if (!input.email) {
      errors.email = "*Campo obligatorio";
    }
    if (!input.contraseña) {
      errors.contraseña = "*Campo obligatorio";
    }
    return errors;
  }

  const dispatch = useDispatch();
  const history = useHistory();
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: "",
    email: "",
    contraseña: "",
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    console.log(input);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postUser(input));
    alert("Te has registrado con exito");
    setInput({
      name: " ",
      email: " ",
      contraseña: " ",
    });
    history.pushState("/home");
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
        <form className={style.form} onSubmit={(e) => handleSubmit(e)}>
          <div className={style.inputName}>
            <div className={style.titleName}>
              <label className={style.label}>Nombre del usuario:</label>
              <input
                autoComplete="off"
                type="text"
                value={input.name}
                name="name"
                placeholder="Escribe tu nombre"
                required
                onChange={(e) => handleChange(e)}
              />
              {errors.name && <div className={style.error}>{errors.name}</div>}
            </div>
            <div className={style.titleEmail}>
              <label className={style.labelEmail}>E-mail</label>
              <input
                autoComplete="off"
                type="email"
                value={input.email}
                name="email"
                placeholder="email"
                required
                onChange={(e) => handleChange(e)}
              />
              {errors.email && (
                <div className={style.error}>{errors.email}</div>
              )}
            </div>

            <div className={style.titleContraseña}>
              <label className={style.labelContraseña}>Contraseña</label>
              <input
                type="password"
                autoComplete="off"
                value={input.contraseña}
                name="contraseña"
                id="contraseña"
                placeholder="password"
                required
                onChange={(e) => handleChange(e)}
              />
              {errors.contraseña && (
                <div className={style.error}>{errors.contraseña}</div>
              )}
            </div>
            <div className={style.title3}>
              <h3>Recibiras confirmación del registro por email</h3>
            </div>
            <div className={style.title4}>
              <button className={style.button} type="submit">
                Registrarme
              </button>
            </div>
            <div className={style.title5}>
              <h4>ó</h4>
            </div>
          </div>
        </form>
        <Link className="LinkForm" to="/">
          <button className={style.button2}>Go Home</button>
        </Link>
      </div>
    </div>
  );
}
