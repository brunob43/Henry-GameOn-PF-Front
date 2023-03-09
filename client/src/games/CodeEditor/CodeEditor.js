import style from './CodeEditor.module.css';
import React, { useState } from "react"
import { Box, VStack } from '@chakra-ui/react';



function CodeEditor() {
const [HTML, setHTML] = useState("")
const [CSS, setCSS] = useState("")
const [JS, setJS] = useState("")

const IFRAMECODE = `
<html> 
<head> 
  <style>
  ${CSS}
  </style>
</head>
<body> 
  ${HTML}
  <script> 
  ${JS}
  </script>
</body>

</html>

`
  return (
    <div className={style.main}>
      <h3 className={style.head}> Escribe tu código debajo</h3>
      <Box w={["300px","420px","100%"]} flexDirection={["column","column","row"]} className={style.cont}>
        <VStack margin="0px 5px" w={["100%","100%","33%"]}>
        <h3 className={style.head2}>HTML</h3>
        <textarea className={style.html} onChange={event=>setHTML(event.currentTarget.value)}></textarea>
        </VStack>
        <VStack margin="0px 5px" w={["100%","100%","33%"]}>
        <h3 className={style.head2}>CSS</h3>
        <textarea className={style.css} onChange={event=>setCSS(event.currentTarget.value)}></textarea>
        </VStack>
        <VStack margin="0px 5px" w={["100%","100%","33%"]}>
        <h3 className={style.head2}>JavaScript</h3>
        <textarea className={style.js} onChange={event=>setJS(event.currentTarget.value)}></textarea>
        </VStack>
      </Box>

      {/* result */}
      <VStack w={["300px","420px","100%"]} >
      <h3 className={style.head}>↓↓Aquí aparecerá lo que hace tu código↓↓</h3>
      <iframe className={style.iframe} srcDoc={IFRAMECODE} title="hola"></iframe>
      </VStack>
    </div>
  );
}

export default CodeEditor;
