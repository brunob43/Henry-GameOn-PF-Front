import style from './CodeEditor.module.css';
import React, { useState } from "react"



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
      <div className={style.title}> <p>↓↓HTML↓↓</p> <p>↓↓CSS↓↓</p> <p>↓↓JS↓↓</p> </div>
      <div className={style.cont}>
        <textarea className={style.html} onChange={event=>setHTML(event.currentTarget.value)}></textarea>
        <textarea className={style.css} onChange={event=>setCSS(event.currentTarget.value)}></textarea>
        <textarea className={style.js} onChange={event=>setJS(event.currentTarget.value)}></textarea>
      </div>

      {/* result */}
      <h3 className={style.head}>↓↓Aquí aparecerá lo que hace tu código↓↓</h3>
      <iframe className={style.iframe} srcDoc={IFRAMECODE} title="hola"></iframe>
    </div>
  );
}

export default CodeEditor;
