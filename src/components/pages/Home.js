import React from "react";
import banner from "../../img/banner.jpg";
import styles from "./Home.module.css";
import carousel1 from "../../img/carousel1.jpg";
import carousel2 from "../../img/carousel2.jpg";
import carousel3 from "../../img/carousel3.jpg";
import carousel4 from "../../img/carousel4.jpg";
import carousel5 from "../../img/carousel5.jpg";
import carousel6 from "../../img/carousel6.jpg";
import SquarePhoto from "../layout/SquarePhoto";
import SquareText from "../layout/SquareText";
import Button from "../layout/Button";

function Home() {
  const photos = [
    <SquarePhoto key="carousel1" photo={carousel1} />,
    <SquarePhoto key="carousel2" photo={carousel2} />,
    <SquarePhoto key="carousel3" photo={carousel3} />,
    <SquarePhoto key="carousel4" photo={carousel4} />,
    <SquarePhoto key="carousel5" photo={carousel5} />,
    <SquarePhoto key="carousel6" photo={carousel6} />,
  ];

  return (
    <>
      <div className={styles.home}>
        <img src={banner} alt="banner principal do site" />
      </div>
      <h1>O projeto Magníficos Autores transforma seus alunos!</h1>
      <div className={styles.carousel}>{photos.map((photo) => photo)}</div>
      <h1>Por que aplicar o projeto Magna Escrita na sua escola?</h1>
      <div className={styles.square_text}>
        <SquareText title="PARA OS ALUNOS..." photo={carousel1}>
          Desperta o interesse pela produção oral, escrita e{" "}
          <mark>ARTíSTICA</mark>.
          <br />
          <br />
          Incentiva o hábito da <mark>LEITURA</mark>.
          <br />
          <br />
          Desenvolve autonomia, aprendizagem <mark>CRIATIVA</mark> e
          responsabilidade social.
          <br />
          <br />
          <mark>DESAFIA</mark> o aluno a explicar suas preconcepções.
        </SquareText>
        <SquareText title="AQUI VAI UM TÍTULO BONITINHO" photo={carousel1} />
      </div>
      <p className={styles.buttons}>
        <Button to="/sobreoprojeto" text="Sobre o projeto" />
        <Button to="/sobreoprojeto" text="Inscreva sua escola" />
      </p>
    </>
  );
}

export default Home;
