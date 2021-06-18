import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import styles from "./moduleCss/days.module.css";

const Days = () => {
  const days = useFetch("http://localhost:3001/days");

  return (
    <div className={styles.wrap}>
      {days.length === 0 ? (
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
