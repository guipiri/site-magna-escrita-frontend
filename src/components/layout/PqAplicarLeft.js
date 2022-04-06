import React from "react";
import styles from "./PqAplicarRight.module.css";
import carousel1 from "../../img/carousel1.jpg";

function PqAplicar() {
  return (
    <div className={`${styles.pqaplicar} ${styles.pqaplicarleft}`}>
      <div className={styles.content}>
        <h1>PARA OS ALUNOS...</h1>
        <p>
          Desperta o interesse pela produção oral, escrita e{" "}
          <mark>ARTíSTICA</mark>.
          <br />
          Incentiva o hábito da <mark>LEITURA</mark>.
          <br />
          Desenvolve autonomia, aprendizagem <mark>CRIATIVA</mark> e
          responsabilidade social.
        </p>
      </div>
      <img src={carousel1} alt="desenhos de criança" />
    </div>
  );
}

export default PqAplicar;
