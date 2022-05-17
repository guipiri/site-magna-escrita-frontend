import React, { useRef, useEffect } from "react";
import styles from "./SobreProjeto.module.css";
import Button from "../layout/Button";
import GoToTop from "../gototop/GoToTop";
import Passo from "../layout/Passo";
import SquareText from "../layout/SquareText";
import desenho1 from "../../img/desenho_gato.jpg";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import PqAplicar from "../layout/PqAplicar";

function SobreProjeto() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  function handleLeftClick(e) {
    e.preventDefault();
    carousel.current.scrollLeft -= 1.03 * carousel.current.offsetWidth;
  }

  function handleRightClick(e) {
    e.preventDefault();
    carousel.current.scrollLeft += 1.03 * carousel.current.offsetWidth;
  }
  const carousel = useRef(null);
  const passos = [
    <Passo img={desenho1} tit="Cadastro" etapa="1" key="1">
      Você faz o cadastro gratuito aqui mesmo no site. É só clicar
      <Link to="/contato">aqui</Link>.
    </Passo>,
    <Passo img={desenho1} tit="Cadastro" etapa="2" key="2">
      Você faz o cadastro gratuito aqui mesmo no site. É só clicar
      <Link to="/contato">aqui</Link>.
    </Passo>,
    <Passo img={desenho1} tit="Cadastro" etapa="3" key="3">
      Você faz o cadastro gratuito aqui mesmo no site. É só clicar
      <Link to="/contato">aqui</Link>.
    </Passo>,
    <Passo img={desenho1} tit="Cadastro" etapa="4" key="4">
      Você faz o cadastro gratuito aqui mesmo no site. É só clicar
      <Link to="/contato">aqui</Link>.
    </Passo>,
  ];

  return (
    <>
      <div className={styles.sobre}>
        <h1 data-aos="fade-right">Como funciona o projeto?</h1>
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
      <PqAplicar img={desenho1} titulo="Um título vai aqui">
        O texto vai aqui.
      </PqAplicar>
      <PqAplicar img={desenho1} titulo="Um título vai aqui" left={true}>
        O texto vai aqui.
      </PqAplicar>
      <p className={styles.buttons}>
        <Button to="/magna" text="Sobre a Magna" />
        <Button to="/contato" text="Inscreva sua escola" />
      </p>
    </>
  );
}

export default SobreProjeto;
