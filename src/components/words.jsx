import React, { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Word from "./word";
import styles from "./moduleCss/words.module.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_INIT_WORD":
      return action.payload;

    default:
      return state;
  }
};

const Words = () => {
  const [words, dispatch] = useReducer(reducer, []);
  //const [words, setWords] = useState([]);

  const { day } = useParams();

  const setInitWords = initword => {
    dispatch({ type: "SET_INIT_WORD", payload: initword });
  };

  const loading = useFetch(
    setInitWords,
    `http://localhost:3001/words?day=${day}`
  );
  console.log(words);

  return (
    <div className={styles.wrap}>
      {loading ? (
        <div className="loading"></div>
      ) : (
        <table className={styles.table}>
          <tr className={styles.tr}>
            <th>check</th>
            <th>eng</th>
            <th>kor</th>
            <th>btn</th>
          </tr>
          {words.map(word => (
            <Word key={word.id} word={word} dispatch={dispatch}></Word>
          ))}
        </table>
      )}
    </div>
  );
};

export default Words;
