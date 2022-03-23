import React from "react";
import styles from "./Footer.module.css";
import img from "../../img/footer.png";
import { FaFacebookF, FaInstagram, FaPhoneAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className={styles.footer}>
        <img src={img} alt="desenho de uma menina em cima de livros" />
        <div className={styles.descri}>
          Magna Escrita é um projeto desenvolvido pela Magna Printi Soluções
          Gráficas Ltda. <p>CNPJ 31.026.892/0001-23</p>
        </div>
        <div>
          <a
            href="https://www.facebook.com/magnaescrita"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/magnaescrita/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a href="tel:5511992073600">
            <FaPhoneAlt />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
