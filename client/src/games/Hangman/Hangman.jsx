import Hangman0 from "./Img/img0.png"
import Hangman1 from "./Img/img1.png"
import Hangman2 from "./Img/img2.png"
import Hangman3 from "./Img/img3.png"
import Hangman4 from "./Img/img4.png"
import Hangman5 from "./Img/img5.png"
import Hangman6 from "./Img/img6.png"
import Hangman7 from "./Img/img7.png"
import style from "./Hangman.module.css"
  
const Hangman= () =>{

    function id( str ){
        return document.getElementById( str );
        
    }

    function obtener_random( num_min, num_max ){
        const amplitud_valores = num_max - num_min; //valor más alto - valor más bajo del random... (7 - 0)
        const valor_al_azar = Math.floor( Math.random( ) * amplitud_valores ) + num_min; /* 5 - 15 = 10 + 5 */
        return valor_al_azar;
    }

    /* fin del juego */
    function game_over( ){
        const btn_letras = document.querySelectorAll( "#letra" );
        console.log(btn_letras)
        for( let i = 0; i < btn_letras.length ; i++ ){
            btn_letras[ i ].disabled = true;
        }
        const btnStart = document.querySelector('#jugar');
        console.log(btnStart);
        // btnStart.disabled = false;
    }

    let palabrita;
    let cant_errores = 0; //cuantas veces me equivoqué
    let cant_aciertos = 0; //cuantas letras acerté

    const palabras = [
        'length',     /* 0 */
        'concat',     /* 1 */
        'typeOf',    /* 2 */
        'slice',       /* 3 */
        'toLowerCase',     /* 4 */
        'toUpperCase',       /* 5 */
        'indexOf',   /* 6 */
        'charAt'     /* 7 */
    ];
    const btnStart = id('jugar');
    const imagen = id('imagen');
    const btn_letras = document.querySelectorAll( "#letra" );
    console.log(btn_letras);
    var resultado
    const HangmanArray = [Hangman0, Hangman1,Hangman2,Hangman3,Hangman4,Hangman5,Hangman6,Hangman7]

    function slowAlertWin() {
        alert("YOU WIN!! WIIIII");
    }

    function slowAlertLoose() {
        alert("You loose... The word was " + palabrita);
    }

    /* click en iniciar juego */
    function iniciar(event){
        console.log();
        const imagen = id('imagen');
        console.log(imagen);
        const btn_letras = document.querySelectorAll( "#letra" );
        console.log(btn_letras)
        imagen.src = Hangman0;
        // event.target.disabled = true;
        cant_errores = 0;
        cant_aciertos = 0; 

        const parrafo = document.getElementById( 'palabra_a_adivinar' );
        parrafo.innerHTML = ''; 

        const cant_palabras = palabras.length;
        const valor_al_azar = obtener_random( 0, cant_palabras );

        palabrita = palabras[ valor_al_azar ];
        console.log( palabrita );
        const cant_letras = palabrita.length;

        for( let i = 0; i < btn_letras.length ; i++ ){
        btn_letras[ i ].disabled = false;
        }

        for( let i = 0; i < cant_letras; i++ ){
            const span = document.createElement( 'span' );
            parrafo.appendChild( span );
        }

    }

    /* click de adivinar letra */
    for( let i = 0; i < btn_letras.length ; i++ ){
        btn_letras[ i ].addEventListener( 'click', click_letras );
    }

    function click_letras(event){

        const spans = document.querySelectorAll( '#palabra_a_adivinar span' );
        const button = event.target; //cuál de todas las letras, llamó a la función.
        button.disabled = true;

        const letra = button.innerHTML;
        const palabra = palabrita.toLowerCase(); // .toUpperCase( )
        

        let acerto = false;
        for( let i = 0; i < palabra.length;  i++ ){
            if( letra == palabra[i] ){
                //la variable i es la posición de la letra en la palabra.
                //que coincide con el span al que tenemos que mostarle esta letra...
                spans[i].innerHTML = letra;
                cant_aciertos++;
                acerto = true;
            }
        }

        if( acerto == false ){
            const imagen = id('imagen');
            cant_errores++;
            const source = HangmanArray[cant_errores] ;
            imagen.src = source;
        }

        if( cant_errores === 7 ){
            window.setTimeout(slowAlertLoose, 400)
            // document.querySelectorAll('#resultado').innerHTML ="Perdiste, la palabra era " + palabrita;
            game_over( );
        }else if( cant_aciertos === palabrita.length ){
            window.setTimeout(slowAlertWin, 400)
            // alert("GANASTE!! WIIIIII") 
            // document.querySelectorAll('#resultado').innerHTML = "GANASTE!! WIIIIII";
            game_over( );
        }
        console.log( "la letra " + letra + " en la palabra " + palabra + " ¿existe?: " + acerto );
    }

    // game_over( );

    return(
<div className={style.body}>
    <div className={style.header}>
        <h3 className={style.description}>Ahorcaras a Woody si no aprendes los metodos</h3>       
    </div>

    <div className={style.main}>
        <img id='imagen' className={style.imagen} src={Hangman0} alt="Ahorcado" />
        <div>
            <p id='palabra_a_adivinar' className={style.palabra_a_adivinar}>
            </p>
            <button id='jugar' className={style.jugar} onClick={iniciar}>Obtener palabra</button>

            <p id='resultado' className={style.resultado}>{resultado}</p>

            <div id='letras' className={style.letras}>
                <button  id='letra' onClick={click_letras}>a</button>
                <button  id='letra' onClick={click_letras}>b</button>
                <button  id='letra' onClick={click_letras}>c</button>
                <button  id='letra' onClick={click_letras}>d</button>
                <button  id='letra' onClick={click_letras}>e</button>
                <button  id='letra' onClick={click_letras}>f</button>
                <button  id='letra' onClick={click_letras}>g</button>
                <button  id='letra' onClick={click_letras}>h</button>
                <button  id='letra' onClick={click_letras}>i</button>
                <button  id='letra' onClick={click_letras}>j</button>
                <button  id='letra' onClick={click_letras}>k</button>
                <button  id='letra' onClick={click_letras}>l</button>
                <button  id='letra' onClick={click_letras}>m</button>
                <button  id='letra' onClick={click_letras}>n</button>
                <button  id='letra' onClick={click_letras}>ñ</button>
                <button  id='letra' onClick={click_letras}>o</button>
                <button  id='letra' onClick={click_letras}>p</button>
                <button  id='letra' onClick={click_letras}>q</button>
                <button  id='letra' onClick={click_letras}>r</button>
                <button  id='letra' onClick={click_letras}>s</button>
                <button  id='letra' onClick={click_letras}>t</button>
                <button  id='letra' onClick={click_letras}>u</button>
                <button  id='letra' onClick={click_letras}>v</button>
                <button  id='letra' onClick={click_letras}>w</button>
                <button  id='letra' onClick={click_letras}>x</button>
                <button  id='letra' onClick={click_letras}>y</button>
                <button  id='letra' onClick={click_letras}>z</button>
            </div>
        </div>
    </div>
</div>      
    )

}

export default Hangman