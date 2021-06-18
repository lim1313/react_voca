import React, { memo } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./moduleCss/header.module.css";

const Header = () => {
  const history = useHistory();

  const onClick = () => {
    history.push("/");
  };
  console.log("header");

  return (
    <div className={styles.body}>
      <h3 onClick={onClick} className={styles.title}>
        영단어 외우기
      </h3>
      <button className={styles.btn}>
        <Link to="/addWord" className={styles.link}>
          단어추가
        </Link>
      </button>
      <button className={styles.btn}>
        <Link to="/addDay" className={styles.link}>
          날짜추가
        </Link>
      </button>
    </div>
  );
};
export default Header;
