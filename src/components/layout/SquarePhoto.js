import React from "react";
import styles from "./SquarePhoto.module.css";

function SquarePhoto({ photo }) {
  return (
    <div className={styles.square}>
      <div className={styles.square2}>
        <img src={photo} alt="imagens da noite de autógrafo" />
      </div>
    </div>
  );
}

export default SquarePhoto;
