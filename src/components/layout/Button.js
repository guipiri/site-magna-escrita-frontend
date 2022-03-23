import React from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";

function Button({ handleClick, to, text }) {
  return (
    <button className={styles.button} onClick={handleClick}>
      <Link to={to}>{text}</Link>
    </button>
  );
}

export default Button;
