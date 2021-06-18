import React, { useState } from "react";
import styles from "./moduleCss/word.module.css";
import DeleteWord from "./deleteWord";
import StatusChange from "./statusChange";

export const WordContext = React.createContext();

const Word = ({ word: w }) => {
  const [word, setWord] = useState(w);
  const [isDone, setIsDone] = useState(word.isDone);
  const [showing, setShowing] = useState();

  const onClick = () => {
    setShowing(!showing);
  };

  if (word.id === 0) {
    return null;
  }

  return (
    <WordContext.Provider value={{ word, setWord, isDone }}>
      <tr className={styles.tr}>
        <td>
          <StatusChange />
        </td>
        <td>{word.eng}</td>
        <td>{showing && word.kor}</td>
        <td>
          <button onClick={onClick}>뜻보기</button>
          <DeleteWord />
        </td>
      </tr>
    </WordContext.Provider>
  );
};

export default Word;
