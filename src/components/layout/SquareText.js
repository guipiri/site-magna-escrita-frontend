import React from "react";
import styles from "./SquareText.module.css";

function SquareText({ title, children, photo }) {
  return (
    <div className={styles.square_photo}>
      <h1>{title}</h1>
      <div className={styles.square}>
        <div className={styles.square2}>
          <p>{children}</p>
          <img src={photo} alt="imagens da noite de autógrafos" />
        </div>
      </div>
    </div>
  );
}

export default SquareText;
