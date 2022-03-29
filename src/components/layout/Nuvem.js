import React from "react";
import nuvem from "../../img/NUVEM_2.jpg";
import styles from "./Nuvem.module.css";

function Nuvem({ text, title, img1, img2, img3 }) {
  return (
    <div className={styles.nuvem}>
      <h1>{title}</h1>
      <div className={styles.text}>
        <p>{text}</p>
        <div className={styles.imgs}>
          <img src={img1} alt="imagens do projeto" />
          <img src={img2} alt="imagens do projeto" />
          <img src={img3} alt="imagens do projeto" />
        </div>
      </div>
      <img className={styles.nuvemimg} src={nuvem} alt="nuvem" />
    </div>
  );
}

export default Nuvem;
