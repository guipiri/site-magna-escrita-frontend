import React, { useEffect } from "react";
import styles from "./PqAplicar.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

function PqAplicar({ img, titulo, children, left }) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className={`${styles.pqaplicar} ${left && styles.pqaplicarleft}`}>
      {!left && (
        <img data-aos="fade-left" src={img} alt="desenhos de criança" />
      )}
      <div className={styles.content}>
        <h1 data-aos="fade-right">{titulo}</h1>
        <p data-aos="fade-up">{children}</p>
      </div>
      {left && <img src={img} alt="desenhos de criança" />}
    </div>
  );
}

export default PqAplicar;
