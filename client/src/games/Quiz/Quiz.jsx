import preg from "./preg";
import { useState, useEffect } from "react";
import style from "./Quiz.module.css";
import { Box, Button, VStack } from "@chakra-ui/react";

function Quiz() {
  const [inicio, setInicio] = useState(false);
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuación, setPuntuación] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [tiempoRestante, setTiempoRestante] = useState(15);
  const [areDisabled, setAreDisabled] = useState(false);
  const [answersShown, setAnswersShown] = useState(false);

  function handleStart(event) {
    if (event.target.id === "false") {
      event.target.id = "true";
      setInicio(true);
      setTiempoRestante(15);
    } else {
      event.target.id = "false";
      setInicio(false);
    }
  }

  function handleAnswerSubmit(isCorrect, e) {
    // añadir puntuación
    if (isCorrect) setPuntuación(puntuación + 1);
    // añadir estilos de pregunta
    e.target.className=(isCorrect ? style.correct : style.incorrect);
    // cambiar a la siguiente pregunta

    setTimeout(() => {
      if (preguntaActual === preg.length - 1) {
        setIsFinished(true);
      } else {
        setPreguntaActual(preguntaActual + 1);
        setTiempoRestante(15);
      }
    }, 300);
  }

  useEffect(() => {
    const intervalo = setInterval(() => {
      if (tiempoRestante > 0) setTiempoRestante((prev) => prev - 1);
      if (tiempoRestante === 0) setAreDisabled(true);
    }, 1000);

    return () => clearInterval(intervalo);
  }, [tiempoRestante]);

  if (inicio === false) {
    return (
        <Box bg="rgba(255, 255, 0, 0.6)" borderRadius="20px" marginTop={["90px","130px","180px"]} marginBottom={["90px","130px","180px"]} padding="50px">
      <Button
      padding="20px" border="1px solid black" bg="yellow" color="black" fontSize="30px" _hover={{bg:"rgb(199, 202, 0)"}}
      id="false" onClick={handleStart}>
        Comenzar Quiz
      </Button>
        </Box>
    );
  } else {
    if (isFinished)
      return (
        <VStack borderRadius="10px" margin="20px" p="20px" bg="rgba(255, 255, 0, 0.6)" color="black">
          <VStack p="30px" bg="rgba(255, 255, 0, 0.9)" border="1px solid black" borderRadius="10px" fontSize="30px">
            <Box textAlign="center" paddingBottom="40px">
            <span>
              {" "}
              Obtuviste {puntuación} de {preg.length}{" "}
            </span>
            </Box>
            <Button
            w="100%" border="1px solid black" bg="yellow" color="black" fontSize="20px" _hover={{bg:"rgb(199, 202, 0)"}}
            onClick={() => window.location.reload()}>
              {" "}
              Volver a jugar
            </Button>
            <Button
            w="100%" border="1px solid black" bg="yellow" color="black" fontSize="20px" _hover={{bg:"rgb(199, 202, 0)"}}
              onClick={() => {
                setIsFinished(false);
                setAnswersShown(true);
                setPreguntaActual(0);
              }}
            >
              Ver soluciones
            </Button>
          </VStack>
        </VStack>
      );

    if (answersShown)
      return (
        <VStack borderRadius="10px" margin="20px" p="20px" bg="rgba(255, 255, 0, 0.6)" color="black">
          <VStack p="30px" bg="rgba(255, 255, 0, 0.9)" border="1px solid black" borderRadius="10px">
            <VStack>
              <Box padding="5px 10px" borderRadius="7px" bg="blackAlpha.300">
                <span> Pregunta {preguntaActual + 1} de</span> {preg.length}
              </Box>
              <Box textAlign="center" fontSize="30px">
                {preg[preguntaActual].titulo}
              </Box>
              <Box textAlign="center" w="100%" p="10px" fontSize="25px" border="2px dashed black"> 
                {
                  preg[preguntaActual].opciones.filter(
                    (opcion) => opcion.isCorrect
                  )[0].textoRespuesta
                }
              </Box>
              <Box paddingTop="20px">
              <Button
              border="1px solid black" bg="yellow" color="black" fontSize="20px" _hover={{bg:"rgb(199, 202, 0)"}}
                onClick={() => {
                  if (preguntaActual === preg.length - 1) {
                    window.location.reload();
                  } else {
                    setPreguntaActual(preguntaActual + 1);
                  }
                }}
              >
                {preguntaActual === preg.length - 1
                  ? "Volver a jugar"
                  : "Siguiente"}
              </Button>
              </Box>
            </VStack>
          </VStack>
        </VStack>
      );

    return (
      <VStack borderRadius="10px" margin="20px" p="20px" bg="rgba(255, 255, 0, 0.6)" color="black">
        <VStack p="20px" bg="rgba(255, 255, 0, 0.9)" border="1px solid black" borderRadius="10px">
          <VStack paddingBottom="30px">
            <Box marginBottom="30px" padding="5px 10px" borderRadius="7px" bg="blackAlpha.300">
              <span> Pregunta {preguntaActual + 1} de</span> {preg.length}
            </Box>
            <Box textAlign="center" fontSize="30px">{preg[preguntaActual].titulo}</Box>
          </VStack>
          <VStack w="100%">
            {preg[preguntaActual].opciones.map((respuesta,index) => (
              <Button
             p="5px"  whiteSpace="pre-wrap" h="auto" color="white" bg="blackAlpha.900" _hover={{bg:"yellow", border:"2px dashed black", color:"black", fontSize:"22px", transition:"all 300ms"}}
                id={index}
                className={style.button}
                w="100%"
                isDisabled={areDisabled}
                key={respuesta.textoRespuesta}
                onClick={(e) => handleAnswerSubmit(respuesta.isCorrect, e)}
              >
                {respuesta.textoRespuesta}
              </Button>
            ))}
          </VStack>
          <Box padding="30px">
            {!areDisabled ? (
              <span className={style.tiempo_restante}>
                Tiempo restante: {tiempoRestante}{" "}
              </span>
            ) : (
              <Button
               border="1px solid black" bg="yellow" color="black" fontSize="20px" _hover={{bg:"rgb(199, 202, 0)"}}
                onClick={() => {
                  setTiempoRestante(15);
                  setAreDisabled(false);
                  if (preguntaActual === preg.length - 1) {
                    setIsFinished(true);
                  } else {
                    setPreguntaActual(preguntaActual + 1);
                  }
                }}
              >
                Continuar
              </Button>
            )}
          </Box>
        </VStack>
      </VStack>
    );
  }
}

export default Quiz;
