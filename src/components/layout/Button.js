import React from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";

function Button({ handleClick, to, text }) {
  return (
    <Link className={styles.button} to={to}>
      {text}
    </Link>
  );
}

export default Button;
