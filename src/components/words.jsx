import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Word from "./word";
import styles from "./moduleCss/words.module.css";

const Words = () => {
  const { day } = useParams();

  const words = useFetch(`http://localhost:3001/words?day=${day}`);
  console.log(words);

  return (
    <div className={styles.wrap}>
      {words.length === 0 ? (
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
            <Word key={word.id} word={word}></Word>
          ))}
        </table>
      )}
    </div>
  );
};

export default Words;
