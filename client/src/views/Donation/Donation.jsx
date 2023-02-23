import style from "./Donation.module.css";
import coin from "../../styles/images/coin.png";
import mp from "../../styles/images/Mercado-Pago.jpg";
import { payment20, payment50, payment100 } from "../../redux/actions";

const Donation = () => {
  const pay20 = (e) => {
    payment20()();
  };

  const pay50 = (e) => {
    payment50()();
  };

  const pay100 = (e) => {
    payment100()();
  };

  return (
    <div className={style.main}>
      <div className={style.cont}>
        <p className={style.ttl}>💵DONACIONES💰</p>
        <p className={style.msg}>
          Para aportar economicamente al desarrollo del sitio y juntos hacer mas
          contenido y mejoras al espacio HenryGameON
        </p>
        <p className={style.ttl}>↓↓fichas↓↓</p>
        <div className={style.coins}>
          <div onClick={pay20} className={style.coin}>
            <img className={style.imgcoin} src={coin} alt="coin 20"></img>
            <h2>Ayudita</h2>
            <h1>$20</h1>
          </div>
          <div onClick={pay50} className={style.coin}>
            <img className={style.imgcoin} src={coin} alt="coin 50"></img>
            <h2>Manón</h2>
            <h1>$50</h1>
          </div>
          <div onClick={pay100} className={style.coin}>
            <img className={style.imgcoin} src={coin} alt="coin 100"></img>
            <h2>Euforia</h2>
            <h1>$100</h1>
          </div>
        </div>
        <div className={style.textArea}>
          Las fichas corren en{" "}
          <img className={style.mp} src={mp} alt="mp"></img>👌🔒
        </div>
        <p className={style.textAreaS}>
          Son aceptadas tarjetas de debito y credito ya sean Visa, MasterCard o
          American Express. Tambien pago en Rapipago/Pagofacil y mas...
        </p>
        {/* <div className={style.buttons}>
                <button className={style.button}>CANCELAR</button>
                <button className={style.button}>SIGUIENTE →</button>
            </div> */}
      </div>
    </div>
  );
};

export default Donation;