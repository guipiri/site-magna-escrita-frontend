import React from "react";
import styles from "./SquareText.module.css";

function SquareText({ title, text, photo }) {
  return (
    <div className={styles.square_photo}>
      <h3>{title}</h3>
      <div className={styles.square}>
        <div className={styles.square2}>
          <div className={styles.text}>
            <p>{text}</p>
          </div>
          <img src={photo} alt="imagens da noite de autógrafos" />
        </div>
      </div>
    </div>
  );
}

export default SquareText;
