import style from "./Register.module.css";

const Register = () => {
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
                <input type="text" placeholder="Enter your usuario" required></input>
                <div className="error"></div>
              </div>

              <div className={style.inputbox}>
                <span className={style.details}>Email</span>
                <input type="text" placeholder="Enter your e-mail" required ></input>
                <div className="error"></div>
              </div>

              <div className={style.inputbox}>
                <span className={style.details}>Contraseña</span>
                <input type="text" placeholder="Enter your contraseña" required ></input>
                <div className="error"></div>
              </div>

              <div className={style.inputbox}>
                <span className={style.details}>Confirmar Contraseña</span>
                <input type="text" placeholder="Confirm your contraseña"required></input>
                <div className="error"></div>
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

export default Register;
