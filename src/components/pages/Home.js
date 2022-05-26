import React, { useRef, useEffect } from "react";
import banner from "../../img/banner.jpg";
import styles from "./Home.module.css";
import carousel1 from "../../img/carousel1.jpg";
import carousel2 from "../../img/carousel2.jpg";
import carousel3 from "../../img/carousel3.jpg";
import carousel4 from "../../img/carousel4.jpg";
import carousel5 from "../../img/carousel5.jpg";
import carousel6 from "../../img/carousel6.jpg";
import ParaOsEduc from "../../img/livros-pedagogicos.jpg";
import ParaOsPais from "../../img/familiares-lendo-livro-pedagogico.jpg";
import ParaOsAlunos from "../../img/alunos-escrevendo-livro-pedagogico.jpg";
import SquarePhoto from "../layout/SquarePhoto";
import Button from "../layout/Button";
import GoToTop from "../gototop/GoToTop";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import PqAplicar from "../layout/PqAplicar";
import Aos from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const carousel = useRef(null);
  const photos = [
    <SquarePhoto key="carousel1" photo={carousel1} />,
    <SquarePhoto key="carousel2" photo={carousel2} />,
    <SquarePhoto key="carousel3" photo={carousel3} />,
    <SquarePhoto key="carousel4" photo={carousel4} />,
    <SquarePhoto key="carousel5" photo={carousel5} />,
    <SquarePhoto key="carousel6" photo={carousel6} />,
  ];

  function handleLeftClick(e) {
    e.preventDefault();
    carousel.current.scrollLeft -= 1.04 * carousel.current.offsetWidth;
  }

  function handleRightClick(e) {
    e.preventDefault();
    carousel.current.scrollLeft += 1.04 * carousel.current.offsetWidth;
  }

  return (
    <>
      <div data-aos="fade-right" className={styles.home}>
        <img src={banner} alt="banner principal do site" />
      </div>
      <h1 className={styles.tits} data-aos="fade-up">
        Magna Escrita transforma seus alunos em magníficos autores!
      </h1>
      <div data-aos="fade-down" className={styles.carousel} ref={carousel}>
        {photos.map((photo) => photo)}
      </div>
      <div className={styles.arrows}>
        <button onClick={handleLeftClick}>
          <AiOutlineArrowLeft />
        </button>
        <button onClick={handleRightClick}>
          <AiOutlineArrowRight />
        </button>
      </div>
      <h1 className={styles.tits}>
        Por que aplicar o projeto Magna Escrita na sua escola?
      </h1>
      <div className={styles.pqaplicar}>
        <PqAplicar titulo="Para os alunos..." img={ParaOsAlunos}>
          Desperta o interesse pela produção oral, escrita e{" "}
          <mark>ARTíSTICA</mark>.<br />
          <br />
          Incentiva o hábito da <mark>LEITURA</mark>.<br />
          <br />
          Desenvolve autonomia, aprendizagem <mark>CRIATIVA</mark> e
          responsabilidade social.
        </PqAplicar>
        <PqAplicar titulo="Para os educadores..." img={ParaOsEduc} left={true}>
          Contribui com os educadores no trabalho de <mark>MOTIVAR</mark> na
          criança e no jovem o gosto pela leitura e escrita... <br />
          <br />
          ...bem como estimular a imaginação de forma competente e criativa.
          <br />
        </PqAplicar>
        <PqAplicar titulo="Para os familiares..." img={ParaOsPais}>
          É um diferencial de grande valor histórico para os familiares guardar
          as <mark>LEMBRANÇAS</mark> de uma época tão importante... <br />
          <br />
          ...além de aproximar os pais das atividades escolares, desde a criação
          da história até o dia de autógrafos.
          <br />
        </PqAplicar>
      </div>
      <p className={styles.buttons}>
        <Button to="/sobreoprojeto" text="Sobre o projeto" />
        <Button to="/contato" text="Inscreva sua escola" />
      </p>
      <GoToTop />
    </>
  );
}

export default Home;
