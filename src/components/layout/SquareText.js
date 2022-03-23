import React from "react";
import styles from "./SquareText.module.css";

function SquareText({ title, text, photo }) {
  return (
    <div className={styles.square}>
      <div className={styles.square2}>
        <h3>{title}</h3>
        <p>{text}</p>
        <img src={photo} alt="imagens da noite de autógrafo" />
      </div>
    </div>
  );
}

export default SquareText;
