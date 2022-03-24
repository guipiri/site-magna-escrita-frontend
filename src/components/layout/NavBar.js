import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import styles from "./NavBar.module.css";
import Button from "../layout/Button";

function NavBar() {
  const [active, setActive] = useState(false);

  function classe() {
    if (active) {
      return `${styles.links} + ${styles.mobile_menu_active}`;
    } else {
      return `${styles.links}`;
    }
  }

  return (
    <nav className={styles.nav_bar}>
      <Link onClick={() => setActive(false)} to="/">
        <img src={logo} alt="logo" />
      </Link>
      <div onClick={() => setActive(false)} className={classe()}>
        <Link to="/magna">A Magna</Link>
        <Link to="/sobreoprojeto">Sobre o projeto</Link>
        <Link to="/contato">Contato</Link>
      </div>
      <Button
        to="/contato"
        handleClick={() => setActive(false)}
        text="Inscreva sua escola"
      />

      <div className={styles.mobile_menu} onClick={() => setActive(!active)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}

export default NavBar;
