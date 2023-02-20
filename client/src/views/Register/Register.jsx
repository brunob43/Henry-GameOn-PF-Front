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
    <>
      <div className={style.hmregister}>
        <div className={style.container}>
          <div className={style.title}>HenryGameOn</div>
          <div className={style.title}>Registrate para ingresar</div>
          <form action="#">
            <div className={style.details}>
              <div className={style.inputbox}>
                <span className={style.details}>Nombre de usuario</span>
                <input
                  type="text"
                  placeholder="Enter your usuario"
                  required
                ></input>
              </div>

              <div className={style.inputbox}>
                <span className={style.details}>Email</span>
                <input
                type="text"
                placeholder="Enter your e-mail"
                required
              ></input>
            </div>

            <div className={style.inputbox}>
              <span className={style.details}>Contraseña</span>
              <input
                type="text"
                placeholder="Enter your contraseña"
                required
              ></input>
            </div>

            <div className={style.inputbox}>
              <span className={style.details}>Confirmar Contraseña</span>
              <input
                type="text"
                placeholder="Confirm your contraseña"
                required
              ></input>
            </div>
          </div>
          <div>
            <span className={style.titler}>
              Recibiras un mail al registrarte
            </span>
          </div>
          <div className={style.btn}>
            <input type="submit" value="Registrarme" required></input>
          </div>
          <div>
            <a href="">¿Has olvidado tu contraseña?</a>
              
            </div>
          </form>
        </div>
      </div>
    </>
  );
};



