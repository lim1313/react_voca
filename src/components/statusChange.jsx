import React, { useContext } from "react";
import { WordContext } from "./word";

const StatusChange = () => {
  const { word, isDone, setIsDone } = useContext(WordContext);
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

  return <input type="checkbox" checked={isDone} onChange={onChange} />;
};

export default StatusChange;
