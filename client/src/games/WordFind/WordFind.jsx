import React, { useState } from "react";
import { GameWordSearch, UDScalable } from "unc-react-creator";
import classNames from "classnames";
import style from "./WordFind.module.css"

// import "./assets/css/default.styl";
// import "./assets/css/C02.styl";
import "animate.css/animate.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

const words = [
  "react",
  "redux",
  "javascript",
  "html",
  "router",
  "foreach",
  "dispatch",
  "consolelog",
  "basededatos",
  "navbar",
  "search",
  "return",
  "function",
];

const WordFind = () => {
  const [found, setFound] = useState(
    words.map((word) => ({ word, found: false }))
  );

  return (
    <div className={style.body}>
      <div className={style.column}>
        {found.map((obj, idx) => (
          <div
            key={idx}
            className={classNames(style.unc_word, { found: obj.found })}
          >
            {obj.word}
          </div>
        ))}
      </div>
      <div className={style.column2}>
        <UDScalable className={style.WordFind}>
          <GameWordSearch
            words={words}
            size={14}
            checkWord={(word) => {
              const ftemp = [...found];
              if (ftemp.find((obj) => obj.word === word).found) return;

              ftemp.find((obj) => obj.word === word).found = true;
              setFound(ftemp);
            }}
          />
        </UDScalable>
      </div>
    </div>
  );
};

export default WordFind;