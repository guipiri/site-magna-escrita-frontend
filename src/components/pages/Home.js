import React, { useRef } from "react";
import banner from "../../img/banner.jpg";
import styles from "./Home.module.css";
import carousel1 from "../../img/carousel1.jpg";
import carousel2 from "../../img/carousel2.jpg";
import carousel3 from "../../img/carousel3.jpg";
import carousel4 from "../../img/carousel4.jpg";
import carousel5 from "../../img/carousel5.jpg";
import carousel6 from "../../img/carousel6.jpg";
import SquarePhoto from "../layout/SquarePhoto";
import Button from "../layout/Button";
import GoToTop from "../gototop/GoToTop";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import PqAplicarRight from "../layout/PqAplicarRight";
import PqAplicarLeft from "../layout/PqAplicarLeft";

function Home() {
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
      <div className={styles.home}>
        <img src={banner} alt="banner principal do site" />
      </div>
      <h1>O projeto Magníficos Autores transforma seus alunos!</h1>
      <div className={styles.carousel} ref={carousel}>
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
      <h1>Por que aplicar o projeto Magna Escrita na sua escola?</h1>
      <div className={styles.pqaplicar}>
        <PqAplicarRight />
        <PqAplicarLeft />
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
