import React, { useEffect } from "react";
import styles from "./Passo.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Passo({ img, children, tit, etapa }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div className={styles.passo}>
      <img data-aos="fade-left" src={img} alt="desenhos de criança" />
      <div className={styles.content}>
        <span>{etapa}</span>
        <h1 data-aos="fade-up">{tit}</h1>
        <p data-aos="fade-down">{children}</p>
      </div>
    </div>
  );
}

export default Passo;
