import React from "react";
import styles from "./Form.module.css";

function Form({ handleSubmit }) {
  function onSubmit(e) {
    e.preventDefault();
    handleSubmit(e);
  }
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.input}>
        <label htmlFor="name">Nome: </label>
        <input type="text" id="name" name="user_name" />
      </div>
      <div className={styles.input}>
        <label htmlFor="email">E-mail: </label>
        <input type="email" id="email" name="user_email" />
      </div>
      <div className={styles.input}>
        <label htmlFor="tel">Telefone: </label>
        <input type="tel" id="tem" name="user_phone" />
      </div>
      <div className={styles.radio}>
        <p>Você é:</p>
        <input type="radio" id="gestora" name="tipo" value="Gestora" />
        <label htmlFor="gestora">Gestora</label>
        <input type="radio" id="professora" name="tipo" value="Professora" />
        <label htmlFor="professora">Professora</label>
        <input type="radio" id="responsavel" name="tipo" value="Responsável" />
        <label htmlFor="responsavel">Responsável</label>
        <br />
        <input className={styles.button} type="submit" value="Enviar" />
      </div>
    </form>
  );
}

export default Form;
