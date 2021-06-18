import React from "react";
import { useHistory } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import styles from "./moduleCss/addDay.module.css";

const AddDay = props => {
  const days = useFetch("http://localhost:3001/days");
  const history = useHistory();

  const onAddClick = () => {
    fetch("http://localhost:3001/days/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: Date.now(),
        day: days.length + 1,
      }),
    }).then(res => {
      if (res.ok) {
        alert("저장 완료");
        history.push("/");
      }
    });
  };

  return (
    <>
      <div>
        <h3>현재일수 : {days.length}</h3>
        <button onClick={onAddClick} className={styles.btn}>
          Day Add
        </button>
      </div>
    </>
  );
};

export default AddDay;
