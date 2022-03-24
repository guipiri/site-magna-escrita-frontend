import React from "react";
import Nuvem from "../layout/Nuvem";
import carousel1 from "../../img/carousel1.jpg";
import carousel2 from "../../img/carousel2.jpg";
import carousel3 from "../../img/carousel3.jpg";
import SquareText from "../layout/SquareText";
import styles from "./SobreProjeto.module.css";
import Button from "../layout/Button";

function SobreProjeto() {
  return (
    <div className={styles.sobre}>
      <SquareText
        title="AGUCE A CRIATIVIDADE E A PAIXÃO DOS ALUNOS PELA LEITURA E ESCRITA"
        photo={carousel2}
      >
        Contribua com os esducadores no trabalho de motivar na criança o gosto
        pela leitura e escrita, bem como estimular a imaginação de forma
        competente e criativa. Tenha um diferencial de grande valor histórico
        para os alunos e familiares.
      </SquareText>
      <Nuvem
        img1={carousel1}
        img2={carousel2}
        img3={carousel3}
        title="RESPONSABILIDADE E HUMANIZAÇÃO"
        text="O enredo da história, os personagens, o cenário e as ilustrações serão
          criados pelo próprio aluno, sob orientação do educador e com base no
          projeto escolhido. Novas possibilidades se abrirão a cada página
          elaborada permitindo construie uma autoimagem positiva de si e
          vivenciar mais a fundo sua experiencia com os outros, reconhecendo a
          importância de nossa história pessoal. Diversas forma de pensar, de
          aprender e de fazer constituirão um terreno fértil para o
          reconhecimento das diferenças e o quanto elas são assertivas para a
          humanização do ensino e das aprendizagens."
      ></Nuvem>
      <Nuvem
        img1={carousel1}
        img2={carousel2}
        img3={carousel3}
        title="RESPONSABILIDADE E HUMANIZAÇÃO"
        text="O enredo da história, os personagens, o cenário e as ilustrações serão
          criados pelo próprio aluno, sob orientação do educador e com base no
          projeto escolhido. Novas possibilidades se abrirão a cada página
          elaborada permitindo construie uma autoimagem positiva de si e
          vivenciar mais a fundo sua experiencia com os outros, reconhecendo a
          importância de nossa história pessoal. Diversas forma de pensar, de
          aprender e de fazer constituirão um terreno fértil para o
          reconhecimento das diferenças e o quanto elas são assertivas para a
          humanização do ensino e das aprendizagens."
      ></Nuvem>
      <SquareText
        title="AGUCE A CRIATIVIDADE E A PAIXÃO DOS ALUNOS PELA LEITURA E ESCRITA"
        photo={carousel2}
      >
        Contribua com os esducadores no trabalho de motivar na criança o gosto
        pela leitura e escrita, bem como estimular a imaginação de forma
        competente e criativa. Tenha um diferencial de grande valor histórico
        para os alunos e familiares.
      </SquareText>
      <p className={styles.buttons}>
        <Button to="/sobreoprojeto" text="Sobre o projeto" />
        <Button to="/sobreoprojeto" text="Inscreva sua escola" />
      </p>
    </div>
  );
}

export default SobreProjeto;
