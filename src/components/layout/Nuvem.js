import React from "react";
import nuvem from "../../img/NUVEM_2.jpg";
import styles from "./Nuvem.module.css";

function Nuvem({ text, title, img1, img2, img3 }) {
  return (
    <div className={styles.nuvem}>
      <img className={styles.nuvemimg} src={nuvem} alt="nuvem" />
      <div className={styles.text}>
        <h1>{title}</h1>
        <p>{text}</p>
        <div className={styles.imgs}>
          <img src={img1} alt="imagens do projeto" />
          <img src={img2} alt="imagens do projeto" />
          <img src={img3} alt="imagens do projeto" />
        </div>
      </div>
    </div>
  );
}

export default Nuvem;
