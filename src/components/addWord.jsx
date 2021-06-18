import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import styles from "./moduleCss/addWord.module.css";

const AddWord = props => {
  const [isLoading, setIsLoading] = useState(false);
  const days = useFetch("http://localhost:3001/days");
  const history = useHistory();

  const engRef = useRef();
  const korRef = useRef();
  const dayRef = useRef();

  const onSaveClick = () => {
    if (!isLoading) {
      setIsLoading(true);
      fetch("http://localhost:3001/words/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: Date.now(),
          day: dayRef.current.value,
          eng: engRef.current.value,
          kor: korRef.current.value,
          isDone: false,
        }),
      }).then(res => {
        if (res.ok) {
          alert("저장 완료");
          history.push(`/words/${dayRef.current.value}`);
          setIsLoading(false);
        }
      });
    }
  };

  return (
    <div className={styles.wrap}>
      <div>
        <div>English</div>
        <input className={styles.input} type="text" ref={engRef} />
      </div>
      <div>
        <div>Korean</div>
        <input className={styles.input} type="text" ref={korRef} />
      </div>
      <div>
        <div>day</div>
        <select ref={dayRef} className={styles.select}>
          {days.map(day => (
            <option value={day.day}>{day.day}</option>
          ))}
        </select>
      </div>
      <button className={styles.save} onClick={onSaveClick}>
        {isLoading ? "saving..." : "save"}
      </button>
    </div>
  );
};

export default AddWord;
