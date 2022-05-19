import React from "react";
import styles from "./NuvemBranca.module.css";
import img from "../../img/carousel6.jpg";
import PqAplicar from "../layout/PqAplicar";
import Button from "./Button";

function NuvemBranca() {
  return (
    <div className={styles.magna}>
      <PqAplicar img={img} titulo="A Magna" left={true}>
        Tem atuado em projetos pedagógicos como uma fornecedora de soluções de
        impressão. A atuação próxima a esse segmento nos levou a ampliar nossa
        missão,visando focar de forma sistematizada para atender novas demandas
        de cada projeto pedagógico.
      </PqAplicar>
      <PqAplicar img={img} titulo=". . . " left={false}>
        A atuação próxima a esse segmento nos levou a ampliar nossa
        missão,visando focar de forma sistematizada para atender novas demandas
        de cada projeto pedagógico.
      </PqAplicar>
      <PqAplicar img={img} titulo=". . . " left={true}>
        Assim, passamos a investir ainda mais – e de forma criativa – num desejo
        que acreditamos ser de todos os profissionais envolvidos na formação de
        cidadãos críticos, atuantes e protagonistas de sua própria história de
        vida: o projeto de livros personalizados.
      </PqAplicar>
      <p className={styles.buttons}>
        <Button to="/sobreoprojeto" text="Sobre o projeto" />
        <Button to="/contato" text="Inscreva sua escola" />
      </p>
    </div>
  );
}

export default NuvemBranca;
