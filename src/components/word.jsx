import React, { useState } from "react";
import styles from "./moduleCss/word.module.css";

const Word = ({ word: w }) => {
  const [word, setWord] = useState(w);
  const [isDone, setIsDone] = useState(word.isDone);
  const [showing, setShowing] = useState();

  const onClick = () => {
    setShowing(!showing);
  };

  const onChange = () => {
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...word,
        isDone: !isDone,
      }),
    }).then(res => {
      if (res.ok) {
        setIsDone(!isDone);
      }
    });
  };

  const onDelClick = () => {
    if (window.confirm("are your sure?")) {
      fetch(`http://localhost:3001/words/${word.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(res => {
        if (res.ok) {
          setWord({
            ...word,
            id: 0,
          });
        }
      });
    }
  };

  if (word.id === 0) {
    return null;
  }

  return (
    <tr className={styles.tr}>
      <td>
        <input type="checkbox" checked={isDone} onChange={onChange} />
      </td>
      <td>{word.eng}</td>
      <td>{showing && word.kor}</td>
      <td>
        <button onClick={onClick}>뜻보기</button>
        <button onClick={onDelClick}>삭제</button>
      </td>
    </tr>
  );
};

export default Word;
