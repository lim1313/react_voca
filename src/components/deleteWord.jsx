import React, { useContext } from "react";
import { WordContext } from "./word";

const DeleteWord = () => {
  const { word, setWord } = useContext(WordContext);

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

  return <button onClick={onDelClick}>삭제</button>;
};

export default DeleteWord;
