import React from "react";
import GoToTop from "../gototop/GoToTop";
import Form from "../layout/Form";
import styles from "./Contact.module.css";
import emailjs, { init } from "@emailjs/browser";
import mao from "../../img/MAO_SOZINHA.jpg";
init("Q8esOQNBeIjtRDAeB");

function Contact() {
  function sendEmail(e) {
    emailjs.sendForm("service_lvi7f1d", "template_tqdb2hq", e.target);
    console.log(e);
    e.target.reset();
  }
  return (
    <>
      <div className={styles.contact}>
        <img src={mao} alt="imagens do projeto" />
        <div className={styles.form_com_titulo}>
          <h2>
            Ficou interessada ou ainda tem alguma dúvida?{" "}
            <mark>Vamos plantar essa semente!</mark>
          </h2>
          <Form handleSubmit={sendEmail} />
        </div>

        <GoToTop />
      </div>
    </>
  );
}

export default Contact;
