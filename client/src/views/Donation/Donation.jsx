import style from "./Donation.module.css"
import coin from "../../styles/images/coin.png"

const Donation = () =>{
    return(
        <div className={style.main}>
        <div className={style.cont}>
            <h1>DONACIONES</h1>
            <h2>Para aportar a los desarrolladores </h2>
            <div className={style.coins}>
                <div className={style.coin}>
                    <img src={coin} alt="coin"></img>
                    <h2>ayudita</h2>
                    <h1>$20</h1>
                </div>
                <div className={style.coin}>
                <img src={coin} alt="coin"></img>
                    <h2>manon</h2>
                    <h1>$50</h1>
                </div>
                <div className={style.coin}>
                <img src={coin} alt="coin"></img>
                    <h2>euforia</h2>
                    <h1>$100</h1>
                </div>
            </div>
            <h3 className={style.textArea}>Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.</h3>
            <div className={style.buttons}>
                <button className={style.button}>CANCELAR</button>
                <button className={style.button}>SIGUIENTE →</button>
            </div>
        </div>
        </div>
    )
}

export default Donation;