import React, { useRef, useEffect } from "react";
import styles from "./SobreProjeto.module.css";
import Button from "../layout/Button";
import GoToTop from "../gototop/GoToTop";
import Passo from "../layout/Passo";
import desenho1 from "../../img/desenho_futebol.jpg";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import PqAplicar from "../layout/PqAplicar";
import Etapa1 from "../../img/icone-etapa-1-cadastro.png";
import Etapa2 from "../../img/icone-etapa-2-crianca-escreve-livro.png";
import Etapa3 from "../../img/icone-etapa-3-imprimi-livro.png";
import Etapa4 from "../../img/icone-etapa-4-dia-de-autografos.png";
import Desenho from "../../img/desenho.jpg";

function SobreProjeto() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  function handleLeftClick(e) {
    e.preventDefault();
    carousel.current.scrollLeft -= 1.01 * carousel.current.offsetWidth;
  }

  function handleRightClick(e) {
    e.preventDefault();
    carousel.current.scrollLeft += 1.01 * carousel.current.offsetWidth;
  }
  const carousel = useRef(null);
  const passos = [
    <Passo img={Etapa1} tit="Cadastro" etapa="1" key="1">
      Cadastre sua escola gratuitamente aqui mesmo no nosso site. É só clicar
      <Link className={styles.aqui} to="/contato">
        aqui
      </Link>
      . <br /> <br />
      Assim, já conseguimos definir o tema e o dia dos autógrafos.
    </Passo>,
    <Passo img={Etapa2} tit="Criação das histórias" etapa="2" key="2">
      É hora de trabalhar com seus alunos para estimular a reflexão sobre o tema
      escolhido e prepará-los para a produção textual.
      <br /> <br />
      Feito? Agora, a escola nos envia todo o conteúdo, online mesmo.
    </Passo>,
    <Passo img={Etapa3} tit="Criação dos livros" etapa="3" key="3">
      Agora, é com a gente! Vamos tranformar o conteúdo em um livro de verdade.
      Inclusive, com a foto e biografia do autor na contracapa.
      <br /> <br />
      Ah, e fornecemos gratuitamente a versão digital do livro.
    </Passo>,
    <Passo img={Etapa4} tit="O dia de autógrafos" etapa="4" key="4">
      Neste evento, organizado pela escola, familiares são convidados especiais
      para receberem o livro autografado pelo magnífico autor.
      <br /> <br />É muita emoção, não é mesmo?
    </Passo>,
  ];

  return (
    <>
      <div className={styles.sobre}>
        <h1 className={styles.relative} data-aos="fade-right">
          Como funciona o projeto?
        </h1>
        <div className={styles.passoapasso} ref={carousel}>
          {passos.map((passo) => passo)}
        </div>
        <div className={styles.arrows}>
          <button onClick={handleLeftClick}>
            <AiOutlineArrowLeft />
          </button>
          <button onClick={handleRightClick}>
            <AiOutlineArrowRight />
          </button>
        </div>
        <GoToTop />
      </div>
      <PqAplicar img={desenho1} titulo="Responsabilidade e Humanização">
        O enredo da história, os personagens, o cenário e as ilustrações serão
        criados pelo próprio aluno, sob orientação do educador e com base no
        projeto escolhido.
        <br />
        <br /> Novas possibilidades se abrirão a cada página elaborada,
        permitindo construir uma autoimagem positiva de si e vivenciar mais a
        fundo sua experiência com os outros, reconhecendo a importância de nossa
        história pessoal.
        <br />
        <br /> Diversas formas de pensar, de aprender e de fazer constituirão um
        terreno fértil para o reconhecimento das diferenças e o quanto elas são
        assertivas para a humanização do ensino e das aprendizagens.
      </PqAplicar>
      <PqAplicar img={Desenho} titulo="Aprendizagem Criativa" left={true}>
        Possibilita diálogos e discussões construtivas dentro da sala de aula.
        <br />
        <br />
        Desafia o aluno a explicar suas preconcepções Valoriza o trabalho em
        grupo.
        <br />
        <br /> Apresenta novas maneiras de colocar o conhecimento adquirido em
        prática Promove a interdisciplinaridade.
      </PqAplicar>
      <p className={styles.buttons}>
        <Button to="/magna" text="Sobre a Magna" />
        <Button to="/contato" text="Inscreva sua escola" />
      </p>
    </>
  );
}

export default SobreProjeto;
