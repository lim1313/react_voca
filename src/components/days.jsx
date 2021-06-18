import React, { useReducer, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import styles from "./moduleCss/days.module.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_INIT_DATA":
      return action.payload;
    default:
      return state;
  }
};

const Days = () => {
  const [days, dispatch] = useReducer(reducer, []);
  //const [days, setDays] = useState([]);

  const setInitData = initData => {
    dispatch({ type: "SET_INIT_DATA", payload: initData });
  };

  const loading = useFetch(setInitData, "http://localhost:3001/days");
  console.log("Days");

  return (
    <div className={styles.wrap}>
      {loading ? (
        <div className="loading"></div>
      ) : (
        <ul className={styles.ul}>
          {days.map(day => (
            <li key={day.id} className={styles.li}>
              <Link to={`/words/${day.day}`} className={styles.link}>
                Day : {day.day}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Days;
