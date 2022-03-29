import React from "react";
import styles from "./NuvemBranca.module.css";
import nuvembranca from "../../img/NUVEM_1.jpg";
import SquarePhoto from "../layout/SquarePhoto";
import carousel1 from "../../img/carousel1.jpg";

function NuvemBranca() {
  return (
    <div className={styles.nuvembranca}>
      <img className={styles.img} src={nuvembranca} alt="Nuvem branca" />
      <div className={styles.squarephoto}>
        <div className={styles.text}>
          <h1>A Magna</h1>
          <p>
            Muito asubd aisudas m,dajndka msndkasjnd ka msasokn as.d.ask
            jndlaksj damsdlkjas b, msbals bd,msbdlasjkbda,smjdbasldj
            has,dmbasdmabskja bsd,ma sbdkjsbdajdb asldjbas,djbasd.basdkasg b,dj
            hbasldbhas,dhjsab u{" "}
          </p>
        </div>
        <SquarePhoto photo={carousel1} />
      </div>
    </div>
  );
}

export default NuvemBranca;
